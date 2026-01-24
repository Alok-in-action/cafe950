'use client';
// @ts-nocheck

import { useEffect } from 'react';

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
                        <li className="snap-start"><a href="#espresso" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#8B4A27] text-[#f2e6d9] font-sans text-xs font-medium shadow-md shadow-[#8B4A27]/20 transition-transform active:scale-95">Espresso</a></li>
                        <li className="snap-start"><a href="#craft" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Craft Coffee</a></li>
                        <li className="snap-start"><a href="#cold" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Cold Brews</a></li>
                        <li className="snap-start"><a href="#pizza" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Pizza</a></li>
                        <li className="snap-start"><a href="#bites" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Bites</a></li>
                        <li className="snap-start"><a href="#shakes" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Shakes</a></li>
                        <li className="snap-start"><a href="#dessert" className="whitespace-nowrap px-5 py-2 rounded-full bg-[#fffefb] border border-[#8B4A27]/10 text-[#5A2E1B] font-sans text-xs font-medium hover:bg-[#8B4A27]/5 transition-colors">Dessert</a></li>
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

                <section id="espresso" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Classic Espresso</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Espresso</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">80</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Pure extraction</p>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Americano</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">120</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Espresso & hot water</p>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Cappuccino</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">140</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Foam & espresso</p>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Latte</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">160</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Steamed milk heavy</p>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Flat White</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">180</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Microfoam velvet</p>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-sm font-medium text-[#4a3b32]">Mocha</h4>
                                <span className="text-xs font-semibold text-[#8B4A27] bg-[#8B4A27]/10 px-2 py-0.5 rounded-full">190</span>
                            </div>
                            <p className="font-sans text-[10px] text-gray-400">Chocolate infusion</p>
                        </div>
                    </div>
                </section>

                <section id="craft" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Craft & Signature</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Irish Cappuccino</h4>
                            <div className="flex justify-between items-end mt-2">
                                <iconify-icon icon="solar:star-fall-linear" className="text-[#8B4A27]/30"></iconify-icon>
                                <span className="text-xs font-semibold text-[#8B4A27]">180</span>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Caramel Latte</h4>
                            <div className="flex justify-between items-end mt-2">
                                <iconify-icon icon="solar:star-fall-linear" className="text-[#8B4A27]/30"></iconify-icon>
                                <span className="text-xs font-semibold text-[#8B4A27]">180</span>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Saffron Turmeric</h4>
                            <div className="flex justify-between items-end mt-2">
                                <iconify-icon icon="solar:star-fall-linear" className="text-[#8B4A27]/30"></iconify-icon>
                                <span className="text-xs font-semibold text-[#8B4A27]">210</span>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Lotus Biscoff</h4>
                            <div className="flex justify-between items-end mt-2">
                                <iconify-icon icon="solar:cookie-linear" className="text-[#8B4A27]/30"></iconify-icon>
                                <span className="text-xs font-semibold text-[#8B4A27]">220</span>
                            </div>
                        </div>
                        <div className="group bg-[#F0F8FF] p-4 rounded-xl shadow-sm border border-[#B0E0E6]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 col-span-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-sans text-sm font-medium text-[#2e4c5a]">Blue Pea Sparkler</h4>
                                    <p className="text-[10px] text-[#2e4c5a]/60 mt-1">Fizzy, floral, tonic water</p>
                                </div>
                                <span className="text-xs font-semibold text-[#2e4c5a] bg-white px-2 py-0.5 rounded-full">220</span>
                            </div>
                        </div>
                        <div className="group bg-[#F0F8FF] p-4 rounded-xl shadow-sm border border-[#B0E0E6]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 col-span-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-sans text-sm font-medium text-[#2e4c5a]">Coconut Cooler</h4>
                                    <p className="text-[10px] text-[#2e4c5a]/60 mt-1">Refreshing tropical blend</p>
                                </div>
                                <span className="text-xs font-semibold text-[#2e4c5a] bg-white px-2 py-0.5 rounded-full">250</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cold" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Cold & Frappe</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className="col-span-2 group bg-[#2A2320] p-5 rounded-xl shadow-md border border-[#8B4A27]/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            <iconify-icon icon="solar:ice-cream-linear" className="absolute -right-2 -bottom-2 text-white/5 text-6xl"></iconify-icon>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-sans text-sm font-medium text-[#d4a574] uppercase tracking-wider">Signature Frappe</h4>
                                    <span className="text-xs font-bold text-[#2A2320] bg-[#d4a574] px-2 py-0.5 rounded-full">190</span>
                                </div>
                                <p className="text-[10px] text-white/60 mt-2">Strong cold coffee, hint of vanilla</p>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Toffee Caramel</h4>
                            <div className="flex justify-between mt-3 text-xs text-[#8B4A27] font-semibold">
                                <span>Frappe</span>
                                <span>230</span>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Espresso Tonic</h4>
                            <div className="flex justify-between mt-3 text-xs text-[#8B4A27] font-semibold">
                                <span>Brew</span>
                                <span>220</span>
                            </div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Whisky Brew</h4>
                            <div className="flex justify-between mt-3 text-xs text-[#8B4A27] font-semibold">
                                <span>Brew</span>
                                <span>240</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pizza" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Wood Fire Pizza</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="group bg-white p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-base font-medium text-[#5A2E1B]">Margherita</h4>
                                <iconify-icon icon="solar:pizza-linear" className="text-[#8B4A27]/40"></iconify-icon>
                            </div>
                            <p className="text-[10px] text-gray-400 mb-4">Classic basil, mozzarella, tomato sauce</p>
                            <div className="flex gap-2">
                                <span className="flex-1 text-center text-[10px] border border-[#8B4A27]/20 rounded py-1 text-[#8B4A27]">NY: 330</span>
                                <span className="flex-1 text-center text-[10px] bg-[#8B4A27]/10 rounded py-1 text-[#8B4A27] font-medium">NE: 370</span>
                            </div>
                        </div>
                        <div className="group bg-white p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-base font-medium text-[#5A2E1B]">Farmville</h4>
                                <iconify-icon icon="solar:leaf-linear" className="text-[#8B4A27]/40"></iconify-icon>
                            </div>
                            <p className="text-[10px] text-gray-400 mb-4">Broccoli, corn, mushroom, paprika</p>
                            <div className="flex gap-2">
                                <span className="flex-1 text-center text-[10px] border border-[#8B4A27]/20 rounded py-1 text-[#8B4A27]">NY: 380</span>
                                <span className="flex-1 text-center text-[10px] bg-[#8B4A27]/10 rounded py-1 text-[#8B4A27] font-medium">NE: 410</span>
                            </div>
                        </div>
                        <div className="group bg-white p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-base font-medium text-[#5A2E1B]">Four Cheese</h4>
                                <iconify-icon icon="solar:ruler-pen-linear" className="text-[#8B4A27]/40"></iconify-icon>
                            </div>
                            <p className="text-[10px] text-gray-400 mb-4">Mozzarella, cheddar, parmesan, feta</p>
                            <div className="flex gap-2">
                                <span className="flex-1 text-center text-[10px] border border-[#8B4A27]/20 rounded py-1 text-[#8B4A27]">NY: 400</span>
                                <span className="flex-1 text-center text-[10px] bg-[#8B4A27]/10 rounded py-1 text-[#8B4A27] font-medium">NE: 440</span>
                            </div>
                        </div>
                        <div className="group bg-[#2A2320] p-5 rounded-xl shadow-sm border border-[#8B4A27]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-sans text-base font-medium text-[#d4a574]">Signature 9:50</h4>
                                <iconify-icon icon="solar:crown-linear" className="text-[#d4a574]"></iconify-icon>
                            </div>
                            <p className="text-[10px] text-white/50 mb-4">Garlic cream base, bocconcini, fried garlic</p>
                            <div className="flex gap-2">
                                <span className="flex-1 text-center text-[10px] border border-[#d4a574]/30 rounded py-1 text-[#d4a574]">NY: 450</span>
                                <span className="flex-1 text-center text-[10px] bg-[#d4a574] rounded py-1 text-[#2A2320] font-bold">NE: 490</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bites" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Pasta & Bites</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Aglio E Olio</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Garlic-kissed spaghetti</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">230</span></div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Arrabbiata</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Fiery, tangy penne</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">280</span></div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Mac & Cheese</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Creamy golden bake</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">300</span></div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Truffle Fries</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Earthy & Crisp</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">180</span></div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Bruschetta</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Tomato basil topping</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">210</span></div>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <h4 className="font-sans text-sm font-medium mb-1">Tan Tan Ramen</h4>
                            <p className="text-[9px] text-gray-400 mb-2 leading-tight">Spicy noodle soup</p>
                            <div className="flex justify-end"><span className="text-xs font-semibold text-[#8B4A27]">230</span></div>
                        </div>
                    </div>
                </section>

                <section id="shakes" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Shakes & Smoothies</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="group bg-[#fff8f0] p-4 rounded-xl border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-sm font-medium">Oreo / Kitkat</h4>
                                <span className="w-8 h-0.5 bg-[#8B4A27]/10 block my-2"></span>
                            </div>
                            <span className="self-end text-xs font-semibold text-[#8B4A27]">200</span>
                        </div>
                        <div className="group bg-[#fff8f0] p-4 rounded-xl border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-sm font-medium">Lotus Biscoff</h4>
                                <span className="w-8 h-0.5 bg-[#8B4A27]/10 block my-2"></span>
                            </div>
                            <span className="self-end text-xs font-semibold text-[#8B4A27]">250</span>
                        </div>
                        <div className="group bg-[#fff8f0] p-4 rounded-xl border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-sm font-medium">Tropical Avocado</h4>
                                <span className="w-8 h-0.5 bg-[#8B4A27]/10 block my-2"></span>
                            </div>
                            <span className="self-end text-xs font-semibold text-[#8B4A27]">280</span>
                        </div>
                        <div className="group bg-[#fff8f0] p-4 rounded-xl border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-sm font-medium">ABC Juice</h4>
                                <p className="text-[9px] text-[#8B4A27]/50 mt-1">Healthy Choice</p>
                            </div>
                            <span className="self-end text-xs font-semibold text-[#8B4A27]">150</span>
                        </div>
                    </div>
                </section>

                <section id="dessert" className="reveal">
                    <div className="flex items-end gap-3 mb-6 px-1">
                        <h3 className="font-script text-3xl text-[#5A2E1B]">Sweet Endings</h3>
                        <span className="h-px flex-1 bg-[#8B4A27]/20 mb-2"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                            <iconify-icon icon="solar:donut-bitten-linear" className="text-2xl text-[#8B4A27]/60 mb-2"></iconify-icon>
                            <h4 className="font-sans text-sm font-medium mb-1">Brownie</h4>
                            <span className="text-xs text-[#8B4A27] font-semibold">180</span>
                        </div>
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-[#8B4A27]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                            <iconify-icon icon="solar:chef-hat-heart-linear" className="text-2xl text-[#8B4A27]/60 mb-2"></iconify-icon>
                            <h4 className="font-sans text-sm font-medium mb-1">Tiramisu</h4>
                            <span className="text-xs text-[#8B4A27] font-semibold">220</span>
                        </div>
                        <div className="col-span-2 group bg-[#8B4A27] p-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between text-[#f2e6d9]">
                            <div className="text-left">
                                <h4 className="font-script text-xl">Signature Cake</h4>
                                <p className="text-[10px] opacity-80">Coffee infused delight</p>
                            </div>
                            <span className="text-sm font-bold bg-[#f2e6d9]/20 px-3 py-1 rounded-full">280</span>
                        </div>
                    </div>
                </section>
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
