import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md flex gap-8 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:underline text-lg ${isActive ? 'font-bold underline' : ''}`
        }
      >
        Home
      </NavLink>

      {/* ✅ Updated to route to /books instead of /books/Fiction */}
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `hover:underline text-lg ${isActive ? 'font-bold underline' : ''}`
        }
      >
        Browse Books
      </NavLink>

      <NavLink
        to="/add"
        className={({ isActive }) =>
          `hover:underline text-lg ${isActive ? 'font-bold underline' : ''}`
        }
      >
        Add Book
      </NavLink>
    </nav>
  );
};

export default Navbar;
