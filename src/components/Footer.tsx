import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenAppModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenAppModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#A3A3A3] border-t border-[#1C1C1C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1C1C1C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-2xl font-serif tracking-[0.2em] font-bold text-[#F8F8F8]">
              SORA
            </a>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">
              A Journey Above The Clouds · 空
            </div>
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm font-light">
              Delhi's premier rooftop Pan-Asian sky lounge at Worldmark 3 Aerocity. Authentic Japanese Robatayaki, handcrafted omakase cocktails, and panoramic runway views.
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors"
              >
                Book Table
              </button>
              {onOpenAppModal && (
                <button
                  onClick={onOpenAppModal}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F8F8] border border-[#333333] hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-sm transition-colors"
                >
                  App / APK Guide
                </button>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#F8F8F8] font-semibold">
              Dining & Experiences
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-[#D4AF37] transition-colors">Sushi & Sashimi</a></li>
              <li><a href="#menu" className="hover:text-[#D4AF37] transition-colors">Binchotan Robatayaki</a></li>
              <li><a href="#cocktails" className="hover:text-[#D4AF37] transition-colors">Botanical Omakase Bar</a></li>
              <li><a href="#specials" className="hover:text-[#D4AF37] transition-colors">Chef's Signature Specials</a></li>
              <li><a href="#runway-deck" className="hover:text-[#D4AF37] transition-colors">Runway View Sky Deck</a></li>
              <li><a href="#events" className="hover:text-[#D4AF37] transition-colors">Private Dining & Events</a></li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#F8F8F8] font-semibold">
              Operating Hours
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#F8F8F8] block">Mon – Thu</span>
                <span className="text-[#777777] font-mono">12:00 PM – 11:30 PM</span>
              </div>
              <div>
                <span className="text-[#F8F8F8] block">Fri – Sun</span>
                <span className="text-[#777777] font-mono">12:00 PM – 1:00 AM</span>
              </div>
              <div className="pt-2 text-[11px] text-[#D4AF37]">
                Live Sushi & Grill Counter Active All Shifts
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#F8F8F8] font-semibold">
              Connect & Visit
            </div>
            <div className="space-y-2 text-xs text-[#8E8E8E]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Worldmark 3 Rooftop, Aerocity, New Delhi 110037</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+919871044221" className="hover:text-[#F8F8F8]">+91 98710 44221</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:reservations@soraaerocity.com" className="hover:text-[#F8F8F8]">reservations@soraaerocity.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F8F8]">@soraaerocity</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SORA Aerocity. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Worldmark 3 Rooftop Delhi</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A3A3A3] hover:text-[#D4AF37] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
