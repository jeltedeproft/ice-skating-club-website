import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Welcome to the Ice Skating Club</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Join our vibrant community of skaters! Whether you're a beginner or a seasoned pro, we offer lessons, events, and
          a welcoming environment to glide into fun.
        </p>
        <Link
          to="/schedule"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
        >
          View Our Schedule
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Learn to Skate</h3>
              <p className="text-gray-600">Expert-led classes for all ages and skill levels.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Community Events</h3>
              <p className="text-gray-600">Join our ice shows, competitions, and socials.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Top Facilities</h3>
              <p className="text-gray-600">Skate in our state-of-the-art ice rink.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;