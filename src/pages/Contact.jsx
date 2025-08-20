import React from 'react';

function Contact() {
  return (
    <div className="py-16 px-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Contacteer Ons</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Stuur ons een bericht voor meer informatie over lessen, lidmaatschap of evenementen.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Naam</label>
          <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Je Naam" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Je Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Bericht</label>
          <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Je Bericht"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700">Verzenden</button>
      </form>
      <p className="text-center mt-4 text-gray-600">Of email: secretariaat@icediamonds.be</p>
    </div>
  );
}

export default Contact;