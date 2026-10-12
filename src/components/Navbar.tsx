import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  lang: 'it' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#struttura', labelIt: 'La Struttura', labelEn: 'The Retreat' },
    { href: '#camere', labelIt: 'Camere', labelEn: 'Rooms' },
    { href: '#ambienti', labelIt: 'Ambienti', labelEn: 'Gallery' },
    { href: '#servizi', labelIt: 'Servizi', labelEn: 'Amenities' },
    { href: '#ristorante', labelIt: 'Ristorante', labelEn: 'Dining' },
    { href: '#dintorni', labelIt: 'Dintorni', labelEn: 'Area' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F4ED]/95 backdrop-blur-md shadow-sm border-b border-[#DDD8CD]/70 py-3'
            : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            className="flex items-baseline gap-2 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#293B30]"
            aria-label="Le Sorgenti Casa Vacanze Home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-widest font-semibold transition-colors ${
                scrolled ? 'text-[#293B30]' : 'text-white'
              }`}
            >
              LE SORGENTI
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase hidden sm:inline-block font-sans ${
                scrolled ? 'text-[#737C65]' : 'text-stone-300'
              }`}
            >
              Casa Vacanze
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-1 ${
                  scrolled
                    ? 'text-[#252923] hover:text-[#293B30]'
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {lang === 'it' ? link.labelIt : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Lang Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className={`p-1.5 rounded transition-colors text-xs flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#293B30] ${
                scrolled
                  ? 'text-[#595C55] hover:text-[#252923] hover:bg-[#DDD8CD]/40'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
              title={lang === 'it' ? 'Switch to English' : 'Passa all\'Italiano'}
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {lang}
              </span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#293B30] text-[#F6F4ED] hover:bg-[#1F2E25] transition-colors rounded-none shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#293B30]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'it' ? 'Verifica Disponibilità' : 'Check Availability'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#293B30] ${
                scrolled ? 'text-[#293B30] hover:bg-[#DDD8CD]/40' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Apri menu di navigazione"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
        >
          <div className="w-full max-w-xs bg-[#F6F4ED] h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#DDD8CD]">
              <div>
                <span className="font-serif text-lg tracking-widest font-semibold text-[#293B30]">
                  LE SORGENTI
                </span>
                <p className="text-[10px] text-[#737C65] uppercase tracking-wider">
                  Altipiani di Arcinazzo
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#252923] hover:bg-[#DDD8CD]/40 rounded-sm focus-visible:ring-2 focus-visible:ring-[#293B30]"
                aria-label="Chiudi menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-6 flex flex-col gap-4 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 text-[#252923] hover:text-[#293B30] hover:bg-[#DDD8CD]/30 rounded transition-colors"
                >
                  {lang === 'it' ? link.labelIt : link.labelEn}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-[#DDD8CD] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 bg-[#293B30] text-[#F6F4ED] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#1F2E25] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'it' ? 'Verifica Disponibilità' : 'Check Availability'}</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#595C55] pt-2">
                <span>{lang === 'it' ? 'Lingua' : 'Language'}</span>
                <button
                  onClick={onToggleLang}
                  className="px-2 py-1 border border-[#DDD8CD] font-mono text-xs uppercase hover:bg-white"
                >
                  {lang === 'it' ? 'English (EN)' : 'Italiano (IT)'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
