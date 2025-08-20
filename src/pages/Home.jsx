import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80")', filter: 'blur(4px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Welkom bij Ice Diamonds</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Wij zijn een kunstschaatsclub in Antwerpen met focus op kunstschaatsen, synchroonschaatsen en shorttrack. Word lid van onze community!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Kunstschaatsen</h2>
            <p className="text-gray-600">Elegante figuren en sprongen.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Synchroonschaatsen</h2>
            <p className="text-gray-600">Perfecte teamharmonie.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Shorttrack</h2>
            <p className="text-gray-600">Snelle races en strategie.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Onze Sponsoren</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.trooper.be/nl/trooperverenigingen/schaatsclubakr" className="text-blue-600 hover:text-blue-800 transition duration-200">Trooper</a>
            <a href="https://shops.foodmaker.be/nl/foodmaker-deurne" className="text-blue-600 hover:text-blue-800 transition duration-200">Foodmaker</a>
            <a href="https://sportoase.be/" className="text-blue-600 hover:text-blue-800 transition duration-200">Sportoase</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;