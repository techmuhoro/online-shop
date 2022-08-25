import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from 'context/CartContext';
import { CartContextValue } from 'types/data';
import { useRouter } from 'next/router';

export default function CartQty() {
  const router = useRouter();
  const { cart } = useContext(CartContext) as CartContextValue;
  return (
    <div
      className='relative cursor-pointer'
      onClick={() => router.push('/cart')}
    >
      <p className='text-2xl absolute top-0 left-0'>
        <FontAwesomeIcon icon={faShoppingCart} />
      </p>
      <p className='bg-red-500 w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[12px] font-semibold absolute -top-2 left-[17px]'>
        {cart.length}
      </p>
    </div>
  );
}
