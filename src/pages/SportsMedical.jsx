import React from 'react';

function Sportsmedical() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Sportmedisch Onderzoek</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Voor Nieuwe IJssporters</h2>
          <p className="text-lg text-gray-700 mb-6">
            Het sportmedisch onderzoek is verplicht voor alle nieuwe leden die willen starten met Figure Skating of Shorttrack bij Ice Diamonds Antwerp. Dit onderzoek zorgt ervoor dat je in een goede gezondheidstoestand bent om te sporten en helpt blessures te voorkomen.
          </p>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Wat houdt het in?</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Medische check-up door een erkende sportarts.</li>
            <li>Controle van hart, longen, gewrichten en flexibiliteit.</li>
            <li>Aanbevelingen voor persoonlijke training of revalidatie indien nodig.</li>
          </ul>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Procedure</h3>
          <p className="text-gray-600 mb-4">
            Maak een afspraak met een sportarts via je huisarts of rechtstreeks bij een erkend centrum (bijv. Sportmedisch Adviescentrum). Neem het <a href="/assets/sportsmedical_form.pdf" download className="text-blue-600 hover:text-blue-800 transition duration-200">medisch formulier</a> mee en laat het invullen. Lever het ingevulde formulier in bij de clubsecretaris voor je eerste training.
          </p>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Kosten en Verzekering</h3>
          <p className="text-gray-600 mb-4">
            De kosten voor het sportmedisch onderzoek variëren (€30-€60) en worden niet gedekt door de club. Zorg ervoor dat je een verzekering hebt die sportongevallen dekt, of sluit een aanvullende verzekering af via de club.
          </p>
          <p className="text-gray-600">
            Voor meer informatie, contacteer ons via <a href="/contact" className="text-blue-600 hover:text-blue-800 transition duration-200">de contactpagina</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sportsmedical;