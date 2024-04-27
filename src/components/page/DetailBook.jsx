'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getDetailBooks } from '@/fetching/book';

function DetailBook({ id }) {
  const router = useRouter();
  const [book, setBook] = useState({
    title: '',
    author: '',
    publisher: '',
    year: '',
    pages: '',
    image: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDetailBooks(id);
        const data = await response.json();
        setBook(data.book);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, [book.title]);

  const handleClickUpdate = () => {
    router.push('/update-book/1');
  };
  return (
    <div>
      <div className="m-5 border-2 p-4 text-slate-700 shadow-lg">
        <h3 className="bold my-3 text-xl">{book.title}</h3>
        <div className="flex">
          <Image width={478} height={548} src={book.image} alt={book.title} />
          <div className="ml-4">
            <p className="text-lg">Author: {book.author}</p>
            <p className="text-lg">Publisher: {book.publisher}</p>
            <p className="text-lg">Year: {book.year}</p>
            <p className="text-lg">Pages: {book.pages}</p>
          </div>
        </div>
        <div className="my-5 flex gap-3">
          <button onClick={handleClickUpdate} className="btn btn-warning px-16 text-white">
            Update
          </button>
          <button className="btn btn-error px-16">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DetailBook;
