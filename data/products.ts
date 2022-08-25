import { Product } from 'types/data';

export const products: Product[] = [
  {
    id: 1,
    name: 'Vermiliquid',
    price: '500',
    description: 'Liquid feterliser',
    prices: [
      { qty: '500ml', price: '500' },
      { qty: '1ltr', price: '800' },
    ],
  },
  {
    id: 2,
    name: 'Vericompost',
    price: '1500',
    description: 'Solid feterliser',
    prices: '1500',
  },
];
