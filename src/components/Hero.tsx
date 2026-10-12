import React from 'react';
import { ArrowDown, ArrowRight, Star, AlertCircle, MapPin } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface HeroProps {
  onOpenBooking: () => void;
  lang: 'it' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, lang }) => {
  return (
    <section className="relative min-h-[92vh] flex items-end pb-16 pt-32 overflow-hidden bg-[#252923]">
      {/* Authentic Property Hero Photograph with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/le-sorgenti/le-sorgenti-hero.jpg"
          alt="Facciata e giardino di Le Sorgenti Casa Vacanze ad Altipiani di Arcinazzo"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#252923] via-[#252923]/60 to-black/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Editorial Pill-Free Kicker */}
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase font-medium text-stone-300">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-stone-300" />
              {PROPERTY_INFO.sublabel}
            </span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-stone-300">
              {lang === 'it' ? 'Un luogo dove rallentare' : 'A place to slow down'}
            </span>
          </div>

          {/* Architectural Serif Display Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F6F4ED] font-normal leading-[0.98] text-balance">
            {lang === 'it' ? (
              <>
                IL PIACERE <br />
                <span className="italic font-light">DI</span> RALLENTARE.
              </>
            ) : (
              <>
                THE PLEASURE <br />
                <span className="italic font-light">OF</span> SLOWING DOWN.
              </>
            )}
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            {lang === 'it'
              ? 'Scopri Le Sorgenti Casa Vacanze ad Altipiani di Arcinazzo: ambienti accoglienti, spazi per rilassarsi, cucina italiana e il piacere di un soggiorno immerso nel verde.'
              : 'Discover Le Sorgenti Holiday Retreat in Altipiani di Arcinazzo: welcoming rooms, spaces to unwind, Italian dining, and the serenity of a countryside stay.'}
          </p>

          {/* Actions & Rating Strip */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#F6F4ED] text-[#293B30] hover:bg-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-3 group shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{lang === 'it' ? 'Verifica Disponibilità' : 'Check Availability'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#struttura"
              className="px-5 py-3.5 border border-stone-300/40 text-stone-200 hover:text-white hover:border-stone-100 text-xs font-medium tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
            >
              <span>{lang === 'it' ? 'Scopri La Struttura' : 'Explore Retreat'}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            {/* Quiet Booking.com Rating Proof (Claim-to-Proof Adjacency) */}
            <div className="flex items-center gap-2.5 text-xs text-stone-300 sm:border-l sm:border-stone-400/30 sm:pl-6 py-1">
              <div className="flex items-center text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              </div>
              <div className="tabular-nums font-medium text-stone-100">
                <span className="text-base font-semibold text-white">9.2</span>/10
              </div>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span className="text-stone-300 text-[11px]">
                30 {lang === 'it' ? 'recensioni' : 'reviews'} Booking.com
              </span>
            </div>
          </div>

          {/* Seasonal Facility Transparency Badge */}
          {PROPERTY_INFO.poolStatus.isClosedSeasonally && (
            <div className="pt-2 max-w-xl">
              <div className="flex items-start gap-2.5 text-[11px] text-stone-300/90 bg-black/40 border border-stone-500/30 p-2.5">
                <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-stone-100 font-medium">
                    {lang === 'it' ? 'Avviso stagionale piscina:' : 'Seasonal Pool Notice:'}{' '}
                  </strong>
                  {lang === 'it'
                    ? 'La piscina all\'aperto è temporaneamente chiusa (riapertura 1 giugno 2027 salvo conferma della struttura).'
                    : 'The outdoor pool is temporarily closed (reopening June 1, 2027, subject to property confirmation).'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
