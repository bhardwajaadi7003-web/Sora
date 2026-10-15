import React, { useState } from 'react';
import { COCKTAILS } from '../data/restaurantData';
import { Wine, Sparkles, Droplet, GlassWater, Flame } from 'lucide-react';
import { CocktailItem } from '../types';

interface BarSectionProps {
  onAddCocktailToTasting?: (cocktail: CocktailItem) => void;
}

export const BarSection: React.FC<BarSectionProps> = ({ onAddCocktailToTasting }) => {
  const [selectedCocktail, setSelectedCocktail] = useState(COCKTAILS[0]);

  return (
    <section id="cocktails" className="py-24 bg-[#0F0F0F] relative border-t border-[#1C1C1C]">
      {/* Ambient background styling */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Liquid Omakase & Mixology
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Botanical Omakase Bar
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Inspired by Tokyo’s discreet high-altitude speakeasies. Infusions of Kyoto botanicals, Japanese yuzu, rare cherrywood smoke, and artisanal single malts served high above the city skyline.
          </p>
        </div>

        {/* Feature Layout: 5 Signature Cocktails Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cocktail Selection List */}
          <div className="lg:col-span-6 space-y-3">
            {COCKTAILS.map((cocktail) => {
              const isSelected = selectedCocktail.id === cocktail.id;
              return (
                <div
                  key={cocktail.id}
                  onClick={() => setSelectedCocktail(cocktail)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#181818] border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.12)]'
                      : 'bg-[#131313] border-[#222222] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-lg font-serif font-semibold text-[#F8F8F8]">
                      {cocktail.name}
                    </h3>
                    <span className="font-mono text-sm text-[#D4AF37] font-medium tabular-nums">
                      ₹{cocktail.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="text-xs text-[#D4AF37] font-medium mb-2 tracking-wider">
                    {cocktail.subtitle}
                  </div>

                  <p className="text-xs text-[#8E8E8E] line-clamp-2">
                    {cocktail.notes}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Cocktail */}
          <div className="lg:col-span-6 bg-[#161616] border border-[#2E2E2E] rounded-sm p-7 lg:p-8 flex flex-col justify-between sticky top-28 shadow-2xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Mixologist Spotlight
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#F8F8F8] mt-1">
                    {selectedCocktail.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xl text-[#D4AF37] font-semibold tabular-nums">
                    ₹{selectedCocktail.price.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] uppercase text-[#888888] tracking-widest">
                    Signature Serve
                  </div>
                </div>
              </div>

              {/* Flavor Profile Callout */}
              <div className="mb-6 p-4 bg-[#1F1F1F] rounded-sm border-l-2 border-[#D4AF37]">
                <div className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-1">
                  Sensory Profile
                </div>
                <p className="text-xs sm:text-sm text-[#F8F8F8] italic font-serif">
                  "{selectedCocktail.flavorProfile}"
                </p>
              </div>

              {/* Key Botanical Ingredients */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-3 font-semibold">
                  Handcrafted Elements & Infusions:
                </div>
                <ul className="space-y-2">
                  {selectedCocktail.ingredients.map((ing) => (
                    <li key={ing} className="text-xs text-[#C5C5C5] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spirit Base & Garnish Details (Unboxed metadata) */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-[#242424] text-xs">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] mb-0.5">
                    Spirit Base
                  </div>
                  <div className="text-[#F8F8F8] font-medium">
                    {selectedCocktail.spiritBase}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] mb-0.5">
                    Artisan Garnish
                  </div>
                  <div className="text-[#F8F8F8] font-medium">
                    {selectedCocktail.garnish}
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <div className="mt-4 text-xs text-[#8E8E8E] leading-relaxed">
                {selectedCocktail.notes}
              </div>
            </div>

            {/* Tasting Experience Action */}
            <div className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between">
              <span className="text-[11px] text-[#A3A3A3]">
                Omakase pairing available
              </span>
              {onAddCocktailToTasting && (
                <button
                  onClick={() => onAddCocktailToTasting(selectedCocktail)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors"
                >
                  Add to Table Selection
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
