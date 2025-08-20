import React from 'react';

function News() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Clubnieuws</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Blijf op de hoogte van het laatste nieuws van Ice Diamonds Antwerp.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Wintershow 2025 Aangekondigd</h2>
          <p className="text-gray-600 mb-2">15 oktober 2025</p>
          <p className="text-gray-600">
            Onze jaarlijkse wintershow vindt plaats op 15 december. Meld je aan om deel te nemen!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Nieuw Synchroon Team</h2>
          <p className="text-gray-600 mb-2">1 oktober 2025</p>
          <p className="text-gray-600">
            We verwelkomen een nieuw synchroonteam voor jongeren. Neem contact op voor details.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Open Initiatiedag</h2>
          <p className="text-gray-600 mb-2">20 september 2025</p>
          <p className="text-gray-600">
            Kom proberen tijdens onze initiatiedag op 10 november. Gratis toegang!
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;