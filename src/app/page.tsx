// @ts-nocheck

const Nav = () => (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#f2e6d9]/80 border-b border-[#8B4A27]/10 py-4 px-6 mb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B4A27] flex items-center justify-center text-[#f2e6d9]">
                    <span className="font-script text-lg pt-1">9</span>
                </div>
                <h1 className="font-script text-2xl text-[#5A2E1B] tracking-wide">Cafe 9:50</h1>
            </div>
            <a href="#footer" className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#8B4A27] border border-[#8B4A27]/30 px-3 py-1 rounded-full hover:bg-[#8B4A27] hover:text-[#f2e6d9] transition-colors">
                Contact
            </a>
        </div>
    </nav>
);

const Footer = () => (
    <footer id="footer" className="mt-12 text-center py-12 px-6 border-t border-[#8B4A27]/10 bg-[#f2e6d9]/50">
        <iconify-icon icon="solar:cup-hot-linear" width="24" className="text-[#8B4A27] mb-4 opacity-50"></iconify-icon>
        <div className="flex justify-center gap-6 mb-8 text-[#8B4A27]">
            <a href="https://www.instagram.com/CAFENINE50" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
            <a href="tel:+918349476548" className="hover:scale-110 transition-transform"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
            <a href="http://CAFENINE50.COM" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><iconify-icon icon="solar:globe-linear" width="20"></iconify-icon></a>
        </div>
        <p className="font-sans text-xs tracking-widest uppercase text-[#5A2E1B] mb-2">Cafe 9:50</p>
        <p className="font-sans text-[10px] text-[#5A2E1B]/60 max-w-xs mx-auto leading-relaxed">
            5, AZAD NAGAR, INFRONT OF PUSHPA MISSION HOSPITAL, UJJAIN (M.P) 456010
        </p>
    </footer>
);


