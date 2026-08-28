import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

/**
 * Fullscreen pop-up that shows a PDF from the public folder in an iframe.
 * Falls back to an "open in new tab" link for browsers (mostly mobile)
 * that refuse to render PDFs inline.
 */
function PdfModal({ doc, onClose }) {
  useEffect(() => {
    if (!doc) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [doc, onClose]);

  const fileUrl = doc ? `${import.meta.env.BASE_URL}${doc.file}` : '';

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-blue-950/70 backdrop-blur-sm p-2 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={doc.title}
        >
          <motion.div
            className="relative flex flex-col w-full max-w-5xl h-[92vh] bg-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-blue-900 text-white">
              <h2 className="text-base sm:text-xl font-bold truncate">{doc.title}</h2>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition"
                  title="Openen in nieuw tabblad"
                >
                  <ExternalLink size={16} /> Nieuw tabblad
                </a>
                <a
                  href={fileUrl}
                  download
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition"
                  title="Downloaden"
                >
                  <Download size={16} /> Downloaden
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Sluiten"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src={`${fileUrl}#view=FitH`}
                title={doc.title}
                className="w-full h-full border-0"
              >
                <p className="p-4 text-center">Uw browser ondersteunt geen PDF-weergave.</p>
              </iframe>
            </div>

            {/* Fallback for browsers that do not render PDFs inline */}
            <div className="px-4 sm:px-6 py-3 bg-blue-50 text-center text-sm text-gray-600">
              Ziet u het document niet?{' '}
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-bold hover:underline"
              >
                Open de PDF in een nieuw tabblad.
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PdfModal;
