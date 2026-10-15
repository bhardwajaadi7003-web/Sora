import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Star, MessageSquarePlus, Check } from 'lucide-react';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newTag, setNewTag] = useState('Runway Terrace Dining');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthor.trim() && newQuote.trim()) {
      const added: ReviewItem = {
        id: 'rev-' + Date.now(),
        author: newAuthor,
        role: newRole || 'Food & Dining Enthusiast',
        rating: 5,
        date: 'Today',
        quote: newQuote,
        experienceTag: newTag,
      };
      setReviewsList([added, ...reviewsList]);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowReviewModal(false);
        setNewAuthor('');
        setNewRole('');
        setNewQuote('');
      }, 1500);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-[#121212] relative border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Guest Testimonials · Aerocity Accolades
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F8F8] tracking-tight [text-wrap:balance]">
              Words Above The Clouds
            </h2>
          </div>
          <button
            onClick={() => setShowReviewModal(true)}
            className="self-start md:self-auto px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 rounded-sm transition-colors flex items-center gap-2"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" /> Share Your Experience
          </button>
        </div>

        {/* 3 Prominent Pitch-Deck Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-[#181818] border border-[#262626] rounded-sm p-7 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#F8F8F8] font-serif italic mb-6 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <div className="text-xs font-semibold text-[#F8F8F8]">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#888888] mt-0.5">
                  {review.role}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#D4AF37] mt-2 font-mono">
                  {review.experienceTag} · {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Dialog */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-[#121212]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#181818] border border-[#2E2E2E] rounded-sm p-6 shadow-2xl">
            {submitted ? (
              <div className="text-center py-6">
                <Check className="w-10 h-10 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="text-lg font-serif font-bold text-[#F8F8F8]">Thank You!</h4>
                <p className="text-xs text-[#A3A3A3] mt-1">Your review has been shared.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                  <h3 className="text-lg font-serif font-semibold text-[#F8F8F8]">
                    Share Your SORA Experience
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="text-[#777777] hover:text-[#F8F8F8] text-sm"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohini Sen"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Designation / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Resident of Delhi NCR"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Experience Area
                  </label>
                  <select
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none"
                  >
                    <option value="Runway Terrace Dining">Runway Terrace Dining</option>
                    <option value="Sushi Counter Omakase">Sushi Counter Omakase</option>
                    <option value="Botanical Cocktail Bar">Botanical Cocktail Bar</option>
                    <option value="Private Dining Salon">Private Dining Salon</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Your Testimonial *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="What made your evening above the clouds special?"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2E2E2E] rounded-sm px-3 py-2 text-xs text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs text-[#888888] hover:text-[#F8F8F8]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
