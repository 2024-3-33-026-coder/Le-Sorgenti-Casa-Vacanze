import React from 'react';
import { MapPin, Mountain, Compass, ChevronRight } from 'lucide-react';
import { SURROUNDINGS } from '../data/propertyData';

interface SurroundingsSectionProps {
  lang: 'it' | 'en';
}

export const SurroundingsSection: React.FC<SurroundingsSectionProps> = ({ lang }) => {
  return (
    <section id="dintorni" className="py-24 sm:py-32 bg-[#F6F4ED] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
            {lang === 'it' ? 'Scopri Il Territorio' : 'Explore The Territory'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
            {lang === 'it' ? 'UN PUNTO DI PARTENZA PER ESPLORARE.' : 'A STARTING POINT FOR DISCOVERY.'}
          </h2>
          <p className="text-[#595C55] text-sm sm:text-base font-light leading-relaxed">
            {lang === 'it'
              ? 'Gli Altipiani di Arcinazzo si trovano nel cuore della Ciociaria e a breve distanza dalla Valle dell\'Aniene. Natura incontaminata, borghi medievali e sorgenti termali a portata di mano.'
              : 'Altipiani di Arcinazzo is situated in the green heart of Lazio, near the Simbruini Mountains and the Aniene Valley. Pristine nature, ancient monasteries, and historic springs.'}
          </p>
        </div>

        {/* Editorial Split / Location Highlight Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURROUNDINGS.map((place) => (
            <div
              key={place.id}
              className="bg-white p-7 border border-[#DDD8CD] space-y-4 flex flex-col justify-between hover:border-[#737C65] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#737C65] tracking-wide uppercase text-[11px]">
                    {place.category}
                  </span>
                  <span className="px-2 py-0.5 bg-[#EBE8E1] text-[#293B30] font-mono text-[11px]">
                    {place.distance}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#293B30] font-normal">
                  {place.name}
                </h3>

                <p className="text-xs text-[#595C55] leading-relaxed font-light">
                  {lang === 'it' ? place.description : place.descriptionEn}
                </p>
              </div>

              <div className="pt-2 border-t border-[#DDD8CD]/50 flex items-center justify-between text-[11px] text-[#737C65]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#737C65]" />
                  <span>{lang === 'it' ? 'Distanza indicativa' : 'Approx distance'}</span>
                </span>
                <span className="font-mono text-[10px]">Lazio · IT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mountain Geography Note */}
        <div className="mt-12 p-6 bg-[#293B30] text-[#F6F4ED] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#DDD8CD] font-mono">
              {lang === 'it' ? 'Posizione & Quota' : 'Altitude & Geography'}
            </span>
            <p className="font-serif text-lg text-white">
              {lang === 'it'
                ? 'Altipiani di Arcinazzo · 850 metri sul livello del mare'
                : 'Altipiani di Arcinazzo · 850 meters above sea level'}
            </p>
            <p className="text-xs text-stone-300 font-light max-w-xl">
              {lang === 'it'
                ? 'A circa 70 km dall\'Aeroporto di Roma Ciampino (CIA) e a 32 km dal parco divertimenti Rainbow MagicLand.'
                : 'Approximately 70 km from Rome Ciampino Airport (CIA) and 32 km from Rainbow MagicLand.'}
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=12+Via+delle+Sorgenti,+03010+Altipiani+di+Arcinazzo,+Italy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#F6F4ED] text-[#293B30] hover:bg-white text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors inline-flex items-center gap-2"
          >
            <span>{lang === 'it' ? 'Apri su Google Maps' : 'Open in Google Maps'}</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