export default function Home() {
  return (
    <div className="pb-20">
        <Nav />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

            <article className="break-inside-avoid bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#8B4A27]/10 text-center mb-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B4A27] to-transparent opacity-50"></div>
                <iconify-icon icon="solar:cup-hot-linear" width="40" className="text-[#8B4A27] mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500"></iconify-icon>
                <h2 className="font-sans text-xs uppercase tracking-[0.3em] text-[#8B4A27] mb-2">Welcome to</h2>
                <p className="font-script text-5xl text-[#5A2E1B] mb-4 leading-tight">Brewing<br/>Memories</p>
                <p className="font-sans text-xs opacity-70 leading-relaxed max-w-[200px] mx-auto">Handcrafted coffee, artisanal bakes, and soulful conversations.</p>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="flex items-center gap-3 mb-6 border-b border-[#8B4A27]/10 pb-3">
                    <iconify-icon icon="solar:coffee-bean-linear" className="text-[#8B4A27] text-xl"></iconify-icon>
                    <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight">Classic Espresso</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center group/item cursor-default">
                        <span className="font-sans text-sm font-medium">Espresso</span>
                        <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                        <span className="font-sans text-sm font-medium text-[#8B4A27]">80</span>
                    </div>
                    <div className="flex justify-between items-center group/item cursor-default">
                        <span className="font-sans text-sm font-medium">Americano</span>
                        <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                        <span className="font-sans text-sm font-medium text-[#8B4A27]">120</span>
                    </div>
                    <div className="flex justify-between items-center group/item cursor-default">
                        <span className="font-sans text-sm font-medium">Cappuccino</span>
                        <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                        <span className="font-sans text-sm font-medium text-[#8B4A27]">140</span>
                    </div>
                    <div className="flex justify-between items-center group/item cursor-default">
                        <span className="font-sans text-sm font-medium">Latte</span>
                        <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                        <span className="font-sans text-sm font-medium text-[#8B4A27]">160</span>
                    </div>
                    <div className="group/item cursor-default">
                        <div className="flex justify-between items-center">
                            <span className="font-sans text-sm font-medium">Cortado</span>
                            <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">160</span>
                        </div>
                        <p className="font-sans text-[10px] text-[#8B4A27]/60 mt-1 pl-1 border-l-2 border-[#8B4A27]/10">Delightful duet of espresso &amp; steamed milk.</p>
                    </div>
                    <div className="group/item cursor-default">
                        <div className="flex justify-between items-center">
                            <span className="font-sans text-sm font-medium">Flat White</span>
                            <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">180</span>
                        </div>
                    </div>
                    <div className="group/item cursor-default">
                        <div className="flex justify-between items-center">
                            <span className="font-sans text-sm font-medium">Mocha</span>
                            <span className="w-full border-b border-dotted border-[#8B4A27]/20 mx-2"></span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">190</span>
                        </div>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="flex items-center gap-3 mb-6 border-b border-[#8B4A27]/10 pb-3">
                    <iconify-icon icon="solar:stars-linear" className="text-[#8B4A27] text-xl"></iconify-icon>
                    <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight">Craft Coffees</h3>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Irish Cappuccino</span><span className="font-sans text-sm font-medium text-[#8B4A27]">180</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Caramel Latte</span><span className="font-sans text-sm font-medium text-[#8B4A27]">180</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Hazelnut Cap</span><span className="font-sans text-sm font-medium text-[#8B4A27]">190</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Dark Choco Mocha</span><span className="font-sans text-sm font-medium text-[#8B4A27]">200</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Saffron Turmeric</span><span className="font-sans text-sm font-medium text-[#8B4A27]">210</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Tiramisu Cap</span><span className="font-sans text-sm font-medium text-[#8B4A27]">220</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Lotus Biscoff</span><span className="font-sans text-sm font-medium text-[#8B4A27]">220</span></div>
                    <div className="mt-4 pt-4 border-t border-[#8B4A27]/5">
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm text-[#8B4A27] font-medium">Classic Iced Coffee</span><span className="font-sans text-sm font-medium text-[#8B4A27]">230</span></div>
                        <div className="flex justify-between items-baseline mt-2"><span className="font-sans text-sm text-[#8B4A27] font-medium">Vietnamese Iced</span><span className="font-sans text-sm font-medium text-[#8B4A27]">230</span></div>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#eef4f6] p-6 rounded-xl shadow-sm border border-[#2e4c5a]/10 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="text-center mb-6">
                    <iconify-icon icon="solar:flower-linear" className="text-[#2e4c5a] text-3xl mb-2"></iconify-icon>
                    <h3 className="font-script text-3xl text-[#2e4c5a] tracking-tight">Blue Dream</h3>
                    <p className="font-sans text-[10px] text-[#2e4c5a]/70 mt-2 px-4">Blue pea brings a soft floral fragrance and brilliant color.</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-white/50 p-3 rounded-lg flex justify-between items-center">
                        <span className="font-sans text-sm font-medium text-[#2e4c5a]">Blue Pea Iced Latte</span>
                        <span className="font-sans text-sm font-semibold text-[#2e4c5a]">140</span>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-sans text-sm font-medium text-[#2e4c5a]">Blue Pea Sparkler</span>
                            <span className="font-sans text-sm font-semibold text-[#2e4c5a]">220</span>
                        </div>
                        <p className="font-sans text-[10px] text-[#2e4c5a]/60">Fizzy, floral delight with tonic water</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg flex justify-between items-center">
                        <span className="font-sans text-sm font-medium text-[#2e4c5a]">Coconut Cooler</span>
                        <span className="font-sans text-sm font-semibold text-[#2e4c5a]">250</span>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="flex items-center gap-3 mb-4">
                    <iconify-icon icon="solar:ice-cream-linear" className="text-[#8B4A27] text-xl"></iconify-icon>
                    <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight">Frappe &amp; Brews</h3>
                </div>
                
                <div className="mb-6 bg-[#F3E2C9]/20 p-4 rounded-lg border border-[#8B4A27]/10">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-sans text-sm font-medium text-[#8B4A27] uppercase tracking-wide">9:50 Signature Frappe</span>
                        <span className="font-sans text-sm font-medium">190</span>
                    </div>
                    <p className="font-sans text-[10px] opacity-70 leading-tight">Strong cold coffee with a hint of vanilla.</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                    <div className="flex justify-between"><span className="font-sans text-xs">Hazelnut</span><span className="text-xs font-medium">210</span></div>
                    <div className="flex justify-between"><span className="font-sans text-xs">Java Chip</span><span className="text-xs font-medium">220</span></div>
                    <div className="flex justify-between"><span className="font-sans text-xs">Toffee Caramel</span><span className="text-xs font-medium">230</span></div>
                    <div className="flex justify-between"><span className="font-sans text-xs">Tiramisu</span><span className="text-xs font-medium">240</span></div>
                    <div className="flex justify-between"><span className="font-sans text-xs">Brownie</span><span className="text-xs font-medium">250</span></div>
                </div>

                <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-[#8B4A27] mb-3 border-b border-[#8B4A27]/10 pb-1">Cold Brews</h4>
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Pomegranate / Orange</span><span className="font-sans text-sm font-medium">210</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Espresso Tonic</span><span className="font-sans text-sm font-medium">220</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm">Whisky Cold Brew</span><span className="font-sans text-sm font-medium">240</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium text-[#8B4A27]">Signature Brew</span><span className="font-sans text-sm font-medium">250</span></div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6 flex flex-col gap-6">
                <div>
                    <h3 className="font-script text-xl text-[#5A2E1B] mb-3 flex items-center gap-2">
                        <iconify-icon icon="solar:cookie-linear"></iconify-icon> Affogato
                    </h3>
                    <div className="space-y-2 pl-2 border-l border-[#8B4A27]/10">
                        <div className="flex justify-between"><span className="font-sans text-sm">Classic</span><span className="text-sm">170</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm">Dark Choco</span><span className="text-sm">190</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm">Caramel Pistachio</span><span className="text-sm">210</span></div>
                    </div>
                </div>
                <div>
                    <h3 className="font-script text-xl text-[#5A6B20] mb-3 flex items-center gap-2">
                        <iconify-icon icon="solar:leaf-linear"></iconify-icon> Matcha
                    </h3>
                    <div className="space-y-2 pl-2 border-l border-[#5A6B20]/20">
                        <div className="flex justify-between"><span className="font-sans text-sm">Matcha Latte</span><span className="text-sm">150</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm">Matcha Frappe</span><span className="text-sm">210</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm">Mango Matcha</span><span className="text-sm">220</span></div>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#2A2320] text-[#f2e6d9] p-6 rounded-xl shadow-lg mb-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[#ffffff]/5">
                     <iconify-icon icon="solar:pizza-linear" width="120"></iconify-icon>
                </div>
                
                <div className="relative z-10">
                    <h3 className="font-script text-3xl text-[#d4a574] mb-1">Wood Fire Pizza</h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest opacity-60 mb-6">New York &amp; Neapolitan</p>

                    <div className="flex justify-end text-[10px] opacity-50 mb-2 font-sans tracking-wide">
                        <span className="w-8 text-right">NY</span>
                        <span className="w-8 text-right">NE</span>
                    </div>

                    <div className="space-y-4">
                        <div className="group border-b border-[#d4a574]/10 pb-2">
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-sm font-medium tracking-wide">Margherita</span>
                                <div className="flex text-sm text-[#d4a574]">
                                    <span className="w-8 text-right">330</span>
                                    <span className="w-8 text-right">370</span>
                                </div>
                            </div>
                        </div>

                        <div className="group border-b border-[#d4a574]/10 pb-2">
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-sm font-medium tracking-wide">Farmville</span>
                                <div className="flex text-sm text-[#d4a574]">
                                    <span className="w-8 text-right">380</span>
                                    <span className="w-8 text-right">410</span>
                                </div>
                            </div>
                            <p className="font-sans text-[10px] opacity-50 mt-1">Broccoli, corn, mushroom, paprika, olives</p>
                        </div>

                        <div className="group border-b border-[#d4a574]/10 pb-2">
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-sm font-medium tracking-wide">Four Cheese</span>
                                <div className="flex text-sm text-[#d4a574]">
                                    <span className="w-8 text-right">400</span>
                                    <span className="w-8 text-right">440</span>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-sm font-medium tracking-wide text-[#d4a574]">Signature 9:50</span>
                                <div className="flex text-sm text-[#d4a574]">
                                    <span className="w-8 text-right">450</span>
                                    <span className="w-8 text-right">490</span>
                                </div>
                            </div>
                            <p className="font-sans text-[10px] opacity-50 mt-1">Garlic cream base, bocconcini, fried garlic</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#d4a574]/20">
                        <h4 className="font-sans text-xs text-[#d4a574] mb-3">SIDES</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-[#d4a574]/10 px-3 py-1 rounded-full text-[10px] border border-[#d4a574]/20">Garlic Bread 170</span>
                            <span className="bg-[#d4a574]/10 px-3 py-1 rounded-full text-[10px] border border-[#d4a574]/20">Veg Calzone 240</span>
                            <span className="bg-[#d4a574]/10 px-3 py-1 rounded-full text-[10px] border border-[#d4a574]/20">Pesto Mushroom 260</span>
                        </div>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="flex items-center gap-3 mb-6">
                    <iconify-icon icon="solar:milkshake-linear" className="text-[#8B4A27] text-xl"></iconify-icon>
                    <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight">Shakes &amp; Smoothies</h3>
                </div>
                
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm"><span className="font-sans">Oreo / Kitkat</span><span>200</span></div>
                    <div className="flex justify-between text-sm"><span className="font-sans">Ferrero Rocher</span><span>210</span></div>
                    <div className="flex justify-between text-sm"><span className="font-sans">Lotus Biscoff</span><span>250</span></div>
                    <div className="flex justify-between text-sm"><span className="font-sans">Blueberry Cheese</span><span>260</span></div>
                    <div className="flex justify-between text-sm mt-2 pt-2 border-t border-dashed border-[#8B4A27]/20">
                        <span className="font-sans font-medium text-[#8B4A27]">Tropical Avocado</span><span>280</span>
                    </div>
                </div>

                <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-[#8B4A27] mb-3">Healthy Picks</h4>
                <div className="bg-[#F3E2C9]/30 p-3 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm"><span className="font-sans">ABC Juice</span><span>150</span></div>
                    <div className="flex justify-between text-sm"><span className="font-sans">Mango Madness</span><span>230</span></div>
                    <div className="flex justify-between text-sm"><span className="font-sans">Berry Powerful</span><span>240</span></div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight mb-4">Teas &amp; Sips</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <h4 className="font-sans text-[10px] uppercase text-[#8B4A27] tracking-wider mb-2">Warm</h4>
                        <div className="space-y-1">
                             <div className="flex justify-between text-sm"><span className="font-sans">Masala Chai</span><span className="opacity-70">80</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Moroccan Mint</span><span className="opacity-70">100</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Lavender Earl Grey</span><span className="opacity-70">140</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Spiced Hot Choco</span><span className="opacity-70">200</span></div>
                        </div>
                    </div>
                    <div className="border-t border-[#8B4A27]/10 pt-3">
                        <h4 className="font-sans text-[10px] uppercase text-[#8B4A27] tracking-wider mb-2">Cold</h4>
                        <div className="space-y-1">
                             <div className="flex justify-between text-sm"><span className="font-sans">Peach Iced Tea</span><span className="opacity-70">160</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Coffee Lemonade</span><span className="opacity-70">160</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Shirley Temple</span><span className="opacity-70">170</span></div>
                             <div className="flex justify-between text-sm"><span className="font-sans">Passionate Love</span><span className="opacity-70">180</span></div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                <div className="flex items-center gap-3 mb-6">
                    <iconify-icon icon="solar:chef-hat-heart-linear" className="text-[#8B4A27] text-xl"></iconify-icon>
                    <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight">Pasta &amp; Bites</h3>
                </div>
                
                <div className="space-y-5">
                    <div className="group">
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="font-sans text-sm font-medium">Aglio E Olio</span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">230</span>
                        </div>
                        <p className="font-sans text-[10px] opacity-60">Garlic-kissed spaghetti with olives &amp; cherry tomatoes.</p>
                    </div>
                    <div className="group">
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="font-sans text-sm font-medium">Penne Arrabbiata</span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">280</span>
                        </div>
                        <p className="font-sans text-[10px] opacity-60">Fiery, tangy penne tossed with peppers.</p>
                    </div>
                    <div className="group">
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">9:50 Mac &amp; Cheese</span>
                            <span className="font-sans text-sm font-medium text-[#8B4A27]">300</span>
                        </div>
                        <p className="font-sans text-[10px] opacity-60">Creamy golden bake with broccoli &amp; corn.</p>
                    </div>
                    
                    <div className="pt-4 border-t border-[#8B4A27]/10 flex flex-wrap gap-2">
                         <span className="px-2 py-1 bg-gray-50 border rounded text-[10px]">Nachos 170</span>
                         <span className="px-2 py-1 bg-gray-50 border rounded text-[10px]">Bruschetta 210</span>
                         <span className="px-2 py-1 bg-gray-50 border rounded text-[10px]">Truffle Fries 180</span>
                    </div>
                </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6">
                 <h3 className="font-script text-2xl text-[#5A2E1B] tracking-tight mb-4">Hungry?</h3>
                 <div className="space-y-4">
                     <div className="flex justify-between items-center bg-[#F3E2C9]/20 p-2 rounded">
                         <span className="font-sans text-sm">Bombay Sandwich</span>
                         <span className="text-sm font-medium">180</span>
                     </div>
                     <div className="flex justify-between items-center bg-[#F3E2C9]/20 p-2 rounded">
                         <span className="font-sans text-sm">Signature Burger</span>
                         <span className="text-sm font-medium">190</span>
                     </div>
                     <div className="flex justify-between items-center bg-[#F3E2C9]/20 p-2 rounded">
                         <span className="font-sans text-sm">Burnt Garlic Rice</span>
                         <span className="text-sm font-medium">220</span>
                     </div>
                     <div className="flex justify-between items-center bg-[#F3E2C9]/20 p-2 rounded">
                         <span className="font-sans text-sm">Tan Tan Ramen</span>
                         <span className="text-sm font-medium">230</span>
                     </div>
                     
                     <div className="pt-2">
                         <h4 className="font-sans text-[10px] uppercase text-[#8B4A27] mb-2">Desi Combos</h4>
                         <div className="flex gap-2 flex-wrap">
                             <span className="text-[10px] border border-[#8B4A27]/20 px-2 py-1 rounded">Pav Bhaji 160</span>
                             <span className="text-[10px] border border-[#8B4A27]/20 px-2 py-1 rounded">Chole Chawal 190</span>
                         </div>
                     </div>
                 </div>
            </article>

            <article className="break-inside-avoid bg-[#fffefb] p-6 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md transition-shadow duration-300 mb-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F3E2C9] rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <h3 className="font-script text-3xl text-[#5A2E1B] tracking-tight mb-4 text-center">Sweet Endings</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/5 pb-1"><span className="font-sans text-sm">Classic Brownie</span><span className="text-sm font-medium">180</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/5 pb-1"><span className="font-sans text-sm">Nutella Waffle</span><span className="text-sm font-medium">200</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/5 pb-1"><span className="font-sans text-sm">Tiramisu</span><span className="text-sm font-medium">220</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/5 pb-1"><span className="font-sans text-sm">Cheesecake</span><span className="text-sm font-medium">250</span></div>
                    <div className="mt-4 bg-[#8B4A27] text-[#f2e6d9] p-3 rounded-lg text-center">
                        <span className="font-script text-xl block">Signature Coffee Cake</span>
                        <span className="text-xs font-sans tracking-widest">INR 280</span>
                    </div>
                </div>
            </article>

        </main>
        <Footer />
    </div>
  );
}
