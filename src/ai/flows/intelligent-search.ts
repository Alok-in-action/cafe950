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

const menuItems = [
  {name: 'Espresso (Hot/Iced)', price: 80, section: 'Classic Espresso Bar'},
  {name: 'Americano (Hot/Iced)', price: 120, section: 'Classic Espresso Bar'},
  {name: 'Cappuccino (Hot/Iced)', price: 140, section: 'Classic Espresso Bar'},
  {name: 'Latte (Hot/Iced)', price: 160, section: 'Classic Espresso Bar'},
  {name: 'Cortado (Hot/Iced)', price: 160, section: 'Classic Espresso Bar'},
  {name: 'Flat White (Hot/Iced)', price: 180, section: 'Classic Espresso Bar'},
  {name: 'Mocha (Hot/Iced)', price: 190, section: 'Classic Espresso Bar'},
  {name: 'Irish Cappuccino', price: 180, section: 'Craft Coffees'},
  {name: 'Caramel Latte', price: 180, section: 'Craft Coffees'},
  {name: 'Hazelnut Cappuccino', price: 190, section: 'Craft Coffees'},
  {name: 'French Vanilla Cap', price: 190, section: 'Craft Coffees'},
  {name: 'Dark Choco Mocha', price: 200, section: 'Craft Coffees'},
  {name: 'Saffron Turmeric Latte', price: 210, section: 'Craft Coffees'},
  {name: 'Tiramisu Cappuccino', price: 220, section: 'Craft Coffees'},
  {name: 'Lotus Biscoff Latte', price: 220, section: 'Craft Coffees'},
  {name: 'Classic Iced Coffee', price: 230, section: 'Craft Coffees'},
  {name: 'Vietnamese Iced', price: 230, section: 'Craft Coffees'},
  {name: '9:50 Signature Frappe', price: 190, section: 'Frappe To Go'},
  {name: 'Hazelnut Frappe', price: 210, section: 'Frappe To Go'},
  {name: 'Irish Frappe', price: 220, section: 'Frappe To Go'},
  {name: 'Java Chip Frappe', price: 220, section: 'Frappe To Go'},
  {name: 'Toffee Caramel', price: 230, section: 'Frappe To Go'},
  {name: 'Tiramisu Frappe', price: 240, section: 'Frappe To Go'},
  {name: 'Biscoff Frappe', price: 250, section: 'Frappe To Go'},
  {name: 'Brownie Frappe', price: 250, section: 'Frappe To Go'},
  {name: 'Pomegranate Cold Brew', price: 210, section: 'Cold Brews'},
  {name: 'Orange Cold Brew', price: 210, section: 'Cold Brews'},
  {name: 'Ginger Ale Cold Brew', price: 220, section: 'Cold Brews'},
  {name: 'Pineapple Cold Brew', price: 220, section: 'Cold Brews'},
  {name: 'Classic Espresso Tonic (E&T)', price: 220, section: 'Cold Brews'},
  {name: 'Whisky Cold Brew', price: 240, section: 'Cold Brews'},
  {name: '9:50 Signature Cold Brew', price: 250, section: 'Cold Brews'},
  {name: 'Classic Affogato', price: 170, section: 'Affogato'},
  {name: 'Dark Choco Affogato', price: 190, section: 'Affogato'},
  {name: 'Caramel Pistachio', price: 210, section: 'Affogato'},
  {name: '9:50 Signature', price: 230, section: 'Affogato'},
  {name: 'Matcha Latte', price: 150, section: 'Matcha'},
  {name: 'Iced Matcha', price: 170, section: 'Matcha'},
  {name: 'Matcha Frappe', price: 210, section: 'Matcha'},
  {name: 'Mango Matcha', price: 220, section: 'Matcha'},
  {name: 'Coconut Matcha', price: 230, section: 'Matcha'},
  {name: 'Classic Masala Chai', price: 80, section: 'Hot Teas'},
  {name: 'Moroccan Mint Tea', price: 100, section: 'Hot Teas'},
  {name: 'Lemon Ginger Tea', price: 110, section: 'Hot Teas'},
  {name: 'Lavender Earl Grey', price: 140, section: 'Hot Teas'},
  {name: 'Lemon Iced Tea', price: 140, section: 'Iced Teas & Cocoa'},
  {name: 'Peach Iced Tea', price: 160, section: 'Iced Teas & Cocoa'},
  {name: 'Hibiscus Iced Tea', price: 200, section: 'Iced Teas & Cocoa'},
  {name: 'Classic Hot Choco', price: 190, section: 'Iced Teas & Cocoa'},
  {name: 'Spiced Hot Choco', price: 200, section: 'Iced Teas & Cocoa'},
  {name: 'Nutella Hot Choco', price: 210, section: 'Iced Teas & Cocoa'},
  {name: 'Oreo Shake', price: 200, section: 'Milk Shakes'},
  {name: 'Kitkat Shake', price: 210, section: 'Milk Shakes'},
  {name: 'Ferrero Rocher', price: 210, section: 'Milk Shakes'},
  {name: 'Strawberry Shake', price: 210, section: 'Milk Shakes'},
  {name: 'French Vanilla', price: 230, section: 'Milk Shakes'},
  {name: 'Brownie Shake', price: 240, section: 'Milk Shakes'},
  {name: 'Belgian Chocolate', price: 240, section: 'Milk Shakes'},
  {name: 'Nutella Shake', price: 240, section: 'Milk Shakes'},
  {name: 'Lotus Biscoff', price: 250, section: 'Milk Shakes'},
  {name: 'Blueberry Cheese', price: 260, section: 'Milk Shakes'},
  {name: 'Tropical Avocado Shake', price: 280, section: 'Milk Shakes'},
  {name: 'Blue Pea Iced Latte', price: 140, section: 'Blue Dream'},
  {name: 'Blue Pea Sparkler', price: 220, section: 'Blue Dream'},
  {name: 'Blue Pea Coconut Cooler', price: 250, section: 'Blue Dream'},
  {name: 'Virgin Mojito', price: 140, section: 'Craft Mocktails'},
  {name: 'Watermelon Mojito', price: 160, section: 'Craft Mocktails'},
  {name: 'Coffee Lemonade', price: 160, section: 'Craft Mocktails'},
  {name: 'Shirley Temple', price: 170, section: 'Craft Mocktails'},
  {name: 'Cinderella', price: 180, section: 'Craft Mocktails'},
  {name: 'Passionate Love', price: 180, section: 'Craft Mocktails'},
  {name: 'Carrot Ginger', price: 140, section: 'Healthy & Smoothies'},
  {name: 'ABC Juice', price: 150, section: 'Healthy & Smoothies'},
  {name: 'Detox', price: 160, section: 'Healthy & Smoothies'},
  {name: 'Mango Madness', price: 230, section: 'Healthy & Smoothies'},
  {name: 'Berry Powerful', price: 240, section: 'Healthy & Smoothies'},
  {name: 'Nutty Buddy', price: 240, section: 'Healthy & Smoothies'},
  {name: '9:50 Signature', price: 250, section: 'Healthy & Smoothies'},
  {name: 'Giant Vanilla Cookie', price: 100, section: 'Beverage Companions'},
  {name: 'Brookie', price: 120, section: 'Beverage Companions'},
  {name: 'Butter Croissant', price: 140, section: 'Beverage Companions'},
  {name: 'Avocado Toast', price: 200, section: 'Beverage Companions'},
  {name: 'Sprout Salad', price: 160, section: 'Healthy Salads'},
  {name: 'Classic Caesar', price: 180, section: 'Healthy Salads'},
  {name: 'Greek Salad', price: 200, section: 'Healthy Salads'},
  {name: 'Peri Peri Paneer', price: 230, section: 'Healthy Salads'},
  {name: 'Nachos w/ Salsa', price: 170, section: 'Bites & Fries'},
  {name: 'Overloaded Nachos', price: 190, section: 'Bites & Fries'},
  {name: 'Bruschetta', price: 210, section: 'Bites & Fries'},
  {name: 'Potato Wedges', price: 160, section: 'Bites & Fries'},
  {name: 'Truffle Fries', price: 180, section: 'Bites & Fries'},
  {name: 'Cheese Garlic Fries', price: 190, section: 'Bites & Fries'},
  {name: 'Bombay Grilled Sandwich', price: 180, section: 'Between Breads'},
  {name: 'Cheese Corn Sandwich', price: 170, section: 'Between Breads'},
  {name: 'Paneer Paprika Sandwich', price: 200, section: 'Between Breads'},
  {name: 'Aloo Tikki Burger', price: 140, section: 'Between Breads'},
  {name: 'Cheese Burst Burger', price: 170, section: 'Between Breads'},
  {name: '9:50 Signature Burger', price: 190, section: 'Between Breads'},
  {name: 'Spaghetti Aglio E Olio', price: 230, section: 'Pasta'},
  {name: 'Fettuccine Basil Pesto', price: 260, section: 'Pasta'},
  {name: 'Penne Arrabbiata', price: 280, section: 'Pasta'},
  {name: '9:50 Mac & Cheese', price: 300, section: 'Pasta'},
  {name: 'Classic Margherita', price: 330, section: 'Pizza Station'},
  {name: 'Cheese Corn Pizza', price: 350, section: 'Pizza Station'},
  {name: 'Farmville Pizza', price: 380, section: 'Pizza Station'},
  {name: 'Four Cheese', price: 400, section: 'Pizza Station'},
  {name: '9:50 Signature Pizza', price: 450, section: 'Pizza Station'},
  {name: 'Classic', price: 170, section: 'Garlic Bread'},
  {name: 'Chilly Cheese', price: 190, section: 'Garlic Bread'},
  {name: '9:50 Signature', price: 280, section: 'Garlic Bread'},
  {name: 'Veg Calzone', price: 240, section: 'Calzone'},
  {name: 'Pesto Mushroom', price: 260, section: 'Calzone'},
  {name: 'Creamy Paneer', price: 270, section: 'Calzone'},
  {name: 'Burnt Garlic Rice', price: 220, section: 'Meals & Ramen'},
  {name: 'Schezwan Rice', price: 250, section: 'Meals & Ramen'},
  {name: 'Burrito Bowl', price: 270, section: 'Meals & Ramen'},
  {name: 'Buddha Bowl', price: 320, section: 'Meals & Ramen'},
  {name: 'Tan Tan Ramen', price: 230, section: 'Meals & Ramen'},
  {name: 'Shoyu Ramen', price: 250, section: 'Meals & Ramen'},
  {name: 'Pav Bhaji', price: 160, section: 'Desi Combos'},
  {name: 'Butter Khichdi', price: 170, section: 'Desi Combos'},
  {name: 'Chole Chawal', price: 190, section: 'Desi Combos'},
  {name: 'Paneer Bhurji Pav', price: 220, section: 'Desi Combos'},
  {name: 'Classic Brownie', price: 180, section: 'Sweet Endings'},
  {name: 'Waffles (Nutella/Oreo)', price: 200, section: 'Sweet Endings'},
  {name: 'Sizzling Brownie', price: 210, section: 'Sweet Endings'},
  {name: 'Tiramisu', price: 220, section: 'Sweet Endings'},
  {name: 'Cheesecakes (Var.)', price: 250, section: 'Sweet Endings'},
  {name: 'Signature Coffee Cake', price: 280, section: 'Sweet Endings'},
];

