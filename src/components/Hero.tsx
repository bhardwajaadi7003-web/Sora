import React, { useState } from 'react';
import { ChevronDown, Calendar, Users, Clock, Compass, Plane } from 'lucide-react';

interface HeroProps {
  onOpenReservation: (prefill?: { guests?: number; date?: string; time?: string }) => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  const [quickGuests, setQuickGuests] = useState('2');
  const [quickDate, setQuickDate] = useState(new Date().toISOString().split('T')[0]);
  const [quickTime, setQuickTime] = useState('20:00');

  const featuredHighlights = [
    'Binchotan Robata Grill',
    'Fresh Sushi & Sashimi',
    'Omakase Cocktail Bar',
    'Runway View Terrace',
    'Live Sushi Counter',
    'Matcha Brewing Rituals',
  ];

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenReservation({
      guests: parseInt(quickGuests, 10),
      date: quickDate,
      time: quickTime,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#121212]">
      {/* Background Atmosphere: Cinematic Dark Sky with Runway Horizon */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep twilight gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F12] via-[#121212] to-[#121212]" />
        
        {/* Subtle runway lights glow at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#1A1812]/20 to-transparent" />
        
        {/* Architectural backdrop line work */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Ambient Airplane Silhouette passing through high sky */}
        <div className="absolute top-24 right-[10%] opacity-20 hidden md:block">
          <Plane className="w-16 h-16 text-[#D4AF37] -rotate-45 transform" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Subtle Japanese Kicker */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium mb-4">
            <span>SORA</span>
            <span aria-hidden="true">·</span>
            <span>空</span>
            <span aria-hidden="true">·</span>
            <span>A Journey Above The Clouds</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F8F8F8] tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Delhi’s Premier Rooftop <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#EEDB91]">Pan-Asian</span> Sky Lounge
          </h1>

          {/* Tagline Narrative */}
          <p className="text-base sm:text-lg lg:text-xl text-[#A3A3A3] font-light max-w-2xl mx-auto mb-10 leading-relaxed [text-wrap:balance]">
            Authentic Japanese Robatayaki, Nikkei cuisine, handcrafted omakase cocktails, and breathtaking runway views from the heart of Aerocity.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => onOpenReservation()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.3)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Reserve Your Table
            </button>
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#F8F8F8] border border-[#333333] hover:border-[#D4AF37] hover:text-[#D4AF37] active:scale-[0.98] transition-all duration-200 rounded-sm bg-[#181818]/60 backdrop-blur-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Explore Menu & Bar
            </button>
          </div>

          {/* Interactive Fast Booking Bar */}
          <div className="bg-[#1A1A1A]/90 border border-[#2E2E2E] rounded-md p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-3xl mx-auto">
            <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
              {/* Guests */}
              <div className="flex flex-col text-left">
                <label className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-1 flex items-center gap-1.5 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Guests
                </label>
                <select
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(e.target.value)}
                  className="bg-[#121212] border border-[#333333] text-sm text-[#F8F8F8] rounded px-3 py-2 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests (Table)</option>
                  <option value="4">4 Guests (Booth)</option>
                  <option value="6">6 Guests (Terrace)</option>
                  <option value="8">8+ Guests (Private)</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col text-left">
                <label className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-1 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Date
                </label>
                <input
                  type="date"
                  value={quickDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setQuickDate(e.target.value)}
                  className="bg-[#121212] border border-[#333333] text-sm text-[#F8F8F8] rounded px-3 py-2 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col text-left">
                <label className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-1 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Time
                </label>
                <select
                  value={quickTime}
                  onChange={(e) => setQuickTime(e.target.value)}
                  className="bg-[#121212] border border-[#333333] text-sm text-[#F8F8F8] rounded px-3 py-2 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="14:00">2:00 PM (Lunch)</option>
                  <option value="19:00">7:00 PM (Sunset Seating)</option>
                  <option value="20:30">8:30 PM (Prime Dinner)</option>
                  <option value="22:00">10:00 PM (Sky Lounge)</option>
                  <option value="23:15">11:15 PM (Late Drinks)</option>
                </select>
              </div>

              {/* Quick Submit */}
              <div className="flex flex-col sm:pt-4">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5C158] text-[#121212] rounded transition-colors whitespace-nowrap"
                >
                  Check Seating
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Experiences Horizontal Strip (Unboxed metadata with typographic separators) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A3A3A3] text-center">
          <span className="text-[#D4AF37] font-medium uppercase tracking-wider">Featured Experiences:</span>
          {featuredHighlights.map((highlight, index) => (
            <React.Fragment key={highlight}>
              <span className="hover:text-[#F8F8F8] transition-colors">{highlight}</span>
              {index < featuredHighlights.length - 1 && (
                <span className="text-[#444444]" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
