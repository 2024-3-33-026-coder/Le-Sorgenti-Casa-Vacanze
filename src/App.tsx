import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StructureOverview } from './components/StructureOverview';
import { RoomsSection } from './components/RoomsSection';
import { SpacesGallery } from './components/SpacesGallery';
import { GardenAndPoolSection } from './components/GardenAndPoolSection';
import { RestaurantSection } from './components/RestaurantSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { SurroundingsSection } from './components/SurroundingsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingEngine } from './components/BookingEngine';
import { HouseRulesSection } from './components/HouseRulesSection';
import { Footer } from './components/Footer';
import { Calendar, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('all');
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'it' ? 'en' : 'it'));
  };

  const handleOpenBooking = (roomId: string = 'all') => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  // Show mobile sticky CTA when scrolled past the hero
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && bookingModalOpen) {
        setBookingModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookingModalOpen]);

  return (
    <div className="min-h-screen bg-[#F6F4ED] text-[#252923] flex flex-col font-sans selection:bg-[#293B30] selection:text-[#F6F4ED]">
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('all')}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Hero Section with authentic property photo */}
        <Hero onOpenBooking={() => handleOpenBooking('all')} lang={lang} />

        {/* Embedded Quick Booking Bar Strip */}
        <section className="bg-[#293B30] text-[#F6F4ED] py-8 border-y border-[#364D3F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center lg:text-left">
                <span className="text-[10px] tracking-widest uppercase text-stone-300 font-mono">
                  {lang === 'it' ? 'Pianifica il tuo soggiorno' : 'Plan your retreat'}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {lang === 'it' ? 'Quando desideri arrivare ad Altipiani?' : 'When would you like to arrive?'}
                </h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#disponibilita"
                  className="px-6 py-3.5 bg-[#F6F4ED] text-[#293B30] hover:bg-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'it' ? 'Imposta Date & Ospiti' : 'Set Dates & Guests'}</span>
                </a>
                <button
                  onClick={() => handleOpenBooking('spa-bath')}
                  className="px-5 py-3.5 border border-stone-400/40 text-stone-200 hover:text-white hover:border-white text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  {lang === 'it' ? 'Camera con Spa Bath' : 'Spa Bath Room'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 01: La Struttura */}
        <StructureOverview onOpenBooking={() => handleOpenBooking('all')} lang={lang} />

        {/* Section 02: Le Camere */}
        <RoomsSection
          onSelectRoom={(roomId) => handleOpenBooking(roomId)}
          lang={lang}
        />

        {/* Section 03: Gli Ambienti & Galleria */}
        <SpacesGallery lang={lang} />

        {/* Section 04 & 05: Il Giardino & La Piscina Stagionale */}
        <GardenAndPoolSection lang={lang} />

        {/* Section 06: Ristorante Le Sorgenti 2.0 & Colazione */}
        <RestaurantSection lang={lang} />

        {/* Section 07: I Servizi */}
        <AmenitiesSection lang={lang} />

        {/* Section 08: Esperienze & Dintorni */}
        <SurroundingsSection lang={lang} />

        {/* Section 09: Le Opinioni degli Ospiti (Booking.com 9.2/10) */}
        <ReviewsSection lang={lang} />

        {/* Section 10: Modulo di Disponibilità Dedicato */}
        <section id="disponibilita" className="py-24 bg-[#EBE8E1]/50 border-b border-[#DDD8CD]/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
                {lang === 'it' ? 'Il Tuo Prossimo Soggiorno' : 'Your Next Stay'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#293B30] font-normal">
                {lang === 'it' ? 'QUANDO DESIDERI ARRIVARE?' : 'WHEN WOULD YOU LIKE TO ARRIVE?'}
              </h2>
              <p className="text-xs sm:text-sm text-[#595C55] font-light">
                {lang === 'it'
                  ? 'Compila le date e i dettagli degli ospiti per verificare all\'istante disponibilità e tariffe sul portale ufficiale Booking.com.'
                  : 'Enter your dates and guest details to instantly verify availability and rates on official Booking.com portal.'}
              </p>
            </div>

            <BookingEngine
              selectedRoomId={selectedRoomId}
              onRoomSelect={(id) => setSelectedRoomId(id)}
              lang={lang}
            />
          </div>
        </section>

        {/* Politiche di Soggiorno & House Rules */}
        <HouseRulesSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('all')} lang={lang} />

      {/* Floating Booking Modal */}
      {bookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
        >
          <div className="relative my-auto w-full max-w-2xl bg-[#F6F4ED] shadow-2xl border border-[#DDD8CD]">
            <BookingEngine
              selectedRoomId={selectedRoomId}
              onRoomSelect={(id) => setSelectedRoomId(id)}
              lang={lang}
              isModal={true}
              onClose={handleCloseBooking}
            />
          </div>
        </div>
      )}

      {/* Mobile Sticky Bar (Strictly <= 15% height, per constitution) */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1F2E25]/95 backdrop-blur-md p-3 border-t border-[#364D3F] shadow-lg flex items-center justify-between gap-3">
          <div className="truncate">
            <span className="text-white text-xs font-semibold block truncate">
              Le Sorgenti Casa Vacanze
            </span>
            <span className="text-stone-300 text-[10px] block truncate">
              {lang === 'it' ? 'Altipiani di Arcinazzo' : 'Altipiani di Arcinazzo'}
            </span>
          </div>

          <button
            onClick={() => handleOpenBooking('all')}
            className="px-4 py-2 bg-[#F6F4ED] text-[#293B30] text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 shadow-sm"
          >
            {lang === 'it' ? 'Verifica Date' : 'Check Dates'}
          </button>
        </div>
      )}
    </div>
  );
}
