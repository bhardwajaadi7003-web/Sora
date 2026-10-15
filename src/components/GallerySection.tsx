import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'interior', label: 'Restaurant Interior' },
    { id: 'terrace', label: 'Rooftop Terrace' },
    { id: 'sushi', label: 'Sushi Counter' },
    { id: 'cocktails', label: 'Cocktail Bar' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'runway', label: 'Runway Views' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    activeCategory === 'all' ? true : photo.category === activeCategory
  );

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0E0E0E] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The SORA Visual Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Skyline & Culinary Atmosphere
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Explore the architectural contours, intimate omakase counters, runway sky decks, and dramatic table-side theatrical plating.
          </p>
        </div>

        {/* Gallery Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto max-w-full pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#121212] font-semibold'
                    : 'text-[#A3A3A3] hover:text-[#F8F8F8] bg-[#161616] border border-[#222222]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden border border-[#222222] hover:border-[#D4AF37]/50 cursor-pointer transition-all duration-300 bg-[#161616]"
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.title}
                fallbackCategory={photo.category === 'runway' ? 'runway' : photo.category === 'cocktails' ? 'cocktail' : photo.category === 'sushi' ? 'sushi' : 'terrace'}
                fallbackTitle={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#121212]/80 backdrop-blur-sm border border-[#333333] flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {photo.category.toUpperCase()}
                </span>
                <h4 className="text-sm font-serif font-semibold text-[#F8F8F8] group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#181818] border border-[#2E2E2E] rounded-sm overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-[#262626] bg-[#141414]">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                SORA Gallery · {selectedPhoto.category.toUpperCase()}
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-[#A3A3A3] hover:text-[#F8F8F8] transition-colors focus-visible:outline-none"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Visual */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-[#0A0A0A] flex items-center justify-center">
              <ImageWithFallback
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fallbackCategory={selectedPhoto.category === 'runway' ? 'runway' : 'terrace'}
                fallbackTitle={selectedPhoto.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 p-2 rounded-full bg-[#121212]/80 border border-[#333333] text-[#F8F8F8] hover:text-[#D4AF37] transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 p-2 rounded-full bg-[#121212]/80 border border-[#333333] text-[#F8F8F8] hover:text-[#D4AF37] transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Details */}
            <div className="p-4 sm:p-5 bg-[#181818] border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#F8F8F8]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">
                  {selectedPhoto.description}
                </p>
              </div>
              <div className="text-[11px] text-[#777777] font-mono shrink-0">
                Worldmark 3 Rooftop, Aerocity
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
