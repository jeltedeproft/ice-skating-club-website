import React from 'react';

function Policies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Beleid en Regels</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="Gedragscode_Sporters.pdf" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Gedragscode voor Sporters</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a href="IDA  Privacyverklaring.docx" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Privacy Verklaring</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a href="IDA Charter 010923.docx" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Charter</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a href="IDA Gedragscode_Trainers 24092021.docx" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Gedragscode voor Trainers</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a href="IDA Interne richtlijnen 202023-2024" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Interne Richtlijnen</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a href="Statuten Ice Diamonds Antwerp vzw 18082021.docx" download className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IDA Clubstatuten</h2>
            <p className="text-gray-600">Download het PDF-document</p>
          </a>
          <a
            href="https://www.vlsu.be/assets/documents/VLSU_aangifteformulier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">Ongevallenformulier</h2>
            <p className="text-gray-600">Open het PDF-document</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Policies;