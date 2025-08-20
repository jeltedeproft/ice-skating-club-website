import React from 'react';

function ShortTrack() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Shorttrack</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        Ervaar de spanning van shorttrack races. Bouw snelheid, uithoudingsvermogen en tactiek op met onze trainingen.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Traininginfo</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Sessies: Vrijdag 18:00 - 20:00</li>
          <li>Niveaus: Alle leeftijden welkom</li>
          <li>Uitrusting: Beschikbaar ter plaatse</li>
        </ul>
        <p className="mt-4">De website is in opbouw—neem contact op voor meer details.</p>
      </div>
    </div>
  );
}

export default ShortTrack;