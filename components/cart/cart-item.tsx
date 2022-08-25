import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function CartItem() {
  const [itemCount, setItemCount] = useState(1);

  function decrementCount() {
    if (!(itemCount <= 1)) {
      setItemCount(itemCount - 1);
    }
  }

  return (
    <>
      <div className='flex items-center justify-between rounded-lg overflow-hidden border borde-gray-300'>
        <div className='bg-orange-500 w-[100px] h-[80px]'></div>
        <p className='font-semibold text-lg'>Vermicompost</p>
        <p>15 Kgs</p>
        <div className='flex items-center  border-red-400'>
          <button
            className='flex justify-center items-center bg-gray-100 w-[30px] h-[30px] rounded-full font-bold '
            onClick={decrementCount}
          >
            -
          </button>
          <p className='border px-5 rounded-md mx-2'>{itemCount}</p>
          <button
            className='flex justify-center items-center bg-green-400 w-[30px] h-[30px] rounded-full font-bold'
            onClick={() => setItemCount(itemCount + 1)}
          >
            +
          </button>
        </div>
        <p>Ksh 19000</p>
        <div className=' bg-gray-100 self-stretch flex items-center px-3 cursor-pointer'>
          <span className='text-2xl font-semibold'>
            <FontAwesomeIcon icon={faClose} />
          </span>
        </div>
      </div>
    </>
  );
}
