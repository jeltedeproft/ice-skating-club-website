import React, { useEffect } from 'react'; // Added useEffect import
import { useTranslation } from "../hooks/useTranslation"; 

function FigureSkating() {
  const t = useTranslation();

  // NEW: Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // List of brevet IDs to map through
  const brevets = [
    "1", "2", "3", "4",
    "5", "5plus", "6", "6plus",
    "7", "7plus", "8", "8plus",
    "9", "9plus", "10", "10plus"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      {/* Hero Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")',
            filter: 'blur(1px)',
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            {t("fs_title")}
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl space-y-6">

          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t("fs_title")}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t("fs_desc_main")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("fs_desc_sub")}
            </p>
          </section>

          {/* Callout Box for Motivation */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">{t("fs_motto_title")}</h3>
            <p className="text-gray-800 italic text-lg">
              "{t("fs_motto_quote")}"
            </p>
          </section>

          {/* CTA / Contact Section */}
          <section>
            <p className="text-lg text-gray-700">
              {t("fs_cta_text")}
              <a
                href="mailto:secretariaat@icediamonds.be"
                className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
              >
                secretariaat@icediamonds.be
              </a>
            </p>
          </section>

        </div>
      </div>

      {/* Compact Brevets Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl">
          <div className="mb-6">
             <h2 className="text-2xl font-bold text-blue-900">{t("fs_brevets_title")}</h2>
             <p className="text-gray-700 mt-2">
               {t("fs_brevets_intro")}
             </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brevets.map((id) => (
              <a
                key={id}
                href={`/assets/brevet-${id}.pdf`}
                download
                aria-label={`Download Brevet ${id} PDF`}
                className="group flex items-center justify-between p-3 bg-blue-50/50 border border-blue-100 rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <span className="font-semibold text-blue-900 text-sm truncate mr-2">
                    {t(`fs_brevet_${id}`)}
                </span>

                <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FigureSkating;