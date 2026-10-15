import React, { useState } from 'react';
import { PRIVILEGE_BENEFITS } from '../data/restaurantData';
import { Award, Crown, Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

export const PrivilegeClub: React.FC = () => {
  const [activeTier, setActiveTier] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [memberName, setMemberName] = useState('');
  const [memberPhone, setMemberPhone] = useState('');

  const benefitsList = [
    { title: 'Priority Reservations', desc: 'Secure high-demand Runway Terrace tables even during peak weekend services.' },
    { title: 'Birthday Rewards', desc: 'Complimentary celebratory champagne cloche and chef’s dessert flight.' },
    { title: 'Complimentary Dessert', desc: 'Signature Uji Matcha Cheesecake or Yuzu Tart on every return dining visit.' },
    { title: 'Early Access Events', desc: 'First invitations to guest masterchef takeovers and seasonal sake releases.' },
    { title: 'Exclusive Tasting Menus', desc: 'Access to off-menu secret omakase flights prepared table-side.' },
  ];

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (memberName.trim()) {
      setRegistered(true);
    }
  };

  return (
    <section id="privilege" className="py-24 bg-[#0F0F0F] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The SORA Privilege Club
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight mb-4 [text-wrap:balance]">
            Elevated Dining Privileges
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Designed for regular patrons and executive diners. Enjoy priority sky-deck seating, bespoke culinary surprises, and complimentary anniversary privileges.
          </p>
        </div>

        {/* 2-Column: Digital Black Card Showcase & Sign-Up */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Digital Card Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* The Luxury Metallic SORA Card */}
            <div className="w-full max-w-md aspect-[1.58/1] rounded-xl p-7 bg-gradient-to-br from-[#242424] via-[#161616] to-[#0A0A0A] border border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden flex flex-col justify-between group">
              {/* Background ambient foil lines */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Card Top */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-serif tracking-[0.2em] font-bold text-[#F8F8F8]">
                    SORA
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block mt-0.5 font-mono">
                    PRIVILEGE CLUB · 空
                  </span>
                </div>
                <Crown className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Card Center: Chip & Tier */}
              <div className="relative z-10 flex items-center justify-between my-auto">
                <div className="w-11 h-8 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#8C6D1F] border border-[#F3E5AB]/40 flex items-center justify-center opacity-85 shadow-sm">
                  <div className="w-8 h-5 border border-[#44300A]/40 rounded-sm" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-[#888888] tracking-widest block font-mono">
                    MEMBERSHIP TIER
                  </span>
                  <span className="text-sm font-serif font-bold text-[#EEDB91] tracking-wider">
                    {registered ? 'GOLD HORIZON' : 'SILVER CLOUD'}
                  </span>
                </div>
              </div>

              {/* Card Bottom: Member Name & Number */}
              <div className="relative z-10 flex items-end justify-between pt-2 border-t border-[#333333]/60">
                <div>
                  <span className="text-[9px] uppercase text-[#777777] tracking-widest block">
                    CARDHOLDER
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#F8F8F8] font-medium font-mono">
                    {registered && memberName ? memberName : 'PREMIER GUEST'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider">
                    {registered ? 'SORA-7892-DEL' : 'JOIN TODAY'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="w-full max-w-md mt-6 space-y-2">
              {PRIVILEGE_BENEFITS[activeTier].perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#A3A3A3]">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Tier Buttons */}
            <div className="flex gap-2 mt-4">
              {PRIVILEGE_BENEFITS.map((b, idx) => (
                <button
                  key={b.tier}
                  onClick={() => setActiveTier(idx)}
                  className={`px-3 py-1 text-[11px] rounded-sm transition-colors border ${
                    activeTier === idx
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-medium'
                      : 'border-[#262626] text-[#777777] hover:text-[#A3A3A3]'
                  }`}
                >
                  {b.tier}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Benefits Breakdown & Enrollment */}
          <div className="lg:col-span-6 bg-[#161616] border border-[#282828] rounded-sm p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Member Advantages
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#F8F8F8] mt-1">
                Privilege Club Entitlements
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {benefitsList.map((benefit) => (
                <div key={benefit.title} className="p-3.5 bg-[#121212] rounded-sm border border-[#222222]">
                  <div className="text-xs font-semibold text-[#F8F8F8] mb-0.5 flex items-center justify-between">
                    <span>{benefit.title}</span>
                    <span className="text-[#D4AF37] text-[10px] uppercase font-mono tracking-wider">Active</span>
                  </div>
                  <p className="text-[11px] text-[#8E8E8E] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {registered ? (
              <div className="p-5 bg-[#1F1F1F] rounded-sm border border-[#D4AF37]/50 text-center animate-fadeIn">
                <Check className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="text-base font-serif font-semibold text-[#F8F8F8]">
                  Welcome to SORA Privilege, {memberName}
                </h4>
                <p className="text-xs text-[#A3A3A3] mt-1">
                  Your privileges have been tied to {memberPhone}. Use your phone number whenever reserving tables for instant benefits.
                </p>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-3">
                <div className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                  Enroll in SORA Privilege (Complimentary)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile (+91)"
                    value={memberPhone}
                    onChange={(e) => setMemberPhone(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors"
                >
                  Join Privilege Club
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
