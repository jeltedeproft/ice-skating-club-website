import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80")', filter: 'blur(4px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Contacteer Ons</h1>
        </div>
      </div>
      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Stuur ons een bericht voor meer informatie over lessen of lidmaatschap.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Naam</label>
              <input type="text" id="name" className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Je Naam" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Je Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Bericht</label>
              <textarea id="message" className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" rows="5" placeholder="Je Bericht"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200">Verzenden</button>
          </form>
          <p className="text-center mt-4 text-gray-600">Of email: <a href="mailto:secretariaat@icediamonds.be" className="text-blue-600 hover:text-blue-800 transition duration-200">secretariaat@icediamonds.be</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;