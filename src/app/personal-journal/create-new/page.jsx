"use client";
import { useState, useEffect } from 'react';
import { db, auth } from '@/app/firebase/config';
import { collection, setDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUpload = async () => {
    if (!user) {
      alert('You must be logged in to upload a journal entry.');
      return;
    }

    const userId = user.uid;
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const collectionId = `${userId}-${randomId}`;
    const timestamp = new Date().toISOString();

    try {
      await setDoc(doc(db, 'journalEntries', collectionId), {
        collectionId,
        userId,
        date,
        entry,
        timestamp,
      });

      // Display success message as a toast notification
      const toast = document.createElement('div');
      toast.innerText = 'Journal entry uploaded successfully!';
      toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg';
      document.body.appendChild(toast);

      // Automatically remove the toast message after 3 seconds
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 3000);

      // Redirect to home page
      router.push('/');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-800 drop-shadow-lg">
        Personal Journal
      </h1>
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        />
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full h-48 p-4 border border-gray-300 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 placeholder-gray-400"
          placeholder="Write your journal entry here..."
        />
        <button
          onClick={handleUpload}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
