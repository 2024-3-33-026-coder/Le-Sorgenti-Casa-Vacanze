import React, { useState } from 'react';
import { Calendar, Users, DoorClosed, ExternalLink, ShieldCheck, Check, AlertCircle, Sparkles } from 'lucide-react';
import { PROPERTY_INFO, ROOMS } from '../data/propertyData';

interface BookingEngineProps {
  selectedRoomId?: string;
  onRoomSelect?: (id: string) => void;
  lang: 'it' | 'en';
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingEngine: React.FC<BookingEngineProps> = ({
  selectedRoomId,
  onRoomSelect,
  lang,
  isModal,
  onClose,
}) => {
  // Format dates: default to tomorrow and 3 days later
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextThreeDays = new Date();
  nextThreeDays.setDate(nextThreeDays.getDate() + 4);

  const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateForInput(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDateForInput(nextThreeDays));
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [selectedRoom, setSelectedRoom] = useState<string>(selectedRoomId || 'all');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showDirectContact, setShowDirectContact] = useState<boolean>(false);

  // Sync selected room when prop updates
  React.useEffect(() => {
    if (selectedRoomId) {
      setSelectedRoom(selectedRoomId);
    }
  }, [selectedRoomId]);

  const handleChildrenChange = (newCount: number) => {
    setChildren(newCount);
    if (newCount > childrenAges.length) {
      const added = Array(newCount - childrenAges.length).fill(7);
      setChildrenAges([...childrenAges, ...added]);
    } else {
      setChildrenAges(childrenAges.slice(0, newCount));
    }
  };

