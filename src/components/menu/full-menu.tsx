import type { MenuSection } from '@/types';
import { Pizza } from 'lucide-react';

interface FullMenuProps {
  sections: MenuSection[];
}

const MenuItem = ({ item }: { item: any }) => (
    <div className="group">
      <div className="flex justify-between items-baseline border-b border-[#8B4A27]/20 border-dotted pb-1">
        <span className={`font-sans text-sm font-medium uppercase tracking-wide ${item.isSignature ? 'text-[#8B4A27] font-semibold' : ''}`}>{item.name}</span>
        <span className="font-sans text-sm font-medium">{item.price}</span>
      </div>
      {item.description && <p className="font-sans text-xs text-[#6B3A20]/80 mt-1 leading-relaxed">{item.description}</p>}
    </div>
);


export default function FullMenu({ sections }: FullMenuProps) {
    const findSection = (id: string) => sections.find(s => s.id === id);
    
    const classicEspressoBar = findSection('classicEspressoBar');
    const craftCoffees = findSection('craftCoffees');
    const frappeToGo = findSection('frappeToGo');
    const coldBrews = findSection('coldBrews');
    const milkShakes = findSection('milkShakes');
    const beverageCompanions = findSection('beverageCompanions');
    const betweenBreads = findSection('betweenBreads');
    const pasta = findSection('pasta');
    const pizzaStation = findSection('pizzaStation');
    const desiCombos = findSection('desiCombos');
    const sweetEndings = findSection('sweetEndings');

  return (
    <div className="animate-in fade-in-50">
      {classicEspressoBar && (
        <section className="px-8 mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px bg-[#8B4A27]/30 w-8"></div>
                <h2 className="font-headline text-3xl text-center">{classicEspressoBar.title}</h2>
                <div className="h-px bg-[#8B4A27]/30 w-8"></div>
            </div>
            <div className="space-y-5">
                {classicEspressoBar.items.map(item => <MenuItem key={item.name} item={item} />)}
            </div>
        </section>
      )}

      {craftCoffees && (
        <section className="px-8 mb-12">
            <h2 className="font-headline text-3xl text-center mb-6">{craftCoffees.title}</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {craftCoffees.items.map(item => (
                    <div key={item.name} className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1">
                        <span className="font-sans text-sm font-medium uppercase tracking-tight">{item.name}</span>
                        <span className="font-sans text-sm font-medium">{item.price}</span>
                    </div>
                ))}
            </div>
        </section>
      )}

      {frappeToGo && (
        <section className="px-8 mb-12 bg-[#8B4A27]/5 py-8 mx-4 rounded-sm border border-[#8B4A27]/20">
            <h2 className="font-headline text-3xl text-center mb-6">{frappeToGo.title}</h2>
            <div className="space-y-4">
                <MenuItem item={frappeToGo.items.find(i => i.isSignature)} />
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                    {frappeToGo.items.filter(i => !i.isSignature).map(item => (
                         <div key={item.name} className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">{item.name}</span><span className="text-sm">{item.price}</span></div>
                    ))}
                </div>
            </div>
        </section>
      )}
      
      {coldBrews && (
         <section className="px-8 mb-12">
            <h2 className="font-headline text-3xl text-center mb-2">{coldBrews.title}</h2>
            <p className="font-sans text-xs text-center text-[#6B3A20]/70 italic mb-6 max-w-sm mx-auto">{coldBrews.subtitle}</p>
            <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {coldBrews.items.slice(0, 4).map(item => (
                        <div key={item.name} className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">{item.name}</span><span className="text-sm">{item.price}</span></div>
                    ))}
                </div>
                {coldBrews.items.slice(4).map(item => <MenuItem key={item.name} item={item} />)}
            </div>
        </section>
      )}

      <div className="grid md:grid-cols-2 gap-8 px-8 mb-12">
            <section>
                <h2 className="font-headline text-2xl text-center mb-4">Affogato</h2>
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Classic Affogato</span><span className="text-sm">170</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Dark Choco Affogato</span><span className="text-sm">190</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Caramel Pistachio</span><span className="text-sm">210</span></div>
                    <div>
                        <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-semibold uppercase text-[#8B4A27]">9:50 Signature</span><span className="text-sm">230</span></div>
                        <p className="font-sans text-[10px] leading-tight mt-1 opacity-80">(Classic Affogato with fresh fruits)</p>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="font-headline text-2xl text-center mb-4 text-[#5A6B20]">Matcha</h2>
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Matcha Latte</span><span className="text-sm">150</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Iced Matcha</span><span className="text-sm">170</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Matcha Frappe</span><span className="text-sm">210</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Mango Matcha</span><span className="text-sm">220</span></div>
                    <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Coconut Matcha</span><span className="text-sm">230</span></div>
                </div>
            </section>
        </div>

        <section className="px-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="font-headline text-2xl text-center mb-4">Hot Teas</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Classic Masala Chai</span><span className="text-sm">80</span></div>
                        <div className="group">
                             <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Moroccan Mint Tea</span><span className="text-sm">100</span></div>
                             <p className="text-[10px] opacity-70">(Green tea infused with fresh mint)</p>
                        </div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Lemon Ginger Tea</span><span className="text-sm">110</span></div>
                        <div className="group">
                             <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Lavender Earl Grey</span><span className="text-sm">140</span></div>
                             <p className="text-[10px] opacity-70">(Black tea blended with calming lavender)</p>
                        </div>
                    </div>
                </div>
                 <div>
                    <h2 className="font-headline text-2xl text-center mb-4">Iced Teas &amp; Cocoa</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Lemon Iced Tea</span><span className="text-sm">140</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Peach Iced Tea</span><span className="text-sm">160</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Hibiscus Iced Tea</span><span className="text-sm">200</span></div>
                        <div className="border-t border-[#8B4A27]/20 pt-2 mt-2"></div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Classic Hot Choco</span><span className="text-sm">190</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Spiced Hot Choco</span><span className="text-sm">200</span></div>
                        <div className="flex justify-between"><span className="font-sans text-sm font-medium uppercase">Nutella Hot Choco</span><span className="text-sm">210</span></div>
                    </div>
                </div>
            </div>
        </section>

        {milkShakes && (
            <section className="px-8 mb-12">
                <h2 className="font-headline text-3xl text-center mb-6">{milkShakes.title}</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {milkShakes.items.filter(i => !i.description).map(item => (
                        <div key={item.name} className="flex justify-between border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">{item.name}</span><span className="text-sm">{item.price}</span></div>
                    ))}
                </div>
                <div className="mt-4">
                    {milkShakes.items.filter(i => i.description).map(item => (
                        <div key={item.name}>
                            <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">{item.name}</span><span className="text-sm">{item.price}</span></div>
                            <p className="font-sans text-xs text-[#6B3A20]/80 mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        )}

        <section className="px-8 mb-12">
            <div className="bg-[#2e4c5a]/5 p-6 rounded-sm border border-[#2e4c5a]/10">
                <h2 className="font-headline text-3xl text-center text-[#2e4c5a] mb-2">Blue Dream</h2>
                <p className="text-xs text-center mb-6 opacity-80">(Blue pea, our botanical gem, brings a soft floral fragrance and brilliant blue color)</p>
                <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-[#2e4c5a]/20 pb-1"><span className="font-sans text-sm font-medium uppercase text-[#2e4c5a]">Blue Pea Iced Latte</span><span className="text-sm font-medium">140</span></div>
                    <div>
                         <div className="flex justify-between items-baseline border-b border-[#2e4c5a]/20 pb-1"><span className="font-sans text-sm font-medium uppercase text-[#2e4c5a]">Blue Pea Sparkler</span><span className="text-sm font-medium">220</span></div>
                         <p className="text-[10px] mt-1 opacity-70">(Fizzy, floral delight with tonic water)</p>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-[#2e4c5a]/20 pb-1"><span className="font-sans text-sm font-medium uppercase text-[#2e4c5a]">Blue Pea Coconut Cooler</span><span className="text-sm font-medium">250</span></div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="font-headline text-3xl text-center mb-6">Craft Mocktails</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Virgin Mojito</span><span className="text-sm">140</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Watermelon Mojito</span><span className="text-sm">160</span></div>
                    <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Coffee Lemonade</span><span className="text-sm">160</span></div><p className="text-xs opacity-70">(A zesty, caffeinated kick)</p></div>
                    <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Shirley Temple</span><span className="text-sm">170</span></div><p className="text-xs opacity-70">(Dreamy mix of citrus fruits and ginger ale)</p></div>
                    <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Cinderella</span><span className="text-sm">180</span></div><p className="text-xs opacity-70">(A pomegranate fairy tale in a glass)</p></div>
                    <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Passionate Love</span><span className="text-sm">180</span></div><p className="text-xs opacity-70">(Passion fruit and citrus flavours)</p></div>
                </div>
            </div>
        </section>

        <section className="px-8 mb-12">
            <h2 className="font-headline text-3xl text-center mb-6">Healthy &amp; Smoothies</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-headline text-xl mb-3 text-[#6B3A20]">Juices</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Carrot Ginger</span><span className="text-sm">140</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">ABC Juice</span><span className="text-sm">150</span></div>
                        <p className="text-[10px] -mt-2 opacity-70">(Apple, Beetroot, Carrot)</p>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Detox</span><span className="text-sm">160</span></div>
                        <p className="text-[10px] -mt-2 opacity-70">(Spinach, coriander, mint)</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-headline text-xl mb-3 text-[#6B3A20]">Smoothies</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Mango Madness</span><span className="text-sm">230</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Berry Powerful</span><span className="text-sm">240</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Nutty Buddy</span><span className="text-sm">240</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-semibold uppercase text-[#8B4A27]">9:50 Signature</span><span className="text-sm">250</span></div>
                    </div>
                </div>
            </div>
        </section>

        {beverageCompanions && (
            <section className="px-8 mb-12 border-b-2 border-[#8B4A27]/20 pb-12">
                <h2 className="font-headline text-2xl text-center mb-6">{beverageCompanions.title}</h2>
                <div className="flex flex-wrap justify-center gap-4 text-center">
                    {beverageCompanions.items.map(item => (
                        <div key={item.name} className="px-4 py-2 border border-[#8B4A27]/30 rounded-full">
                            <span className="block font-sans text-xs uppercase font-medium">{item.name}</span>
                            <span className="block text-sm font-medium">{item.price}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center space-y-2">
                    <p className="font-headline text-2xl text-[#8B4A27]">“Impressed by the drinks? turn the page”</p>
                    <p className="font-sans text-sm font-medium uppercase tracking-widest">The food's ready to steal the show!</p>
                </div>
            </section>
        )}

        <section className="px-8 mt-12 mb-12">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="font-headline text-3xl text-center mb-4">Healthy Salads</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Sprout Salad</span><span className="text-sm">160</span></div>
                        <div><div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Classic Caesar</span><span className="text-sm">180</span></div><p className="text-[10px] mt-1 opacity-70">(Crisp lettuce, creamy dressing, crunchy croutons)</p></div>
                        <div><div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Greek Salad</span><span className="text-sm">200</span></div><p className="text-[10px] mt-1 opacity-70">(Exotic vegetables and Mediterranean flavors)</p></div>
                        <div className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1"><span className="font-sans text-sm font-medium uppercase">Peri Peri Paneer</span><span className="text-sm">230</span></div>
                    </div>
                </div>
                <div>
                    <h2 className="font-headline text-3xl text-center mb-4">Bites &amp; Fries</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Nachos w/ Salsa</span><span className="text-sm">170</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Overloaded Nachos</span><span className="text-sm">190</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Bruschetta</span><span className="text-sm">210</span></div>
                        <div className="my-4 border-t border-[#8B4A27]/10"></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Potato Wedges</span><span className="text-sm">160</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Truffle Fries</span><span className="text-sm">180</span></div>
                        <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Cheese Garlic Fries</span><span className="text-sm">190</span></div>
                    </div>
                </div>
            </div>
        </section>
        
        {betweenBreads && (
            <section className="px-8 mb-12">
                <h2 className="font-headline text-3xl text-center mb-6">{betweenBreads.title}</h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {betweenBreads.items.filter(i => !i.isSignature).map(item => (
                            <div key={item.name} className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">{item.name}</span><span className="text-sm">{item.price}</span></div>
                        ))}
                    </div>
                    <MenuItem item={betweenBreads.items.find(i => i.isSignature)} />
                </div>
            </section>
        )}

        {pasta && (
            <section className="px-8 mb-12">
                <h2 className="font-headline text-3xl text-center mb-6">{pasta.title}</h2>
                <div className="space-y-5">
                    {pasta.items.map(item => <MenuItem key={item.name} item={item} />)}
                </div>
            </section>
        )}

        {pizzaStation && (
            <div className="bg-[#8A4B2B] text-[#F6E4C7] py-12 px-8 -mx-[2px]">
                <div className="text-center mb-8 border-b border-[#F6E4C7]/20 pb-4">
                    <p className="font-sans text-xs tracking-widest uppercase opacity-80 mb-2">Straight From Wood Fire Oven!</p>
                    <div className="flex items-center justify-center gap-2">
                        <Pizza size={32} />
                        <h2 className="font-headline text-4xl">{pizzaStation.title}</h2>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mb-8 text-xs font-sans text-center opacity-80">
                    <div className="max-w-[150px]"><span className="font-semibold block mb-1">NEW YORK STYLE</span>Thin, hand-tossed, foldable.</div>
                    <div className="w-px bg-[#F6E4C7]/30"></div>
                    <div className="max-w-[150px]"><span className="font-semibold block mb-1">NEAPOLITAN</span>Pillowy centre, smoky char.</div>
                </div>
                <div className="space-y-6">
                     <div className="flex justify-end text-xs opacity-60 mb-2 font-sans tracking-wide"><span className="w-12 text-right">NY</span><span className="w-12 text-right">NEAP</span></div>
                     {pizzaStation.items.map(item => (
                         <div key={item.name} className="group">
                            <div className="flex justify-between items-baseline border-b border-[#F6E4C7]/20 pb-1">
                                <span className={`font-sans text-sm font-medium uppercase tracking-wide ${item.isSignature ? 'text-[#F3E2C9]' : ''}`}>{item.name}</span>
                                <div className="flex text-sm font-medium"><span className="w-12 text-right">{item.prices?.ny}</span><span className="w-12 text-right">{item.prices?.neap}</span></div>
                            </div>
                            {item.description && <p className="font-sans text-xs opacity-70 mt-1">{item.description}</p>}
                         </div>
                     ))}
                </div>
                <div className="mt-12 pt-8 border-t border-[#F6E4C7]/20">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-headline text-2xl text-center mb-4">Garlic Bread</h3>
                            <div className="space-y-4">
                                <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Classic</span><span className="text-sm">170</span></div><p className="text-[10px] opacity-60 mt-1">Stuffed with butter, garlic, herbs</p></div>
                                <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Chilly Cheese</span><span className="text-sm">190</span></div></div>
                                <div><div className="flex justify-between items-baseline"><span className="font-sans text-sm font-semibold uppercase text-[#F3E2C9]">9:50 Signature</span><span className="text-sm">280</span></div><p className="text-[10px] opacity-60 mt-1">Schezwan-spiced garlic sauce, veggies</p></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl text-center mb-4">Calzone</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline border-b border-[#F6E4C7]/20 pb-1"><span className="font-sans text-sm font-medium uppercase">Veg Calzone</span><span className="text-sm">240</span></div>
                                <div className="flex justify-between items-baseline border-b border-[#F6E4C7]/20 pb-1"><span className="font-sans text-sm font-medium uppercase">Pesto Mushroom</span><span className="text-sm">260</span></div>
                                <div className="flex justify-between items-baseline border-b border-[#F6E4C7]/20 pb-1"><span className="font-sans text-sm font-medium uppercase">Creamy Paneer</span><span className="text-sm">270</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <section className="px-8 my-12">
            <h2 className="font-headline text-3xl text-center mb-6">Meals &amp; Ramen</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Burnt Garlic Rice</span><span className="text-sm">220</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Schezwan Rice</span><span className="text-sm">250</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Burrito Bowl</span><span className="text-sm">270</span></div>
                    <div className="flex justify-between items-baseline"><span className="font-sans text-sm font-medium uppercase">Buddha Bowl</span><span className="text-sm">320</span></div>
                </div>
                <div className="space-y-4">
                    <div><div className="flex justify-between items-baseline border-b border-[#8B4A27]/20 border-dotted pb-1"><span className="font-sans text-sm font-medium uppercase">Tan Tan Ramen</span><span className="text-sm">230</span></div><p className="text-[10px] mt-1 opacity-70">Spicy sesame broth, mushrooms, veggies</p></div>
                    <div><div className="flex justify-between items-baseline border-b border-[#8B4A27]/20 border-dotted pb-1"><span className="font-sans text-sm font-medium uppercase">Shoyu Ramen</span><span className="text-sm">250</span></div><p className="text-[10px] mt-1 opacity-70">Savory soy-based broth, greens</p></div>
                </div>
            </div>
        </section>

        {desiCombos && (
            <section className="px-8 mb-12">
                <div className="border-2 border-[#8B4A27]/20 p-6 rounded-sm">
                    <h2 className="font-headline text-3xl text-center mb-4">{desiCombos.title}</h2>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {desiCombos.items.map(item => (
                            <div key={item.name} className="flex gap-2 items-baseline"><span className="font-sans text-sm uppercase">{item.name}</span><span className="text-sm font-bold text-[#8B4A27]">{item.price}</span></div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {sweetEndings && (
            <section className="px-8 mb-16">
                <h2 className="font-headline text-3xl text-center mb-6">{sweetEndings.title}</h2>
                <div className="space-y-3 max-w-md mx-auto">
                    {sweetEndings.items.map(item => (
                         <div key={item.name} className="flex justify-between items-baseline border-b border-[#8B4A27]/10 pb-1">
                             <span className={`font-sans text-sm font-medium uppercase ${item.isSignature ? 'text-[#8B4A27] font-semibold' : ''}`}>{item.name}</span>
                             <span className="text-sm">{item.price}</span>
                         </div>
                    ))}
                </div>
            </section>
        )}
    </div>
  );
}
