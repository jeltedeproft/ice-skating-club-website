import React from 'react';

function Schedule() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Weekrooster</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Ons wekelijkse rooster voor kunstschaatsen, synchroonschaatsen en shorttrack. Neem contact op voor wijzigingen.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Dag</th>
              <th className="p-4 text-left">Tijd</th>
              <th className="p-4 text-left">Discipline</th>
              <th className="p-4 text-left">Niveau</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Maandag</td>
              <td className="p-4">18:00 - 19:00</td>
              <td className="p-4">Kunstschaatsen</td>
              <td className="p-4">Beginners</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Dinsdag</td>
              <td className="p-4">19:00 - 20:30</td>
              <td className="p-4">Synchroonschaatsen</td>
              <td className="p-4">Alle niveaus</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Woensdag</td>
              <td className="p-4">17:00 - 18:30</td>
              <td className="p-4">Shorttrack</td>
              <td className="p-4">Gevorderden</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Donderdag</td>
              <td className="p-4">18:00 - 19:30</td>
              <td className="p-4">Kunstschaatsen</td>
              <td className="p-4">Gevorderden</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Vrijdag</td>
              <td className="p-4">18:00 - 20:00</td>
              <td className="p-4">Shorttrack</td>
              <td className="p-4">Alle niveaus</td>
            </tr>
            <tr>
              <td className="p-4">Zaterdag</td>
              <td className="p-4">14:00 - 16:00</td>
              <td className="p-4">Open Schaatsen</td>
              <td className="p-4">Iedereen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center mt-6 text-gray-600">
        <a href="/contact" className="text-blue-600 hover:underline">Contacteer ons</a> voor meer info.
      </p>
    </div>
  );
}

export default Schedule;