import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from 'context/CartContext';
import { CartContextValue, Product } from 'types/data';
import { Snackbar, Alert } from '@mui/material';
import { useRouter } from 'next/router';

export default function ItemCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const { addToCart, isInCart } = useContext(CartContext) as CartContextValue;
  const router = useRouter();

  function productPrice() {
    if (Array.isArray(product.prices)) {
      return product.prices[0].price;
    }

    return product.prices;
  }

  return (
    <>
      <div className=' w-[210px]'>
        {/** image */}
        <div
          className='bg-blue-400 w-full h-[100px] cursor-pointer'
          onClick={() => router.push(`/single-product?id=${product.id}`)}
        ></div>
        <div className=''>
          <div
            className='cursor-pointer py-2'
            onClick={() => router.push(`/single-product?id=${product.id}`)}
          >
            <p className='font-semibold mb-2'>{product.name}</p>
            <p className=''>Ksh {productPrice()}</p>
          </div>

          <div className='flex gap-x-[5px] text-[17px]'>
            <button className='flex-grow py-1 bg-green-500 rounded-[3px] text-white flex justify-center gap-x-[8px]'>
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>Order</span>
            </button>
            <button
              onClick={() => {
                if (isInCart(product.id)) {
                  setInfoOpen(true);
                  return;
                }
                addToCart({ id: product.id, count: 1 });
                setOpen(true);
              }}
              className='flex-grow rounded-[3px] flex justify-center items-center gap-x-[8px] bg-gray-100'
            >
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        message='Note archived'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity='success'
          sx={{ width: '100%' }}
        >
          Item Added to Cart
        </Alert>
      </Snackbar>
      <Snackbar
        open={infoOpen}
        autoHideDuration={1500}
        onClose={() => setInfoOpen(false)}
        message='Note archived'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setInfoOpen(false)}
          severity='info'
          sx={{ width: '100%' }}
        >
          Already in Cart
        </Alert>
      </Snackbar>
    </>
  );
}