  const handleChildAgeChange = (index: number, age: number) => {
    const updated = [...childrenAges];
    updated[index] = age;
    setChildrenAges(updated);
  };

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    setErrorMessage('');
    // Auto-advance check-out if check-in >= check-out
    if (newCheckIn >= checkOut) {
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(formatDateForInput(nextDay));
    }
  };

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!checkIn || !checkOut) {
      setErrorMessage(
        lang === 'it'
          ? 'Inserisci sia la data di arrivo che di partenza.'
          : 'Please select both check-in and check-out dates.'
      );
      return;
    }

    if (checkIn >= checkOut) {
      setErrorMessage(
        lang === 'it'
          ? 'La data di partenza deve essere successiva all\'arrivo.'
          : 'Check-out date must be after check-in date.'
      );
      return;
    }

    setIsSubmitting(true);

    // Build real Booking.com URL with parameters
    const checkinParts = checkIn.split('-');
    const checkoutParts = checkOut.split('-');

    const params = new URLSearchParams();
    params.set('checkin_year', checkinParts[0]);
    params.set('checkin_month', checkinParts[1]);
    params.set('checkin_monthday', checkinParts[2]);
    params.set('checkout_year', checkoutParts[0]);
    params.set('checkout_month', checkoutParts[1]);
    params.set('checkout_monthday', checkoutParts[2]);
    params.set('group_adults', adults.toString());
    params.set('group_children', children.toString());
    params.set('no_rooms', roomsCount.toString());

    if (children > 0 && childrenAges.length > 0) {
      childrenAges.forEach((age) => {
        params.append('age', age.toString());
      });
    }

    const targetUrl = `${PROPERTY_INFO.bookingUrl}?${params.toString()}`;

    // Direct redirect to real verified booking engine with authentic dates
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const nights = calculateNights();

  return (
    <div className={`bg-[#F6F4ED] ${isModal ? 'p-6 sm:p-8 max-w-3xl w-full' : 'p-6 sm:p-10 border border-[#DDD8CD]'}`}>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#737C65] font-semibold">
            {lang === 'it' ? 'Motore di Prenotazione Diretto' : 'Direct Booking Search'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#293B30] font-normal mt-1">
            {lang === 'it' ? 'Verifica Disponibilità & Tariffe' : 'Check Availability & Rates'}
          </h3>
          <p className="text-xs text-[#595C55] mt-1">
            {lang === 'it'
              ? 'Seleziona le date e gli ospiti per visualizzare le sistemazioni disponibili su Booking.com.'
              : 'Select dates and guest details to view real-time availability on Booking.com.'}
          </p>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-[#595C55] hover:text-[#252923] p-1 font-mono text-sm border border-[#DDD8CD] px-2.5 py-1"
            aria-label="Chiudi finestra"
          >
            ✕
          </button>
        )}
      </div>

      {errorMessage && (
        <div className="mb-6 p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSearchSubmit} className="space-y-6">
        {/* Dates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#737C65]" />
              {lang === 'it' ? 'Arrivo (Check-in)' : 'Arrival (Check-in)'}
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDateForInput(new Date())}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD8CD] text-[#252923] text-sm focus:outline-none focus:border-[#293B30] focus:ring-1 focus:ring-[#293B30]"
              required
            />
            <span className="text-[11px] text-[#737C65] mt-1 block">
              {lang === 'it' ? 'Orario: 14:00 – 23:00' : 'Hours: 14:00 – 23:00'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#737C65]" />
              {lang === 'it' ? 'Partenza (Check-out)' : 'Departure (Check-out)'}
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD8CD] text-[#252923] text-sm focus:outline-none focus:border-[#293B30] focus:ring-1 focus:ring-[#293B30]"
              required
            />
            <span className="text-[11px] text-[#737C65] mt-1 block">
              {lang === 'it' ? 'Orario: 08:00 – 11:00' : 'Hours: 08:00 – 11:00'}
            </span>
          </div>
        </div>

        {/* Guests, Children & Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#737C65]" />
              {lang === 'it' ? 'Adulti' : 'Adults'}
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-white border border-[#DDD8CD] text-[#252923] text-sm focus:outline-none focus:border-[#293B30]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? (lang === 'it' ? 'Adulto' : 'Adult') : (lang === 'it' ? 'Adulti' : 'Adults')}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#737C65]" />
              {lang === 'it' ? 'Bambini' : 'Children'}
            </label>
            <select
              value={children}
              onChange={(e) => handleChildrenChange(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-white border border-[#DDD8CD] text-[#252923] text-sm focus:outline-none focus:border-[#293B30]"
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {lang === 'it' ? (num === 1 ? 'Bambino' : 'Bambini') : (num === 1 ? 'Child' : 'Children')}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center gap-1.5">
              <DoorClosed className="w-3.5 h-3.5 text-[#737C65]" />
              {lang === 'it' ? 'Camere' : 'Rooms'}
            </label>
            <select
              value={roomsCount}
              onChange={(e) => setRoomsCount(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-white border border-[#DDD8CD] text-[#252923] text-sm focus:outline-none focus:border-[#293B30]"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? (lang === 'it' ? 'Camera' : 'Room') : (lang === 'it' ? 'Camere' : 'Rooms')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Children Ages Selector if children > 0 */}
        {children > 0 && (
          <div className="p-3.5 bg-[#EBE8E1]/60 border border-[#DDD8CD] space-y-2">
            <span className="text-xs font-medium text-[#293B30] block">
              {lang === 'it' ? 'Età dei bambini (richiesta da Booking.com):' : 'Children ages (required by Booking.com):'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {childrenAges.map((age, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-xs text-[#595C55]">#{idx + 1}:</span>
                  <select
                    value={age}
                    onChange={(e) => handleChildAgeChange(idx, Number(e.target.value))}
                    className="w-full px-2 py-1 bg-white border border-[#DDD8CD] text-xs"
                  >
                    {Array.from({ length: 18 }, (_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? 'anno' : 'anni'}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Room Type Preference */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#293B30] mb-2 flex items-center justify-between">
            <span>{lang === 'it' ? 'Tipologia di Camera Preferita' : 'Preferred Room Type'}</span>
            <span className="text-[11px] font-normal text-[#737C65]">
              {lang === 'it' ? 'Tutte verificabili su Booking.com' : 'All verifiable on Booking.com'}
            </span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedRoom('all');
                if (onRoomSelect) onRoomSelect('all');
              }}
              className={`p-3 text-left border transition-all text-xs ${
                selectedRoom === 'all'
                  ? 'border-[#293B30] bg-[#293B30] text-white shadow-xs'
                  : 'border-[#DDD8CD] bg-white text-[#252923] hover:border-[#737C65]'
              }`}
            >
              <div className="font-semibold">{lang === 'it' ? 'Tutte le Camere' : 'All Rooms'}</div>
              <div className={`text-[10px] mt-0.5 ${selectedRoom === 'all' ? 'text-stone-300' : 'text-[#737C65]'}`}>
                {lang === 'it' ? 'Confronta le opzioni' : 'Compare all options'}
              </div>
            </button>

            {ROOMS.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => {
                  setSelectedRoom(room.id);
                  if (onRoomSelect) onRoomSelect(room.id);
                }}
                className={`p-3 text-left border transition-all text-xs ${
                  selectedRoom === room.id
                    ? 'border-[#293B30] bg-[#293B30] text-white shadow-xs'
                    : 'border-[#DDD8CD] bg-white text-[#252923] hover:border-[#737C65]'
                }`}
              >
                <div className="font-semibold truncate">{lang === 'it' ? room.name : room.nameEn}</div>
                <div className={`text-[10px] mt-0.5 truncate ${selectedRoom === room.id ? 'text-stone-300' : 'text-[#737C65]'}`}>
                  {room.capacityText}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stay Summary Strip */}
        <div className="p-4 bg-white border border-[#DDD8CD] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#737C65]" />
            <div>
              <span className="font-medium text-[#293B30]">
                {nights} {nights === 1 ? (lang === 'it' ? 'notte' : 'night') : (lang === 'it' ? 'notti' : 'nights')} ·{' '}
                {adults} {lang === 'it' ? 'adulti' : 'adults'}
                {children > 0 ? `, ${children} ${lang === 'it' ? 'bambini' : 'children'}` : ''}
              </span>
              <p className="text-[11px] text-[#737C65]">
                {lang === 'it'
                  ? 'Miglior tariffa garantita con cancellazione trasparente su Booking.com'
                  : 'Best price guaranteed with transparent cancellation policy on Booking.com'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#737C65] block">
              {lang === 'it' ? 'Disponibilità live' : 'Live Availability'}
            </span>
            <span className="font-serif text-sm font-semibold text-[#293B30]">
              Booking.com Official Link
            </span>
          </div>
        </div>

        {/* Submit Action Button */}
        <div className="space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-[#293B30] text-[#F6F4ED] hover:bg-[#1F2E25] font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#293B30] active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span>{lang === 'it' ? 'Apertura in corso...' : 'Opening Booking.com...'}</span>
            ) : (
              <>
                <span>{lang === 'it' ? 'Cerca Disponibilità su Booking.com' : 'Search on Booking.com'}</span>
                <ExternalLink className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#595C55] gap-2 pt-1">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#293B30]" />
              {lang === 'it' ? 'Nessun costo di prenotazione aggiuntivo' : 'No added reservation fees'}
            </span>
            <button
              type="button"
              onClick={() => setShowDirectContact(!showDirectContact)}
              className="underline hover:text-[#293B30]"
            >
              {lang === 'it' ? 'Preferisci inviare una richiesta diretta?' : 'Prefer to send a direct inquiry?'}
            </button>
          </div>
        </div>
      </form>

      {/* Direct Inquiry Accordion */}
      {showDirectContact && (
        <div className="mt-6 pt-6 border-t border-[#DDD8CD] space-y-4 text-xs animate-fadeIn">
          <h4 className="font-semibold text-[#293B30]">
            {lang === 'it' ? 'Richiesta di Informazioni Diretta' : 'Direct Contact & Inquiries'}
          </h4>
          <p className="text-[#595C55] leading-relaxed">
            {lang === 'it'
              ? 'Le Sorgenti Casa Vacanze è situata in 12 Via delle Sorgenti, 03010 Altipiani di Arcinazzo (Lazio). Per confermare immediatamente la tua camera e garantire il miglior prezzo, consigliamo di procedere direttamente tramite il nostro portale ufficiale Booking.com.'
              : 'Le Sorgenti Casa Vacanze is located at 12 Via delle Sorgenti, 03010 Altipiani di Arcinazzo. To instantly secure your room at guaranteed official rates, we recommend booking via our official Booking.com listing.'}
          </p>
          <div className="p-3 bg-white border border-[#DDD8CD] space-y-1 font-mono text-[11px] text-[#252923]">
            <div>Codice Identificativo Nazionale (CIN): IT060080B4VX8CDJK9</div>
            <div>Codice Struttura: 060080-AFF-00001</div>
            <div>Indirizzo: 12 Via delle Sorgenti, 03010 Altipiani di Arcinazzo, IT</div>
          </div>
        </div>
      )}
    </div>
  );
};
