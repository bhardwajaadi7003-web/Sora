import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Sparkles, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, cartCount, onOpenCart, onOpenAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story & USPs', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cocktail Bar', href: '#cocktails' },
    { label: 'Chef’s Specials', href: '#specials' },
    { label: 'Runway Skydeck', href: '#runway-deck' },
    { label: 'Privilege Club', href: '#privilege' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#121212]/90 via-[#121212]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element strictly per Top Bar Contract) */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-serif tracking-[0.2em] font-semibold text-[#F8F8F8] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          >
            SORA
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-[#A3A3A3] hover:text-[#F8F8F8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Get App / APK Button */}
            <button
              onClick={onOpenAppModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase text-[#C5C5C5] hover:text-[#D4AF37] border border-[#2E2E2E] hover:border-[#D4AF37]/50 rounded-sm bg-[#161616]/70 transition-colors"
              title="Install SORA Mobile App or Download APK"
            >
              <span>App / APK</span>
            </button>

            {/* Tasting Experience Bag Indicator */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#A3A3A3] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              title="Tasting Selection"
              aria-label="View curated tasting experience items"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D4AF37] text-[#121212] text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold tracking-wider uppercase text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-[0_2px_12px_rgba(212,175,55,0.25)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-[#121212]"
            >
              Reserve Table
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A3A3A3] hover:text-[#F8F8F8] focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181818] border-b border-[#2A2A2A] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-[#A3A3A3] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#222222]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppModal();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 rounded-sm text-center"
              >
                Install App / Download APK
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm text-center"
              >
                Book a Table
              </button>
              <div className="text-center text-[11px] text-[#A3A3A3]">
                Worldmark 3 Rooftop · Aerocity, New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
