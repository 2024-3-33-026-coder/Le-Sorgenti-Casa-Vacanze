import React from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface ReviewsSectionProps {
  lang: 'it' | 'en';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF7] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
            {lang === 'it' ? 'Le Esperienze degli Ospiti' : 'Guest Experiences'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
            {lang === 'it' ? 'L\'OSPITALITÀ SI RICORDA.' : 'HOSPITALITY TO REMEMBER.'}
          </h2>
          <p className="text-[#595C55] text-sm sm:text-base font-light leading-relaxed">
            {lang === 'it'
              ? 'Valutazioni autentiche rilasciate da viaggiatori verificati che hanno soggiornato presso Le Sorgenti Casa Vacanze su Booking.com.'
              : 'Authentic ratings shared by verified guests who stayed at Le Sorgenti Holiday Retreat on Booking.com.'}
          </p>
        </div>

        {/* Scoreboard and Detailed Rating Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F6F4ED] border border-[#DDD8CD] p-8 sm:p-12">
          
          {/* Main Score Block (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-[#DDD8CD] lg:pr-12">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl font-semibold text-[#293B30] tabular-nums">
                {PROPERTY_INFO.rating.score}
              </span>
              <span className="text-xl text-[#737C65] font-light">/ 10</span>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#293B30]">
                {lang === 'it' ? 'Eccellente' : 'Superb'}
              </span>
              <p className="text-xs text-[#595C55]">
                {lang === 'it'
                  ? `Punteggio calcolato sulla base di ${PROPERTY_INFO.rating.reviewCount} recensioni verificate.`
                  : `Score calculated based on ${PROPERTY_INFO.rating.reviewCount} verified guest reviews.`}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PROPERTY_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#293B30] hover:text-[#1F2E25] border-b border-[#293B30] pb-1 transition-colors"
              >
                <span>{lang === 'it' ? 'Leggi tutte le recensioni su Booking.com' : 'Read all reviews on Booking.com'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#737C65] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#293B30]" />
              <span>{lang === 'it' ? 'Dati ufficiali verificati da Booking.com' : 'Official verified Booking.com data'}</span>
            </div>
          </div>

          {/* Detailed Criteria Scores (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#293B30]">
              {lang === 'it' ? 'Valutazione per Categoria' : 'Category Breakdown'}
            </h3>

            <div className="space-y-4">
              {PROPERTY_INFO.rating.categories.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#252923] font-medium">{cat.label}</span>
                    <span className="font-semibold text-[#293B30] tabular-nums font-mono">
                      {cat.score} / 10
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DDD8CD]/60 overflow-hidden">
                    <div
                      className="h-full bg-[#293B30]"
                      style={{ width: `${(cat.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-xs text-[#595C55] italic">
              {lang === 'it'
                ? '«Particolarmente apprezzati la gentilezza dello staff (9.6), la quiete degli spazi e la pulizia accurata delle camere.»'
                : '«Particularly praised for staff friendliness (9.6), tranquil surroundings, and pristine room cleanliness.»'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
