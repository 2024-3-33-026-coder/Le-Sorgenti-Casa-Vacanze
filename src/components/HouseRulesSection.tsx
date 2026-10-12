import React from 'react';
import { Clock, PawPrint, Ban, Cigarette, Baby, BedDouble } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface HouseRulesSectionProps {
  lang: 'it' | 'en';
}

export const HouseRulesSection: React.FC<HouseRulesSectionProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-[#F6F4ED] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
            {lang === 'it' ? 'Politiche di Soggiorno' : 'Stay Policies'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#293B30] font-normal">
            {lang === 'it' ? 'REGOLE DELLA CASA.' : 'HOUSE RULES & POLICIES.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#595C55] font-light">
            {lang === 'it'
              ? 'Condizioni verificate da Booking.com per garantire serenità e rispetto reciproco tra tutti gli ospiti.'
              : 'Verified conditions from Booking.com to preserve quiet and mutual respect for all guests.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Check-in & Check-out */}
          <div className="p-6 bg-white border border-[#DDD8CD] space-y-3">
            <div className="w-8 h-8 bg-[#EBE8E1] flex items-center justify-center text-[#293B30]">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#293B30]">
              {lang === 'it' ? 'Orari di Accesso' : 'Access Hours'}
            </h4>
            <div className="text-xs text-[#595C55] space-y-1">
              <div>
                <strong className="text-[#252923]">Check-in:</strong> {PROPERTY_INFO.houseRules.checkIn}
              </div>
              <div>
                <strong className="text-[#252923]">Check-out:</strong> {PROPERTY_INFO.houseRules.checkOut}
              </div>
              <div className="text-[11px] text-[#737C65] pt-1 border-t border-[#DDD8CD]/40">
                {lang === 'it' ? 'Chiusura cancelli: 23:30 – 07:30' : 'Gate closure: 23:30 – 07:30'}
              </div>
            </div>
          </div>

          {/* Pets */}
          <div className="p-6 bg-white border border-[#DDD8CD] space-y-3">
            <div className="w-8 h-8 bg-[#EBE8E1] flex items-center justify-center text-[#293B30]">
              <PawPrint className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#293B30]">
              {lang === 'it' ? 'Animali Domestici' : 'Pet Policy'}
            </h4>
            <p className="text-xs text-[#595C55] leading-relaxed">
              {lang === 'it'
                ? 'Ammessi su richiesta senza alcun supplemento. Ciotole e spazio verde disponibili.'
                : 'Allowed on request at no extra charge. Bowls and grassy yard available.'}
            </p>
          </div>

          {/* Children & Cribs */}
          <div className="p-6 bg-white border border-[#DDD8CD] space-y-3">
            <div className="w-8 h-8 bg-[#EBE8E1] flex items-center justify-center text-[#293B30]">
              <Baby className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#293B30]">
              {lang === 'it' ? 'Bambini & Culle' : 'Children & Cribs'}
            </h4>
            <p className="text-xs text-[#595C55] leading-relaxed">
              {lang === 'it'
                ? 'I bambini sono i benvenuti. Culla disponibile su richiesta per bimbi 0–3 anni (soggetta a disponibilità).'
                : 'Children of all ages welcome. Crib available upon request for 0–3 yrs (subject to availability).'}
            </p>
          </div>

          {/* Quiet & Smoking */}
          <div className="p-6 bg-white border border-[#DDD8CD] space-y-3">
            <div className="w-8 h-8 bg-[#EBE8E1] flex items-center justify-center text-[#293B30]">
              <Ban className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#293B30]">
              {lang === 'it' ? 'Feste & Fumo' : 'Parties & Smoking'}
            </h4>
            <div className="text-xs text-[#595C55] space-y-1">
              <div>{lang === 'it' ? 'Vietato fumare negli interni' : 'No indoor smoking'}</div>
              <div>{lang === 'it' ? 'Feste ed eventi non ammessi' : 'No parties or events'}</div>
              <div className="text-[11px] text-[#737C65]">
                {lang === 'it' ? 'Area fumatori esterna dedicata' : 'Designated outdoor smoking area'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
