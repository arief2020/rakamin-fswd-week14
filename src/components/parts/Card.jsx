/* eslint-disable react/prop-types */
import React from 'react';

import Image from 'next/image';

function Card({ handleClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('enter clicked');
    }
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="w-88 card text-slate-700 shadow-md hover:shadow-xl"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <figure>
        <Image
          width={928}
          height={548}
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}

export default Card;
