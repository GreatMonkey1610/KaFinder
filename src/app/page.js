import React from 'react';
import { FaHeart, FaCompass, FaUsers, FaUserCheck, FaChartLine } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen px-6 py-8">
        <h1 className="text-5xl font-bold sm:text-6xl">Find Your Hearts Way</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-lg">
          Your journey to self-discovery and personal growth begins here.
        </p>
        <a
          href="#get-started"
          className="mt-8 inline-block bg-white text-indigo-600 px-6 py-3 rounded-md text-lg hover:bg-indigo-50"
        >
          Get Started
        </a>
      </section>

      {/* About Us */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-gray-600">
            At Kafinder, we help you find your way through personalized experiences and insightful personality tests.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaHeart className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Passion</h3>
            <p className="mt-2 text-gray-600 text-center">
              Discover what drives you and follow your passions with our personalized guidance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCompass className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Direction</h3>
            <p className="mt-2 text-gray-600 text-center">
              Get clear direction on your path to success with our insightful personality tests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaUsers className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Community</h3>
            <p className="mt-2 text-gray-600 text-center">
              Join a community of like-minded individuals and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-gray-600">
            Discover the unique features that make Kafinder your go-to platform for personalized experiences.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaUserCheck className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Personalized Tests</h3>
            <p className="mt-2 text-gray-600 text-center">
              Take customized personality tests tailored to your unique traits and preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaChartLine className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Detailed Analytics</h3>
            <p className="mt-2 text-gray-600 text-center">
              Get in-depth insights and analytics to understand your personality better.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaHeart className="h-12 w-12 text-gray-950 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">Heart&apos;s Way Guidance</h3>
            <p className="mt-2 text-gray-600 text-center">
              Receive personalized guidance to help you find and follow your heart&apos;s way.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-gray-600">Hear from those who have found their way with Kafinder.</p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {['John Doe', 'Jane Smith', 'Michael Johnson'].map((name, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-xl text-gray-800 text-center">
                Kafinder helped me discover my true potential and guided me towards a fulfilling career path.
              </p>
              <p className="mt-2 text-gray-600 text-center">- {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="bg-indigo-600 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Find Your Heart&apos;s Way?
        </h2>
        <p className="mt-4 text-lg text-indigo-200">
          Join Kafinder today and start your journey towards self-discovery and personal growth.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-block bg-white text-indigo-600 px-6 py-3 rounded-md text-lg hover:bg-indigo-50"
        >
          Get Started
        </a>   
        <p className="mt-4 text-lg text-indigo-200">This website is still in development - Stay tuned 😋</p>
      </section>
    </div>
  );
}

export default LandingPage;
