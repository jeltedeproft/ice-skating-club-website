import React from "react";
import { useTranslation } from "../hooks/useTranslation";

function Schedule() {
  const t = useTranslation();

  // Updated link: added &hl=nl to force Dutch UI (Host Language = NL)
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=iq79h306ihoo7anp1ema1gh3rq3jp4i4%40import.calendar.google.com&ctz=Europe%2FBrussels&hl=nl";

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
            {t("nav_schedule")}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("schedule_title")}</h2>
            <p className="text-lg text-gray-700">
               {t("schedule_intro_text")}
            </p>
            
            {/* Disclaimer Alert Box */}
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <p className="text-sm">
                  <strong>{t("schedule_disclaimer_title")}</strong> {t("schedule_disclaimer_text")}
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Iframe Container */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-inner border border-gray-200 bg-white" style={{ paddingTop: '75%' }}>
            <iframe 
              src={calendarSrc} 
              style={{ border: 0 }} 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              scrolling="no"
              title="Ice Diamonds Schedule"
            ></iframe>
          </div>

          {/* Mobile Fallback Link */}
          <div className="mt-6 text-center md:hidden">
            <a 
              href={calendarSrc} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              {t("schedule_open_full")}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Schedule;