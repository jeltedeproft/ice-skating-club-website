import React, { useEffect, useState } from "react";

function Schedule() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVZopDUYDNAEQEI3IGukbSip7Ju1QACfMhJ2FgCm5kiUgNxmESxKuoIZH9FlWb-kipUxZ2r5ku1Rij/pub?output=csv" // replace with your sheet link
      );
      const text = await res.text();
      const parsed = text
        .split("\n")
        .map((row) => row.split(","))
        .filter((r) => r.length > 1); // ignore empty lines
      setRows(parsed);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            Weekrooster
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Ons wekelijkse rooster voor kunstschaatsen en shorttrack.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/95 rounded-lg shadow-inner">
              <thead>
                <tr className="bg-blue-800/50 text-white">
                  <th className="p-4 text-left">Dag</th>
                  <th className="p-4 text-left">Tijd</th>
                  <th className="p-4 text-left">Discipline</th>
                  <th className="p-4 text-left">Niveau</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50/50 transition duration-200">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
