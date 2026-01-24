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
  { name: 'Espresso (Hot/Iced)', price: 80, section: 'Classic Espresso Bar' },
  { name: 'Americano (Hot/Iced)', price: 120, section: 'Classic Espresso Bar' },
  { name: 'Cappuccino (Hot/Iced)', price: 140, section: 'Classic Espresso Bar' },
  { name: 'Latte (Hot/Iced)', price: 160, section: 'Classic Espresso Bar' },
  { name: 'Cortado (Hot/Iced)', price: 160, section: 'Classic Espresso Bar' },
  { name: 'Flat White (Hot/Iced)', price: 180, section: 'Classic Espresso Bar' },
  { name: 'Mocha (Hot/Iced)', price: 190, section: 'Classic Espresso Bar' },
  { name: 'Irish Cappuccino (Hot/Iced)', price: 180, section: 'Craft Coffees' },
  { name: 'Caramel Latte (Hot/Iced)', price: 180, section: 'Craft Coffees' },
  { name: 'Hazelnut Cappuccino (Hot/Iced)', price: 190, section: 'Craft Coffees' },
  { name: 'French Vanilla Cappuccino (Hot/Iced)', price: 190, section: 'Craft Coffees' },
  { name: 'Dark Chocolate Mocha (Hot/Iced)', price: 200, section: 'Craft Coffees' },
  { name: 'Saffron Turmeric Latte (Hot/Iced)', price: 210, section: 'Craft Coffees' },
  { name: 'Tiramisu Cappuccino (Hot/Iced)', price: 220, section: 'Craft Coffees' },
  { name: 'Lotus Biscoff Latte (Hot/Iced)', price: 220, section: 'Craft Coffees' },
  { name: 'Classic Iced Coffee', price: 230, section: 'Craft Coffees' },
  { name: 'Vietnamese Iced Coffee', price: 230, section: 'Craft Coffees' },
  { name: '9:50 Signature Frappe', price: 190, section: 'Frappe To Go' },
  { name: 'Hazelnut Frappe', price: 210, section: 'Frappe To Go' },
  { name: 'Irish Frappe', price: 220, section: 'Frappe To Go' },
  { name: 'Java Chip Frappe', price: 220, section: 'Frappe To Go' },
  { name: 'Toffee Caramel Frappe', price: 230, section: 'Frappe To Go' },
  { name: 'Tiramisu Frappe', price: 240, section: 'Frappe To Go' },
  { name: 'Biscoff Frappe', price: 250, section: 'Frappe To Go' },
  { name: 'Brownie Frappe', price: 250, section: 'Frappe To Go' },
  { name: 'Pomegranate Cold Brew', price: 210, section: 'Cold Brews' },
  { name: 'Orange Cold Brew', price: 210, section: 'Cold Brews' },
  { name: 'Classic Espresso Tonic (E&T)', price: 220, section: 'Cold Brews' },
  { name: 'Ginger Ale Cold Brew', price: 220, section: 'Cold Brews' },
  { name: 'Pineapple Cold Brew', price: 220, section: 'Cold Brews' },
  { name: 'Whisky Cold Brew', price: 240, section: 'Cold Brews' },
  { name: '9:50 Signature Cold Brew', price: 250, section: 'Cold Brews' },
  { name: 'Classic Affogato', price: 170, section: 'Affogato' },
  { name: 'Dark Chocolate Affogato', price: 190, section: 'Affogato' },
  { name: 'Caramel Pistachio Affogato', price: 210, section: 'Affogato' },
  { name: '9:50 Signature Affogato', price: 230, section: 'Affogato' },
  { name: 'Matcha Latte', price: 150, section: 'Matcha' },
  { name: 'Iced Matcha', price: 170, section: 'Matcha' },
  { name: 'Matcha Frappe', price: 210, section: 'Matcha' },
  { name: 'Mango Matcha Latte', price: 220, section: 'Matcha' },
  { name: 'Strawberry Matcha Latte', price: 220, section: 'Matcha' },
  { name: 'Coconut Matcha Latte', price: 230, section: 'Matcha' },
  { name: 'Classic Masala Chai', price: 80, section: 'Hot teas' },
  { name: 'Moroccan Mint Tea', price: 100, section: 'Hot teas' },
  { name: 'Lemon Ginger Tea', price: 110, section: 'Hot teas' },
  { name: 'Lavender Earl Grey Tea', price: 140, section: 'Hot teas' },
  { name: 'Lemon Iced Tea', price: 140, section: 'Iced teas' },
  { name: 'Peach Iced Tea', price: 160, section: 'Iced teas' },
  { name: 'Irish Iced Tea', price: 180, section: 'Iced teas' },
  { name: 'Hibiscus Iced Tea', price: 200, section: 'Iced teas' },
  { name: 'Classic Hot Chocolate', price: 190, section: 'Hot Chocolate' },
  { name: 'Spiced Hot Chocolate', price: 200, section: 'Hot Chocolate' },
  { name: 'Nutella Hot Chocolate', price: 210, section: 'Hot Chocolate' },
  { name: 'Tiramisu Hot Chocolate', price: 230, section: 'Hot Chocolate' },
  { name: 'Oreo Shake', price: 200, section: 'Milk Shakes' },
  { name: 'Ferrero Rocher Shake', price: 210, section: 'Milk Shakes' },
  { name: 'Kitkat Shake', price: 210, section: 'Milk Shakes' },
  { name: 'Strawberry Shake', price: 210, section: 'Milk Shakes' },
  { name: 'French Vanilla Shake', price: 230, section: 'Milk Shakes' },
  { name: 'Brownie Shake', price: 240, section: 'Milk Shakes' },
  { name: 'Belgian Chocolate Shake', price: 240, section: 'Milk Shakes' },
  { name: 'Nutella Shake', price: 240, section: 'Milk Shakes' },
  { name: 'Lotus Biscoff Shake', price: 250, section: 'Milk Shakes' },
  { name: 'Blueberry Cheesecake Shake', price: 260, section: 'Milk Shakes' },
  { name: 'Tropical Avocado Shake', price: 280, section: 'Milk Shakes' },
  { name: 'Virgin Mojito', price: 140, section: 'Craft Mocktails' },
  { name: 'Masala Lemonade', price: 150, section: 'Craft Mocktails' },
  { name: 'Watermelon Mojito', price: 160, section: 'Craft Mocktails' },
  { name: 'Coffee Lemonade', price: 160, section: 'Craft Mocktails' },
  { name: 'Shirley Temple', price: 170, section: 'Craft Mocktails' },
  { name: 'Cinderella', price: 180, section: 'Craft Mocktails' },
  { name: 'Passionate Love', price: 180, section: 'Craft Mocktails' },
  { name: 'Blue Pea Iced Latte', price: 140, section: 'Blue Dream' },
  { name: 'Blue Pea Sparkler', price: 220, section: 'Blue Dream' },
  { name: 'Blue Pea Coconut Cooler', price: 250, section: 'Blue Dream' },
  { name: 'Blue Pea Matcha Smoothie', price: 280, section: 'Blue Dream' },
  { name: 'Carrot Ginger Juice', price: 140, section: 'Healthy Juices' },
  { name: 'Watermelon Mint Juice', price: 140, section: 'Healthy Juices' },
  { name: 'ABC', price: 150, section: 'Healthy Juices' },
  { name: 'Detox', price: 160, section: 'Healthy Juices' },
  { name: 'Mango Madness Smoothie', price: 230, section: 'Smoothies' },
  { name: 'Berry Powerful Smoothie', price: 240, section: 'Smoothies' },
  { name: 'Nutty Buddy Smoothie', price: 240, section: 'Smoothies' },
  { name: '9:50 Signature Smoothie', price: 250, section: 'Smoothies' },
  { name: 'Avocado Coconut Smoothie', price: 280, section: 'Smoothies' },
  { name: 'Giant Vanilla Cookie', price: 100, section: 'Beverage Companions' },
  { name: 'Brookie (Cookie with a Brownie Twist)', price: 120, section: 'Beverage Companions' },
  { name: 'Butter Croissant', price: 140, section: 'Beverage Companions' },
  { name: 'Nutella Croissant', price: 140, section: 'Beverage Companions' },
  { name: 'Butter Toast', price: 150, section: 'Beverage Companions' },
  { name: 'Cheese Chilly Toast', price: 150, section: 'Beverage Companions' },
  { name: 'Classic Avocado Toast', price: 200, section: 'Beverage Companions' },
  { name: 'Sprout Salad', price: 160, section: 'Healthy Salads' },
  { name: 'Classic Caesar Salad', price: 180, section: 'Healthy Salads' },
  { name: 'Greek Salad', price: 200, section: 'Healthy Salads' },
  { name: 'Yogurt Salad', price: 220, section: 'Healthy Salads' },
  { name: 'Peri Peri Paneer Salad', price: 230, section: 'Healthy Salads' },
  { name: 'Nachos with Salsa', price: 170, section: 'Bites for Sides' },
  { name: 'Overloaded Nachos', price: 190, section: 'Bites for Sides' },
  { name: 'Cherry Tomato & Cottage Cheese Bruschetta', price: 210, section: 'Bites for Sides' },
  { name: 'Pesto Cottage Cheese in Focaccia Bread', price: 280, section: 'Bites for Sides' },
  { name: 'Simply Salted Fries', price: 150, section: 'Fries Corner' },
  { name: 'Potato Wedges', price: 160, section: 'Fries Corner' },
  { name: 'Parmesan Truffle Fries', price: 180, section: 'Fries Corner' },
  { name: 'Peri Peri Fries', price: 180, section: 'Fries Corner' },
  { name: 'Onion Rings', price: 180, section: 'Fries Corner' },
  { name: 'Cheese Garlic Fries', price: 190, section: 'Fries Corner' },
  { name: 'Bombay Kaccha Sandwich', price: 150, section: 'Sandwiches' },
  { name: 'Bombay Grilled Sandwich', price: 180, section: 'Sandwiches' },
  { name: 'Cheese Chutney Sandwich', price: 160, section: 'Sandwiches' },
  { name: 'Cheese Corn Sandwich', price: 170, section: 'Sandwiches' },
  { name: 'Veg Grilled Sandwich', price: 190, section: 'Sandwiches' },
  { name: 'Paneer Paprika Sandwich', price: 200, section: 'Sandwiches' },
  { name: 'Aloo Tikki Burger with Salted Fries', price: 140, section: 'Burgers' },
  { name: 'Vegetable Burger with Peri Peri Fries', price: 160, section: 'Burgers' },
  { name: 'Cheese Burst Burger with Parmesan Truffle Fries', price: 170, section: 'Burgers' },
  { name: 'Chef\'s Cottage Cheese Burger with Peri Peri Fries', price: 180, section: 'Burgers' },
  { name: '9:50 Signature Burger with Potato Wedges', price: 190, section: 'Burgers' },
  { name: 'Spaghetti Aglio E Olio', price: 230, section: 'Pasta' },
  { name: 'Fettuccine Basil Pesto', price: 260, section: 'Pasta' },
  { name: 'Penne Arrabbiata', price: 280, section: 'Pasta' },
  { name: 'Fettuccine Creamy Mushroom', price: 300, section: 'Pasta' },
  { name: '9:50 Mac & Cheese', price: 300, section: 'Pasta' },
  { name: 'Classic Margherita Pizza (New York Style)', price: 330, section: 'Pizza Station' },
  { name: 'Classic Margherita Pizza (Neapolitan)', price: 370, section: 'Pizza Station' },
  { name: 'Cheese Corn Pizza (New York Style)', price: 350, section: 'Pizza Station' },
  { name: 'Cheese Corn Pizza (Neapolitan)', price: 390, section: 'Pizza Station' },
  { name: 'Farmville Pizza (New York Style)', price: 380, section: 'Pizza Station' },
  { name: 'Farmville Pizza (Neapolitan)', price: 410, section: 'Pizza Station' },
  { name: 'Four Cheese Pizza (New York Style)', price: 400, section: 'Pizza Station' },
  { name: 'Four Cheese Pizza (Neapolitan)', price: 440, section: 'Pizza Station' },
  { name: 'Exotic Pizza (New York Style)', price: 410, section: 'Pizza Station' },
  { name: 'Exotic Pizza (Neapolitan)', price: 450, section: 'Pizza Station' },
  { name: 'Paneer Tikka Pizza (New York Style)', price: 420, section: 'Pizza Station' },
  { name: 'Paneer Tikka Pizza (Neapolitan)', price: 460, section: 'Pizza Station' },
  { name: 'Pestomania Pizza (New York Style)', price: 430, section: 'Pizza Station' },
  { name: 'Pestomania Pizza (Neapolitan)', price: 470, section: 'Pizza Station' },
  { name: '9:50 Signature Pizza (New York Style)', price: 450, section: 'Pizza Station' },
  { name: '9:50 Signature Pizza (Neapolitan)', price: 490, section: 'Pizza Station' },
  { name: 'Classic Garlic Bread', price: 170, section: 'Garlic Bread' },
  { name: 'Chilly Cheese Garlic Bread', price: 190, section: 'Garlic Bread' },
  { name: '9:50 Signature Garlic Bread', price: 280, section: 'Garlic Bread' },
  { name: 'Veg Calzone', price: 240, section: 'Calzone' },
  { name: 'Pesto Mushroom Calzone', price: 260, section: 'Calzone' },
  { name: 'Creamy Paneer Calzone', price: 270, section: 'Calzone' },
  { name: 'Burnt Garlic Fried Rice', price: 220, section: 'Meal Bowls' },
  { name: 'Schezwan Fried Rice', price: 250, section: 'Meal Bowls' },
  { name: 'Burrito Rice Bowl', price: 270, section: 'Meal Bowls' },
  { name: 'Peri Peri Paneer Rice Bowl', price: 280, section: 'Meal Bowls' },
  { name: '9:50 Signature Meal Bowl', price: 310, section: 'Meal Bowls' },
  { name: 'Buddha Bowl', price: 320, section: 'Meal Bowls' },
  { name: 'Tan Tan Ramen', price: 230, section: 'Ramen Tales' },
  { name: 'Shoyu Ramen', price: 250, section: 'Ramen Tales' },
  { name: 'Pav Bhaji', price: 160, section: 'Meal Combos' },
  { name: 'Butter Khichdi', price: 170, section: 'Meal Combos' },
  { name: 'Chole Chawal', price: 190, section: 'Meal Combos' },
  { name: 'Rajma Chawal', price: 190, section: 'Meal Combos' },
  { name: 'Sev Tamatar with Laccha Paratha', price: 200, section: 'Meal Combos' },
  { name: 'Paneer Bhurji with Pav', price: 220, section: 'Meal Combos' },
  { name: 'Classic Homemade Brownie', price: 180, section: 'Desserts' },
  { name: 'Nutella Waffles', price: 200, section: 'Desserts' },
  { name: 'Biscoff Waffles', price: 200, section: 'Desserts' },
  { name: 'Oreo Waffles', price: 200, section: 'Desserts' },
  { name: 'Sizzling Brownie', price: 210, section: 'Desserts' },
  { name: 'Tiramisu', price: 220, section: 'Desserts' },
  { name: 'Blueberry Cheese Cake', price: 250, section: 'Desserts' },
  { name: 'Lotus Biscoff Cheese Cake', price: 250, section: 'Desserts' },
  { name: 'Nutella Cheese Cake', price: 250, section: 'Desserts' },
  { name: 'Strawberry Cheese Cake', price: 250, section: 'Desserts' },
  { name: '9:50 Signature Coffee Cheese Cake', price: 280, section: 'Desserts' },
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
