import React from 'react';

function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Weekrooster</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Ons wekelijkse rooster voor kunstschaatsen, synchroonschaatsen en shorttrack.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/95 rounded-lg shadow-inner">
              <thead>
                <tr className="bg-blue-800/50 text-white">
                  <th className="p-4 text-left">Dag</th>
                  <th className="p-4 text-left">Tijd</th>
                  <th className="p-4 text-left">Discipline</th>
                  <th className="p-4 text-left">Niveau</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Maandag</td>
                  <td className="p-4">18:00 - 19:00</td>
                  <td className="p-4">Kunstschaatsen</td>
                  <td className="p-4">Beginners</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Dinsdag</td>
                  <td className="p-4">19:00 - 20:30</td>
                  <td className="p-4">Synchroonschaatsen</td>
                  <td className="p-4">Alle niveaus</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Woensdag</td>
                  <td className="p-4">17:00 - 18:30</td>
                  <td className="p-4">Shorttrack</td>
                  <td className="p-4">Gevorderden</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Donderdag</td>
                  <td className="p-4">18:00 - 19:30</td>
                  <td className="p-4">Kunstschaatsen</td>
                  <td className="p-4">Gevorderden</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Vrijdag</td>
                  <td className="p-4">18:00 - 20:00</td>
                  <td className="p-4">Shorttrack</td>
                  <td className="p-4">Alle niveaus</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition duration-200">
                  <td className="p-4">Zaterdag</td>
                  <td className="p-4">14:00 - 16:00</td>
                  <td className="p-4">Open Schaatsen</td>
                  <td className="p-4">Iedereen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;