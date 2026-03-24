import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "../hooks/useTranslation";

function Initiations() {
  const t = useTranslation();

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
            </ul>
          </div>
        </div>

        {/* CTA to Contact Page */}
        <div className="bg-blue-900/5 backdrop-blur-sm p-8 rounded-xl border border-blue-100 shadow-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("initiation_form_title")}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t("contact_form_intro")}
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl py-4 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
          >
            {t("about_cta_contact_btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Initiations;