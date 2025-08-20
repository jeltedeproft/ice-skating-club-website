import React from 'react';

function Initiations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80")', filter: 'blur(4px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Initiaties</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Ontdek de magie van schaatsen met onze initiatielessen voor beginners!
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Details</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Datum: 10 november 2025, 10:00 - 12:00</li>
              <li>Locatie: Sportoase Antwerpen</li>
              <li>Kosten: Gratis voor nieuwe leden</li>
              <li>Inschrijven: Via ons <a href="/contact" className="text-blue-600 hover:text-blue-800 transition duration-200">contactformulier</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiations;