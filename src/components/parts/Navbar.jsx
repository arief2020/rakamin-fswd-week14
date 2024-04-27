'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import Login from '@/components/page/Login/Login';
import { login, logout } from '@/fetching/auth';

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const route = useRouter();
  const handleSubmit = async (email, password) => {
    await login({ email, password });
    Swal.fire({
      icon: 'success',
      title: 'Success Login',
      showConfirmButton: true,
      timer: 2000
    });
    setIsLogin(true);
  };

  const handleLogout = async () => {
    await logout();
    setIsLogin(false);
  };
  return (
    <div className="navbar bg-green-500">
      <div className="flex-1">
        <button onClick={() => route.push('/')} className="btn btn-ghost text-xl text-black">
          Book
        </button>
      </div>
      <div className="flex-none gap-2">
        {isLogin ? (
          <>
            <button onClick={() => route.push('/create-books')} className="btn btn-primary">
              create books
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                // tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 
			rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Login
            </button>
            <dialog id="my_modal_3" className="modal">
              <Login onSubmit={handleSubmit} />
            </dialog>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
