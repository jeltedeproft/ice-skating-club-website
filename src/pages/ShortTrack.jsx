import React, { useEffect } from 'react'; // Added useEffect import
import { useTranslation } from "../hooks/useTranslation"; 

function ShortTrack() {
  const t = useTranslation();

  // NEW: Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      {/* Hero Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50" 
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} 
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            {t("nav_st")}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl space-y-8">
          
          {/* Main Intro */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {t("st_title_main")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("st_intro_main")}
            </p>
          </section>

          {/* Skill Levels Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{t("st_beginner_title")}</h3>
              <p className="text-gray-600">
                {t("st_beginner_text")}
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{t("st_advanced_title")}</h3>
              <p className="text-gray-600">
                {t("st_advanced_text")}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{t("st_comp_title")}</h3>
              <p className="text-gray-600">
                {t("st_comp_text")}
              </p>
            </div>
          </div>

          {/* Closing & Contact */}
          <section className="bg-blue-900 text-white p-6 rounded-lg shadow-inner">
            <p className="text-lg mb-4">
              {t("st_footer_intro")}
            </p>
            <p className="font-medium bg-white/10 p-4 rounded border border-white/20">
              {t("st_email_pre")}
              <a href="mailto:secretariaatida@outlook.com" className="text-cyan-300 hover:text-cyan-100 underline">
                secretariaatida@outlook.com
              </a>{' '}
              {t("st_email_mid")}
              <a href="mailto:ida.shorttrack@gmail.com" className="text-cyan-300 hover:text-cyan-100 underline">
                ida.shorttrack@gmail.com
              </a>{' '}
              {t("st_email_post")}
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Practical Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t("st_training_title")}</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>{t("st_info_sessions")}</li>
              <li>{t("st_info_levels")}</li>
              <li>{t("st_info_gear")}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ShortTrack;