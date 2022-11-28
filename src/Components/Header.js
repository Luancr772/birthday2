import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex justify-center items-center gap-x-20 mt-8 mb-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-Primary w-28 text-center p-3 rounded  font-bold" : ""
        }
        // className="w-28 text-center p-4 rounded border border-black"
      >
        Home
      </NavLink>
      <NavLink
        to="/love"
        className={({ isActive }) =>
          isActive
            ? "bg-Primary w-28 text-center p-3 rounded border border-black font-bold"
            : ""
        }
        // className="w-28 text-center p-4 rounded border border-black"
      >
        Love
      </NavLink>
      <NavLink
        to="/progress"
        className={({ isActive }) =>
          isActive
            ? "bg-Primary w-28 text-center p-3 rounded border border-black font-bold"
            : ""
        }
        // className="w-28 text-center p-4 rounded border border-black"
      >
        Progress
      </NavLink>
      <NavLink
        to="/wish"
        className={({ isActive }) =>
          isActive
            ? "bg-Primary w-28 text-center p-3 rounded border border-black font-bold"
            : ""
        }
        // className="w-28 text-center p-4 rounded border border-black"
      >
        Wish
      </NavLink>
      <NavLink
        to="/important"
        className={({ isActive }) =>
          isActive
            ? "bg-Primary w-28 text-center p-3 rounded border border-black font-bold"
            : ""
        }
        // className="w-28 text-center p-4 rounded border border-black"
      >
        Important
      </NavLink>
    </header>
  );
};

export default Header;
