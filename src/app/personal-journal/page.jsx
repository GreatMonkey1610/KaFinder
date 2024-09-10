"use client";
import { useState, useEffect } from "react";
import { db, auth } from "@/app/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ViewJournals() {
  const [journals, setJournals] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchJournals(user.uid); // Fetch journals when the user is authenticated
      } else {
        setUser(null);
        setJournals([]); // Clear the journals if the user logs out
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchJournals = async (userId) => {
    try {
      const q = query(
        collection(db, "journalEntries"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const journalData = querySnapshot.docs.map((doc) => doc.data());
      setJournals(journalData);
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-800 drop-shadow-lg">
        My Journal Entries
      </h1>
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {journals.length === 0 ? (
          <p className="text-gray-500 text-center">No journal entries found.</p>
        ) : (
          <div className="space-y-6">
            {journals.map((journal, index) => (
              <div
                key={index}
                className="p-6 bg-indigo-50 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {journal.date}
                </h2>
                <p className="text-gray-700">{journal.entry}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Uploaded on: {new Date(journal.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
