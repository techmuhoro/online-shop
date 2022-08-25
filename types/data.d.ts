type Price = {
  qty: string;
  price: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  prices?: Price[] | string;
};

export type CartItem = {
  id: number;
  count: number;
};

export type CartContextValue = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  isInCart: (id: number) => boolean;
  cart: CartItem[];
};
