import type { MenuSection } from '@/types';

export const menuSections: MenuSection[] = [
  {
    id: 'classicEspressoBar',
    title: 'Classic Espresso Bar',
    items: [
      { name: 'Espresso (Hot/Iced)', price: 80 },
      { name: 'Americano (Hot/Iced)', price: 120 },
      { name: 'Cappuccino (Hot/Iced)', price: 140 },
      { name: 'Latte (Hot/Iced)', price: 160 },
      { name: 'Cortado (Hot/Iced)', price: 160, description: '(This delightful duet of espresso and steamed milk is like a sophisticated dance on your palate)' },
      { name: 'Flat White (Hot/Iced)', price: 180, description: '(It is like a love letter from espresso to milk- bold, smooth and perfectly balanced in every sip)' },
      { name: 'Mocha (Hot/Iced)', price: 190, description: '(A sweet symphony of espresso, velvety chocolate, and milk, finished with a swirl of whipped cream)' },
    ],
  },
  {
    id: 'craftCoffees',
    title: 'Craft Coffees',
    items: [
      { name: 'Irish Cappuccino', price: 180 },
      { name: 'Caramel Latte', price: 180 },
      { name: 'Hazelnut Cappuccino', price: 190 },
      { name: 'French Vanilla Cap', price: 190 },
      { name: 'Dark Choco Mocha', price: 200 },
      { name: 'Saffron Turmeric Latte', price: 210 },
      { name: 'Tiramisu Cappuccino', price: 220 },
      { name: 'Lotus Biscoff Latte', price: 220 },
      { name: 'Classic Iced Coffee', price: 230 },
      { name: 'Vietnamese Iced', price: 230 },
    ],
  },
  {
    id: 'frappeToGo',
    title: 'Frappe To Go',
    items: [
      { name: '9:50 Signature Frappe', price: 190, description: '(Your go-to strong cold coffee with a hint of vanilla, designed to relish anytime)', isSignature: true },
      { name: 'Hazelnut Frappe', price: 210 },
      { name: 'Irish Frappe', price: 220 },
      { name: 'Java Chip Frappe', price: 220 },
      { name: 'Toffee Caramel', price: 230 },
      { name: 'Tiramisu Frappe', price: 240 },
      { name: 'Biscoff Frappe', price: 250 },
      { name: 'Brownie Frappe', price: 250 },
    ],
  },
  {
    id: 'coldBrews',
    title: 'Cold Brews',
    subtitle: '(Slow-steeped extracted coffee known for its bold flavour, smooth finish, and low acidity)',
    items: [
      { name: 'Pomegranate Cold Brew', price: 210 },
      { name: 'Orange Cold Brew', price: 210 },
      { name: 'Ginger Ale Cold Brew', price: 220 },
      { name: 'Pineapple Cold Brew', price: 220 },
      { name: 'Classic Espresso Tonic (E&T)', price: 220, description: '(An evergreen blend of rich espresso and sparkling tonic water)' },
      { name: 'Whisky Cold Brew', price: 240, description: '(Crafted from 16 hours of brewing barrel-aged beans)' },
      { name: '9:50 Signature Cold Brew', price: 250, description: '(A drool-worthy blend of refreshing juices, vibrant fruit chunks, and house blend)', isSignature: true },
    ],
  },
  {
    id: 'affogatoAndMatcha',
    title: '', // No main title, two sub-sections
    items: [], // Items are nested
  },
  {
    id: 'teasAndCocoa',
    title: '', // No main title, two sub-sections
    items: [], // Items are nested
  },
  {
    id: 'milkShakes',
    title: 'Milk Shakes',
    items: [
        { name: 'Oreo Shake', price: 200 },
        { name: 'Kitkat Shake', price: 210 },
        { name: 'Ferrero Rocher', price: 210 },
        { name: 'Strawberry Shake', price: 210 },
        { name: 'French Vanilla', price: 230 },
        { name: 'Brownie Shake', price: 240 },
        { name: 'Belgian Chocolate', price: 240 },
        { name: 'Nutella Shake', price: 240 },
        { name: 'Lotus Biscoff', price: 250 },
        { name: 'Blueberry Cheese', price: 260 },
        { name: 'Tropical Avocado Shake', price: 280, description: '(A silky-smooth shake made with creamy avocado, tropical pineapple, and a touch of mango)' },
    ],
  },
  {
    id: 'blueDreamAndMocktails',
    title: '', // No main title, two sub-sections
    items: [],
  },
  {
    id: 'healthyAndSmoothies',
    title: 'Healthy & Smoothies',
    items: [], // nested
  },
  {
    id: 'beverageCompanions',
    title: 'Beverage Companions',
    items: [
        { name: 'Giant Vanilla Cookie', price: 100 },
        { name: 'Brookie', price: 120 },
        { name: 'Butter Croissant', price: 140 },
        { name: 'Avocado Toast', price: 200 },
    ],
  },
  {
    id: 'saladsAndBites',
    title: '',
    items: [],
  },
  {
    id: 'betweenBreads',
    title: 'Between Breads',
    items: [
        { name: 'Bombay Grilled Sandwich', price: 180 },
        { name: 'Cheese Corn Sandwich', price: 170 },
        { name: 'Paneer Paprika Sandwich', price: 200 },
        { name: 'Aloo Tikki Burger', price: 140 },
        { name: 'Cheese Burst Burger', price: 170 },
        { name: '9:50 Signature Burger', price: 190, description: '(Our specialty indulgence loaded with rich flavours, with wedges)', isSignature: true },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    items: [
        { name: 'Spaghetti Aglio E Olio', price: 230, description: '(Golden swirl of garlic-kissed spaghetti with olives, cherry tomatoes, and Parmesan)' },
        { name: 'Fettuccine Basil Pesto', price: 260, description: '(Silky fettuccine draped in vibrant pesto sauce with olives)' },
        { name: 'Penne Arrabbiata', price: 280, description: '(Fiery, tangy penne tossed with peppers and olives)' },
        { name: '9:50 Mac & Cheese', price: 300, description: '(Creamy, golden bake of butter-garlic macaroni with broccoli, corn, and molten mozzarella)', isSignature: true },
    ],
  },
  {
    id: 'pizzaStation',
    title: 'Pizza Station',
    items: [
        { name: 'Classic Margherita', prices: { ny: 330, neap: 370 }, description: '(Mozzarella, bocconcini, and fresh basil)' },
        { name: 'Cheese Corn Pizza', prices: { ny: 350, neap: 390 } },
        { name: 'Farmville Pizza', prices: { ny: 380, neap: 410 }, description: '(Garden medley of broccoli, corn, mushroom, paprika, olives)' },
        { name: 'Four Cheese', prices: { ny: 400, neap: 440 }, description: '(Mozzarella, bocconcini, cheddar, and ricotta)' },
        { name: '9:50 Signature Pizza', prices: { ny: 450, neap: 490 }, description: '(Garlic cream base, bocconcini, paprika, pickle onion, fried garlic)', isSignature: true },
    ],
  },
  {
    id: 'mealsAndRamen',
    title: 'Meals & Ramen',
    items: [],
  },
  {
    id: 'desiCombos',
    title: 'Desi Combos',
    items: [
        { name: 'Pav Bhaji', price: 160 },
        { name: 'Butter Khichdi', price: 170 },
        { name: 'Chole Chawal', price: 190 },
        { name: 'Paneer Bhurji Pav', price: 220 },
    ],
  },
  {
    id: 'sweetEndings',
    title: 'Sweet Endings',
    items: [
        { name: 'Classic Brownie', price: 180 },
        { name: 'Waffles (Nutella/Oreo)', price: 200 },
        { name: 'Sizzling Brownie', price: 210 },
        { name: 'Tiramisu', price: 220 },
        { name: 'Cheesecakes (Var.)', price: 250 },
        { name: 'Signature Coffee Cake', price: 280, isSignature: true },
    ],
  }
];
