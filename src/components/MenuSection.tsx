import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Plus, Check, Sparkles, Flame } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'sushi', label: 'Sushi & Sashimi' },
    { id: 'robatayaki', label: 'Robatayaki Grill' },
    { id: 'small-plates', label: 'Small Plates' },
    { id: 'mains', label: 'Signature Mains' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDietary =
      dietaryFilter === 'all' ||
      (dietaryFilter === 'veg' && item.dietary?.includes('veg')) ||
      (dietaryFilter === 'gf' && item.dietary?.includes('gf')) ||
      (dietaryFilter === 'signature' && item.dietary?.includes('signature'));

    return matchesCategory && matchesDietary;
  });

  return (
    <section id="menu" className="py-24 bg-[#121212] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The SORA Culinary Collection
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4">
            Pan-Asian & Robatayaki Reimagined
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            From the smoldering white coals of our Kishu robata to pristine catches sliced at the live sushi counter, each dish celebrates authenticity with contemporary Nikkei flair.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-[#222222]">
          
          {/* Category Tabs (Functional buttons with active states) */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium rounded-sm whitespace-nowrap transition-all duration-200 focus-visible:outline-none ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#121212] font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.25)]'
                      : 'text-[#A3A3A3] hover:text-[#F8F8F8] hover:bg-[#1A1A1A]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#888888] uppercase tracking-wider text-[11px] mr-1 hidden sm:inline">Filter:</span>
            {['all', 'signature', 'veg', 'gf'].map((filter) => {
              const isActive = dietaryFilter === filter;
              const labels: Record<string, string> = {
                all: 'All',
                signature: 'Signature',
                veg: 'Vegetarian',
                gf: 'Gluten-Free',
              };
              return (
                <button
                  key={filter}
                  onClick={() => setDietaryFilter(filter)}
                  className={`px-2.5 py-1 text-[11px] rounded-sm transition-colors border ${
                    isActive
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-[#262626] text-[#8E8E8E] hover:text-[#F8F8F8] bg-[#161616]'
                  }`}
                >
                  {labels[filter]}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group bg-[#161616] border border-[#262626] hover:border-[#D4AF37]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fallbackCategory={item.category === 'robatayaki' ? 'robatayaki' : item.category === 'sushi' ? 'sushi' : 'dish'}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                  
                  {/* Clean unboxed metadata kicker */}
                  {item.chefRecommended && (
                    <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/50 px-2.5 py-1 rounded-sm text-[10px] text-[#D4AF37] tracking-wider uppercase font-semibold">
                      Chef Signature
                    </div>
                  )}

                  {item.japaneseName && (
                    <div className="absolute bottom-2 right-3 text-xs font-serif text-[#F8F8F8]/60 tracking-wider">
                      {item.japaneseName}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="text-lg font-serif font-semibold text-[#F8F8F8] group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm text-[#D4AF37] font-semibold tabular-nums">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <p className="text-xs text-[#8E8E8E] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.pairingNote && (
                      <div className="text-[11px] text-[#A3A3A3] italic bg-[#1A1A1A] p-2 rounded-sm border-l-2 border-[#D4AF37]/60 mb-3">
                        {item.pairingNote}
                      </div>
                    )}
                  </div>

                  {/* Clean unboxed tags & Tasting Selector Action */}
                  <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                    <div className="text-[11px] text-[#777777] flex items-center gap-1.5">
                      <span>{item.category.replace('-', ' ')}</span>
                      {item.dietary?.includes('gf') && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>GF</span>
                        </>
                      )}
                      {item.dietary?.includes('veg') && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Veg</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(item)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-sm flex items-center gap-1.5 transition-all duration-200 ${
                        isAdded
                          ? 'bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/50'
                          : 'bg-[#1F1F1F] hover:bg-[#D4AF37] text-[#F8F8F8] hover:text-[#121212] border border-[#333333]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add to Tasting
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
