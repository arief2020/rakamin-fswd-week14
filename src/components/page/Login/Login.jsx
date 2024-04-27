/* eslint-disable react/prop-types */

'use client';

import React, { useRef } from 'react';

import { useRouter } from 'next/navigation';

function Login({ onSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await onSubmit(email, password);
  };

  return (
    <div>
      <div className="modal-box w-full bg-white text-black">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
        </form>
        <h3 className="text-lg font-bold">Login</h3>
        <label className="mt-5" htmlFor="email">
          Email
        </label>
        <br />
        <input
          id="email"
          type="text"
          name="email"
          ref={emailRef}
          className="bg-whit input my-2 w-full 
                  border-2 border-slate-300 text-black  focus:border-black"
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
          ref={passwordRef}
          className="input my-2 w-full 
                  border-2 border-slate-300 bg-white focus:border-black"
        />
        <div className="flex justify-center gap-3">
          <button onClick={handleSubmit} className="btn btn-primary px-16 text-white">
            Login
          </button>
          <button onClick={() => router.push('register')} className="btn btn-ghost grow">
            Doesn&apos;t Have Account? Click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
