import React, { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import PdfModal from '../components/PdfModal';

const documents = [
  { title: 'IDA Gedragscode voor Sporters', file: 'documenten/gedragscode-sporters.pdf' },
  { title: 'IDA Gedragscode voor Trainers', file: 'documenten/gedragscode-trainers.pdf' },
  { title: 'IDA Privacy Verklaring', file: 'documenten/privacyverklaring.pdf' },
  { title: 'IDA Charter', file: 'documenten/charter.pdf' },
  { title: 'IDA Interne Richtlijnen', file: 'documenten/interne-richtlijnen.pdf' },
  { title: 'IDA Clubstatuten', file: 'documenten/statuten.pdf' },
  { title: 'Prestaties en Doelstellingen', file: 'documenten/prestaties-en-doelstellingen.pdf' },
];

function Policies() {
  const [activeDoc, setActiveDoc] = useState(null);

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
          {documents.map((doc) => (
            <button
              key={doc.file}
              type="button"
              onClick={() => setActiveDoc(doc)}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center"
            >
              <FileText className="mx-auto mb-3 text-blue-900" size={28} />
              <h2 className="text-xl font-bold text-blue-900 mb-2">{doc.title}</h2>
              <p className="text-gray-600">Klik om het PDF-document te openen</p>
            </button>
          ))}
          <a
            href="https://www.vlsu.be/assets/documents/VLSU_aangifteformulier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center"
          >
            <ExternalLink className="mx-auto mb-3 text-blue-900" size={28} />
            <h2 className="text-xl font-bold text-blue-900 mb-2">Ongevallenformulier</h2>
            <p className="text-gray-600">Open het PDF-document</p>
          </a>
        </div>
      </div>

      <PdfModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </div>
  );
}

export default Policies;
