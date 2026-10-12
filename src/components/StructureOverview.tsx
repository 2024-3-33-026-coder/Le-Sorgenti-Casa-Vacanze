import React from 'react';
import { ArrowRight, Trees, Compass, Shield } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface StructureOverviewProps {
  onOpenBooking: () => void;
  lang: 'it' | 'en';
}

export const StructureOverview: React.FC<StructureOverviewProps> = ({ onOpenBooking, lang }) => {
  return (
    <section id="struttura" className="py-24 sm:py-32 bg-[#F6F4ED] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
                {lang === 'it' ? 'Benvenuti a Le Sorgenti' : 'Welcome to Le Sorgenti'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight text-balance">
                {lang === 'it' ? 'IL TEMPO RITROVA IL SUO RITMO.' : 'TIME REDISCOVERS ITS RHYTHM.'}
              </h2>
            </div>

            <p className="text-[#595C55] text-base leading-relaxed font-light">
              {lang === 'it'
                ? 'Le Sorgenti Casa Vacanze accoglie gli ospiti ad Altipiani di Arcinazzo in un contesto caratterizzato da spazi confortevoli, aree verdi e un\'atmosfera pensata per vivere il soggiorno con calma.'
                : 'Le Sorgenti Holiday Retreat welcomes guests to Altipiani di Arcinazzo in a serene setting of comfortable rooms, green grounds, and an atmosphere designed to experience hospitality unhurriedly.'}
            </p>

            <p className="text-[#595C55] text-sm leading-relaxed font-light">
              {lang === 'it'
                ? 'Situata a circa 850 metri di altitudine, la struttura unisce il fresco respiro dell\'altopiano montano con il comfort di camere private accoglienti, un curato giardino erboso, il ristorante interno Le Sorgenti 2.0 e servizi dedicati a coppie e famiglie.'
                : 'Nestled at approximately 850 meters above sea level, the retreat blends crisp mountain air with comfortable private accommodations, a generous lawn garden, on-site dining at Le Sorgenti 2.0, and warm hospitality for couples and families.'}
            </p>

            {/* Official Registration & Trust Information */}
            <div className="pt-4 border-t border-[#DDD8CD] space-y-3 text-xs text-[#595C55]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#737C65]" />
                <span className="font-semibold text-[#293B30]">
                  {lang === 'it' ? 'Struttura Ricettiva Ufficiale Verificata' : 'Verified Official Accommodation'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-[#252923] bg-[#EBE8E1]/40 p-3 border border-[#DDD8CD]/80">
                <div>
                  <span className="text-[#737C65] block font-sans text-[10px]">Codice Struttura:</span>
                  {PROPERTY_INFO.identifiers.codiceStruttura}
                </div>
                <div>
                  <span className="text-[#737C65] block font-sans text-[10px]">CIN:</span>
                  {PROPERTY_INFO.identifiers.cin}
                </div>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#293B30] text-xs font-semibold uppercase tracking-wider">
                  <Trees className="w-4 h-4 text-[#737C65]" />
                  <span>850m s.l.m.</span>
                </div>
                <p className="text-[12px] text-[#595C55]">
                  {lang === 'it' ? 'Aria pura di montagna nel Lazio' : 'Pure mountain air in Lazio'}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#293B30] text-xs font-semibold uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#737C65]" />
                  <span>{lang === 'it' ? 'Posizione Quieta' : 'Quiet Setting'}</span>
                </div>
                <p className="text-[12px] text-[#595C55]">
                  {lang === 'it' ? '12 Via delle Sorgenti' : '12 Via delle Sorgenti'}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#293B30] hover:text-[#1F2E25] group border-b border-[#293B30] pb-1 transition-colors"
              >
                <span>{lang === 'it' ? 'Consulta disponibilità e camere' : 'View rooms and dates'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Editorial Architectural Photography (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative sorgenti-frame group">
              <div className="aspect-[4/3] overflow-hidden bg-[#252923]">
                <img
                  src="/images/le-sorgenti/le-sorgenti-exterior.jpg"
                  alt="La facciata e il parco verde di Le Sorgenti Casa Vacanze"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption Overlay */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#737C65]">
                <span className="font-serif italic text-sm text-[#293B30]">
                  {lang === 'it' ? 'La residenza nel verde degli Altipiani' : 'The countryside retreat in the plateau'}
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase">
                  Altipiani di Arcinazzo (FR)
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
