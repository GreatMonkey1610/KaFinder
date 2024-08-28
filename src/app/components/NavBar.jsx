"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import DropdownMenu from './DropDown';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Personality_test_options = [
  { label: 'Big Five', href: '/Personality-tests/Big-Five-test-Intro' },
  { label: 'Option 2', href: '#' },
  { label: 'Option 3', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    if (user) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.error("Logout Error:", error);
      // Optionally, show an error message to the user
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [loading, user]);

  return (
    <div>
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded shadow-lg z-50">
          <p>Please log in to access more features.</p>
        </div>
      )}
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
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                  onClick={handleDropdownToggle}
                >
                  <FaUser className="mr-2" />
                  {user?.displayName || 'User'}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-48">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                onClick={() => router.push('/Login')}
              >
                Log In
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
            {user ? (
              <button
                className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                onClick={() => router.push('/Login')}
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
