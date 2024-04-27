'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { createBook } from '@/fetching/book';

function BookForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createBook(formData);
    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit} className="m-5 rounded-lg border-2 p-4 text-slate-700 shadow-lg">
      <h3 className="bold text-center text-xl">Create Book</h3>
      <label className="mt-5" htmlFor="title">
        Title
      </label>
      <br />
      <input
        id="title"
        type="text"
        name="title"
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="author">
        Author
      </label>
      <br />
      <input
        id="author"
        type="text"
        name="author"
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="publisher">
        Publisher
      </label>
      <br />
      <input
        id="publisher"
        type="text"
        name="publisher"
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="year">
        Year
      </label>
      <br />
      <input
        id="year"
        type="text"
        name="year"
        min={1}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="pages">
        Pages
      </label>
      <br />
      <input
        id="pages"
        type="text"
        name="pages"
        min={1}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <p>Image</p>
      <input
        id="image"
        name="image"
        type="file"
        className="file-input my-5 w-full max-w-xs bg-white"
      />
      <div className="flex justify-center gap-3">
        <button type="submit" className="btn btn-primary px-16 text-white">
          Create Book
        </button>
      </div>
    </form>
  );
}

export default BookForm;
