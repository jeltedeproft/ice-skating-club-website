import React from 'react';

function ClubCalendar() {
  // Path to your PDF in the public folder
  const pdfUrl = "Uurrooster seizoen 2025_2026_1.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      
      {/* Hero Section - Kept consistent with your other pages */}
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            Kalender
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          
          <div className="flex flex-col items-center space-y-6">
            
            {/* Header / Intro */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Uurrooster Seizoen 2025-2026</h2>
              <p className="text-gray-600 mb-4">
                Hieronder vindt u het volledige schema. Kunt u het bestand niet zien? 
                <a href={pdfUrl} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline ml-1">
                  Klik hier om het te downloaden.
                </a>
              </p>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[800px] border-2 border-blue-100 rounded-lg overflow-hidden shadow-inner bg-gray-100">
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title="Schaats Kalender"
                width="100%"
                height="100%"
                className="w-full h-full"
              >
                <p className="p-4 text-center">
                  Uw browser ondersteunt geen PDF-weergave. 
                  <a href={pdfUrl} className="text-blue-600 underline">Download het bestand hier.</a>
                </p>
              </iframe>
            </div>

            {/* Mobile Fallback Button (PDFs are hard to read in iframes on mobile) */}
            <div className="block md:hidden w-full">
               <a 
                 href={pdfUrl} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition"
               >
                 <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                 </svg>
                 Open PDF
               </a>
            </div>

          </div>

        </div>

        <p className="text-center mt-6 text-gray-600">
          <a href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">Contacteer ons</a> voor meer info.
        </p>
      </div>
    </div>
  );
}

export default ClubCalendar;