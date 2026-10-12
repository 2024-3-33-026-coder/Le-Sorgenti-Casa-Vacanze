import React from 'react';
import { Utensils, Coffee, Check, Salad } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface RestaurantSectionProps {
  lang: 'it' | 'en';
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({ lang }) => {
  return (
    <section id="ristorante" className="py-24 sm:py-32 bg-[#F6F4ED] border-b border-[#DDD8CD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#252923] border border-[#DDD8CD] sorgenti-frame group shadow-xs">
              <img
                src="/images/le-sorgenti/le-sorgenti-kitchen.jpg"
                alt="Tavolo e cucina per la colazione a Le Sorgenti Casa Vacanze"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#293B30]/90 text-[#F6F4ED] text-[11px] px-3 py-1 font-semibold uppercase tracking-wider">
                {PROPERTY_INFO.restaurant.name}
              </div>
            </div>
          </div>

          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#737C65]">
                {lang === 'it' ? 'A Tavola' : 'Dining & Taste'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#293B30] font-normal leading-tight">
                {lang === 'it' ? 'IL PIACERE DELLA CUCINA ITALIANA.' : 'THE DELIGHT OF ITALIAN FLAVOURS.'}
              </h2>
            </div>

            <p className="text-[#595C55] text-base font-light leading-relaxed">
              {lang === 'it'
                ? 'All\'interno della struttura è presente il ristorante Le Sorgenti 2.0, che propone piatti della tradizione culinaria italiana con particolare attenzione a chi segue regimi alimentari dedicati.'
                : 'On-site dining is provided by restaurant Le Sorgenti 2.0, offering beloved dishes of Italian culinary tradition with thoughtful care for dietary preferences.'}
            </p>

            {/* Restaurant & Breakfast Pillars */}
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-white border border-[#DDD8CD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#293B30]">
                  <Utensils className="w-4 h-4 text-[#737C65]" />
                  <span>{lang === 'it' ? 'Ristorante Le Sorgenti 2.0' : 'Le Sorgenti 2.0 Restaurant'}</span>
                </div>
                <p className="text-xs text-[#595C55] leading-relaxed">
                  {lang === 'it'
                    ? 'Pranzo e cena con ingredienti genuini, pasta tradizionale e ricette della cucina laziale e nazionale.'
                    : 'Lunch and dinner with genuine ingredients, fresh pastas, and authentic regional Lazio recipes.'}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#737C65]">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#293B30]" />
                    {lang === 'it' ? 'Vegetariano' : 'Vegetarian'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#293B30]" />
                    {lang === 'it' ? 'Vegano' : 'Vegan'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#293B30]" />
                    {lang === 'it' ? 'Opzioni Senza Glutine' : 'Gluten-free choices'}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#DDD8CD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#293B30]">
                  <Coffee className="w-4 h-4 text-[#737C65]" />
                  <span>{lang === 'it' ? 'Colazione a Buffet' : 'Buffet Breakfast'}</span>
                </div>
                <p className="text-xs text-[#595C55] leading-relaxed">
                  {lang === 'it'
                    ? 'Inizia la giornata con un ricco buffet continentale ed italiano: dolci fragranti, marmellate, succhi, latte fresco, espresso e opzioni per intolleranze.'
                    : 'Begin the day with an Italian and continental breakfast buffet: fresh pastries, jams, juices, Italian espresso, and options for food intolerances.'}
                </p>
              </div>
            </div>

            {/* Booking Notice for Inclusions */}
            <div className="p-3 bg-[#EBE8E1]/60 border border-[#DDD8CD] text-[11px] text-[#595C55]">
              <strong>{lang === 'it' ? 'Nota per la prenotazione:' : 'Booking Note:'} </strong>
              {lang === 'it'
                ? 'L\'inclusione della colazione e i relativi orari possono variare in base alla tariffa e alla data selezionata su Booking.com.'
                : 'Breakfast inclusion and dining hours depend on the specific rate selected during reservation on Booking.com.'}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
