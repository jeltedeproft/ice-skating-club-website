import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "../hooks/useTranslation";

function Contact() {
  const t = useTranslation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // ⚠️ REPLACE THESE VALUES WITH YOUR ACTUAL EMAILJS KEYS ⚠️
    const SERVICE_ID = "service_npn3yrb";
    const TEMPLATE_ID = "template_dyea27u";
    const PUBLIC_KEY = "esM-SwYjzCyP-GhLD";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          setStatus('success');
          form.current.reset(); // Clear the form
        },
        (error) => {
          setIsSending(false);
          setStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

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
            {t("contact_title")}
          </h1>
        </div>
      </div>

      {/* Club Info */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {t("contact_info_title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">{t("contact_general_info")}</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>{t("contact_label_name")}:</strong> Ice Diamonds Antwerp VZW</li>
              <li><strong>{t("contact_label_enterprise")}:</strong> 0452 302 387</li>
              <li><strong>{t("contact_label_address_official")}:</strong> Diepestraat 22, 2850 Boom</li>
              <li><strong>{t("contact_label_address_training")}:</strong> Sportoase Groot Schijn, Ruggeveldlaan 488, 2100 Deurne</li>
              <li><strong>{t("contact_label_account")}:</strong> BE35 1430 9092 1437</li>
              <li><strong>BIC:</strong> GEBABEBB</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">{t("contact_accessibility_title")}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>{t("contact_transport_tram")}</li>
              <li>{t("contact_transport_bus")}</li>
              <li>{t("contact_transport_velo")}</li>
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
            {t("contact_form_intro")}
          </p>
          
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                {t("contact_label_name")}
              </label>
              <input
                type="text"
                id="name"
                name="user_name" // Required for EmailJS
                required
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder={t("contact_placeholder_name")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                {t("contact_label_email")}
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // Required for EmailJS
                required
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder={t("contact_placeholder_email")}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                {t("contact_label_message")}
              </label>
              <textarea
                id="message"
                name="message" // Required for EmailJS
                required
                className="w-full p-3 bg-white/50 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                rows="5"
                placeholder={t("contact_placeholder_message")}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSending}
              className={`w-full text-white p-3 rounded-lg transition duration-200 ${
                isSending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSending ? "Sending..." : t("contact_send_btn")}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center font-semibold mt-2">
                ✅ Bericht succesvol verzonden! / Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-semibold mt-2">
                ❌ Er ging iets mis. Probeer het later opnieuw. / Something went wrong.
              </p>
            )}
          </form>

          <p className="text-center mt-4 text-gray-600">
            {t("contact_or_mail")}
            <a
              href="mailto:secretariaatida@outlook.com"
              className="text-blue-600 hover:text-blue-800 transition duration-200 ml-1"
            >
              secretariaatida@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;