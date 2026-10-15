export interface MenuItem {
  id: string;
  name: string;
  japaneseName?: string;
  category: 'sushi' | 'robatayaki' | 'small-plates' | 'mains' | 'desserts';
  description: string;
  price: number;
  dietary?: ('gf' | 'veg' | 'non-veg' | 'signature')[];
  spiceLevel?: number;
  chefRecommended?: boolean;
  pairingNote?: string;
  image?: string;
}

export interface CocktailItem {
  id: string;
  name: string;
  subtitle: string;
  ingredients: string[];
  flavorProfile: string;
  spiritBase: string;
  price: number;
  alcoholFree?: boolean;
  notes: string;
  garnish: string;
}

export interface ReservationData {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  seatingPreference: 'Indoor Lounge' | 'Runway Terrace' | 'Bar Seating' | 'Private Dining';
  specialRequests?: string;
  occasion?: string;
  confirmedAt?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'interior' | 'terrace' | 'sushi' | 'cocktails' | 'dishes' | 'runway';
  description: string;
  src: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  quote: string;
  experienceTag: string;
}

export interface LiveFlight {
  flightNo: string;
  airline: string;
  destination: string;
  status: 'Ascending' | 'On Approach' | 'Cruising Overhead';
  aircraft: string;
  runway: string;
  time: string;
}
