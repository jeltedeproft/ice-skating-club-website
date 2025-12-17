import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

function FigureSkating() {
  const t = useTranslation();

  // List of brevet IDs to map through
  const brevets = [
    "1", "2", "3", "4", 
    "5", "5plus", "6", "6plus", 
    "7", "7plus", "8", "8plus", 
    "9", "9plus", "10", "10plus"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            {t("fs_intro")}
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("fs_lesson_info_title")}</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>{t("fs_lesson_beginners")}</li>
              <li>{t("fs_lesson_advanced")}</li>
              <li>{t("fs_cost")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{t("fs_brevets_title")}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("fs_brevets_intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brevets.map((id) => (
              <a
                key={id}
                href={`/assets/brevet-${id}.pdf`}
                download
                className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
                aria-label={`Download Brevet ${id} PDF`}
              >
                <svg
                  className="w-8 h-8 text-blue-900 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {/* Dynamically select the translation key, e.g., fs_brevet_5plus */}
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t(`fs_brevet_${id}`)}</h3>
                <p className="text-gray-600">{t("fs_brevet_download_text")}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FigureSkating;