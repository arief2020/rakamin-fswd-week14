'use client';

import React, { useEffect } from 'react';

// import { useRouter } from 'next/navigation';

import { getBooks } from '@/fetching/book';
import useBooks from '@/stores/books';

import Card from './parts/Card';

// eslint-disable-next-line react/prop-types
function CardList() {
  // const router = useRouter();
  const { setBooks, books: booksStore } = useBooks();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooks();
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, [setBooks]);

  // const handleClickCard = () => {
  //   router.push(`/books/`);
  // };
  return booksStore.length ? (
    <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {booksStore.map((book) => (
        <Card key={book.id} id={book.id} title={book.title} image={book.image} />
      ))}
    </div>
  ) : (
    <p>you dont have data book</p>
  );
}

export default CardList;
