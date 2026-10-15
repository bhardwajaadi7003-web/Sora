/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { LiveRunwayRadar } from './components/LiveRunwayRadar';
import { MenuSection } from './components/MenuSection';
import { BarSection } from './components/BarSection';
import { ChefSpecials } from './components/ChefSpecials';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { EventsSection } from './components/EventsSection';
import { PrivilegeClub } from './components/PrivilegeClub';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { TastingCartDrawer } from './components/TastingCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ReservationSuccessModal } from './components/ReservationSuccessModal';
import { SplashScreen } from './components/SplashScreen';
import { AppDownloadModal } from './components/AppDownloadModal';
import { MenuItem, CocktailItem, ReservationData } from './types';

interface CartItem {
  item: MenuItem | CocktailItem;
  quantity: number;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);
  const [prefillBooking, setPrefillBooking] = useState<{
    guests?: number;
    date?: string;
    time?: string;
    seatingPreference?: 'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining';
    specialRequests?: string;
  } | undefined>(undefined);

  // Cart operations
  const handleAddToCart = (item: MenuItem | CocktailItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleOpenReservation = (prefill?: {
    guests?: number;
    date?: string;
    time?: string;
    seatingPreference?: 'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining';
    specialRequests?: string;
  }) => {
    if (prefill) {
      setPrefillBooking(prefill);
    }
    setIsReservationModalOpen(true);
  };

  const handleReservationSuccess = (res: ReservationData) => {
    setIsReservationModalOpen(false);
    setConfirmedReservation(res);
  };

  const handleProceedFromCart = (curatedSummary: string) => {
    setIsCartOpen(false);
    handleOpenReservation({
      specialRequests: `Curated Table Pre-Selection: ${curatedSummary}`,
    });
  };

  const handleSelectRunwayBooking = () => {
    handleOpenReservation({
      seatingPreference: 'Runway Terrace',
      specialRequests: 'Guaranteed runway tarmac view requested for flight observation.',
    });
  };

  const handleSelectSpecialForTable = (title: string) => {
    handleOpenReservation({
      specialRequests: `Chef's Special Request: ${title}`,
    });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F8F8F8] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F8F8F8]">
      {showSplash ? (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Top Bar Navigation (Strict 3-Zone Contract) */}
          <Navbar
            onOpenReservation={() => handleOpenReservation()}
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenAppModal={() => setIsAppModalOpen(true)}
          />

          {/* Hero Experience */}
          <main className="flex-1">
            <Hero
              onOpenReservation={handleOpenReservation}
              onExploreMenu={scrollToMenu}
            />

            {/* About & 3 USPs */}
            <AboutStory />

            {/* Runway Horizon & Aviation Atmosphere */}
            <LiveRunwayRadar onSelectRunwayBooking={handleSelectRunwayBooking} />

            {/* Menu Collection */}
            <MenuSection
              onAddToCart={handleAddToCart}
              cartItemIds={cart.map((c) => c.item.id)}
            />

            {/* Botanical Omakase Bar */}
            <BarSection
              onAddCocktailToTasting={(cocktail) => {
                handleAddToCart(cocktail);
                setIsCartOpen(true);
              }}
            />

            {/* Chef's Specials */}
            <ChefSpecials
              onSelectSpecialForTable={handleSelectSpecialForTable}
            />

            {/* Visual Gallery with Lightbox */}
            <GallerySection />

            {/* Inline Table Reservation Section */}
            <ReservationSection
              onSuccess={handleReservationSuccess}
              prefill={prefillBooking}
            />

            {/* Private Dining & Events (85-guest capacity) */}
            <EventsSection />

            {/* Privilege Club Loyalty Program */}
            <PrivilegeClub />

            {/* Reviews & Testimonials */}
            <ReviewsSection />

            {/* Location & Operating Hours */}
            <LocationHours />
          </main>

          {/* Footer */}
          <Footer
            onOpenReservation={() => handleOpenReservation()}
            onOpenAppModal={() => setIsAppModalOpen(true)}
          />

          {/* Tasting Cart Drawer */}
          <TastingCartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onProceedToBooking={handleProceedFromCart}
          />

          {/* Reservation Modal */}
          <ReservationModal
            isOpen={isReservationModalOpen}
            onClose={() => setIsReservationModalOpen(false)}
            onSuccess={handleReservationSuccess}
            prefill={prefillBooking}
          />

          {/* Reservation Confirmation Pass Modal */}
          {confirmedReservation && (
            <ReservationSuccessModal
              reservation={confirmedReservation}
              onClose={() => setConfirmedReservation(null)}
            />
          )}

          {/* App & APK Download Guide Modal */}
          <AppDownloadModal
            isOpen={isAppModalOpen}
            onClose={() => setIsAppModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
