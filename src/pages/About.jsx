import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">About Our Ice Skating Club</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Welcome to the Ice Skating Club, where passion meets grace on the ice! We’re a community dedicated to fostering
          the love of ice skating for all ages and skill levels.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded in 2010, our club aims to promote ice skating as a fun, inclusive, and rewarding activity. Whether
            you're a beginner learning to glide or an advanced skater perfecting your spins, we provide a supportive
            environment with top-notch coaching and community events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Community</h3>
              <p className="text-gray-600">Join a tight-knit group of skaters who share your passion and enthusiasm.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Excellence</h3>
              <p className="text-gray-600">Train with experienced coaches to reach your full potential on the ice.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Fun</h3>
              <p className="text-gray-600">Enjoy skating sessions, events, and competitions that spark joy!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 bg-blue-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">Jane Doe</h3>
              <p className="text-gray-600">Head Coach</p>
              <p className="text-gray-500 mt-2">Former competitive skater with 15 years of coaching experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">John Smith</h3>
              <p className="text-gray-600">Program Director</p>
              <p className="text-gray-500 mt-2">Organizes events and ensures every skater feels at home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">Emily Chen</h3>
              <p className="text-gray-600">Youth Coordinator</p>
              <p className="text-gray-500 mt-2">Leads our junior skating programs with enthusiasm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center bg-blue-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6">Ready to glide with us? Check out our schedule or contact us to learn more.</p>
        <div className="flex justify-center gap-4">
          <a href="/schedule" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100">
            View Schedule
          </a>
          <a href="/contact" className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;