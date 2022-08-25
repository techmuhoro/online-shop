import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

export default function Review() {
  return (
    <article className='bg-gray-50 rounded px-4 py-2'>
      <div className='flex mb-1'>
        <div className='flex items-center gap-x-2'>
          <p className='flex gap-x-1 text-yellow-300'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarOutline} />
          </p>
          <p>(4.5 stars)</p>
        </div>
        <p className='ml-auto'>11/12/21</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
        atque?
      </p>
    </article>
  );
}
