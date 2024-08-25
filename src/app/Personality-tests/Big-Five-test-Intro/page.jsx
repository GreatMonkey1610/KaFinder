import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-950">Big Five Personality Test</h1>
      <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl">
        Discover your personality traits using the Big Five model. This test will give you insights into your unique personality.
      </p>

      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Background</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The Big Five personality traits are the best accepted and most commonly used model of personality in academic psychology. These traits are derived from statistical studies of responses to personality items.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The Big Five model summarizes an individual’s personality based on five key dimensions: extraversion, neuroticism, agreeableness, conscientiousness, and openness to experience. This test uses the Big-Five Factor Markers from the International Personality Item Pool, developed by Goldberg (1992).
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Procedure</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The test consists of fifty items that you will rate on how true they are about you on a five-point scale where 1 = Disagree, 3 = Neutral, and 5 = Agree. It takes most people 3-8 minutes to complete.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Participation</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Your use of this tool should be for educational or entertainment purposes only. The results are not psychological or psychiatric advice and come with no guarantee of accuracy. Responses are recorded anonymously and may be used for research.
        </p>

        <p className="text-red-600 font-semibold text-center mb-8">
          <strong>Warning:</strong> This test is not a substitute for professional psychological advice, diagnosis, or treatment.
        </p>

        <Link href="/Personality-tests/Big-Five-test">
          <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 transition-all flex items-center justify-center space-x-2">
            <span>Start Test</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>

      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Source:</h2>
        <p className="text-gray-700 leading-relaxed">
          &quot;Possible Questionnaire Format for Administering the 50-Item Set of IPIP Big-Five Factor Markers&quot;. International Personality Item Pool.
        </p>

        <h2 className="text-2xl font-semibold mb-6 mt-8 text-blue-600">References:</h2>
        <p className="text-gray-700 leading-relaxed">
          Goldberg, Lewis R. &quot;The development of markers for the Big-Five factor structure.&quot; Psychological Assessment 4.1 (1992): 26.
        </p>
      </div>
    </div>
  );
}
