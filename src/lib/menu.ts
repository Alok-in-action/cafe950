import type { MenuItem, MenuSection } from '@/types';
import menuData from '../../content/menu.json';

function getPriceValue(item: MenuItem): number {
  if (typeof item.price === 'number') {
    return item.price;
  }
  if (typeof item.price === 'string') {
    const parsed = parseFloat(item.price.split('/')[0]);
    return isNaN(parsed) ? 9999 : parsed;
  }
  if (item.prices) {
    return Math.min(item.prices.ny, item.prices.neap);
  }
  return 9999;
}

export const menuSections: MenuSection[] = menuData.menuSections.map((section: any) => ({
  ...section,
  items: [...section.items].sort((a: any, b: any) => getPriceValue(a) - getPriceValue(b))
}));
