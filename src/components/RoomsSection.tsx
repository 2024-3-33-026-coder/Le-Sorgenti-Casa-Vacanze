import React, { useState } from 'react';
import { ArrowRight, Check, Users, Sparkles, Bed, Bath, Wind } from 'lucide-react';
import { ROOMS, RoomType } from '../data/propertyData';

interface RoomsSectionProps {
  onSelectRoom: (roomId: string) => void;
  lang: 'it' | 'en';
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom, lang }) => {
  const [activeRoomId, setActiveRoomId] = useState<string>(ROOMS[0].id);

  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

  return (
    <section id="camere" className="py-24 sm:py-32 bg-[#FCFBF7] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
            {lang === 'it' ? 'Il Tuo Spazio' : 'Your Retreat'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
            {lang === 'it' ? 'COMFORT PENSATO PER IL RIPOSO.' : 'COMFORT CRAFTED FOR REST.'}
          </h2>
          <p className="text-[#595C55] text-sm sm:text-base font-light leading-relaxed">
            {lang === 'it'
              ? 'Tre diverse tipologie di sistemazioni studiate per soddisfare esigenze differenti: dal soggiorno romantico con vasca idromassaggio privata, alla camera deluxe accogliente, fino alle soluzioni spaziose per famiglie.'
              : 'Three distinct accommodations tailored to individual desires: from romantic stays with a private spa whirlpool bath, to cozy deluxe double rooms, to generous family options.'}
          </p>
        </div>

        {/* Room Category Tabs (Accessible Functional Buttons) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#DDD8CD]">
          {ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#293B30] text-[#F6F4ED] border-[#293B30] shadow-xs'
                    : 'bg-white text-[#595C55] border-[#DDD8CD] hover:border-[#737C65] hover:text-[#252923]'
                }`}
              >
                {lang === 'it' ? room.name : room.nameEn}
              </button>
            );
          })}
        </div>

        {/* Active Room Detail Spotlight Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Room Imagery & Gallery Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#252923] border border-[#DDD8CD]/80 shadow-xs">
              <img
                src={activeRoom.image}
                alt={activeRoom.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {activeRoom.id === 'spa-bath' && (
                <div className="absolute top-4 left-4 bg-[#293B30]/90 backdrop-blur-xs text-[#F6F4ED] px-3 py-1.5 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{lang === 'it' ? 'Esclusiva Idromassaggio' : 'Private Spa Bath'}</span>
                </div>
              )}
            </div>

            {/* Thumbnail Preview strip */}
            <div className="grid grid-cols-3 gap-3">
              {activeRoom.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden border border-[#DDD8CD] bg-[#252923]"
                >
                  <img
                    src={img}
                    alt={`${activeRoom.name} dettaglio ${idx + 1}`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Room Narrative & Amenity Specifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#737C65] font-semibold">
                {activeRoom.capacityText}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#293B30] font-normal mt-1">
                {lang === 'it' ? activeRoom.name : activeRoom.nameEn}
              </h3>
              <p className="text-xs italic text-[#737C65] mt-0.5">
                {activeRoom.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#595C55] leading-relaxed font-light">
              {lang === 'it' ? activeRoom.description : activeRoom.descriptionEn}
            </p>

            {/* Bed & Bath Quick Strip */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#DDD8CD]/80 text-xs text-[#252923]">
              <div className="flex items-start gap-2">
                <Bed className="w-4 h-4 text-[#737C65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">{lang === 'it' ? 'Configurazione letti' : 'Bedding'}</span>
                  <span className="text-[#595C55] text-[11px]">{activeRoom.bedSetup}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Bath className="w-4 h-4 text-[#737C65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">{lang === 'it' ? 'Bagno privato' : 'Bathroom'}</span>
                  <span className="text-[#595C55] text-[11px]">{activeRoom.bathType}</span>
                </div>
              </div>
            </div>

            {/* Verified Key Amenities Bullet Grid */}
            <div className="space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#293B30] block">
                {lang === 'it' ? 'Dotazioni Incluse in Camera:' : 'Room Amenities Included:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#595C55]">
                {activeRoom.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#293B30] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Booking Action Button */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() => onSelectRoom(activeRoom.id)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#293B30] text-[#F6F4ED] hover:bg-[#1F2E25] font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-xs active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#293B30]"
              >
                <span>
                  {lang === 'it'
                    ? `Verifica Disponibilità per ${activeRoom.name}`
                    : `Check Availability for ${activeRoom.nameEn}`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#737C65]">
                {lang === 'it' ? activeRoom.priceNote : 'Live rates and availability confirmed on Booking.com'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
