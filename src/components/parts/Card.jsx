/* eslint-disable react/prop-types */
import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Card({ id, title, image}) {
  const router = useRouter();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('enter clicked');
    }
  };
  const handleClickCard = () => {
    router.push(`/books/${id}`);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="w-88 card text-slate-700 shadow-md hover:shadow-xl"
      onClick={handleClickCard}
      onKeyDown={handleKeyDown}
    >
      <figure>
        <Image width={928} height={548} src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
