'use client';

import React, { useState } from 'react';

function BookForm() {
  const [input, setInput] = useState({
    title: '',
    author: '',
    publisher: '',
    year: 0,
    pages: 0
  });

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { title, author, publisher, year, pages } = input;
    console.log(input);
  };
  return (
    <div className="m-5 rounded-lg border-2 p-4 text-slate-700 shadow-lg">
      <h3 className="bold text-center text-xl">Create Book</h3>
      <label className="mt-5" htmlFor="title">
        Title
      </label>
      <br />
      <input
        id="title"
        type="text"
        name="title"
        value={input.title}
        onChange={handleOnChange}
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
        value={input.author}
        onChange={handleOnChange}
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
        value={input.publisher}
        onChange={handleOnChange}
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
        type="number"
        name="year"
        min={1}
        value={input.year}
        onChange={handleOnChange}
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
        type="number"
        name="pages"
        min={1}
        value={input.pages}
        onChange={handleOnChange}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <p>Image</p>
      <input type="file" className="file-input my-5 w-full max-w-xs bg-white" />
      <div className="flex justify-center gap-3">
        <button onClick={handleSubmit} className="btn btn-primary px-16 text-white">
          Create Book
        </button>
      </div>
    </div>
  );
}

export default BookForm;
