import React, { useContext } from 'react';
import Nav from 'components/common/nav';
import Items from './items';
import { CartContext } from 'context/CartContext';
import { CartContextValue } from 'types/data';

export function Home() {
  //   const { addToCart } = useContext(CartContext) as CartContextValue;

  return (
    <div>
      <Nav />
      <div className='ml-10'>
        <Items />
      </div>
    </div>
  );
}
