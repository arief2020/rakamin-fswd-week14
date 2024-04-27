import React from 'react';

function page() {
  return (
    <div className="m-5 border-2 p-4 text-slate-700 shadow-lg">
      <h3 className="bold text-center text-xl">Update Book</h3>
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
        type="number"
        name="year"
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
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <p>Image</p>
      <input type="file" className="file-input my-5 w-full max-w-xs bg-white" />
      <div className="flex justify-center gap-3">
        <button className="btn btn-primary px-16 text-white">Register</button>
        <button className="btn btn-ghost grow">Already Have an account? Click here</button>
      </div>
    </div>
  );
}

export default page;
