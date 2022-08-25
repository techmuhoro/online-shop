import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

export default function ReviewForm() {
  return (
    <>
      <div className='mb-2'>
        <p className='font-medium'>Your Rating</p>
        <p className='flex gap-x-1 '>
          <span className='cursor-pointer'>
            <FontAwesomeIcon icon={faStarOutline} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStarOutline} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStarOutline} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStarOutline} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStarOutline} />
          </span>
        </p>
      </div>
      <form>
        <div className='flex gap-x-2 mb-3'>
          <div className='grow'>
            <label htmlFor=''>Name</label>
            <br />
            <input
              type='text'
              required
              className='w-full border rounded border-gray-400 py-1 px-2'
            />
          </div>
          <div className='grow'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              required
              className='w-full border rounded border-gray-400 py-1 px-2'
            />
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Message</label>
          <textarea
            name=''
            id=''
            rows={4}
            className='w-full border rounded border-gray-400 py-1 px-2'
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className='bg-blue-400 px-8 py-2 rounded font-medium mb-2'
        >
          Submit
        </button>
      </form>
    </>
  );
}
