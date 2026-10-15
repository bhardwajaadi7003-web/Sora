import React, { useState } from 'react';
import { Users, Briefcase, PartyPopper, Sparkles, Check, Send } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const EventsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [eventType, setEventType] = useState('Corporate Gatherings');
  const [guestCount, setGuestCount] = useState('40');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');

  const eventTypes = [
    'Corporate Gatherings',
    'Executive Dinners',
    'Birthday Celebrations',
    'Anniversary Events',
    'Product Launches',
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="events" className="py-24 bg-[#121212] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Private Dining & Sky Celebrations
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Exclusive Events Above The Skyline
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            With full rooftop buyout capacity of up to 85 guests, SORA delivers bespoke Pan-Asian banquets, customized liquid omakase bars, and private runway viewing suites.
          </p>
        </div>

        {/* 2-Column Content + Inquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Event Archetypes & Capacity Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Banner */}
            <div className="relative rounded-sm overflow-hidden border border-[#2E2E2E] h-72">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="SORA Private Events Salon"
                fallbackCategory="interior"
                fallbackTitle="Private Dining Salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Venue Capacity
                  </span>
                  <span className="text-lg font-serif font-semibold text-[#F8F8F8]">
                    Up to 85 Seated & Cocktail Guests
                  </span>
                </div>
                <div className="px-3 py-1 bg-[#121212]/90 backdrop-blur-md border border-[#333333] rounded-sm text-xs font-mono text-[#D4AF37]">
                  FULL BUYOUT AVAILABLE
                </div>
              </div>
            </div>

            {/* List of ideal event types */}
            <div className="bg-[#181818] border border-[#262626] rounded-sm p-6 space-y-4">
              <h3 className="text-base font-serif font-semibold text-[#F8F8F8]">
                Ideal For Discerning Gatherings:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2.5 text-xs text-[#C5C5C5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services included */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#161616] border border-[#222222] rounded-sm">
                <span className="text-base font-serif font-semibold text-[#D4AF37] block">Bespoke</span>
                <span className="text-[10px] uppercase text-[#777777] tracking-wider">Tasting Menus</span>
              </div>
              <div className="p-3 bg-[#161616] border border-[#222222] rounded-sm">
                <span className="text-base font-serif font-semibold text-[#D4AF37] block">Dedicated</span>
                <span className="text-[10px] uppercase text-[#777777] tracking-wider">Sommelier & Butler</span>
              </div>
              <div className="p-3 bg-[#161616] border border-[#222222] rounded-sm">
                <span className="text-base font-serif font-semibold text-[#D4AF37] block">Audiovisual</span>
                <span className="text-[10px] uppercase text-[#777777] tracking-wider">Acoustic Setup</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Event Request Form */}
          <div className="lg:col-span-6 bg-[#161616] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#F8F8F8]">
                  Event Inquiry Received
                </h3>
                <p className="text-xs text-[#A3A3A3] max-w-sm mx-auto leading-relaxed">
                  Thank you, {contactName}. Our private dining concierge will contact you within 4 business hours with custom menu layouts and availability.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm hover:bg-[#D4AF37]/10"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="pb-3 border-b border-[#242424]">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Curate Your Private Event
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#F8F8F8] mt-1">
                    Event Concierge Request
                  </h3>
                </div>

                {/* Event Category */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                    Estimated Guests (Max 85)
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  >
                    <option value="15-25">15 – 25 Guests (Private Dining Salon)</option>
                    <option value="25-45">25 – 45 Guests (Sky Terrace Wing)</option>
                    <option value="45-85">45 – 85 Guests (Full Venue Buyout)</option>
                  </select>
                </div>

                {/* Organizer Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                      Host Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98111 22334"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                    Corporate / Personal Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="events@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5 font-medium">
                    Bespoke Requests & Dietary Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific date window, custom cocktail station, audio requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Event Proposal
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
