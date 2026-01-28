import React, { useEffect } from 'react';
import { useTranslation } from "../hooks/useTranslation";

function News() {
  const t = useTranslation();
  
  // The Twizzit Link provided
  const twizzitNewsLink = "https://app.twizzit.com/v2/home?articleId=136955";

  // Scroll to top on load
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
            {t("news_title")}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl text-center">
          
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t("news_title")}</h2>
            <p className="text-lg text-gray-700 mb-6">
               {t("news_intro")}
            </p>

            {/* Disclaimer for Login Wall */}
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 text-left rounded shadow-sm">
               <p className="text-sm">
                 <strong>Info: </strong> {t("news_disclaimer")}
               </p>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-inner border border-gray-200 bg-white mb-8" style={{ height: '600px' }}>
            <iframe 
              src={twizzitNewsLink}
              className="w-full h-full border-0"
              title="Twizzit News"
              allowFullScreen
            ></iframe>
          </div>

          {/* Fallback Button */}
          <a 
            href={twizzitNewsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            {t("news_open_twizzit")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}

export default News;