
import type { MenuSection } from '@/types';

export const menuSections: MenuSection[] = [
  {
    "id": "whispers-of-love",
    "title": "9:50 Whispers of Love",
    "items": [
      { "name": "Red Velvet Mocha", "price": 230 },
      { "name": "Velvet Rose Latte", "price": 240, "description": "Silky latte kissed with floral rose notes and a soft, vanilla finish.", "isMostOrdered": true },
      { "name": "Hibiscus Strawberry Iced Tea", "price": 250 },
      { "name": "Lavender Love Matcha", "price": 250 },
      { "name": "Love Potion Cold Brew", "price": 300, "description": "Smooth cold brew infused with a hint of white chocolate and a dangerously strawberry charm." },
      { "name": "Pomegranate Mint Cooler", "price": 300, "isMostOrdered": true },
      { "name": "Paneer Tikka in Focaccia Bread", "price": 300 },
      { "name": "Exotic Pink Penne", "price": 300 },
      { "name": "Love in the Forest Pizza", "price": "470/520", "description": "A rich garlic cream base topped with paprika and mushrooms, baby burrata at the heart, and a fragrant swirl of pesto sauce, giving perfect valentine vibes", "isMostOrdered": true },
      { "name": "Red Velvet Tiramisu", "price": 280, "isMostOrdered": true }
    ]
  },
  {
    "id": "winter-soup-edit",
    "title": "9:50 Warm moments",
    "subtitle": "The Soup Edit",
    "items": [
      { "name": "Lemon Coriander", "price": 160 },
      { "name": "Wild Mushroom Cappuccino", "price": 180, "description": "Earthy wild mushrooms, blended to creamy perfection, topped with a delicate foam", "isMostOrdered": true },
      { "name": "Creamy Tomato Basil", "price": 180 },
      { "name": "French Onion", "price": 200, "description": "Golden onions, savory vegetable broth, and a cheesy gratin topping for a warm, flavorful experience" },
      { "name": "Vegetable Man-Chow", "price": 250 }
    ]
  },
  {
    "id": "winter-cozy-cups",
    "title": "Cozy Cups",
    "items": [
      { "name": "Ginger Bread Latte", "price": 160, "isMostOrdered": true },
      { "name": "Peppermint Mocha", "price": 170 },
      { "name": "White Hot Chocolate", "price": 180 },
      { "name": "London Fog", "price": 180, "description": "A velvety blend of Earl Grey tea, steamed milk, and a hint of vanilla, like wrapping yourself in a warm scarf on a misty London morning", "isMostOrdered": true },
      { "name": "Cinnamon Maple Latte", "price": 200 },
      { "name": "Tiramisu Hot Chocolate", "price": 230 }
    ]
  },
  {
    "id": "winter-feast",
    "title": "Winter Feast",
    "items": [
      { "name": "Onion Rings", "price": 180 },
      { "name": "Sourdough Mushroom Melt with Pesto Sauce", "price": 280, "isMostOrdered": true },
      { "name": "Three Cheese Ravioli", "price": 370, "description": "A decadent trio of ricotta, bocconcini, and Parmesan folded into delicate pasta pillows, finished with a silky house-blend sauce", "isMostOrdered": true },
      { "name": "Traditional Lasagna", "price": 380, "description": "Layers of tender pasta, rich in house sauce, seasonal vegetables, and mozzarella on top, baked to golden perfection" }
    ]
  },
  {
    "id": "winter-sweet-spell",
    "title": "Sweet Spell",
    "items": [
      { "name": "Red Velvet Cookie", "price": 120 },
      { "name": "Strawberry Cheesecake", "price": 250, "isMostOrdered": true },
      { "name": "Chocolate Plum Cake", "price": 270 }
    ]
  },
  {
    "id": "classic-espresso-bar",
    "title": "Classic Espresso Bar",
    "items": [
      { "name": "Espresso (Hot/Iced)", "price": 80, "description": "Pure extraction" },
      { "name": "Americano (Hot/Iced)", "price": 120, "description": "Espresso & hot water" },
      { "name": "Cappuccino (Hot/Iced)", "price": 140, "description": "Foam & espresso" },
      { "name": "Latte (Hot/Iced)", "price": 160, "description": "Steamed milk heavy" },
      { "name": "Cortado (Hot/Iced)", "price": 160, "description": "This delightful duet of espresso and steamed milk is like a sophisticated dance on your palate" },
      { "name": "Flat White (Hot/Iced)", "price": 180, "description": "It is like a love letter from espresso to milk- bold, smooth and perfectly balanced in every sip" },
      { "name": "Mocha (Hot/Iced)", "price": 190, "description": "A sweet symphony of espresso, velvety chocolate, and milk, finished with a swirl of whipped cream" }
    ]
  },
  {
    "id": "craft-coffees",
    "title": "Craft Coffees",
    "items": [
      { "name": "Irish Cappuccino (Hot/Iced)", "price": 180, "isMostOrdered": true },
      { "name": "Caramel Latte (Hot/Iced)", "price": 180 },
      { "name": "Hazelnut Cappuccino (Hot/Iced)", "price": 190 },
      { "name": "French Vanilla Cappuccino (Hot/Iced)", "price": 190 },
      { "name": "Dark Chocolate Mocha (Hot/Iced)", "price": 200 },
      { "name": "Saffron Turmeric Latte (Hot/Iced)", "price": 210, "isMostOrdered": true },
      { "name": "Tiramisu Cappuccino (Hot/Iced)", "price": 220 },
      { "name": "Lotus Biscoff Latte (Hot/Iced)", "price": 220 },
      { "name": "Classic Iced Coffee", "price": 230 },
      { "name": "Vietnamese Iced Coffee", "price": 230, "isMostOrdered": true }
    ]
  },
  {
    "id": "frappe-to-go",
    "title": "Frappe To Go",
    "items": [
      { "name": "9:50 Signature Frappe", "price": 190, "description": "Your go-to strong cold coffee with a hint of vanilla, designed to relish anytime and every time", "isSignature": true },
      { "name": "Hazelnut Frappe", "price": 210 },
      { "name": "Irish Frappe", "price": 220, "isMostOrdered": true },
      { "name": "Java Chip Frappe", "price": 220 },
      { "name": "Toffee Caramel Frappe", "price": 230 },
      { "name": "Tiramisu Frappe", "price": 240 },
      { "name": "Biscoff Frappe", "price": 250 },
      { "name": "Brownie Frappe", "price": 250 }
    ]
  },
  {
    "id": "cold-brews",
    "title": "Cold Brews",
    "subtitle": "slow-steeped extracted coffee known for its bold flavour, smooth finish, and low acidity-your all-day iced companion.",
    "items": [
      { "name": "Pomegranate Cold Brew", "price": 210 },
      { "name": "Orange Cold Brew", "price": 210 },
      { "name": "Classic Espresso Tonic (E&T)", "price": 220, "description": "An evergreen blend of rich espresso and sparkling tonic water" },
      { "name": "Ginger Ale Cold Brew", "price": 220 },
      { "name": "Pineapple Cold Brew", "price": 220 },
      { "name": "Whisky Cold Brew", "price": 240, "description": "Crafted from 16 hours of brewing barrel-aged beans, this strong cold brew offers deep and rich flavors.", "isMostOrdered": true },
      { "name": "9:50 Signature Cold Brew", "price": 250, "description": "A drool-worthy blend of refreshing juices, vibrant fruit chunks, and our house blend cold brew.", "isSignature": true }
    ]
  },
  {
    "id": "affogato",
    "title": "Affogato",
    "subtitle": "An Italian classic: vanilla gelato bathed in warm espresso, creating a swirl of sweetness, warmth, and smooth coffee magic.",
    "items": [
      { "name": "Classic Affogato", "price": 170 },
      { "name": "Dark Chocolate Affogato", "price": 190 },
      { "name": "Caramel Pistachio Affogato", "price": 210, "isMostOrdered": true },
      { "name": "9:50 Signature Affogato", "price": 230, "description": "Classic Affogato gets a vibrant makeover with an assortment of fresh fruits.", "isSignature": true }
    ]
  },
  {
    "id": "matcha",
    "title": "Matcha",
    "items": [
      { "name": "Matcha Latte", "price": 150 },
      { "name": "Iced Matcha", "price": 170 },
      { "name": "Matcha Frappe", "price": 210 },
      { "name": "Mango Matcha Latte", "price": 220 },
      { "name": "Strawberry Matcha Latte", "price": 220 },
      { "name": "Coconut Matcha Latte", "price": 230, "isMostOrdered": true }
    ]
  },
  {
    "id": "hot-teas",
    "title": "Hot teas",
    "items": [
      { "name": "Classic Masala Chai", "price": 80 },
      { "name": "Moroccan Mint Tea", "price": 100, "description": "Soothing green tea infused with fresh mint." },
      { "name": "Lemon Ginger Tea", "price": 110 },
      { "name": "Lavender Earl Grey Tea", "price": 140, "description": "Experience the tradition of black tea blended with calming lavender and traditional Earl Grey notes.", "isMostOrdered": true }
    ]
  },
  {
    "id": "iced-teas",
    "title": "Iced teas",
    "items": [
      { "name": "Lemon Iced Tea", "price": 140 },
      { "name": "Peach Iced Tea", "price": 160 },
      { "name": "Irish Iced Tea", "price": 180 },
      { "name": "Hibiscus Iced Tea", "price": 200 }
    ]
  },
  {
    "id": "hot-chocolate",
    "title": "Hot Chocolate",
    "items": [
      { "name": "Classic Hot Chocolate", "price": 190 },
      { "name": "Spiced Hot Chocolate", "price": 200, "description": "Adding a touch of spice with cinnamon to the classic hot chocolate, making it a perfect warm drink for chilly days." },
      { "name": "Nutella Hot Chocolate", "price": 210 },
      { "name": "Tiramisu Hot Chocolate", "price": 230, "isMostOrdered": true }
    ]
  },
  {
    "id": "shakes",
    "title": "Milk Shakes",
    "items": [
      { "name": "Oreo Shake", "price": 200 },
      { "name": "Ferrero Rocher Shake", "price": 210 },
      { "name": "Kitkat Shake", "price": 210 },
      { "name": "Strawberry Shake", "price": 210 },
      { "name": "French Vanilla Shake", "price": 230 },
      { "name": "Brownie Shake", "price": 240 },
      { "name": "Belgian Chocolate Shake", "price": 240 },
      { "name": "Nutella Shake", "price": 240 },
      { "name": "Lotus Biscoff Shake", "price": 250 },
      { "name": "Blueberry Cheesecake Shake", "price": 260 },
      { "name": "Tropical Avocado Shake", "price": 280, "description": "A silky-smooth shake made with creamy avocado, tropical pineapple, and a touch of mango-pure bliss in a glass.", "isMostOrdered": true }
    ]
  },
  {
    "id": "craft-mocktails",
    "title": "Craft Mocktails",
    "items": [
      { "name": "Virgin Mojito", "price": 140 },
      { "name": "Masala Lemonade", "price": 150 },
      { "name": "Watermelon Mojito", "price": 160 },
      { "name": "Coffee Lemonade", "price": 160, "description": "A zesty, caffeinated kick that's bold, bright, and totally refreshing.", "isMostOrdered": true },
      { "name": "Shirley Temple", "price": 170, "description": "A dreamy mix of citrus fruits and ginger ale garnished with lime wedges and mint, this bubbly Mocktail is a delightful treat for all ages." },
      { "name": "Cinderella", "price": 180, "description": "A pomegranate fairy tale in a glass, with a fizzy twist that'll make you feel magical." },
      { "name": "Passionate Love", "price": 180, "description": "An addictive blend of passion fruit and citrus flavours, a drink that's as refreshing and full of love as it sounds." }
    ]
  },
  {
    "id": "blue-dream",
    "title": "Blue Dream",
    "subtitle": "Blue pea, our café's botanical gem, brings a soft floral fragrance and a naturally brilliant blue color that transforms every beverage into a little moment of magic.",
    "items": [
      { "name": "Blue Pea Iced Latte", "price": 140, "isMostOrdered": true },
      { "name": "Blue Pea Sparkler", "price": 220, "description": "A fizzy, floral delight with the refreshing taste of blue pea flower, sophisticated with a touch of tonic water.", "isMostOrdered": true },
      { "name": "Blue Pea Coconut Cooler", "price": 250, "isMostOrdered": true },
      { "name": "Blue Pea Matcha Smoothie", "price": 280, "isMostOrdered": true }
    ]
  },
  {
    "id": "healthy-juices",
    "title": "Healthy Juices",
    "items": [
      { "name": "Carrot Ginger Juice", "price": 140 },
      { "name": "Watermelon Mint Juice", "price": 140 },
      { "name": "ABC", "price": 150, "description": "A refreshing blend of red apple, beetroot, and English carrot, this juice is as delicious as it is nutritious.", "isMostOrdered": true }
    ]
  },
  {
    "id": "smoothies",
    "title": "Smoothies",
    "items": [
      { "name": "Mango Madness Smoothie", "price": 230 },
      { "name": "Berry Powerful Smoothie", "price": 240, "description": "This smoothie features a medley of assorted berries and banana, blended with milk for a luscious texture.", "isMostOrdered": true },
      { "name": "Nutty Buddy Smoothie", "price": 240, "description": "A delightful blend of milk, banana, peanut butter, dark chocolate, and cocoa, this smoothie is every gym goer's paradise." },
      { "name": "9:50 Signature Smoothie", "price": 250, "description": "A heavenly mix of fresh fruits and milk, creating a smoothie that's utterly satisfying.", "isSignature": true },
      { "name": "Avocado Coconut Smoothie", "price": 280 }
    ]
  },
  {
    "id": "beverage-companions",
    "title": "Beverage Companions",
    "items": [
      { "name": "Giant Vanilla Cookie", "price": 100 },
      { "name": "Brookie (Cookie with a Brownie Twist)", "price": 120 },
      { "name": "Butter Croissant", "price": 160 },
      { "name": "Nutella Croissant", "price": 220 },
      { "name": "Classic Avocado Toast", "price": 200, "isMostOrdered": true }
    ]
  },
  {
    "id": "healthy-salads",
    "title": "Healthy Salads",
    "items": [
      { "name": "Classic Caesar Salad", "price": 180, "description": "The perfect balance of crisp lettuce, creamy dressing, and crunchy croutons, always a classic!" },
      { "name": "Greek Salad", "price": 200, "description": "A vibrant mix of exotic vegetables and Mediterranean flavors, making healthy feel like a treat!", "isMostOrdered": true },
      { "name": "Yogurt Salad", "price": 220 },
      { "name": "Peri Peri Paneer Salad", "price": 230 }
    ]
  },
  {
    "id": "bites-for-sides",
    "title": "Bites for Sides",
    "items": [
      { "name": "Nachos with Salsa", "price": 170 },
      { "name": "Overloaded Nachos", "price": 190, "description": "Crispy nachos loaded with vibrant salsa, veggies and ultimately crowned with cheese and jalapeño sauce." },
      { "name": "Cherry Tomato & Cottage Cheese Bruschetta", "price": 210 },
      { "name": "Pesto Cottage Cheese in Focaccia Bread", "price": 280, "isMostOrdered": true }
    ]
  },
  {
    "id": "fries-corner",
    "title": "Fries Corner",
    "items": [
      { "name": "Simply Salted Fries", "price": 150 },
      { "name": "Potato Wedges", "price": 160 },
      { "name": "Parmesan Truffle Fries", "price": 180 },
      { "name": "Peri Peri Fries", "price": 180 },
      { "name": "Onion Rings", "price": 180 },
      { "name": "Cheese Garlic Fries", "price": 190, "isMostOrdered": true }
    ]
  },
  {
    "id": "sandwiches",
    "title": "Sandwiches",
    "items": [
      { "name": "Bombay Kaccha/Grilled Sandwich", "price": "150/180" },
      { "name": "Cheese Chutney Sandwich", "price": 160 },
      { "name": "Cheese Corn Sandwich", "price": 170 },
      { "name": "Veg Grilled Sandwich", "price": 190 },
      { "name": "Paneer Paprika Sandwich", "price": 200, "isMostOrdered": true }
    ]
  },
  {
    "id": "burgers",
    "title": "Burgers",
    "items": [
      { "name": "Aloo Tikki Burger with Salted Fries", "price": 140 },
      { "name": "Vegetable Burger with Peri Peri Fries", "price": 160 },
      { "name": "Cheese Burst Burger with Parmesan Truffle Fries", "price": 170 },
      { "name": "Chef's Cottage Cheese Burger with Peri Peri Fries", "price": 180 },
      { "name": "9:50 Signature Burger with Potato Wedges", "price": 190, "description": "Our very own specialty indulgence loaded with surprising rich flavours!", "isSignature": true }
    ]
  },
  {
    "id": "pasta",
    "title": "Pasta",
    "items": [
      { "name": "Spaghetti Aglio E Olio", "price": 230, "description": "A golden swirl of garlic-kissed spaghetti with olives, cherry tomatoes, and a graceful dusting of Parmesan." },
      { "name": "Fettuccine Basil Pesto", "price": 260, "description": "Silky fettuccine draped in vibrant pesto sauce with olives and a bright finish of basil and Parmesan.", "isMostOrdered": true },
      { "name": "Penne Arrabbiata", "price": 280, "description": "Fiery, tangy penne tossed with peppers and olives, lifted by fresh parsley and a snowfall of Parmesan." },
      { "name": "Fettuccine Creamy Mushroom", "price": 300, "description": "A lush mushroom-cream-coated fettuccine crowned with chili warmth and delicate Parmesan." },
      { "name": "9:50 Mac & Cheese", "price": 300, "description": "A creamy, golden bake of butter-garlic macaroni with broccoli, paprika, sweet corn, and molten mozzarella on top.", "isSignature": true }
    ]
  },
  {
    "id": "pizza",
    "title": "Pizza Station",
    "preheader": "STRAIGHT FROM WOOD FIRE OVEN!",
    "items": [
      { "name": "Classic Margherita Pizza", "prices": { "ny": 330, "neap": 370 }, "description": "A timeless pizza with mozzarella, bocconcini, and fresh basil leaves on top." },
      { "name": "Cheese Corn Pizza", "prices": { "ny": 350, "neap": 390 }, "description": "Creamy mozzarella and bocconcini paired with sweet, golden corn." },
      { "name": "Farmville Pizza", "prices": { "ny": 380, "neap": 410 }, "description": "A garden medley of broccoli, corn, bell pepper, mushroom, paprika, olives, jalapeño, and cherry tomato." },
      { "name": "Four Cheese Pizza", "prices": { "ny": 400, "neap": 440 }, "description": "Mozzarella, bocconcini, cheddar, and ricotta with sprinkle of Parmesan on top.", "isMostOrdered": true },
      { "name": "Exotic Pizza", "prices": { "ny": 410, "neap": 450 }, "description": "Golden corn, bell peppers, black olives, and paneer come together for a vibrant, flavorful pizza experience." },
      { "name": "Paneer Tikka Pizza", "prices": { "ny": 420, "neap": 460 }, "description": "Spiced paneer, bell pepper, onion, paprika, and jalapeño on tangy paneer tikka sauce." },
      { "name": "Pestomania Pizza", "prices": { "ny": 430, "neap": 470 }, "description": "Bocconcini over vibrant pesto sauce, served with a side of pesto dip." },
      { "name": "9:50 Signature Pizza", "prices": { "ny": 450, "neap": 490 }, "description": "Garlic cream base with mozzarella, bocconcini, red paprika, jalapeño, black olives, pickle onion, finished with fried garlic.", "isSignature": true }
    ]
  },
  {
    "id": "garlic-bread",
    "title": "Garlic Bread",
    "items": [
      { "name": "Classic Garlic Bread", "price": 170, "description": "Stuffed with Butter and garlic, brushed with olive oil, sprinkled with oregano, and served with a jalapeño dip." },
      { "name": "Chilly Cheese Garlic Bread", "price": 190, "description": "Stuffed with green chili, melted mozzarella, and a sprinkle of chili and parsley.", "isMostOrdered": true },
      { "name": "9:50 Signature Garlic Bread", "price": 280, "description": "Stuffed with Schezwan-spiced garlic sauce, bell pepper, cherry tomato, jalapeño, and sweet corn, finished with herbs and served with Schezwan dip.", "isSignature": true }
    ]
  },
  {
    "id": "calzone",
    "title": "Calzone",
    "subtitle": "Hand-folded pocket, stuffed with creamy fillings, baked till perfectly crisp outside and soft inside.",
    "items": [
      { "name": "Veg Calzone", "price": 240, "description": "A golden fold of garlic-sauced veggies, mushrooms, mozzarella, and a sprinkle of oregano and parsley." },
      { "name": "Pesto Mushroom Calzone", "price": 260, "description": "Pesto, mushrooms, cherry tomato, lettuce, and bocconcini tucked inside a warm, cheesy fold, served with pesto dip.", "isMostOrdered": true },
      { "name": "Creamy Paneer Calzone", "price": 270, "description": "Paneer, bell pepper, sweet corn, olives, and cherry tomato wrapped in a cheesy calzone, finished with oregano, parsley, and served with sweet chili sauce." }
    ]
  },
  {
    "id": "meal-bowls",
    "title": "Meal Bowls",
    "items": [
      { "name": "Burnt Garlic Fried Rice", "price": 220 },
      { "name": "Schezwan Fried Rice", "price": 250 },
      { "name": "Burrito Rice Bowl", "price": 270, "description": "A flavorful mix of rice, beans and veggies, all topped with tangy salsa and fresh garnishes, served in a bowl for a satisfying meal.", "isMostOrdered": true },
      { "name": "Peri Peri Paneer Rice Bowl", "price": 280 },
      { "name": "9:50 Signature Meal Bowl", "price": 310, "description": "Your comforting pizza flavours but in a rice bowl.", "isSignature": true },
      { "name": "Buddha Bowl", "price": 320, "description": "A wholesome, vibrant bowl filled with fresh veggies, quinoa, chickpeas, and a tangy tahini dressing—a balanced meal that feeds both the body and the soul." }
    ]
  },
  {
    "id": "ramen-tales",
    "title": "Ramen Tales",
    "subtitle": "ラーメン物語 • Comforting bowls of warmth, crafted with care and tradition.",
    "items": [
      { "name": "Tan Tan Ramen", "price": 230, "description": "A vegetarian twist on the classic, featuring a rich, spicy sesame broth with earthy mushrooms, crunchy veggies, and silky noodles." },
      { "name": "Shoyu Ramen", "price": 250, "description": "A savory soy-based broth with delicate mushrooms, fresh greens, and tender noodles, bringing the comforting flavors of Japan to your bowl.", "isMostOrdered": true }
    ]
  },
  {
    "id": "meal-combos",
    "title": "Meal Combos",
    "items": [
      { "name": "Pav Bhaji", "price": 160 },
      { "name": "Butter Khichdi", "price": 170 },
      { "name": "Chole Chawal / Rajma Chawal", "price": 190 },
      { "name": "Sev Tamatar with Laccha Paratha", "price": 200 },
      { "name": "Paneer Bhurji with Pav", "price": 220 }
    ]
  },
  {
    "id": "dessert",
    "title": "Desserts",
    "items": [
      { "name": "Classic Homemade Brownie", "price": 180 },
      { "name": "Nutella Waffles", "price": 200 },
      { "name": "Biscoff Waffles", "price": 200 },
      { "name": "Oreo Waffles", "price": 200 },
      { "name": "Sizzling Brownie", "price": 210 },
      { "name": "Tiramisu", "price": 220, "isMostOrdered": true },
      { "name": "Blueberry Cheese Cake", "price": 250 },
      { "name": "Lotus Biscoff Cheese Cake", "price": 250 },
      { "name": "Nutella Cheese Cake", "price": 250 },
      { "name": "Strawberry Cheese Cake", "price": 250, "isMostOrdered": true },
      { "name": "9:50 Signature Coffee Cheese Cake", "price": 280, "isSignature": true }
    ]
  }
];
