import React from 'react';

function Initiations() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Initiaties</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Ontdek de magie van schaatsen met onze initiatielessen voor beginners!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Wat Zijn Initiaties?</h2>
        <p className="text-gray-600 mb-4">
          Onze initiatielessen zijn perfect voor wie wil proberen te schaatsen zonder verplichtingen. 
          Geschikt voor alle leeftijden, met professionele begeleiding.
        </p>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Details</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Datum: 10 november 2025, 10:00 - 12:00</li>
          <li>Locatie: Sportoase Antwerpen</li>
          <li>Kosten: Gratis voor nieuwe leden</li>
          <li>Inschrijven: Via ons <a href="/contact" className="text-blue-600 hover:underline">contactformulier</a></li>
        </ul>
        <p className="text-gray-600">
          Breng je eigen schaatsen mee of huur ze ter plaatse. Meld je aan en glide met ons mee!
        </p>
      </div>
    </div>
  );
}

export default Initiations;