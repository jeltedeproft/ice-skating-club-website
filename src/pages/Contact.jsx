import React from "react";
import { MapPin, Phone, Mail, Home } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      {/* Hero */}
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")',
            filter: "blur(1px)",
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            Contacteer Ons
          </h1>
        </div>
      </div>

      {/* Club Info */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Clubinfo & Bereikbaarheid
        </h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Algemene info</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Naam:</strong> Ice Diamonds Antwerp VZW</li>
              <li><strong>Ondernemingsnummer:</strong> 0452 302 387</li>
              <li><strong>Club telefoon:</strong> +32 (0) 497 17 52 64</li>
              <li><strong>Officieel adres:</strong> Gebr. Van Raemdonckstraat 28, 2170 Merksem</li>
              <li><strong>Trainingsadres:</strong> Ruggeveldlaan 488, 2100 Deurne</li>
              <li><strong>Rekeningnummer:</strong> BE35 1430 9092 1437</li>
              <li><strong>BIC:</strong> GEBABEBB</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Bereikbaarheid</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Tram 5, 10</li>
              <li>Bus 19, 410</li>
              <li>Velostation Station 240 – Park Groot Schijn</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href="https://goo.gl/maps/GXj8xJHkUSXWf58Y9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Google Maps
              </a>
              <a
                href="http://maps.apple.com/?address=Ruggeveldlaan+488,2100,Antwerpen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Apple Maps
              </a>
            </div>
          </div>
        </div>

        {/* Inline Google Maps */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Ice Diamonds Training Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.1888376827533!2d4.479064676560068!3d51.22653393279706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f73d4a770c2b%3A0x4206465f64f3037!2sRuggeveldlaan%20488%2C%202100%20Antwerpen!5e0!3m2!1sen!2sbe!4v1695738389477!5m2!1sen!2sbe"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

       {/* Contact Form */}
      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Stuur ons een bericht voor meer informatie over lessen of lidmaatschap.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Naam
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Je Naam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Je Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Bericht
              </label>
              <textarea
                id="message"
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                rows="5"
                placeholder="Je Bericht"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Verzenden
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Of mail naar:{" "}
            <a
              href="mailto:secretariaat@icediamonds.be"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              secretariaat@icediamonds.be
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
