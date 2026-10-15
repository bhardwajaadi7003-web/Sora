import React from 'react';
import { MenuItem, CocktailItem } from '../types';
import { X, Trash2, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

interface CartItem {
  item: MenuItem | CocktailItem;
  quantity: number;
}

interface TastingCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToBooking: (curatedSummary: string) => void;
}

export const TastingCartDrawer: React.FC<TastingCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, current) => acc + current.item.price * current.quantity, 0);

  const handleProceed = () => {
    const summary = cart
      .map((c) => `${c.quantity}x ${c.item.name}`)
      .join(', ');
    onProceedToBooking(summary);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#161616] border-l border-[#2E2E2E] h-full flex flex-col justify-between shadow-2xl animate-slideLeft"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#262626] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="text-base font-serif font-bold text-[#F8F8F8]">
                Curated Table Tasting
              </h3>
              <span className="text-[10px] uppercase text-[#D4AF37] tracking-wider block font-mono">
                {cart.length} {cart.length === 1 ? 'Selection' : 'Selections'} Pre-Selected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A3A3A3] hover:text-[#F8F8F8] transition-colors"
            aria-label="Close tasting drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-[#777777] mx-auto">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#F8F8F8] font-serif font-medium">
                Your Tasting Selection is Empty
              </p>
              <p className="text-xs text-[#888888] max-w-xs mx-auto">
                Explore our Sushi, Robatayaki, or Botanical Cocktails to pre-select dishes for your table.
              </p>
            </div>
          ) : (
            cart.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="p-3.5 bg-[#121212] border border-[#222222] rounded-sm flex items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-serif font-semibold text-[#F8F8F8] truncate">
                    {item.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#D4AF37] mt-0.5">
                    ₹{(item.price * quantity).toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 border border-[#333333] rounded-sm bg-[#1A1A1A] px-2 py-1">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="text-xs text-[#A3A3A3] hover:text-[#F8F8F8] px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-mono text-[#F8F8F8] px-1 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="text-xs text-[#A3A3A3] hover:text-[#F8F8F8] px-1"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1 text-[#666666] hover:text-red-400 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#262626] bg-[#141414] space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-[#A3A3A3] uppercase tracking-wider">
                Estimated Tasting Subtotal
              </span>
              <span className="font-mono text-lg text-[#D4AF37] font-bold tabular-nums">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-[10px] text-[#777777] leading-relaxed">
              *Taxes and discretionary service applicable at billing. This pre-selection will be shared directly with your table chef.
            </p>

            <button
              onClick={handleProceed}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book Table With This Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
