import React from 'react';
import {
  Car,
  Wifi,
  Utensils,
  Coffee,
  Waves,
  Sparkles,
  Trees,
  Bike,
  HeartHandshake,
  Gamepad2,
  Thermometer,
  Clock,
} from 'lucide-react';
import { AMENITIES, AmenityItem } from '../data/propertyData';

interface AmenitiesSectionProps {
  lang: 'it' | 'en';
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Car,
  Wifi,
  Utensils,
  Coffee,
  Waves,
  Sparkles,
  Trees,
  Bike,
  HeartHandshake,
  Gamepad2,
  Thermometer,
  Clock,
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ lang }) => {
  return (
    <section id="servizi" className="py-24 sm:py-32 bg-[#FCFBF7] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
            {lang === 'it' ? 'I Comfort' : 'Amenities & Facilities'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
            {lang === 'it' ? 'TUTTO CIÒ CHE SERVE PER STARE BENE.' : 'EVERYTHING YOU NEED TO REST WELL.'}
          </h2>
          <p className="text-[#595C55] text-sm sm:text-base font-light leading-relaxed">
            {lang === 'it'
              ? 'Dettagli pratici pensati per rendere ogni soggiorno fluido e confortevole. Dalla tranquillità del parcheggio privato alla libertà delle biciclette gratuite.'
              : 'Thoughtful touches crafted to make your stay effortless: from secure on-site parking to free bicycles to ride across the plateau.'}
          </p>
        </div>

        {/* Refined Hairline Grid Layout (Anti-Card-Overcrowding) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD8CD] border border-[#DDD8CD]">
          {AMENITIES.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles;
            return (
              <div
                key={amenity.id}
                className="bg-[#FCFBF7] p-8 flex flex-col justify-between space-y-4 hover:bg-[#F6F4ED] transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-none bg-[#EBE8E1] flex items-center justify-center text-[#293B30]">
                    <IconComponent className="w-5 h-5 text-[#293B30]" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#252923]">
                    {lang === 'it' ? amenity.title : amenity.titleEn}
                  </h3>
                  <p className="text-xs text-[#595C55] leading-relaxed font-light">
                    {lang === 'it' ? amenity.detail : amenity.detailEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Policy Clarity Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#737C65] gap-3">
          <span>
            {lang === 'it'
              ? '✓ Connessione Wi-Fi gratuita nelle aree comuni · Animali ammessi senza supplemento su richiesta'
              : '✓ Free Wi-Fi in public areas · Pets warmly allowed on request with no additional fee'}
          </span>
          <span className="font-mono text-[11px]">
            {lang === 'it' ? 'Servizi verificati Booking.com' : 'Verified Booking.com facilities'}
          </span>
        </div>

      </div>
    </section>
  );
};
