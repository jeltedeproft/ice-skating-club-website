import React from 'react';

function SynchronizedSkating() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Synchroonschaatsen</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        Sluit je aan bij ons synchroonteam voor gecoördineerde routines en teamgeest. Perfect voor wie van groepsprestaties houdt.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Teaminfo</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Training: Woensdag 17:00 - 19:00</li>
          <li>Leeftijd: 12+ jaar</li>
          <li>Evenementen: Jaarlijkse competities</li>
        </ul>
        <p className="mt-4">De website is in opbouw—neem contact op voor meer details.</p>
      </div>
    </div>
  );
}

export default SynchronizedSkating;