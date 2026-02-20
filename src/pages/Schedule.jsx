import React from 'react';

function Schedule() {
  const eventData = [
    { event: "Kerststage", date: "22/12/2025 - 02/01/2026", time: "8:30 - 11:30" },
    { event: "Kerstverlof club & patch", date: "22/12/2025 - 04/01/2026", time: "Zie aangepaste rooster" },
    { event: "Oud/Nieuwjaar schaatsen (Silver/Goud)", date: "Zat 27/12/2025", time: "11:45 - 14:15" },
    { event: "Krokusstage", date: "Ma 16/02 - Vr 20/02/2026", time: "8:30 - 11:30" },
    { event: "Foodmaker Ice Skating Challenge", date: "Vr 27/02/2025", time: "8:00 - 20:00" },
    { event: "Foodmaker Ice Skating Challenge", date: "Za 28/02/2025", time: "8:00 - 23:30" },
    { event: "Foodmaker Shine on Ice", date: "Zo 01/03/2025", time: "8:00 - 17:30" },
    { event: "Benelux Cup (Shorttrack)", date: "07/03/2025", time: "8:00 - 15:30" },
    { event: "KBSF - Belgisch Kampioenschap 2026", date: "Zat 21/03 - Zon 22/03/2026", time: "9:00 - 17:00" },
    { event: "Clubbrevetten", date: "Zo 12/04/2026", time: "9:00 - 11:30" },
    { event: "Paasstage", date: "Ma 06/04 - Vrij 17/04/2026", time: "8:30 - 11:30" },
    { event: "Indoor Pond Hockey Classic", date: "Zaterdag 25/04/2026", time: "9:00 - 23:00" },
    { event: "Indoor Pond Hockey Classic", date: "Zondag 26/04/2026", time: "9:00 - 18:00" },
    { event: "3x3 Toernooi Phantoms Jeugd", date: "Zaterdag 02/05/2026", time: "8:00 - 19:00" },
    { event: "3x3 Toernooi Phantoms Jeugd", date: "Zondag 03/05/2026", time: "8:00 - 18:00" },
    { event: "Gala: Festival", date: "Za 09/05/2026", time: "8:30 - 23:00" },
    { event: "Indoor Pond Hockey Ladies Edition", date: "Zondag 10/05/2026", time: "9:00 - 18:00" },
    { event: "Einde seizoen BBQ/Fuif", date: "30/05/2026", time: "TBD" },
  ];

  const closingData = [
    { event: "Kerstavond", date: "24/12/2025", time: "08:00 - 12:00" },
    { event: "Kerstmis", date: "25/12/2025", time: "Gesloten" },
    { event: "Oudejaarsdag", date: "31/12/2025", time: "08:00 - 12:00" },
    { event: "Nieuwjaar", date: "01/01/2026", time: "Gesloten" },
    { event: "Pasen", date: "05/04/2026", time: "Gesloten" },
    { event: "Paasmaandag", date: "06/04/2026", time: "08:00 - 18:00" },
    { event: "Dag vd Arbeid", date: "01/05/2026", time: "08:00 - 18:00" },
    { event: "OH Hemelvaart", date: "14/05/2026", time: "08:00 - 18:00" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      
      {/* Hero Header - Matches Policies.jsx */}
      <div className="relative w-full h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50" 
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} 
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            Kalender & Planning
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* IDA Events Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-8 w-2 bg-blue-600 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-blue-900 italic">IDA Club Events</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {eventData.map((item, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md border-l-4 border-blue-500 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900">{item.event}</h3>
                  <p className="text-blue-600 font-medium">{item.date}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-blue-50 text-blue-800 px-4 py-1 rounded-full text-sm font-bold border border-blue-100">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sportoase Closures Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="h-8 w-2 bg-red-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-blue-900 italic">Sportoase Sluitingsdagen</h2>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-red-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-500 text-white">
                  <th className="p-4 font-bold">Gelegenheid</th>
                  <th className="p-4 font-bold">Datum</th>
                  <th className="p-4 font-bold text-right">Status / Uren</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {closingData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-red-50/50 transition">
                    <td className="p-4 font-bold text-gray-800">{item.event}</td>
                    <td className="p-4 text-gray-600">{item.date}</td>
                    <td className="p-4 text-right">
                      <span className={`font-bold ${item.time.includes('Gesloten') ? 'text-red-600 uppercase' : 'text-gray-700'}`}>
                        {item.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manual Download Link - Matches Policies Style */}
        <div className="mt-16 text-center">
          <a 
            href="Kalender IDA seizoen 2026.xlsx" 
            download 
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1"
          >
            Download de volledige Excel kalender
          </a>
          <p className="mt-4 text-gray-500 text-sm italic">
            * Wijzigingen onder voorbehoud.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Schedule;