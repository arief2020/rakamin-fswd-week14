'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { register } from '@/fetching/auth';

function Register() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit click');
    await register(input);
    router.push('/');
  };

  return (
    <div className="m-5 border-2 p-4 text-slate-700 shadow-lg">
      <h3 className="bold text-center text-xl">Register Account</h3>
      <label className="mt-5" htmlFor="name">
        Name
      </label>
      <br />
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleOnChange}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="email">
        Email
      </label>
      <br />
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleOnChange}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />
      <br />
      <label className="mt-5" htmlFor="password">
        Password
      </label>
      <br />
      <input
        id="password"
        type="password"
        name="password"
        onChange={handleOnChange}
        className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
      />

      <div className="flex justify-center gap-3">
        <button onClick={handleSubmit} className="btn btn-primary px-16 text-white">
          Register
        </button>
        <button className="btn btn-ghost grow">Already Have an account? Click here</button>
      </div>
    </div>
  );
}

export default Register;
