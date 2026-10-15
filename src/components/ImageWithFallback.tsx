import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackCategory?: 'sushi' | 'robatayaki' | 'cocktail' | 'terrace' | 'interior' | 'dish' | 'runway';
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'dish',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(!src);
  const [isLoaded, setIsLoaded] = useState(false);

  // Elegant fallback visualizer matching SORA's gold & matte black aesthetic
  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C1C1C] via-[#151515] to-[#0D0D0D] border border-[#2A2A2A] text-center p-6 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle geometric Japanese lattice motif in background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-3 bg-[#181818]/80 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            {fallbackCategory === 'cocktail' && (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-7v7m-7-14h14l-7 8-7-8z" />
              </svg>
            )}
            {fallbackCategory === 'sushi' && (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <ellipse cx="12" cy="12" rx="8" ry="4" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v4c0 2.21 3.58 4 8 4s8-1.79 8-4v-4" />
              </svg>
            )}
            {fallbackCategory === 'robatayaki' && (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c2 4 4 6 4 9a6 6 0 11-12 0c0-3 2-5 4-9 1 3 3 5 4 6z" />
              </svg>
            )}
            {fallbackCategory === 'runway' && (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            )}
            {(fallbackCategory === 'terrace' || fallbackCategory === 'interior' || fallbackCategory === 'dish') && (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </div>
          <span className="text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">SORA · 空</span>
          <span className="text-sm font-serif text-[#F8F8F8] mt-1 max-w-[200px] truncate">{fallbackTitle || alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#181818] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1E1E1E] animate-pulse flex items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#A3A3A3] uppercase">SORA</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