const IntelligentSearchInputSchema = z.object({
  query: z.string().describe('The user query to search for menu items.'),
});
export type IntelligentSearchInput = z.infer<typeof IntelligentSearchInputSchema>;

const MenuItemSchema = z.object({
  name: z.string().describe('The name of the menu item.'),
  price: z.number().describe('The price of the menu item.'),
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
  const queryContainsItemName = query.toLowerCase().includes(menuItemName.toLowerCase());

  // Consider returning the specific item if the query explicitly mentions it.
  return queryContainsItemName;
});

const intelligentSearchPrompt = ai.definePrompt({
  name: 'intelligentSearchPrompt',
  tools: [shouldReturnSpecificItem],
  input: {
    schema: IntelligentSearchInputSchema,
  },
  output: {
    schema: IntelligentSearchOutputSchema,
  },
  prompt: `You are a helpful AI assistant that helps users find menu items from a cafe menu.

  The menu items are:
  {{
    #each menuItems
  }}- {{this.name}} (Price: {{this.price}}, Section: {{this.section}})
  {{\each}}
  
  Based on the user's query, return a list of menu items that match the query. Use the shouldReturnSpecificItem tool to determine whether a menu item matches the query.
  
  User Query: {{{query}}}
  
  The output should be a JSON array of menu items that match the query.
  `,
});

async function filterMenuItems(query: string, menuItems: any[]) {
  const matchingItems: any[] = [];

  for (const item of menuItems) {
    const shouldReturn = await shouldReturnSpecificItem({
      query: query,
      menuItemName: item.name,
    });
    if (shouldReturn) {
      matchingItems.push(item);
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
    // Removed call to prompt, instead, the menuItems are filtered using a tool.
    const filteredItems = await filterMenuItems(input.query, menuItems);
    return filteredItems;
  }
);
