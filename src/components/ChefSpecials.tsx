import React, { useState } from 'react';
import { CHEF_SPECIALS } from '../data/restaurantData';
import { Sparkles, Utensils, Star, Award } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ChefSpecialsProps {
  onSelectSpecialForTable?: (title: string) => void;
}

export const ChefSpecials: React.FC<ChefSpecialsProps> = ({ onSelectSpecialForTable }) => {
  const [activeSpecial, setActiveSpecial] = useState(0);

  const special = CHEF_SPECIALS[activeSpecial];

  return (
    <section id="specials" className="py-24 bg-[#121212] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Curated by Executive Chef
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight [text-wrap:balance]">
              Chef’s Signature Recommendations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-md font-light leading-relaxed">
            The five indispensable masterworks representing the culmination of SORA’s culinary vision—from charcoal alchemy to delicate Uji matcha rituals.
          </p>
        </div>

        {/* Featured Showcase with Selector Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#181818] border border-[#262626] rounded-sm p-6 sm:p-10">
          
          {/* Left Column: Image with Frame */}
          <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-[#333333] h-80 sm:h-96">
            <ImageWithFallback
              src={special.image}
              alt={special.title}
              fallbackCategory="dish"
              fallbackTitle={special.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1.5 rounded-sm text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
              {special.tagline}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-xs text-[#A3A3A3] bg-[#121212]/80 backdrop-blur-sm p-3 rounded-sm border border-[#262626]">
              <span className="text-[#D4AF37] font-medium uppercase tracking-wider text-[11px] block">Provenance:</span>
              <span>{special.highlight}</span>
            </div>
          </div>

          {/* Right Column: Narrative & Selectors */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#A3A3A3] mb-1">
                {special.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8F8F8] mb-3">
                {special.title}
              </h3>
              <div className="font-mono text-xl text-[#D4AF37] font-semibold mb-4 tabular-nums">
                ₹{special.price.toLocaleString('en-IN')}
              </div>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6 font-light">
                {special.description}
              </p>
            </div>

            {/* Quick Special Switcher Strip */}
            <div className="pt-4 border-t border-[#262626]">
              <div className="text-[11px] uppercase tracking-wider text-[#777777] mb-3">
                Browse The 5 Chef Specials:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {CHEF_SPECIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSpecial(idx)}
                    className={`p-2 text-left rounded-sm text-[11px] transition-all duration-200 border ${
                      activeSpecial === idx
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#F8F8F8] font-semibold'
                        : 'border-[#262626] bg-[#141414] text-[#888888] hover:text-[#C5C5C5] hover:border-[#383838]'
                    }`}
                  >
                    <span className="block truncate">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#8E8E8E]">
                Available daily for Lunch & Dinner service
              </span>
              {onSelectSpecialForTable && (
                <button
                  onClick={() => onSelectSpecialForTable(special.title)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors whitespace-nowrap"
                >
                  Request in Booking
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
