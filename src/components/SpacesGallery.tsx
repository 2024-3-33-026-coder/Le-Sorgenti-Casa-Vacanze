import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/propertyData';

interface SpacesGalleryProps {
  lang: 'it' | 'en';
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelIt: 'Tutti gli Ambienti', labelEn: 'All Spaces' },
    { id: 'Camere', labelIt: 'Camere', labelEn: 'Rooms' },
    { id: 'Relax & Spa', labelIt: 'Relax & Spa', labelEn: 'Spa & Wellness' },
    { id: 'Ristorazione', labelIt: 'Cucina & Tavola', labelEn: 'Dining & Kitchen' },
    { id: 'Esterni', labelIt: 'Esterni & Giardino', labelEn: 'Outdoors' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="ambienti" className="py-24 sm:py-32 bg-[#F6F4ED] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
              {lang === 'it' ? 'Spazi da Vivere' : 'Spaces to Experience'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
              {lang === 'it' ? 'OGNI DETTAGLIO, AL SUO POSTO.' : 'EVERY DETAIL, IN ITS PLACE.'}
            </h2>
            <p className="text-[#595C55] text-sm sm:text-base font-light leading-relaxed">
              {lang === 'it'
                ? 'Fotografie autentiche della struttura: dalla cucina comune al bagno con idromassaggio, dagli angoli di riposo alle vedute del giardino montano.'
                : 'Authentic property photography: from the dining spaces to the private whirlpool bath, peaceful bedrooms, and garden vistas.'}
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE8E1] rounded-none border border-[#DDD8CD]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-[#293B30] text-[#F6F4ED] shadow-xs'
                    : 'text-[#595C55] hover:text-[#252923]'
                }`}
              >
                {lang === 'it' ? cat.labelIt : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative cursor-pointer overflow-hidden border border-[#DDD8CD]/80 bg-[#252923] sorgenti-frame aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with minimal editorial title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-stone-300 font-mono">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-stone-100 font-normal">
                    {item.title}
                  </h4>
                  <Eye className="w-4 h-4 text-stone-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-stone-300 text-xs z-10">
            <span className="font-mono tracking-wider">
              {lightboxIndex + 1} / {filteredItems.length} · {filteredItems[lightboxIndex].category}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-stone-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Chiudi visualizzatore"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image Container */}
          <div className="relative flex items-center justify-center flex-1 my-4">
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
                )
              }
              className="absolute left-2 sm:left-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Foto precedente"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].alt}
              className="max-h-[78vh] max-w-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % filteredItems.length : 0
                )
              }
              className="absolute right-2 sm:right-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Foto successiva"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-stone-300 text-xs sm:text-sm font-serif italic pb-2">
            {filteredItems[lightboxIndex].title} — {filteredItems[lightboxIndex].alt}
          </div>
        </div>
      )}
    </section>
  );
};
