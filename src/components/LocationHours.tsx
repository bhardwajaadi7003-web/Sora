import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Navigation, Car, Train, ExternalLink, Check } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Worldmark 3 Rooftop, Aerocity, New Delhi 110037');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-[#0F0F0F] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The Aerocity Destination
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Location & Hours
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Situated in Delhi NCR's premier hospitality district, surrounded by luxury hotels, corporate headquarters, and international travelers arriving from across the globe.
          </p>
        </div>

        {/* 2-Column: Details Card & Aerocity Schematic Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-5 bg-[#161616] border border-[#262626] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Operating Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-2.5 text-xs text-[#C5C5C5]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                    <span className="text-[#F8F8F8]">Monday – Thursday</span>
                    <span className="font-mono text-[#D4AF37]">12:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                    <span className="text-[#F8F8F8]">Friday – Sunday</span>
                    <span className="font-mono text-[#D4AF37]">12:00 PM – 1:00 AM</span>
                  </div>
                  <div className="text-[11px] text-[#777777] italic pt-1">
                    Kitchen last orders 45 minutes prior to closing.
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                  <Phone className="w-4 h-4" />
                  <span>Reservations & Inquiries</span>
                </div>
                <div className="space-y-3 text-xs">
                  <a
                    href="tel:+919871044221"
                    className="flex items-center justify-between text-[#C5C5C5] hover:text-[#D4AF37] transition-colors p-2.5 bg-[#121212] rounded-sm border border-[#222222]"
                  >
                    <span>Guest Concierge Desk</span>
                    <span className="font-mono text-[#F8F8F8] font-medium">+91 98710 44221</span>
                  </a>
                  <a
                    href="mailto:reservations@soraaerocity.com"
                    className="flex items-center justify-between text-[#C5C5C5] hover:text-[#D4AF37] transition-colors p-2.5 bg-[#121212] rounded-sm border border-[#222222]"
                  >
                    <span>Direct Email Inquiries</span>
                    <span className="font-mono text-[#F8F8F8] font-medium">reservations@soraaerocity.com</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#C5C5C5] hover:text-[#D4AF37] transition-colors p-2.5 bg-[#121212] rounded-sm border border-[#222222]"
                  >
                    <span className="flex items-center gap-2">
                      <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" /> Instagram
                    </span>
                    <span className="font-mono text-[#F8F8F8] font-medium">@soraaerocity</span>
                  </a>
                </div>
              </div>

              {/* Address with Quick Copy */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <div className="p-3.5 bg-[#121212] rounded-sm border border-[#222222] text-xs text-[#C5C5C5] space-y-2">
                  <p className="text-[#F8F8F8] font-medium">
                    Worldmark 3 Rooftop, Aerocity, New Delhi, Delhi 110037
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1.5 focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" /> Address Copied
                      </>
                    ) : (
                      <>
                        Copy GPS Address
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Transit Access */}
            <div className="pt-6 mt-6 border-t border-[#242424] grid grid-cols-2 gap-3 text-[11px] text-[#888888]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Complimentary Valet at Worldmark 3 Tower</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>3 mins from Delhi Airport Metro Station</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Aerocity District Map Guide */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-sm overflow-hidden relative flex flex-col justify-between p-6 sm:p-8">
            {/* Background schematic lines */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#242424] mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    District Schematic
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#F8F8F8] mt-0.5">
                    Worldmark 3 Rooftop Horizon
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#A3A3A3] bg-[#1F1F1F] px-2.5 py-1 rounded-sm border border-[#333333]">
                  GPS: 28.5529° N, 77.1219° E
                </span>
              </div>

              {/* District Visual Graphic Box */}
              <div className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-sm p-6 relative overflow-hidden mb-6">
                {/* Visual landmark nodes */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#181818] border border-[#D4AF37]/40 rounded-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping" />
                      <div>
                        <div className="text-xs font-semibold text-[#F8F8F8]">
                          SORA Rooftop Lounge
                        </div>
                        <div className="text-[10px] text-[#A3A3A3]">
                          Worldmark 3, Top Floor · Sky Terrace Overlook
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">YOU ARE HERE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A3A3A3]">
                    <div className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                      <span className="text-[#F8F8F8] font-medium block">IGI Airport Terminals 1, 2 & 3</span>
                      <span className="text-[10px] text-[#777777]">5 to 8 Minutes Drive</span>
                    </div>
                    <div className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                      <span className="text-[#F8F8F8] font-medium block">JW Marriott / Andaz Aerocity</span>
                      <span className="text-[10px] text-[#777777]">Walking Distance (150m)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1F1F1F] text-[11px] text-[#888888] flex items-center justify-between">
                  <span>Runway 29L Flight Line: Directly visible from Sky Deck</span>
                  <span className="text-[#D4AF37] font-mono">180° Panoramic View</span>
                </div>
              </div>

              {/* Why This Location Highlight */}
              <div className="p-4 bg-[#181818] rounded-sm border-l-2 border-[#D4AF37] text-xs text-[#C5C5C5] leading-relaxed">
                <span className="font-semibold text-[#F8F8F8] block mb-1">
                  Why SORA chose Worldmark 3 Aerocity:
                </span>
                Aerocity stands as the international gateway to the capital. Worldmark 3’s high rooftop offers unmatched clear vistas over Delhi’s active flight corridors, undisturbed by city-center towers, giving dinner guests the sensation of floating high above the tarmac.
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#242424] flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Worldmark+3+Aerocity+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" /> Open Google Maps
              </a>
              <a
                href="tel:+919871044221"
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F8F8] border border-[#333333] hover:border-[#D4AF37] rounded-sm transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Call Reception
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
