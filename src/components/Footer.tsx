import React from 'react';
import { ArrowUp, MapPin, Shield, Calendar, ExternalLink } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface FooterProps {
  onOpenBooking: () => void;
  lang: 'it' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2E25] text-[#F6F4ED] pt-20 pb-12 border-t border-[#364D3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Split: Brand statement & Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-[#364D3F]/70">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#DDD8CD] font-mono">
              {lang === 'it' ? 'Casa Vacanze · Altipiani di Arcinazzo' : 'Holiday Retreat · Lazio'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
              {lang === 'it' ? PROPERTY_INFO.brandStatement : PROPERTY_INFO.brandStatementEn}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-light">
              {lang === 'it'
                ? 'Un rifugio tra natura e comfort ad Altipiani di Arcinazzo. Camere intime, idromassaggio privato, cucina genuina e il respiro della montagna.'
                : 'A haven between nature and comfort in Altipiani di Arcinazzo. Cozy rooms, private spa whirlpool bath, and pure mountain air.'}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#F6F4ED] text-[#293B30] hover:bg-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'it' ? 'Verifica Disponibilità' : 'Check Availability'}</span>
            </button>
            <a
              href={PROPERTY_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-stone-400/40 text-stone-300 hover:text-white hover:border-white text-xs font-medium tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
            >
              <span>{lang === 'it' ? 'Portale Ufficiale Booking.com' : 'Official Booking.com'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Middle Grid: Identifiers, Links, Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
          
          {/* Col 1: Identification */}
          <div className="space-y-4">
            <div className="font-serif text-xl tracking-wider text-white">
              LE SORGENTI
            </div>
            <div className="space-y-2 text-stone-300 font-mono text-[11px]">
              <div>
                <span className="text-[#DDD8CD] block font-sans text-[10px]">Identificativo Regionale:</span>
                {PROPERTY_INFO.identifiers.codiceStruttura}
              </div>
              <div>
                <span className="text-[#DDD8CD] block font-sans text-[10px]">Codice Identificativo Nazionale (CIN):</span>
                {PROPERTY_INFO.identifiers.cin}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#DDD8CD] font-semibold block">
              {lang === 'it' ? 'Navigazione' : 'Navigation'}
            </span>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a href="#struttura" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'La Struttura' : 'The Retreat'}
                </a>
              </li>
              <li>
                <a href="#camere" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'Le Camere' : 'The Rooms'}
                </a>
              </li>
              <li>
                <a href="#ambienti" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'Gli Ambienti & Foto' : 'Spaces & Gallery'}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'I Servizi' : 'Amenities'}
                </a>
              </li>
              <li>
                <a href="#ristorante" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'Ristorante Le Sorgenti 2.0' : 'Dining'}
                </a>
              </li>
              <li>
                <a href="#dintorni" className="hover:text-white transition-colors">
                  {lang === 'it' ? 'Dintorni & Territorio' : 'Surroundings'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#DDD8CD] font-semibold block">
              {lang === 'it' ? 'Posizione' : 'Address'}
            </span>
            <div className="text-stone-300 space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DDD8CD] shrink-0 mt-0.5" />
                <span>{PROPERTY_INFO.address}</span>
              </div>
              <p className="text-[11px] text-stone-400">
                Altipiani di Arcinazzo (FR/RM), Lazio · 850m s.l.m.
              </p>
            </div>
          </div>

          {/* Col 4: Seasonal Alert & Back to Top */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-[#DDD8CD] font-semibold block">
              {lang === 'it' ? 'Stagionalità' : 'Seasonality'}
            </span>
            <p className="text-stone-300 text-[11px] leading-relaxed">
              {lang === 'it'
                ? 'Struttura aperta tutto l\'anno. Piscina all\'aperto stagionale chiusa dal 1° settembre 2026 al 1° giugno 2027.'
                : 'Open year-round. Seasonal outdoor pool closed Sept 1, 2026 to June 1, 2027.'}
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors pt-2 border-b border-stone-500 pb-0.5 text-xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{lang === 'it' ? 'Torna all\'inizio' : 'Back to top'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#364D3F]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} {PROPERTY_INFO.name}. {lang === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <span>Codice Struttura: {PROPERTY_INFO.identifiers.codiceStruttura}</span>
            <span aria-hidden="true">·</span>
            <span>CIN: {PROPERTY_INFO.identifiers.cin}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
