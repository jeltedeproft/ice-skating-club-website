import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

function Home() {
    const t = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
            <div className="relative w-full h-64 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">{t("welcome")}</h1>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-8">
                    <p className="text-lg text-gray-700 mb-6">
                        {t("intro")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">{t("figureSkating")}</h2>
                        <p className="text-gray-600">{t("figureSkatingDesc")}</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">{t("synchro")}</h2>
                        <p className="text-gray-600">{t("synchroDesc")}</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">{t("shorttrack")}</h2>
                        <p className="text-gray-600">{t("shorttrackDesc")}</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{t("partners")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-items-center">
                        <a href="https://www.antwerpen.be" target="_blank" rel="noopener noreferrer">
                            <img src="/stad_antwerpen.jpg" alt="Stad Antwerpen Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.skatebelgium.be" target="_blank" rel="noopener noreferrer">
                            <img src="/kbkf.jpeg" alt="K.B.K.F. Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.kbsf.be" target="_blank" rel="noopener noreferrer">
                            <img src="/kbsf.png" alt="K.B.S.F. Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer">
                            <img src="/vlsu.png" alt="VLSU Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.thefoodmaker.com" target="_blank" rel="noopener noreferrer">
                            <img src="/foodmaker.png" alt="Foodmaker Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;