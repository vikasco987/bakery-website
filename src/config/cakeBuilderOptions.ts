export interface CakeSize {
  id: string;
  label: string;
  servesText: string;
  basePrice: number;
}

export interface CakeFlavor {
  id: string;
  name: string;
  extraPrice: number;
  isEggless: boolean;
}

export interface CakeFilling {
  id: string;
  name: string;
  extraPrice: number;
}

export const CAKE_SIZES: CakeSize[] = [
  { id: 'sz-500g', label: '0.5 kg', servesText: 'Serves 2-4', basePrice: 449 },
  { id: 'sz-1kg',  label: '1 kg',   servesText: 'Serves 4-6', basePrice: 799 },
  { id: 'sz-1_5kg',label: '1.5 kg', servesText: 'Serves 8-10',basePrice: 1149 },
  { id: 'sz-2kg',  label: '2 kg',   servesText: 'Serves 12-15',basePrice: 1499 },
];

export const CAKE_FLAVORS: CakeFlavor[] = [
  { id: 'fl-choco',   name: 'Chocolate Truffle', extraPrice: 0,   isEggless: true },
  { id: 'fl-redvel',  name: 'Red Velvet',        extraPrice: 100, isEggless: true },
  { id: 'fl-black',   name: 'Black Forest',      extraPrice: 0,   isEggless: false },
  { id: 'fl-rose',    name: 'Rose Pistachio',    extraPrice: 150, isEggless: true },
  { id: 'fl-mango',   name: 'Mango Delight',     extraPrice: 50,  isEggless: true },
  { id: 'fl-butter',  name: 'Butterscotch',      extraPrice: 0,   isEggless: false },
];

export const CAKE_FILLINGS: CakeFilling[] = [
  { id: 'fill-cream', name: 'Fresh Cream', extraPrice: 0 },
  { id: 'fill-choco', name: 'Choco Chip',  extraPrice: 50 },
  { id: 'fill-fruit', name: 'Fresh Fruit', extraPrice: 80 },
  { id: 'fill-nut',   name: 'Roasted Nuts', extraPrice: 60 },
];
