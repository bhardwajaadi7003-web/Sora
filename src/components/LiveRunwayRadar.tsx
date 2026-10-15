import React, { useState } from 'react';
import { Plane, Compass, Eye, ShieldCheck, Wind, Radio } from 'lucide-react';
import { LIVE_FLIGHTS } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface LiveRunwayRadarProps {
  onSelectRunwayBooking: () => void;
}

export const LiveRunwayRadar: React.FC<LiveRunwayRadarProps> = ({ onSelectRunwayBooking }) => {
  const [selectedFlight, setSelectedFlight] = useState(LIVE_FLIGHTS[0]);

  return (
    <section id="runway-deck" className="py-20 bg-[#0F0F0F] relative border-t border-[#1C1C1C] overflow-hidden">
      {/* Background glow resembling runway night illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
            <span>Runway Horizon · IGI Airport DEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            The Runway View Sky Deck
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Perched atop Worldmark 3 Aerocity, SORA offers unobstructed panoramic vantage points overlooking the main takeoff and landing runways. Pair an artisan cocktail with the timeless romance of long-haul aviation.
          </p>
        </div>

        {/* Interactive Sky Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Atmospheric Visual & Terrace Viewpoint */}
          <div className="lg:col-span-7 relative group rounded-sm overflow-hidden border border-[#2A2A2A]">
            <div className="relative h-80 sm:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
                alt="Runway views from SORA rooftop"
                fallbackCategory="runway"
                fallbackTitle="Aerocity Runway Sky Deck"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent" />
              
              {/* Runway Horizon Overlay info */}
              <div className="absolute top-4 left-4 bg-[#121212]/85 backdrop-blur-md border border-[#333333] px-3.5 py-1.5 rounded-sm flex items-center gap-2 text-xs text-[#F8F8F8]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                <span className="font-mono text-[11px] text-[#D4AF37]">LIVE BEARING 284° WNW</span>
              </div>

              <div className="absolute top-4 right-4 bg-[#121212]/85 backdrop-blur-md border border-[#333333] px-3.5 py-1.5 rounded-sm text-[11px] text-[#A3A3A3] font-mono">
                ALT: 235m MSL
              </div>

              {/* Bottom Terrace Callout */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[#F8F8F8]">
                    Terrace Flight Path Seating
                  </h4>
                  <p className="text-xs text-[#A3A3A3]">
                    Optimal runway sighting during dusk (18:30 – 21:30 IST)
                  </p>
                </div>
                <button
                  onClick={onSelectRunwayBooking}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors whitespace-nowrap shadow-lg"
                >
                  Book Runway Table
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Flight Stream Card */}
          <div className="lg:col-span-5 bg-[#161616] border border-[#262626] rounded-sm p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#242424] mb-4">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Aerocity Sky Watch
                </span>
                <span className="text-[11px] font-mono text-[#A3A3A3]">
                  IGI Airport DEL
                </span>
              </div>

              <div className="space-y-3">
                {LIVE_FLIGHTS.map((flight) => {
                  const isSelected = selectedFlight.flightNo === flight.flightNo;
                  return (
                    <div
                      key={flight.flightNo}
                      onClick={() => setSelectedFlight(flight)}
                      className={`p-3.5 rounded-sm border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#1F1F1F] border-[#D4AF37] shadow-md'
                          : 'bg-[#121212] border-[#222222] hover:border-[#333333]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-[#F8F8F8] flex items-center gap-1.5">
                          <Plane className="w-3.5 h-3.5 text-[#D4AF37] -rotate-45" />
                          {flight.flightNo} · {flight.airline}
                        </span>
                        <span className="font-mono text-[#D4AF37] font-medium">
                          {flight.time}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#8E8E8E]">
                        <span>Destination: {flight.destination}</span>
                        <span className="text-[#A3A3A3] font-mono">{flight.runway}</span>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#262626]/60 flex items-center justify-between text-[10px] text-[#A3A3A3]">
                        <span>{flight.aircraft}</span>
                        <span className="text-[#D4AF37] uppercase tracking-wider">{flight.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Curated note */}
            <div className="mt-6 pt-4 border-t border-[#242424] text-[11px] text-[#8E8E8E] leading-relaxed">
              <span className="text-[#F8F8F8] font-medium">Guest Tip:</span> Reserve the Runway Terrace for unobstructed twilight photo moments between sunset and midnight cocktail sessions.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
