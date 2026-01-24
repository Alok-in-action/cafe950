
'use client';
import { useEffect } from 'react';
import { menuSections } from '@/lib/menu';
import { MenuItem as MenuItemType, MenuSection } from '@/types';

const MenuItemCard = ({ item }: { item: MenuItemType }) => {
    return (
        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">{item.name}</h4>
                {item.price && <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">{item.price}</span>}
            </div>
            {item.description && <p className="font-sans text-[10px] text-gray-400">{item.description}</p>}
        </div>
    );
};

const CraftMenuItemCard = ({ item }: { item: MenuItemType }) => {
    const icon = item.name.toLowerCase().includes('lotus biscoff') ? 'solar:cookie-linear' : 'solar:star-fall-linear';
    return (
        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-sans text-sm font-medium mb-1">{item.name}</h4>
            <div className="flex justify-between items-end mt-2">
                <iconify-icon icon={icon} className="text-[#8B4A27]/30"></iconify-icon>
                <span className="text-xs font-semibold text-[#8B4A27]">{item.price}</span>
            </div>
        </div>
    );
}

const SpecialBlueDreamCard = ({ item }: { item: MenuItemType }) => (
    <div className="group bg-[#F0F8FF] p-4 rounded-xl shadow-sm border border-[#B0E0E6]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h4 className="font-sans text-sm font-medium text-[#2e4c5a]">{item.name}</h4>
                {item.description && <p className="text-[10px] text-[#2e4c5a]/60 mt-1">{item.description}</p>}
            </div>
            <span className="text-xs font-semibold text-[#2e4c5a] bg-white px-2 py-0.5 rounded-full">{item.price}</span>
        </div>
    </div>
);


const ColdFrappeItemCard = ({ item }: { item: MenuItemType }) => {
    if(item.isSignature){
        return (
            <div className="col-span-2 group bg-[#2A2320] p-5 rounded-xl shadow-md border border-[#8B4A27]/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <iconify-icon icon="solar:ice-cream-linear" className="absolute -right-2 -bottom-2 text-white/5 text-6xl"></iconify-icon>
                <div className="relative z-10">
                    <div className="flex justify-between items-start">
                        <h4 className="font-sans text-sm font-medium text-[#d4a574] uppercase tracking-wider">{item.name}</h4>
                        <span className="text-xs font-bold text-[#2A2320] bg-[#d4a574] px-2 py-0.5 rounded-full">{item.price}</span>
                    </div>
                    {item.description && <p className="text-[10px] text-white/60 mt-2">{item.description}</p>}
                </div>
            </div>
        )
    }

    const category = item.name.toLowerCase().includes('brew') ? 'Brew' : 'Frappe';

    return (
         <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-sans text-sm font-medium mb-1">{item.name}</h4>
            <div className="flex justify-between mt-3 text-xs text-[#8B4A27] font-semibold">
                <span>{category}</span>
                <span>{item.price}</span>
            </div>
        </div>
    )
}

const PizzaItemCard = ({ item }: { item: MenuItemType }) => {
    const cardClass = item.isSignature
        ? "group bg-[#2A2320] p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        : "group bg-white p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300";
    
    const titleClass = item.isSignature ? "font-sans text-base font-medium text-[#d4a574]" : "font-sans text-base font-medium text-[#5A2E1B]";
    const iconClass = item.isSignature ? "text-[#d4a574]" : "text-[#8B4A27]/40";
    const descriptionClass = item.isSignature ? "text-[10px] text-white/50 mb-4" : "text-[10px] text-gray-400 mb-4";
    const nyPriceClass = item.isSignature ? "flex-1 text-center text-[10px] border border-[#d4a574]/30 rounded py-1 text-[#d4a574]" : "flex-1 text-center text-[10px] border border-[#8B4A27]/20 rounded py-1 text-[#8B4A27]";
    const neapPriceClass = item.isSignature ? "flex-1 text-center text-[10px] bg-[#d4a574] rounded py-1 text-[#2A2320] font-bold" : "flex-1 text-center text-[10px] bg-[#8B4A27]/10 rounded py-1 text-[#8B4A27] font-medium";

    let icon = 'solar:pizza-linear';
    if(item.name.toLowerCase().includes('farmville')) icon = 'solar:leaf-linear';
    if(item.name.toLowerCase().includes('four cheese')) icon = 'solar:ruler-pen-linear';
    if(item.isSignature) icon = 'solar:crown-linear';

    return (
        <div className={cardClass}>
            <div className="flex justify-between items-start mb-2">
                <h4 className={titleClass}>{item.name}</h4>
                <iconify-icon icon={icon} className={iconClass}></iconify-icon>
            </div>
            {item.description && <p className={descriptionClass}>{item.description}</p>}
            {item.prices && <div className="flex gap-2">
                <span className={nyPriceClass}>NY: {item.prices.ny}</span>
                <span className={neapPriceClass}>NE: {item.prices.neap}</span>
            </div>}
        </div>
    )
};

const BitesItemCard = ({ item }: { item: MenuItemType }) => (
    <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <h4 className="font-sans text-sm font-medium mb-1">{item.name}</h4>
        {item.description && <p className="text-[9px] text-gray-400 mb-2 leading-tight">{item.description}</p>}
        <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">{item.price}</span></div>
    </div>
);

const ShakeItemCard = ({ item }: { item: MenuItemType }) => (
     <div className="group bg-[#fff8f0] p-4 rounded-xl border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
        <div>
            <h4 className="font-sans text-sm font-medium">{item.name}</h4>
             {item.description ? 
                <p className="text-[9px] text-[#8B4A27]/50 mt-1">{item.description}</p>
                : <span className="w-8 h-0.5 bg-[#8B4A27]/10 block my-2"></span>
            }
        </div>
        <span className="self-end text-xs font-semibold text-[#8B4A27]">{item.price}</span>
    </div>
);

const DessertItemCard = ({ item }: { item: MenuItemType }) => {
    let icon = 'solar:donut-bitten-linear';
    if(item.name.toLowerCase().includes('tiramisu')) icon = 'solar:chef-hat-heart-linear';
    
    if(item.isSignature){
        return (
            <div className="col-span-2 group bg-[#8B4A27] p-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between text-[#f2e6d9]">
                <div className="text-left">
                    <h4 className="font-script text-xl">{item.name}</h4>
                    {item.description && <p className="text-[10px] opacity-80">{item.description}</p>}
                </div>
                <span className="text-sm font-bold bg-[#f2e6d9]/20 px-3 py-1 rounded-full">{item.price}</span>
            </div>
        )
    }

    return (
        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
            <iconify-icon icon={icon} className="text-2xl text-[#8B4A27]/60 mb-2"></iconify-icon>
            <h4 className="font-sans text-sm font-medium mb-1">{item.name}</h4>
            <span className="text-xs text-[#8B4A27] font-semibold">{item.price}</span>
        </div>
    )
};


const SectionComponent = ({ section }: { section: MenuSection }) => {
    let CardComponent;
    let gridCols = 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

    if (section.id === 'pizza') {
        return (
            <section id={section.id} className="reveal">
                {section.preheader && (
                    <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#5A2E1B] text-center mb-2">{section.preheader}</p>
                )}
                <div className="flex items-end gap-3 mb-6 px-1">
                    <h3 className="font-script text-3xl text-[#5A2E1B]">{section.title}</h3>
                    <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                </div>
                
                <div className="text-center -mt-4 mb-8 max-w-2xl mx-auto bg-white/50 p-6 rounded-xl border border-[#8B4A27]/10">
                    <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#5A2E1B] mb-4">Choice of Base</p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-xs text-[#6B3A20]/80">
                        <div>
                            <h4 className="font-sans font-semibold text-sm text-[#5A2E1B] mb-1">NEW YORK STYLE</h4>
                            <p>A thin, hand-tossed crust, soft in the center, crisp at the edge, and perfectly foldable.</p>
                        </div>
                        <div>
                            <h4 className="font-sans font-semibold text-sm text-[#5A2E1B] mb-1">NEAPOLITAN</h4>
                            <p>Crafted with long-rested dough, giving you a pillowy centre, crispy edges, and that signature smoky char.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map(item => <PizzaItemCard key={item.name} item={item} />)}
                </div>
            </section>
        );
    }

    switch(section.id){
        case 'classic-espresso-bar':
            CardComponent = MenuItemCard;
            break;
        case 'craft-coffees':
            CardComponent = CraftMenuItemCard;
            break;
        case 'cold-brews':
        case 'frappe-to-go':
            CardComponent = ColdFrappeItemCard;
            break;
        case 'bites-for-sides':
        case 'healthy-salads':
        case 'fries-corner':
        case 'pasta':
             CardComponent = BitesItemCard;
            break;
        case 'sandwiches':
        case 'burgers':
            CardComponent = BitesItemCard;
            gridCols = 'grid-cols-1 md:grid-cols-2';
            break;
        case 'shakes':
             CardComponent = ShakeItemCard;
             gridCols = 'grid-cols-2 md:grid-cols-3';
            break;
        case 'dessert':
             CardComponent = DessertItemCard;
            break;
        case 'blue-dream':
            CardComponent = SpecialBlueDreamCard;
            gridCols = 'grid-cols-1 md:grid-cols-2';
            break;
        case 'affogato':
        case 'matcha':
        case 'hot-teas':
        case 'iced-teas':
        case 'hot-chocolate':
        case 'craft-mocktails':
        case 'healthy-juices':
        case 'smoothies':
        case 'beverage-companions':
        case 'garlic-bread':
        case 'calzone':
        case 'meal-bowls':
        case 'ramen-tales':
        case 'meal-combos':
            CardComponent = MenuItemCard;
            break;
        default:
            CardComponent = MenuItemCard;
    }
    
    return (
        <section id={section.id} className="reveal">
            {section.preheader && (
                <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#5A2E1B] text-center mb-2">{section.preheader}</p>
            )}
            <div className="flex items-end gap-3 mb-6 px-1">
                <h3 className="font-script text-3xl text-[#5A2E1B]">{section.title}</h3>
                <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
            </div>
            {section.subtitle && (
                <p className="font-sans text-xs text-center text-[#6B3A20]/80 italic -mt-4 mb-6 max-w-lg mx-auto whitespace-pre-line">{section.subtitle}</p>
            )}
            <div className={`grid ${gridCols} gap-3`}>
                {section.items.map(item => <CardComponent key={item.name} item={item} />)}
            </div>
            {section.id === 'beverage-companions' && (
                <div className="mt-12 text-center space-y-2 reveal">
                    <p className="font-script text-3xl text-[#8B4A27]">“Impressed by the drinks?<br/>scroll the page”</p>
                    <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#5A2E1B]">The food's ready to steal the show!</p>
                </div>
            )}
        </section>
    );
};


export default function Home() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        // Also apply 'active' to already visible elements on load
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                 el.classList.add('active');
            }
        });

        return () => {
            revealElements.forEach(el => {
                try {
                    observer.unobserve(el);
                } catch (e) {
                    // Ignore error if element is already unobserved
                }
            });
        };
    }, []);

    const navLinks = menuSections;


    return (
        <>
            <header className="pt-8 pb-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2 reveal active">
                    <div className="w-10 h-10 rounded-full bg-[#8B4A27] flex items-center justify-center text-[#f2e6d9] shadow-lg shadow-[#8B4A27]/20">
                        <span className="font-script text-xl pt-1">9</span>
                    </div>
                    <div>
                        <h1 className="font-script text-3xl text-[#5A2E1B] tracking-wide leading-none">Cafe 9:50</h1>
                        <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-60 ml-1">Est 2024</p>
                    </div>
                </div>
                <button className="w-10 h-10 rounded-full border border-[#8B4A27]/20 flex items-center justify-center hover:bg-[#8B4A27] hover:text-[#f2e6d9] transition-colors reveal active duration-500 delay-100">
                    <iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
                </button>
            </header>

            <nav className="sticky top-0 z-40 glass-nav border-b border-[#8B4A27]/10 py-3 mb-8">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pr-4">
                        {navLinks.map((section, idx) => (
                             <li key={section.id} className="snap-start">
                                <a href={`#${section.id}`} className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-xs font-medium transition-transform active:scale-95 ${idx === 0 ? 'bg-[#8B4A27] text-[#f2e6d9] shadow-md shadow-[#8B4A27]/20' : 'bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] hover:bg-[#8B4A27]/5'}`}>
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                <section className="reveal relative overflow-hidden rounded-2xl bg-[#fffefb] border border-[#8B4A27]/10 p-8 text-center shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B4A27]/40 to-transparent"></div>
                    <iconify-icon icon="solar:cup-hot-linear" width="32" className="text-[#8B4A27] mb-3 opacity-80 animate-pulse"></iconify-icon>
                    <h2 className="font-script text-4xl text-[#5A2E1B] mb-2">Brewing Memories</h2>
                    <p className="font-sans text-xs opacity-70 max-w-sm mx-auto leading-relaxed">Handcrafted coffee, artisanal bakes, and soulful conversations.</p>
                </section>
                
                {menuSections.map(section => <SectionComponent key={section.id} section={section} />)}

            </main>

            <footer className="mt-20 text-center py-10 px-6 border-t border-[#8B4A27]/10 bg-white/40 reveal">
                <iconify-icon icon="solar:cup-hot-linear" width="24" className="text-[#8B4A27] mb-4 opacity-50"></iconify-icon>
                <div className="flex justify-center gap-6 mb-6 text-[#8B4A27]">
                    <a href="https://www.instagram.com/CAFENINE50" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
                    <a href="tel:+918349476548" className="hover:scale-125 transition-transform"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
                    <a href="http://CAFENINE50.COM" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
                </div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-[#5A2E1B] mb-2">Cafe 9:50</p>
                <p className="font-sans text-[10px] text-[#5A2E1B]/60">Made with love in Ujjain</p>
            </footer>
        </>
    );
}
