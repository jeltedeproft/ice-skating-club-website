import React from 'react';

function Home() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welkom bij Ice Diamonds Antwerp</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Wij zijn een kunstschaatsclub in Antwerpen met focus op kunstschaatsen, synchroonschaatsen en shorttrack. 
          Word lid van onze community en ontdek de vreugde van het schaatsen!
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">Onze Disciplines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Kunstschaatsen</h3>
            <p className="text-gray-600">Leer elegante figuren en sprongen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Synchroonschaatsen</h3>
            <p className="text-gray-600">Schaats in perfecte harmonie met je team.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Shorttrack</h3>
            <p className="text-gray-600">Snelle races vol actie en strategie.</p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Onze Sponsoren</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.trooper.be/nl/trooperverenigingen/schaatsclubakr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Trooper</a>
          <a href="https://shops.foodmaker.be/nl/foodmaker-deurne" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Foodmaker</a>
          <a href="https://sportoase.be/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sportoase</a>
        </div>
      </section>
    </div>
  );
}

export default Home;