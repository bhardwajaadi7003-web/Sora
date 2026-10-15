import React, { useState } from 'react';
import { ReservationData } from '../types';
import { Calendar, Clock, Users, MapPin, Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface ReservationSectionProps {
  onSuccess: (reservation: ReservationData) => void;
  prefill?: {
    guests?: number;
    date?: string;
    time?: string;
    seatingPreference?: 'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining';
    specialRequests?: string;
  };
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onSuccess, prefill }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(prefill?.guests || 2);
  const [date, setDate] = useState(prefill?.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(prefill?.time || '20:00');
  const [seatingPreference, setSeatingPreference] = useState<'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining'>(
    prefill?.seatingPreference || 'Runway Terrace'
  );
  const [occasion, setOccasion] = useState('Casual Fine Dining');
  const [specialRequests, setSpecialRequests] = useState(prefill?.specialRequests || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const seatingOptions = [
    {
      id: 'Runway Terrace' as const,
      title: 'Runway Terrace',
      description: 'Front-row open-air sky deck views directly overlooking aircraft operations at IGI Airport.',
      badge: 'Most Popular',
    },
    {
      id: 'Indoor Lounge' as const,
      title: 'Indoor Lounge',
      description: 'Sophisticated Yakisugi timber ambience, intimate acoustic lighting, and plush booth comfort.',
      badge: 'Climate Controlled',
    },
    {
      id: 'Bar Seating' as const,
      title: 'Bar Seating',
      description: 'Direct counter view of our master mixologists crafting botanical and liquid omakase pours.',
      badge: 'Interactive',
    },
    {
      id: 'Private Dining' as const,
      title: 'Private Dining',
      description: 'Exclusive salon dedicated to executive dinners and celebrations with personalized butler service.',
      badge: 'VIP Salon',
    },
  ];

  // Dynamic available time slots respecting operating hours
  const isWeekend = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDay();
    return day === 5 || day === 6 || day === 0; // Fri, Sat, Sun
  };

  const timeSlots = isWeekend(date)
    ? [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'
      ]
    : [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!phone.trim()) newErrors.phone = 'Please provide a valid phone number';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please provide a valid email';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomId = 'SR-' + Math.floor(100000 + Math.random() * 900000);

    const reservation: ReservationData = {
      id: randomId,
      name,
      phone,
      email,
      guests,
      date,
      time,
      seatingPreference,
      occasion,
      specialRequests,
      confirmedAt: new Date().toISOString(),
    };

    onSuccess(reservation);
  };

  return (
    <section id="reservation" className="py-24 bg-[#141414] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Table Reservations · SORA Aerocity
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Operating Hours: Mon – Thu 12:00 PM – 11:30 PM · Fri – Sun 12:00 PM – 1:00 AM. 
            For parties over 12 guests, our private events concierge will gladly assist.
          </p>
        </div>

        {/* Reservation Form Container */}
        <div className="max-w-4xl mx-auto bg-[#181818] border border-[#2A2A2A] rounded-sm p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. Seating Preference Selectors */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A3A3A3] font-semibold block mb-3">
                1. Select Seating Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {seatingOptions.map((opt) => {
                  const isSelected = seatingPreference === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSeatingPreference(opt.id)}
                      className={`p-4 rounded-sm border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1E1E1E] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : 'bg-[#141414] border-[#262626] hover:border-[#383838]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-serif text-sm font-semibold text-[#F8F8F8]">
                            {opt.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#888888] leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#222222] text-[10px] text-[#D4AF37] uppercase tracking-wider font-mono">
                        {opt.badge}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Date, Time & Guest Count */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A3A3A3] font-semibold block mb-3">
                2. Party Size & Schedule
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Guests */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none font-mono"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Guest Contact Details */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A3A3A3] font-semibold block mb-3">
                3. Primary Guest Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full bg-[#121212] border rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-[#2E2E2E] focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-[#121212] border rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-[#2E2E2E] focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#121212] border rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-[#2E2E2E] focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>
              </div>
            </div>

            {/* 4. Occasion & Special Requests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5">
                  Dining Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none"
                >
                  <option value="Casual Fine Dining">Casual Fine Dining / Rooftop Evening</option>
                  <option value="Executive Dinner">Executive Business Dinner</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Aviation Flight Watching">Runway Sunset Watching</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#777777] block mb-1.5">
                  Dietary Preferences / Special Requests
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vegetarian only, shellfish allergy, high table"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#F8F8F8] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#8E8E8E] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Instant confirmation · No cancellation fee up to 2 hours prior</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-all duration-200 shadow-[0_4px_16px_rgba(212,175,55,0.25)]"
              >
                Confirm Table Reservation
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
