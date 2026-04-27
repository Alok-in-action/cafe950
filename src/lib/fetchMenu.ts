import type { MenuSection, MenuItem } from '@/types';
import { menuSections as fallbackMenu } from '@/lib/menu';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuDyCFbD319QUWQGYvtmjsTbe3e6L3gsIDO9uWcLiJfECt7vAKW2Gt-mMyDMUWKi1gwEHeQkD9Wdgk/pub?output=csv';

// Revalidate cached data every 1 minute
export const revalidate = 60;

/** Simple CSV row parser that handles quoted fields containing commas */
function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Normalise a section title into a URL-friendly id,
 * matching the ids used in page.tsx / globals.css.
 */
const TITLE_TO_ID: Record<string, string> = {
  '9:50 Summer Edit': 'summer-edit',
  'Classic Espresso Bar': 'classic-espresso-bar',
  'Craft Coffees': 'craft-coffees',
  'Frappe To Go': 'frappe-to-go',
  'Cold Brews': 'cold-brews',
  'Affogato': 'affogato',
  'Matcha': 'matcha',
  'Hot Teas': 'hot-teas',
  'Iced Teas': 'iced-teas',
  'Hot Chocolate': 'hot-chocolate',
  'Milk Shakes': 'shakes',
  'Craft Mocktails': 'craft-mocktails',
  'Blue Dream': 'blue-dream',
  'Healthy Juices': 'healthy-juices',
  'Smoothies': 'smoothies',
  'Beverage Companions': 'beverage-companions',
  'Healthy Salads': 'healthy-salads',
  'Bites for Sides': 'bites-for-sides',
  'Fries Corner': 'fries-corner',
  'Sandwiches': 'sandwiches',
  'Burgers': 'burgers',
  'Pasta': 'pasta',
  'Pizza Station': 'pizza',
  'Garlic Bread': 'garlic-bread',
  'Calzone': 'calzone',
  'Meal Bowls': 'meal-bowls',
  'Ramen Tales': 'ramen-tales',
  'Meal Combos': 'meal-combos',
  'Desserts': 'dessert',
};

const SECTION_SUBTITLES: Record<string, string> = {
  'summer-edit':
    'A curated drop of sunshine sips & sweet escapes — only while summer lasts.',
  'cold-brews':
    'slow-steeped extracted coffee known for its bold flavour, smooth finish, and low acidity-your all-day iced companion.',
  'affogato':
    'An Italian classic: vanilla gelato bathed in warm espresso, creating a swirl of sweetness, warmth, and smooth coffee magic.',
  'blue-dream':
    'Blue pea, our café\u2019s botanical gem, brings a soft floral fragrance and a naturally brilliant blue color that transforms every beverage into a little moment of magic.',
  'ramen-tales':
    '\u30e9\u30fc\u30e1\u30f3\u7269\u8a9e \u2022 Comforting bowls of warmth, crafted with care and tradition.',
  'calzone':
    'Hand-folded pocket, stuffed with creamy fillings, baked till perfectly crisp outside and soft inside.',
};

const SECTION_PREHEADERS: Record<string, string> = {
  'pizza': 'STRAIGHT FROM WOOD FIRE OVEN!',
};

/**
 * Strip leading ₹ symbol and return a number, or keep as-is string for ranges.
 */
function parsePrice(raw: string): number | string | undefined {
  if (!raw) return undefined;
  const stripped = raw.replace('₹', '').trim();
  if (!stripped) return undefined;
  const num = Number(stripped);
  if (!isNaN(num)) return num;
  // Range like "150/180"
  return stripped;
}

export async function fetchMenuSections(): Promise<MenuSection[]> {
  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate },
    });

    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

    const text = await res.text();
    const lines = text
      .split('\n')
      .map((l) => l.replace(/\r$/, ''))
      .filter((l) => l.trim());

    // Skip header row
    const rows = lines.slice(1);

    const sectionsMap = new Map<string, MenuSection>();
    const sectionOrder: string[] = [];

    for (const line of rows) {
      if (!line.trim()) continue;

      const cols = parseCSVRow(line);
      // columns: category_id, category_title, name, price, tag, is_signature, is_most_ordered, description
      const [, categoryTitle, name, priceRaw, tag, isSigRaw, isMostRaw, description] = cols;

      if (!categoryTitle || !name) continue;

      const sectionId =
        TITLE_TO_ID[categoryTitle] ??
        categoryTitle.toLowerCase().replace(/\s+/g, '-');

      if (!sectionsMap.has(sectionId)) {
        sectionsMap.set(sectionId, {
          id: sectionId,
          title: categoryTitle,
          subtitle: SECTION_SUBTITLES[sectionId],
          preheader: SECTION_PREHEADERS[sectionId],
          items: [],
        });
        sectionOrder.push(sectionId);
      }

      // Pizza Station prices are stored as "NY/NEAP" (e.g. "400/450") in the sheet.
      // Split them into the dual-price structure the UI already renders.
      const stripped = priceRaw?.replace('₹', '').trim() ?? '';
      const slashIdx = stripped.indexOf('/');
      let item: MenuItem;

      if (sectionId === 'pizza' && slashIdx !== -1) {
        const ny = Number(stripped.slice(0, slashIdx).trim());
        const neap = Number(stripped.slice(slashIdx + 1).trim());
        item = {
          name,
          prices: { ny, neap },
          description: description || undefined,
          isMostOrdered: isMostRaw?.toUpperCase() === 'TRUE' || undefined,
          isSignature: isSigRaw?.toUpperCase() === 'TRUE' || undefined,
          customTag: tag || undefined,
        };
      } else {
        item = {
          name,
          price: parsePrice(priceRaw),
          description: description || undefined,
          isMostOrdered: isMostRaw?.toUpperCase() === 'TRUE' || undefined,
          isSignature: isSigRaw?.toUpperCase() === 'TRUE' || undefined,
          customTag: tag || undefined,
        };
      }

      sectionsMap.get(sectionId)!.items.push(item);
    }

    const sections = sectionOrder.map((id) => sectionsMap.get(id)!);

    return sections.length > 0 ? sections : fallbackMenu;
  } catch (err) {
    console.error(
      '[fetchMenu] Failed to load from Google Sheets, using fallback.',
      err
    );
    return fallbackMenu;
  }
}
