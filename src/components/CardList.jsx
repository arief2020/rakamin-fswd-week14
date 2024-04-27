'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Card from './parts/Card';

function CardList() {
  const router = useRouter();

  const handleClickCard = () => {
    router.push('/books/1');
  };
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card handleClick={handleClickCard} />
      <Card handleClick={handleClickCard} />
    </div>
  );
}

export default CardList;
