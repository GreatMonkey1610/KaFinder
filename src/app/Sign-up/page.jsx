"use client";
import { useState } from 'react';
// import { auth } from '../firebase/config';
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required.');
      return;
    }
    if (!password) {
      setPasswordError('Password is required.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError('An error occurred: ' + error.message);
      setTimeout(() => setError(''), 2000);
    }
  };

  // const handleGoogleSignup = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //     router.push('/');
  //   } catch (error) {
  //     setError('An error occurred: ' + error.message);
  //     setTimeout(() => setError(''), 2000);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`mt-1 block w-full p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
        
        <div className="text-center mt-4">
          <button
            // onClick={handleGoogleSignup}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Already have an account? <Link href="/Login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
