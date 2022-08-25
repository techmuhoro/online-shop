import React, { useState } from 'react';
import Nav from 'components/common/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Review from './review';
import ReviewForm from './review-form';
import { products } from 'data/products';

export default function SingleProduct(props: { id: string }) {
  const [count, setCount] = useState(1);

  const { id: productId } = props;
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    return <p> No product</p>;
  }

  function productPrice() {
    return 
  }

  function qtyOptions() {
    if (Array.isArray(product?.prices)) {
      return product?.prices.map((item) => (
        <option value={item.qty}>{item.qty}</option>
      ));
    }
    return <option value=''>No options</option>;
  }

  return (
    <div>
      <Nav />
      <div className='w-[60%] border mx-auto px-8 py-8 mb-20'>
        <div className='flex gap-x-5 mb-10'>
          <div className='w-1/2 h-[400px] bg-red-500'></div>
          <div className='w-1/2'>
            <p className='font-bold text-3xl mb-4'>{product.name}</p>
            <p className='text-lg text-gray-600 mb-2'>Ksh 1400</p>
            <p className='mb-3'>
              A liquid fertilizer packed with essential nutrients for healthy
              plant growth enabling them to fight pests and disease. Best
              application: Dilute 1 part vermiliquid to 8 parts water then
              drench the soil/foliar feed the leaves. Great for use on all
              plants including flowers in a vase.
            </p>
            {Array.isArray(product.prices) && (
              <div className='mb-10'>
                <label htmlFor='qty' className='font-semibold'>
                  Quantity
                </label>
                <br />
                <select
                  id='qty'
                  className='border border-gray-400 w-full px-2 py-2 rounded'
                >
                  {qtyOptions()}
                  {/* <option value=''>500ml</option>
                <option value=''>1ltr</option> */}
                </select>
              </div>
            )}

            <div className='flex items-center gap-x-3'>
              <div>
                <input
                  type='number'
                  className='border w-[40px] pl-[10px] py-1 border-gray-400 rounded'
                  value={count}
                  onChange={() => setCount(count + 1)}
                />
              </div>
              <div className='grow flex gap-x-3'>
                <button className='grow bg-green-500 rounded-[3px] text-white flex justify-center gap-x-[8px] py-1.5 font-semibold'>
                  <span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  <span>Order</span>
                </button>
                <button className=' grow rounded-[3px] flex justify-center items-center gap-x-[8px] bg-gray-100 py-1.5 font-semibold'>
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  <span>Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <p className='font-bold text-xl mb-2'>Related Products</p>
        </div>
        <section className=''>
          <p className='font-bold text-xl mb-2'>Reviews</p>
          <div className='flex flex-col gap-y-2 mb-4'>
            <Review />
            <Review />
          </div>
          <div>
            {/* <button
              onClick={() => setHidden(!hidden)}
              className='bg-blue-400 px-8 py-2 rounded font-medium mb-4'
            >
              Add Review
            </button> */}
            <p className='mb-3 font-semibold'>Leave a review</p>
            <div className={``}>
              <ReviewForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
