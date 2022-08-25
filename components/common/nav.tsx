import React from 'react';
import CartQty from 'components/widgets/cart-qty';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  return (
    <div className='mb-10 px-10 py-6 flex gap-x-5'>
      <p
        className='font-bold text-2xl capitalize cursor-pointer'
        onClick={() => router.push('/')}
      >
        Sprout organic
      </p>
      <CartQty />
    </div>
  );
}
