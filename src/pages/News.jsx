import React from 'react';

function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80")', filter: 'blur(4px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Clubnieuws</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Wintershow 2025 Aangekondigd</h2>
            <p className="text-gray-600 mb-2">15 oktober 2025</p>
            <p className="text-gray-600">Onze jaarlijkse wintershow vindt plaats op 15 december.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Nieuw Synchroon Team</h2>
            <p className="text-gray-600 mb-2">1 oktober 2025</p>
            <p className="text-gray-600">We verwelkomen een nieuw synchroonteam voor jongeren.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Open Initiatiedag</h2>
            <p className="text-gray-600 mb-2">20 september 2025</p>
            <p className="text-gray-600">Kom proberen tijdens onze initiatiedag op 10 november.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;