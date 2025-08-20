import React from 'react';

function FigureSkating() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Kunstschaatsen</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        Onze kunstschaatslessen zijn geschikt voor alle niveaus. Leer basisbewegingen, sprongen en spins onder begeleiding van ervaren coaches.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Lesinformatie</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Beginners: Dinsdag 18:00 - 19:00</li>
          <li>Gevorderden: Donderdag 19:00 - 20:30</li>
          <li>Kosten: €50 per maand</li>
        </ul>
        <p className="mt-4">De website is in opbouw—neem contact op voor meer details.</p>
      </div>
    </div>
  );
}

export default FigureSkating;