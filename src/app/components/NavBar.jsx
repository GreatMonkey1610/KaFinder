"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DropdownMenu from './DropDown';

const options = [
  { label: 'Big Five', href: '/Personality-tests/Big-Five-test-Intro' },
  { label: 'Option 2', href: '#' },
  { label: 'Option 3', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-gray-900">
          <span className="tracking-tight">Kafinder</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu text="Personality Test" options={options} />
          <a href="#" className="text-gray-900 hover:text-gray-700 transition">
            About Us
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700 transition">
            Features
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700 transition">
            Contact
          </a>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <DropdownMenu text="Personality Test" options={options} />
          <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
            About Us
          </a>
          <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
            Features
          </a>
          <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
            Contact
          </a>
          <button className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
