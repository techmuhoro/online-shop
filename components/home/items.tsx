import React from 'react';
import { products } from 'data/products';
import ItemCard from 'components/common/item-card';

export default function Items() {
  return (
    <div className='flex gap-x-10'>
      {React.Children.toArray(
        products.map((item) => <ItemCard product={item} />)
      )}
    </div>
  );
}
