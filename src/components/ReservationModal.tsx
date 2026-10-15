import React from 'react';
import { ReservationSection } from './ReservationSection';
import { ReservationData } from '../types';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (reservation: ReservationData) => void;
  prefill?: {
    guests?: number;
    date?: string;
    time?: string;
    seatingPreference?: 'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining';
    specialRequests?: string;
  };
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  prefill,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#181818] border border-[#2E2E2E] rounded-sm shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#A3A3A3] hover:text-[#F8F8F8] p-2 bg-[#121212]/80 rounded-full border border-[#2E2E2E] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pt-4">
          <ReservationSection
            onSuccess={(res) => {
              onSuccess(res);
            }}
            prefill={prefill}
          />
        </div>
      </div>
    </div>
  );
};
