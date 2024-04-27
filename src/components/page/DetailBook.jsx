'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function DetailBook() {
  const router = useRouter();
  const handleClickUpdate = () => {
    router.push('/update-book/1');
  };
  return (
    <div>
      <div className="m-5 border-2 p-4 text-slate-700 shadow-lg">
        <h3 className="bold my-3 text-xl">Title</h3>
        <div className="flex">
          <Image
            width={478}
            height={548}
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
          <div className="ml-4">
            <p className="text-lg">Author: lalala</p>
            <p className="text-lg">Publisher: lalala</p>
            <p className="text-lg">Year: lalala</p>
            <p className="text-lg">Pages: lalala</p>
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
