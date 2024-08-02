import React from "react";

function SideNav({ isOpen, toggleNav }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#160632] z-10 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end">
        <button className="p-2 text-[70px]" onClick={toggleNav}>
          &times;
        </button>
      </div>
      <nav className="p-4">
        <ul className="text-[28px] text-center">
          <li className="p-2 ">
            <a href="/">Home</a>
          </li>
          <li className="p-2">
            <a href="/about">About</a>
          </li>
          <li className="p-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
