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
                        {t("home_hero_title")}
                    </h1>
                    <p className="text-lg text-white mb-6">
                        {t("home_hero_subtitle")}
                    </p>
                    <Link
                        to="/initiations"
                        className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition"
                    >
                        {t("home_cta_initiation")}
                    </Link>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-8 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                        {t("intro")}
                    </p>
                    {/* Explicit Affiliation Link */}
                    <p className="text-sm text-gray-500">
                        {t("member_vlsu")} <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">{t("vlsu")}</a>.
                    </p>
                </div>
                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Figure Skating */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <img src={`${import.meta.env.BASE_URL}Kunstschaatsen Loena Hendrickx Foto.jpg`} alt="Figure Skating"
                            className="h-72 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("figureSkating")}</h2>
                            <p className="text-gray-600 mb-4">{t("home_fs_desc")}</p>
                            <a href="/figure-skating" className="text-blue-700 font-semibold hover:underline">{t("readMore")} →</a>
                        </div>
                    </div>

                    {/* Shorttrack */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <img src={`${import.meta.env.BASE_URL}Shorttrack Hanne Desmet Foto.png`} alt="Shorttrack"
                            className="h-72 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("shorttrack")}</h2>
                            <p className="text-gray-600 mb-4">{t("home_st_desc")}</p>
                            <a href="/shorttrack" className="text-blue-700 font-semibold hover:underline">{t("readMore")} →</a>
                        </div>
                    </div>
                </div>
                {/* Initiations */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">{t("home_initiation_section_title")}</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        {t("home_initiation_section_text")}
                    </p>

                    <a href="/initiations"
                        className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition">
                        {t("home_initiation_section_btn")}
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
                        <div className="flex flex-col items-center gap-2">
                        <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}vlsu.png`} alt="VLSU Logo" className="h-16 object-contain hover:scale-105 transition duration-200" />
                        </a>
                        </div>
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