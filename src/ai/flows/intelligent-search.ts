// intelligent-search.ts
'use server';

/**
 * @fileOverview Implements intelligent search for menu items using natural language queries.
 *
 * - intelligentSearch - A function that handles the menu item search process.
 * - IntelligentSearchInput - The input type for the intelligentSearch function.
 * - IntelligentSearchOutput - The return type for the intelligentSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { menuSections } from '@/lib/menu';

const allMenuItems = menuSections.flatMap(section => 
  section.items.map(item => ({
    name: item.name,
    price: item.price || (item.prices ? `${item.prices.ny}/${item.prices.neap}` : 0),
    section: section.title,
  }))
);


const IntelligentSearchInputSchema = z.object({
  query: z.string().describe('The user query to search for menu items.'),
});
export type IntelligentSearchInput = z.infer<typeof IntelligentSearchInputSchema>;

const MenuItemSchema = z.object({
  name: z.string().describe('The name of the menu item.'),
  price: z.union([z.number(), z.string()]).describe('The price of the menu item.'),
  section: z.string().describe('The section of the menu the item belongs to'),
});

const IntelligentSearchOutputSchema = z.array(MenuItemSchema);
export type IntelligentSearchOutput = z.infer<typeof IntelligentSearchOutputSchema>;

const shouldReturnSpecificItem = ai.defineTool({
  name: 'shouldReturnSpecificItem',
  description: 'Determine whether to return a specific menu item based on the user query.',
  inputSchema: z.object({
    query: z.string().describe('The user query.'),
    menuItemName: z.string().describe('The name of the menu item to consider.'),
  }),
  outputSchema: z.boolean().describe('Whether to return the specified menu item.'),
}, async (input) => {
  // Use a simple heuristic for demonstration purposes; in a real application,
  // this could use a more sophisticated method like LLM or embedding similarity.
  const {
    query,
    menuItemName
  } = input;
  const queryWords = query.toLowerCase().split(' ');
  const itemNameWords = menuItemName.toLowerCase().split(' ');

  // Check if all query words are in the item name
  return queryWords.every(qWord => itemNameWords.some(iWord => iWord.includes(qWord)));
});

async function filterMenuItems(query: string, menuItems: any[]) {
  const matchingItems: any[] = [];
  
  if (!query || query.trim().length < 2) {
    return [];
  }

  const lowerCaseQuery = query.toLowerCase();

  for (const item of menuItems) {
    const shouldReturn = await shouldReturnSpecificItem({
      query: lowerCaseQuery,
      menuItemName: item.name,
    });
    if (shouldReturn) {
      matchingItems.push(item);
    }
  }

  // If no specific items are found by the tool, try a more general search.
  if (matchingItems.length === 0) {
      for (const item of menuItems) {
          if (item.name.toLowerCase().includes(lowerCaseQuery)) {
              if (!matchingItems.find(i => i.name === item.name)) {
                matchingItems.push(item);
              }
          }
      }
  }

  return matchingItems;
}

export async function intelligentSearch(input: IntelligentSearchInput): Promise<IntelligentSearchOutput> {
  return intelligentSearchFlow(input);
}

const intelligentSearchFlow = ai.defineFlow(
  {
    name: 'intelligentSearchFlow',
    inputSchema: IntelligentSearchInputSchema,
    outputSchema: IntelligentSearchOutputSchema,
  },
  async input => {
    const filteredItems = await filterMenuItems(input.query, allMenuItems);
    return filteredItems;
  }
);
