import React from 'react';
import { Flame, Plane, Wine, Sparkles, Compass } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutStory: React.FC = () => {
  const usps = [
    {
      number: '01',
      title: 'Binchotan Robata & Sushi',
      subtitle: 'Charcoal & Coastal Artistry',
      description: 'Authentic Japanese white charcoal grilling paired with premium seafood and artisan nigiri. Imported Kishu binchotan burns cleanly at 1000°C, sealing in natural juices while imparting an incomparable delicate smokiness.',
      icon: Flame,
      category: 'robatayaki' as const,
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '02',
      title: 'Runway View Sky Deck',
      subtitle: 'Aviation Elegance in Aerocity',
      description: 'Exclusive rooftop views overlooking aircraft movements at Indira Gandhi International Airport. Watch wide-body Boeing 787s and Airbus A350s gently glide past twilight horizons from Delhi’s most sought-after open-air terrace.',
      icon: Plane,
      category: 'runway' as const,
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '03',
      title: 'Botanical Omakase Bar',
      subtitle: 'Tokyo Meets Delhi Mixology',
      description: 'Innovative cocktails featuring fresh yuzu, shiso, smoked teas, and rare Japanese single malts. Every cocktail is an interactive sensory theatrical ritual with cloche smoke infusions and hand-carved ice spheres.',
      icon: Wine,
      category: 'cocktail' as const,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#121212] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              About SORA · Our Story
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight leading-tight [text-wrap:balance]">
              Where Culinary Artistry Meets Aviation Luxury
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#A3A3A3] text-sm sm:text-base leading-relaxed font-light">
            <p>
              SORA is a luxury rooftop dining destination located in Aerocity, Delhi. The restaurant combines Japanese Robatayaki grilling, premium sushi craftsmanship, Nikkei influences, and botanical cocktail experiences.
            </p>
            <p>
              Inspired by modern Japanese hospitality and contemporary rooftop dining, SORA was designed as a destination where culinary artistry meets aviation-inspired luxury. Every detail—from the imported charcoal grills to handcrafted cocktails—creates a memorable dining journey above the clouds.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#D4AF37] tracking-wider uppercase font-medium">
              <span>Worldmark 3 Rooftop</span>
              <span className="text-[#333333]" aria-hidden="true">·</span>
              <span>85 Exclusive Seats</span>
              <span className="text-[#333333]" aria-hidden="true">·</span>
              <span>IGI Runway Vistas</span>
            </div>
          </div>
        </div>

        {/* 3 Unique Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.number}
                className="group relative bg-[#181818] border border-[#262626] hover:border-[#D4AF37]/50 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Imagery */}
                <div className="relative h-60 overflow-hidden">
                  <ImageWithFallback
                    src={usp.image}
                    alt={usp.title}
                    fallbackCategory={usp.category}
                    fallbackTitle={usp.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-sm bg-[#121212]/80 backdrop-blur-md border border-[#333333] flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-serif text-[#D4AF37] tracking-widest">
                    {usp.number}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-1">
                      {usp.subtitle}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[#F8F8F8] mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {usp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed">
                      {usp.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-between text-xs text-[#A3A3A3]">
                    <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-[11px]">SORA Signature Experience</span>
                    <span>Verified USP</span>
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
