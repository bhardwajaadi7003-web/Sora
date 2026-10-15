import React from 'react';
import { ReservationData } from '../types';
import { CheckCircle, Calendar, Clock, Users, MapPin, Download, X, QrCode, Share2 } from 'lucide-react';

interface ReservationSuccessModalProps {
  reservation: ReservationData;
  onClose: () => void;
}

export const ReservationSuccessModal: React.FC<ReservationSuccessModalProps> = ({
  reservation,
  onClose,
}) => {
  // Generate download for iCalendar file (.ics)
  const handleDownloadCalendar = () => {
    const startDateTime = `${reservation.date.replace(/-/g, '')}T${reservation.time.replace(':', '')}00`;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SORA Aerocity//Dining Reservation//EN
BEGIN:VEVENT
UID:${reservation.id}@soraaerocity.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDateTime}
SUMMARY:Dinner at SORA Aerocity (${reservation.seatingPreference})
DESCRIPTION:Reservation for ${reservation.guests} guests at SORA Aerocity, Worldmark 3 Rooftop, Delhi. Seating: ${reservation.seatingPreference}. Confirmation #${reservation.id}.
LOCATION:Worldmark 3 Rooftop, Aerocity, New Delhi, 110037
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `SORA_Reservation_${reservation.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative max-w-lg w-full bg-[#181818] border border-[#D4AF37]/50 rounded-sm shadow-2xl overflow-hidden">
        
        {/* Header Ribbon resembling Luxury Aviation Boarding Pass */}
        <div className="bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] p-6 border-b border-[#2A2A2A] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A3A3A3] hover:text-[#F8F8F8] transition-colors p-1"
            aria-label="Close confirmation"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Reservation Confirmed · SORA
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#F8F8F8]">
            Your Table Awaits Above The Clouds
          </h3>
          <p className="text-xs text-[#A3A3A3] mt-1">
            We look forward to hosting you for an unforgettable evening at Worldmark 3 Rooftop.
          </p>
        </div>

        {/* Boarding Pass Ticket Body */}
        <div className="p-6 space-y-6">
          
          {/* Reservation ID & Status */}
          <div className="flex items-center justify-between p-3.5 bg-[#121212] rounded-sm border border-[#262626]">
            <div>
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Booking Reference
              </span>
              <span className="font-mono text-sm text-[#D4AF37] font-semibold tracking-wider">
                {reservation.id}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Status
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                Confirmed (Guaranteed)
              </span>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Guest Name
              </span>
              <span className="font-medium text-[#F8F8F8] text-sm">{reservation.name}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Party Size
              </span>
              <span className="font-medium text-[#F8F8F8] text-sm flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                {reservation.guests} Guests
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Date
              </span>
              <span className="font-medium text-[#F8F8F8] text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                {reservation.date}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Arrival Time
              </span>
              <span className="font-medium text-[#F8F8F8] text-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                {reservation.time}
              </span>
            </div>

            <div className="col-span-2 space-y-1 pt-2 border-t border-[#222222]">
              <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                Seating Atmosphere
              </span>
              <span className="font-serif text-base text-[#D4AF37] font-semibold">
                {reservation.seatingPreference}
              </span>
            </div>

            {reservation.specialRequests && (
              <div className="col-span-2 space-y-1 bg-[#141414] p-2.5 rounded-sm">
                <span className="text-[10px] uppercase text-[#777777] tracking-wider block">
                  Dietary / Special Request
                </span>
                <span className="text-xs text-[#C5C5C5] italic">
                  "{reservation.specialRequests}"
                </span>
              </div>
            )}
          </div>

          {/* Location note */}
          <div className="flex items-start gap-2.5 text-xs text-[#A3A3A3] pt-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>
              Worldmark 3 Rooftop, Aerocity, New Delhi · Valet parking available at the main lobby tower elevator.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownloadCalendar}
              className="flex-1 py-2.5 px-4 text-xs uppercase tracking-wider font-semibold bg-[#D4AF37] hover:bg-[#E5C158] text-[#121212] rounded-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Add to Calendar
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-5 text-xs uppercase tracking-wider font-semibold border border-[#333333] hover:border-[#D4AF37] text-[#F8F8F8] rounded-sm transition-colors"
            >
              Done
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
