import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "../hooks/useTranslation";

function Initiations() {
  const t = useTranslation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const PUBLIC_KEY = "esM-SwYjzCyP-GhLD";
    const SERVICE_ID = "service_7s9nvjl";
    const TEMPLATE_ID = "template_1wvvl81"; 

    // Haal de waarden uit het formulier
    const values = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      phone: form.current.phone.value,
      day_preference: form.current.day_preference.value,
      message: form.current.message.value,
    };

    // We bouwen hier de volledige mail die zowel de klant als jij (in BCC) krijgt.
    // Deel 1: De info voor de klant (Myriam's tekst)
    // Deel 2: De gegevens van de klant (zodat jij weet wie het is)
    const fullMessage = `Beste ${values.user_name},

Dankjewel voor je vraag voor informatie aangaande onze club.

De initiatielessen vinden plaats op zaterdag van 13:30 tot 14:15 uur en/of op zondag van 10:45 tot 11:45 uur. Voor deze lessen kun je een 10-beurtenkaart kopen voor €70. De lessen hoeven niet opeenvolgend te worden gevolgd. Als je eerder naar de club kan overstappen, worden de overgebleven beurten in mindering gebracht op het lidgeld.

Plaats : Sportoase Groot Schijn, Ruggeveldlaan 488, 2100 Deurne

Hierbij de link om in te schrijven:
Initiatielessen kunstschaatsen: https://app.twizzit.com/v2/public/form/adc3de5ac437fb620d07c5c86756422b
Vooraf inschrijven per persoon is verplicht!

Ik hoop dat je hiermee verder kunt. Mocht je nog vragen hebben, aarzel dan niet om contact op te nemen.

Vriendelijke groeten,

Myriam
mail : secretariaatida@outlook.com
www.icediamonds.be

--------------------------------------------------
Overzicht van je aanvraag:
Naam: ${values.user_name}
Email: ${values.user_email}
Telefoon: ${values.phone}
Voorkeur dag: ${values.day_preference}
Opmerking: ${values.message}
`;

    // Email params
    const templateParams = {
      target_email: values.user_email, // De mail gaat naar de klant
      subject: `Informatie aanvraag Initiatielessen - ${values.user_name}`,
      message: fullMessage, // Dit bevat de hele tekst hierboven
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSending(false);
          setStatus('error');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      {/* Hero */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            {t("nav_initiations")}
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-12">
          <p className="text-lg text-gray-700 mb-6">
            {t("initiation_intro_text")}
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("initiation_details_title")}</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("initiation_detail_location")}</li>
              <li>{t("initiation_detail_cost")}</li>
              <li>{t("initiation_detail_info_1")}</li>
              <li>{t("initiation_detail_info_2")}</li>
            </ul>
          </div>
        </div>

        {/* Inschrijfformulier */}
        <div className="bg-blue-900/5 backdrop-blur-sm p-8 rounded-xl border border-blue-100 shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">{t("initiation_form_title")}</h2>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Naam */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t("contact_label_name")}</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  placeholder={t("contact_placeholder_name")}
                  className="w-full p-3 bg-white rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t("contact_label_email")}</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  placeholder={t("contact_placeholder_email")}
                  className="w-full p-3 bg-white rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Telefoon */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t("initiation_label_phone")}</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+32 4..."
                  className="w-full p-3 bg-white rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Keuze Dag */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t("initiation_label_day")}</label>
                <select 
                  name="day_preference" 
                  className="w-full p-3 bg-white rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Zaterdag">{t("initiation_option_saturday")}</option>
                  <option value="Zondag">{t("initiation_option_sunday")}</option>
                </select>
              </div>
            </div>

            {/* Extra Opmerking */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{t("initiation_label_message")}</label>
              <textarea 
                name="message" 
                rows="3"
                placeholder={t("initiation_placeholder_message")}
                className="w-full p-3 bg-white rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full text-white p-3 rounded-lg font-bold text-lg transition duration-200 ${
                isSending ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500 text-blue-900"
              }`}
            >
              {isSending ? t("loading") : t("initiation_btn_submit")}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center font-semibold mt-4 bg-green-50 p-2 rounded">
                ✅ Aanvraag verzonden! Controleer je mail voor de informatie.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-semibold mt-4 bg-red-50 p-2 rounded">
                ❌ Er ging iets mis. Probeer het later opnieuw.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Initiations;