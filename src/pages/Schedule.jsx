import React from 'react';

function Schedule() {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Class & Event Schedule</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Check out our weekly ice skating classes and upcoming events. All times are in local time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Beginner Lessons</h2>
            <p className="text-gray-600">Mondays & Wednesdays, 6:00 PM - 7:00 PM</p>
            <p className="text-gray-500 mt-2">Perfect for new skaters learning the basics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Advanced Training</h2>
            <p className="text-gray-600">Tuesdays & Thursdays, 7:00 PM - 8:30 PM</p>
            <p className="text-gray-500 mt-2">For skaters honing spins and jumps.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Open Skate</h2>
            <p className="text-gray-600">Saturdays, 2:00 PM - 4:00 PM</p>
            <p className="text-gray-500 mt-2">Fun for all members to practice freely.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Winter Ice Show</h2>
            <p className="text-gray-600">December 15, 2025, 6:00 PM</p>
            <p className="text-gray-500 mt-2">Join us for our annual performance!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;