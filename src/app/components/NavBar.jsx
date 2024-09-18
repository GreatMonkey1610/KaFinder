"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import DropdownMenu from './DropDown';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config'; 
import { signOut } from 'firebase/auth';

const Personality_test_options = [
  { label: 'Big Five', href: '/Personality-tests/Big-Five-test-Intro' },
  { label: 'Option 2', href: '#' },
  { label: 'Option 3', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-gray-900">
            <span className="tracking-tight">Kafinder</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu text="Personality Test" options={Personality_test_options} />
            <a href="#" className="text-gray-900 hover:text-gray-700 transition">
              About Us
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition">
              Features
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition">
              Contact
            </a>
          </div>

          {/* User Authentication Section */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              // If the user is signed in, show profile icon with dropdown
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
                  <FaUserCircle size={28} className="text-gray-900" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Profile
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // If the user is not signed in, show Get Started button
              <button
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                onClick={() => router.push('/signup')}
              >
                Get Started
              </button>
            )}
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
            <DropdownMenu text="Personality Test" options={Personality_test_options} />
            <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
              About Us
            </a>
            <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
              Features
            </a>
            <a href="#" className="block mt-2 text-gray-900 hover:text-gray-700 transition">
              Contact
            </a>
            {user ? (
              <div className="mt-4 w-full flex justify-center">
                <button
                  className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                onClick={() => router.push('/login')}
              >
                Log In
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
