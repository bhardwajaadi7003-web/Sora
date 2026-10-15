import { MenuItem, CocktailItem, GalleryPhoto, ReviewItem, LiveFlight } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Sushi & Sashimi
  {
    id: 'sushi-1',
    name: 'Salmon Nigiri',
    japaneseName: 'サーモン 握り',
    category: 'sushi',
    description: 'Fresh Norwegian Atlantic salmon over seasoned Koshihikari rice, brushed with nikiri shoyu glaze and micro-shiso.',
    price: 950,
    dietary: ['signature', 'non-veg'],
    chefRecommended: true,
    pairingNote: 'Pairs flawlessly with Cloud Nine or dry Junmai Daiginjo.',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sushi-2',
    name: 'Tuna Nigiri',
    japaneseName: '本マグロ 握り',
    category: 'sushi',
    description: 'Sustainably sourced Bluefin Akami tuna, truffle-infused aged tamari, spring scallion, and fresh Shizuoka wasabi.',
    price: 1150,
    dietary: ['signature', 'non-veg'],
    chefRecommended: true,
    pairingNote: 'Recommended with Runway Sunset cocktail.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sushi-3',
    name: 'Hamachi Sashimi',
    japaneseName: 'ハマチ 刺身',
    category: 'sushi',
    description: 'Yellowtail amberjack sashimi slices bathed in yuzu ponzu pearls, thinly shaved serrano chili, and micro-coriander.',
    price: 1350,
    dietary: ['gf', 'non-veg'],
    pairingNote: 'Pairs with crisp dry sparkling sake.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sushi-4',
    name: 'Dragon Roll',
    japaneseName: 'ドラゴンロール',
    category: 'sushi',
    description: 'Crispy tiger prawn tempura, avocado blanket, unagi glaze, spicy togarashi aioli, and orange tobiko roe.',
    price: 1250,
    dietary: ['signature', 'non-veg'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sushi-5',
    name: 'California Roll',
    japaneseName: 'カリフォルニアロール',
    category: 'sushi',
    description: 'Hand-picked Alaskan snow crab, ripe Hass avocado, English cucumber, and toasted white sesame seeds.',
    price: 1100,
    dietary: ['non-veg'],
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sushi-6',
    name: 'Spicy Tuna Roll',
    japaneseName: 'スパイシーツナロール',
    category: 'sushi',
    description: 'Chopped yellowfin tuna, house chili togarashi blend, scallions, and crisp puffed rice pearls for texture.',
    price: 1050,
    dietary: ['non-veg'],
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
  },

  // Robatayaki
  {
    id: 'robata-1',
    name: 'Chicken Yakitori',
    japaneseName: '焼き鳥',
    category: 'robatayaki',
    description: 'Succulent free-range chicken thigh skewered with Tokyo negi scallions, basted with 18-year master tare sauce over Kishu white charcoal.',
    price: 850,
    dietary: ['non-veg'],
    chefRecommended: true,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robata-2',
    name: 'Lamb Robata',
    japaneseName: '子羊の炉端焼き',
    category: 'robatayaki',
    description: 'New Zealand prime lamb chops marinated in red Hatcho miso, Japanese sansho pepper, and charred garlic butter.',
    price: 1650,
    dietary: ['signature', 'non-veg'],
    chefRecommended: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robata-3',
    name: 'Salmon Robata',
    japaneseName: 'サーモン 炉端焼き',
    category: 'robatayaki',
    description: 'Atlantic salmon steak slowly grilled over glowing embers, brushed with ginger-mirin glaze and served with charred kaffir lime.',
    price: 1450,
    dietary: ['gf', 'non-veg'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robata-4',
    name: 'Prawn Robata',
    japaneseName: '海老 炉端焼き',
    category: 'robatayaki',
    description: 'Jumbo bay tiger prawns grilled in shell with wild shiso garlic butter, smoked Maldon salt, and yuzu kosho.',
    price: 1550,
    dietary: ['gf', 'non-veg'],
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robata-5',
    name: 'Mushroom Skewers',
    japaneseName: '茸 串焼き',
    category: 'robatayaki',
    description: 'Forest Shiitake, Maitake, and King Oyster mushrooms lacquered with sweet tamari reduction and cultured yuzu butter.',
    price: 750,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robata-6',
    name: 'Charred Corn',
    japaneseName: '焼きとうもろこし',
    category: 'robatayaki',
    description: 'Sweet American corn cob charred on open charcoal, brushed with white miso butter, togarashi chili, and crumbled nori.',
    price: 650,
    dietary: ['veg', 'gf'],
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
  },

  // Small Plates
  {
    id: 'small-1',
    name: 'Edamame',
    japaneseName: '枝豆',
    category: 'small-plates',
    description: 'Steamed tender green pods tossed with your choice of flaky sea salt or fiery smoked chili garlic oil.',
    price: 550,
    dietary: ['veg', 'gf'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'small-2',
    name: 'Gyoza',
    japaneseName: '手作り 餃子',
    category: 'small-plates',
    description: 'Artisan hand-pleated dumplings with crispy lace skirt, filled with Berkshire pork or truffle-scented edamame, Zhenjiang vinegar.',
    price: 750,
    dietary: ['signature'],
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'small-3',
    name: 'Tempura Vegetables',
    japaneseName: '野菜の天ぷら',
    category: 'small-plates',
    description: 'Airy, feather-light batter encompassing asparagus, sweet potato, lotus root, and shiso leaf, served with warm dashi broth.',
    price: 700,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'small-4',
    name: 'Crispy Lotus Stem',
    japaneseName: '蓮根クリスピー',
    category: 'small-plates',
    description: 'Thinly shaved lotus stems crisped golden, tossed in honeycomb glaze, togarashi, and crushed roasted peanuts.',
    price: 650,
    dietary: ['veg'],
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },

  // Signature Mains
  {
    id: 'main-1',
    name: 'Miso Black Cod',
    japaneseName: '銀鱈の西京焼き',
    category: 'mains',
    description: 'Deep-sea Alaskan black cod marinated for 72 hours in organic Kyoto Saikyo sweet miso, charred over binchotan with ginger shoots.',
    price: 2650,
    dietary: ['signature', 'non-veg', 'gf'],
    chefRecommended: true,
    pairingNote: 'SORA’s pinnacle signature dish. Pairs exquisitely with Tokyo Sky cocktail.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'main-2',
    name: 'Teriyaki Chicken',
    japaneseName: '照り焼きチキン',
    category: 'mains',
    description: 'Slow-poached chicken breast glazed with artisan dark teriyaki, served alongside baby bok choy and steamed jasmine rice.',
    price: 1250,
    dietary: ['non-veg'],
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'main-3',
    name: 'Japanese Curry Rice',
    japaneseName: '和風カレーライス',
    category: 'mains',
    description: 'Rich slow-cooked Tokyo style curry infused with caramelized onions and apple, served with crispy cutlet and red fukujinzuke pickles.',
    price: 1150,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'main-4',
    name: 'Wagyu Fried Rice',
    japaneseName: '和牛チャーハン',
    category: 'mains',
    description: 'A5 Miyazaki Wagyu beef rendered into high-flame wok-tossed Koshihikari grains, scallion confit, and organic pasture egg yolk.',
    price: 1850,
    dietary: ['signature', 'non-veg'],
    chefRecommended: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'main-5',
    name: 'Udon Noodles',
    japaneseName: '讃岐うどん',
    category: 'mains',
    description: 'Handmade thick Sanuki noodles in rich golden kombu broth, topped with tempura crunch, slow-simmered mushrooms, and nori ribbon.',
    price: 1100,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Matcha Cheesecake',
    japaneseName: '宇治抹茶チーズケーキ',
    category: 'desserts',
    description: 'Basque-style velvety cheesecake made with ceremonial Uji matcha, toasted black sesame crumble, and matcha mist.',
    price: 750,
    dietary: ['veg', 'signature'],
    chefRecommended: true,
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dessert-2',
    name: 'Yuzu Tart',
    japaneseName: '柚子タルト',
    category: 'desserts',
    description: 'Crisp sable shell with bright Miyazaki yuzu curd, torched Swiss meringue, and candied shiso leaf.',
    price: 700,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dessert-3',
    name: 'Mochi Ice Cream',
    japaneseName: 'もちアイス三種',
    category: 'desserts',
    description: 'Artisanal sweet rice dough wrapped around house-churned ice cream: roasted black sesame, Kyoto matcha, and toasted coconut.',
    price: 650,
    dietary: ['veg', 'gf'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dessert-4',
    name: 'Black Sesame Cremeux',
    japaneseName: '黒胡麻クレムー',
    category: 'desserts',
    description: 'Silky dark sesame ganache, red miso caramel swirl, edible gold leaf, and airy Japanese sponge tuile.',
    price: 800,
    dietary: ['veg', 'signature'],
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
  }
];

export const COCKTAILS: CocktailItem[] = [
  {
    id: 'cocktail-1',
    name: 'Runway Sunset',
    subtitle: 'Yuzu, Gin, Citrus',
    ingredients: ['Roku Japanese Gin', 'Fresh Yuzu Cordial', 'Campari Aperitivo', 'Blood Orange Mist', 'Edible Orchid'],
    flavorProfile: 'Bright, citrus-forward, balanced bittersweet finish',
    spiritBase: 'Roku Japanese Gin',
    price: 1100,
    notes: 'Crafted to capture the golden dusk hues flooding Aerocity’s runways at sunset.',
    garnish: 'Dehydrated blood orange wheel & wild orchid'
  },
  {
    id: 'cocktail-2',
    name: 'Tokyo Sky',
    subtitle: 'Japanese Whisky, Smoked Tea',
    ingredients: ['Hibiki Japanese Harmony Malt', 'Charred Houjicha Smoked Tea Infusion', 'Black Walnut Bitters', 'Hinoki Wood Spray'],
    flavorProfile: 'Rich, peaty, complex umami smoke with warm grain',
    spiritBase: 'Japanese Malt Whisky',
    price: 1450,
    notes: 'Served in hand-carved crystal over a single stamped ice sphere.',
    garnish: 'Charred Japanese cedar twist & flamed orange peel'
  },
  {
    id: 'cocktail-3',
    name: 'Aerocity Bloom',
    subtitle: 'Vodka, Shiso, Floral Essence',
    ingredients: ['Haku Rice Vodka', 'Muddled Fresh Purple Shiso', 'Lychee Liqueur', 'Elderflower Liqueur', 'Pressed Lime'],
    flavorProfile: 'Fragrant botanical, delicate floral, refreshingly crisp',
    spiritBase: 'Haku Rice Vodka',
    price: 1050,
    notes: 'Inspired by the vibrant botanical rooftop garden surrounding SORA’s terrace.',
    garnish: 'Fresh garden shiso leaf & delicate micro-rose'
  },
  {
    id: 'cocktail-4',
    name: 'Sakura Smoke',
    subtitle: 'Whisky, Cherry Blossom, Smoke',
    ingredients: ['Nikka From The Barrel', 'House Sakura Blossom Vermouth', 'Maraschino', 'Cherrywood Smoke Cloche'],
    flavorProfile: 'Bold, smoky, nuanced cherry aroma with velvety finish',
    spiritBase: 'Nikka Japanese Whisky',
    price: 1550,
    notes: 'Presented table-side in a glass cloche swirling with aromatic cherry wood smoke.',
    garnish: 'Smoked luxardo cherry on golden skewer'
  },
  {
    id: 'cocktail-5',
    name: 'Cloud Nine',
    subtitle: 'Gin, Elderflower, Sparkling Wine',
    ingredients: ['Ki No Bi Kyoto Gin', 'St-Germain Elderflower', 'Clarified Lemon', 'Prosecco Superiore Float', 'Spun Yuzu Vapor Cloud'],
    flavorProfile: 'Effervescent, buoyant, sparkling celebrations above the clouds',
    spiritBase: 'Kyoto Dry Gin',
    price: 1250,
    notes: 'Finished with a light aromatic yuzu smoke bubble that bursts gently before your first sip.',
    garnish: 'Aromatic citrus smoke sphere'
  }
];

export const CHEF_SPECIALS = [
  {
    id: 'spec-1',
    title: 'Omakase Sushi Selection',
    subtitle: 'Chef’s Daily Catch from Toyosu Market',
    description: 'An exclusive eight-piece artisan journey featuring Otoro, Uni, Botan Ebi, Hamachi, and King Salmon, served with freshly grated Shizuoka wasabi and house-brewed aged nikiri.',
    tagline: 'Artisan Nigiri Flight',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    highlight: 'Imported fresh weekly from Japan'
  },
  {
    id: 'spec-2',
    title: 'Binchotan Grilled Salmon',
    subtitle: 'Authentic White Charcoal Grilling',
    description: 'Wild Alaskan salmon slow-grilled over Japanese Kishu binchotan coals at 1000°C for an impossibly crisp skin and succulent, melt-in-mouth center infused with delicate oak smoke.',
    tagline: 'Ancestral Robata Heritage',
    price: 1750,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    highlight: 'Kishu Binchotan White Charcoal'
  },
  {
    id: 'spec-3',
    title: 'Wagyu Fried Rice',
    subtitle: 'Miyazaki A5 Beef & Koshihikari Rice',
    description: 'Wok-charred short grain rice seasoned with rendered A5 Wagyu fat, crispy garlic cloves, scallion oil, and crowned with a golden pasture egg yolk ready to be gently mixed at your table.',
    tagline: 'Culinary Decadence',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    highlight: 'A5 Miyazaki Wagyu Ribeye'
  },
  {
    id: 'spec-4',
    title: 'Miso Black Cod',
    subtitle: '72-Hour Saikyo Cured Delicacy',
    description: 'Our most lauded culinary masterpiece. Silky black cod steeped for three days in Kyoto white sweet miso, mirin, and sake, then caramelized to a golden charred crust.',
    tagline: 'Global Gastronomy Classic',
    price: 2650,
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80',
    highlight: 'Kyoto Saikyo White Miso'
  },
  {
    id: 'spec-5',
    title: 'Matcha Tiramisu',
    subtitle: 'Hokkaido Mascarpone & Ceremonial Matcha',
    description: 'Light savoiardi soaked in cold-brewed sencha green tea, layered with cloud-like whipped Hokkaido mascarpone and generously dusted with first-harvest Uji ceremonial matcha.',
    tagline: 'Sweet Zen Finale',
    price: 850,
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
    highlight: 'First-Harvest Uji Ceremonial Matcha'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Rooftop Runway Sky Deck at Twilight',
    category: 'runway',
    description: 'Panoramic views across Indira Gandhi International Airport runways as aircraft ascend into the sunset sky.',
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Architectural Dining Salon',
    category: 'interior',
    description: 'Sleek charred Yakisugi timber, brushed matte gold fixtures, and custom designer stone banquet tables.',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-3',
    title: 'Open Flame Binchotan Grill',
    category: 'dishes',
    description: 'White Kishu charcoal radiating intense smokeless heat for signature yakitori and seafood.',
    src: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'gal-4',
    title: 'Interactive Live Sushi Counter',
    category: 'sushi',
    description: 'Guests seated front-row observing master sushi chefs slice Toyosu fish with precision Yanagiba knives.',
    src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'gal-5',
    title: 'The Botanical Cocktail Bar',
    category: 'cocktails',
    description: 'Curated Japanese whiskies, botanical infusions, ice sculpting, and bespoke omakase libations.',
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-6',
    title: 'Worldmark 3 Sky Terrace Seating',
    category: 'terrace',
    description: 'Open-air high-altitude seating surrounded by lush bamboo planters and subtle glowing fire bowls.',
    src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-7',
    title: 'Miso Black Cod Plating',
    category: 'dishes',
    description: 'Signature Saikyo miso cod presented on bespoke dark volcanic stoneware with edible botanical herbs.',
    src: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'gal-8',
    title: 'Sakura Smoke Cloche Presentation',
    category: 'cocktails',
    description: 'Table-side infusion with aromatic cherry wood vapor revealed under crystal glassware.',
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aditya Vardhan',
    role: 'Managing Director, Global Capital Partners',
    rating: 5,
    date: 'September 2026',
    quote: 'The best rooftop dining experience in Aerocity. The Miso Black Cod is unmatched in Delhi, and sipping the Tokyo Sky cocktail while watching Boeing 777s take off over the horizon is truly unforgettable.',
    experienceTag: 'Runway Terrace Dining'
  },
  {
    id: 'rev-2',
    author: 'Kavita Sengupta',
    role: 'Culinary Editor & Sommelier',
    rating: 5,
    date: 'August 2026',
    quote: 'Outstanding sushi and incredible runway views. The precision at the live sushi counter rivals top ginza counters, and the binchotan robata charcoal grilling imparts a sublime aroma.',
    experienceTag: 'Sushi Counter Omakase'
  },
  {
    id: 'rev-3',
    author: 'Marcus Lindemann',
    role: 'Aviation Executive & International Traveler',
    rating: 5,
    date: 'September 2026',
    quote: 'Luxury hospitality with exceptional cocktails. Located right at Worldmark 3, this has become our default venue for high-stakes business dinners and leisurely weekend evenings.',
    experienceTag: 'Private Dining & Lounge'
  }
];

export const LIVE_FLIGHTS: LiveFlight[] = [
  {
    flightNo: 'JL 740',
    airline: 'Japan Airlines',
    destination: 'Tokyo (NRT)',
    status: 'Ascending',
    aircraft: 'Boeing 787-9 Dreamliner',
    runway: 'RWY 29L',
    time: '21:40'
  },
  {
    flightNo: 'BA 142',
    airline: 'British Airways',
    destination: 'London (LHR)',
    status: 'On Approach',
    aircraft: 'Airbus A350-1000',
    runway: 'RWY 28R',
    time: '21:55'
  },
  {
    flightNo: 'SQ 403',
    airline: 'Singapore Airlines',
    destination: 'Singapore (SIN)',
    status: 'Cruising Overhead',
    aircraft: 'Airbus A380-800',
    runway: 'RWY 11L',
    time: '22:15'
  },
  {
    flightNo: 'EK 515',
    airline: 'Emirates',
    destination: 'Dubai (DXB)',
    status: 'Ascending',
    aircraft: 'Boeing 777-300ER',
    runway: 'RWY 29R',
    time: '22:30'
  }
];

export const PRIVILEGE_BENEFITS = [
  {
    tier: 'Silver Cloud',
    threshold: 'Upon Registration',
    perks: ['Priority table booking window (48hr advance)', 'Welcome signature yuzu mocktail on arrival', 'Digital boarding pass reservation confirmation']
  },
  {
    tier: 'Gold Horizon',
    threshold: 'After 3 Visits',
    perks: ['Guaranteed Runway Terrace front-row seating', 'Complimentary Chef’s Dessert on every visit', 'Dedicated concierge direct dial line', '10% privilege privileges on private dining rooms']
  },
  {
    tier: 'Black Runway',
    threshold: 'By Invitation / Executive Dining',
    perks: ['Immediate table clearance without waitlist', 'Custom table-side Omakase pairings by Executive Chef', 'Complimentary Champagne pairing for parties of 4+', 'Early access to guest masterchef takeovers']
  }
];
