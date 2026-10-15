import React, { useState, useEffect } from 'react';
import { Plane, ChevronRight, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col items-center justify-center p-6 text-center select-none animate-fadeIn">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_65%)]" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        {/* Japanese Symbol & Logo */}
        <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 bg-[#161616] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <span className="font-serif text-2xl font-bold text-[#EEDB91]">空</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-[0.25em] mb-2">
          SORA
        </h1>

        <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium mb-6">
          A Journey Above The Clouds
        </div>

        {/* Tagline from pitch deck */}
        <p className="text-xs sm:text-sm text-[#A3A3A3] font-light tracking-widest uppercase mb-10 max-w-md leading-relaxed border-t border-b border-[#242424] py-3">
          Luxury Pan-Asian Dining · Robatayaki · Sushi · Rooftop Lounge
        </p>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center gap-2 group active:scale-95"
        >
          <span>Enter Lounge</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-8 text-[11px] text-[#666666] tracking-wider uppercase font-mono">
          Worldmark 3 Rooftop · Aerocity, New Delhi
        </div>
      </div>
    </div>
  );
};
