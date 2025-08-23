import React from 'react';

function FigureSkating() {
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
            Kunstschaatsen
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Leer basisbewegingen, sprongen en spins onder begeleiding van ervaren coaches.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Lesinformatie</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Beginners: Dinsdag 18:00 - 19:00</li>
              <li>Gevorderden: Donderdag 19:00 - 20:30</li>
              <li>Kosten: €50 per maand</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Brevetten</h2>
          <p className="text-lg text-gray-700 mb-6">
            Download onze brevetdocumenten om meer te weten te komen over de vereisten en verwachtingen voor elk niveau.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a
              href="/assets/brevet-1.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 1 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 1</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-2.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 2 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 2</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-3.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 3 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 3</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-4.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 4 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 4</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-5.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 5 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 5</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-5plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 5 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 5 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-6.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 6 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 6</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-6plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 6 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 6 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-7.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 7 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 7</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-7plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 7 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 7 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-8.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 8 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 8</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-8plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 8 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 8 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-9.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 9 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 9</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-9plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 9 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 9 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-10.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 10 PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 10</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
            <a
              href="/assets/brevet-10plus.pdf"
              download
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-center flex flex-col items-center"
              aria-label="Download Brevet 10 Plus PDF"
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">Brevet 10 Plus</h3>
              <p className="text-gray-600">Download het PDF-document</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FigureSkating;