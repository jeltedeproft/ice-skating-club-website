import React from 'react';

function ShortTrack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Shorttrack</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Ervaar de spanning van shorttrack races en bouw snelheid op.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Traininginfo</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Sessies: Vrijdag 18:00 - 20:00</li>
              <li>Niveaus: Alle leeftijden welkom</li>
              <li>Uitrusting: Beschikbaar ter plaatse</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortTrack;