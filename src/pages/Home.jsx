import React from 'react';
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom";

function Home() {
    const t = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero_banner.jpg)` }}>
                <div className="bg-blue-900/60 p-8 rounded-2xl max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Ontdek het plezier van schaatsen!
                    </h1>
                    <p className="text-lg text-white mb-6">
                        Doe mee met een initiatie en ervaar zelf de magie op het ijs. Geen ervaring nodig!
                    </p>
                    <Link
                        to="/initiations"
                        className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition"
                    >
                        Schrijf je in voor een initiatie
                    </Link>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-8">
                    <p className="text-lg text-gray-700 mb-6">
                        {t("intro")}
                    </p>
                </div>
                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Figure Skating */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <img src={`${import.meta.env.BASE_URL}Kunstschaatsen Loena Hendrickx Foto.jpg`} alt="Figure Skating"
                            className="h-72 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">Kunstschaatsen</h2>
                            <p className="text-gray-600 mb-4">Gratie, techniek en kunstzinnige expressie op het ijs.</p>
                            <a href="/figure-skating" className="text-blue-700 font-semibold hover:underline">Lees meer →</a>
                        </div>
                    </div>

                    {/* Shorttrack */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <img src={`${import.meta.env.BASE_URL}Shorttrack Hanne Desmet Foto.png`} alt="Shorttrack"
                            className="h-72 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">Shorttrack</h2>
                            <p className="text-gray-600 mb-4">Snelheid, strategie en adrenaline op het ijs.</p>
                            <a href="/shorttrack" className="text-blue-700 font-semibold hover:underline">Lees meer →</a>
                        </div>
                    </div>
                </div>
                {/* Initiations */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Begin met een initiatie</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Iedereen kan leren schaatsen! Onze initiaties zijn dé perfecte manier om kennis te maken
                        met het ijs in een veilige en leuke omgeving. €70 voor een 10 beurtenkaart, huurschaatsen zijn inbegrepen.
                    </p>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <img src={`${import.meta.env.BASE_URL}initiations/init1.jpg`} alt="Initiatie 1"
                            className="rounded-xl shadow-md object-cover h-56 w-full" />
                        <img src={`${import.meta.env.BASE_URL}initiations/init2.jpg`} alt="Initiatie 2"
                            className="rounded-xl shadow-md object-cover h-56 w-full" />
                        <img src={`${import.meta.env.BASE_URL}initiations/init3.jpg`} alt="Initiatie 3"
                            className="rounded-xl shadow-md object-cover h-56 w-full" />
                    </div> */}
                    <a href="/initiations"
                        className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition">
                        Ontdek onze initiaties
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{t("partners")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-items-center">
                        <a href="https://www.antwerpen.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}stad_antwerpen.jpg`} alt="Stad Antwerpen Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.skatebelgium.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}kbkf.jpeg`} alt="K.B.K.F. Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.kbsf.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}kbsf.png`} alt="K.B.S.F. Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}vlsu.png`} alt="VLSU Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        <a href="https://www.thefoodmaker.com" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}foodmaker.png`} alt="Foodmaker Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;