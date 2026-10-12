import React from 'react';
import { Sun, Trees, AlertCircle, Calendar } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface GardenAndPoolSectionProps {
  lang: 'it' | 'en';
}

export const GardenAndPoolSection: React.FC<GardenAndPoolSectionProps> = ({ lang }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF7] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 04: IL GIARDINO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
              {lang === 'it' ? 'All\'Aperto' : 'Outdoors & Grounds'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
              {lang === 'it' ? 'UNA PAUSA NEL VERDE.' : 'A PAUSE IN THE GREENERY.'}
            </h2>
            <p className="text-[#595C55] text-base font-light leading-relaxed">
              {lang === 'it'
                ? 'Gli spazi esterni offrono un\'occasione per godersi l\'aria aperta e vivere il soggiorno in modo più rilassato, tra momenti di quiete e tempo da trascorrere fuori.'
                : 'The outdoor grounds provide an opportunity to relish the mountain breeze and experience your holiday at an unhurried pace, with serene quiet and open green lawns.'}
            </p>
            <p className="text-[#595C55] text-sm font-light leading-relaxed">
              {lang === 'it'
                ? 'L\'ampio parco erboso pianeggiante circonda la struttura, offrendo angoli di lettura all\'ombra, panchine per rilassarsi, terrazza solarium e spazi aperti ideali anche per chi viaggia con bambini o animali domestici.'
                : 'The vast grassy park surrounds the building, offering shaded reading corners, benches to unwind, a sun terrace, and secure open areas ideal for couples, families, and pets.'}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2 border-t border-[#DDD8CD] text-xs text-[#293B30]">
              <div className="space-y-1">
                <span className="font-semibold block uppercase tracking-wider">
                  {lang === 'it' ? 'Terrazza Solarium' : 'Sun Terrace'}
                </span>
                <p className="text-[#595C55] text-[11px]">
                  {lang === 'it' ? 'Lettini e sedie per godersi il sole' : 'Loungers to absorb natural sunlight'}
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold block uppercase tracking-wider">
                  {lang === 'it' ? 'Aria di Montagna' : 'Plateau Climate'}
                </span>
                <p className="text-[#595C55] text-[11px]">
                  {lang === 'it' ? 'Frescura ideale nei mesi estivi' : 'Refreshing breeze during summer months'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#252923] border border-[#DDD8CD] sorgenti-frame group shadow-xs">
              <img
                src="/images/le-sorgenti/le-sorgenti-garden.jpg"
                alt="Prato verde e parco di Le Sorgenti Casa Vacanze"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 font-mono">
                {lang === 'it' ? 'Parco Giardino' : 'Garden Grounds'}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 05: LA PISCINA STAGIONALE */}
        <div className="pt-16 border-t border-[#DDD8CD] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
              {lang === 'it' ? 'Stagione Estiva' : 'Summer Season'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
              {lang === 'it' ? 'IL PIACERE DI STARE ALL\'APERTO.' : 'THE JOY OF OUTDOOR LIVING.'}
            </h2>
            <p className="text-[#595C55] text-base font-light leading-relaxed">
              {lang === 'it'
                ? 'Nei mesi più caldi dell\'anno, la piscina all\'aperto immersa nel verde degli Altipiani diventa il punto di ritrovo per rinfrescarsi e godersi il sole in totale quiete.'
                : 'During the warmest summer months, the outdoor pool surrounded by plateau greenery becomes a peaceful refuge to cool down and bask in mountain sunlight.'}
            </p>

            {/* MANDATORY ACCURATE SEASONAL CLOSURE NOTICE */}
            <div className="p-4 bg-amber-50/80 border border-amber-200/90 text-[#252923] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  {lang === 'it' ? 'Stato Operativo della Piscina' : 'Pool Operational Status'}
                </span>
              </div>
              <p className="text-xs text-[#595C55] leading-relaxed">
                {lang === 'it' ? PROPERTY_INFO.poolStatus.noticeText : PROPERTY_INFO.poolStatus.noticeTextEn}
              </p>
              <div className="text-[11px] font-mono text-[#737C65] pt-1 border-t border-amber-200/60 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>
                  {lang === 'it'
                    ? 'Chiusura stagionale: 1 Settembre 2026 – 1 Giugno 2027'
                    : 'Seasonal Closure: Sept 1, 2026 – June 1, 2027'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#252923] border border-[#DDD8CD] sorgenti-frame group shadow-xs">
              <img
                src="/images/le-sorgenti/le-sorgenti-pool.jpg"
                alt="La piscina all'aperto di Le Sorgenti Casa Vacanze"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#293B30]/90 text-[#F6F4ED] text-[11px] px-2.5 py-1 font-semibold uppercase tracking-wider">
                {lang === 'it' ? 'Impianto Stagionale' : 'Seasonal Facility'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
