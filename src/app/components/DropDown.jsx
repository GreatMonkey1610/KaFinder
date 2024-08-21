// components/DropdownMenu.js
"use client";
import { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ text, options }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left group" ref={dropdownRef}>
      <div className="cursor-pointer">
        <span>{text}</span>
      </div>

      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
