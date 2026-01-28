import React from 'react';
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom"; 

function Home() {
    const t = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[450px] bg-cover bg-center flex flex-col items-center justify-center text-center pt-16"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero_banner.jpg)` }}>
                
                <img 
                    src={`${import.meta.env.BASE_URL}IDA logo Zwart 3.png`} 
                    alt="Ice Diamonds Antwerp Logo" 
                    className="w-80 md:w-96 h-auto mx-auto mb-6 drop-shadow-2xl"
                />

                <div className="bg-blue-900/60 p-8 rounded-2xl max-w-2xl mx-4 backdrop-blur-sm">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                        {t("home_hero_title")}
                    </h1>
                    <p className="text-lg text-white mb-6 drop-shadow-sm">
                        {t("home_hero_subtitle")}
                    </p>
                    <Link
                        to="/initiations"
                        className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition transform hover:-translate-y-1"
                    >
                        {t("home_cta_initiation")}
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl mb-8 text-center">
                    <p className="text-xl text-gray-700 mb-6 font-medium leading-relaxed">
                        {t("intro")}
                    </p>
                    
                    {/* VLSU Image Section */}
                    <div className="flex justify-center items-center mt-4">
                        <p className="text-sm text-gray-400 uppercase tracking-widest mr-4 mb-2">{t("member_vlsu")}</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={`${import.meta.env.BASE_URL}vlsu-logo-big.jpg`} 
                                alt="Vlaamse Schaatsunie" 
                                className="h-24 w-auto object-contain hover:scale-105 transition duration-300" 
                            />
                        </a>
                    </div>
                </div>
                
                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Figure Skating */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full group">
                        <div className="overflow-hidden h-72 w-full">
                            <img src={`${import.meta.env.BASE_URL}Kunstschaatsen Loena Hendrickx Foto.jpg`} alt="Figure Skating"
                                className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("figureSkating")}</h2>
                            
                            <p className="text-gray-600 mb-4 flex-grow">
                                {t("home_fs_desc")}
                            </p>
                            
                            <Link to="/figure-skating" className="text-blue-700 font-bold hover:text-blue-900 mt-auto flex items-center gap-2">
                                {t("readMore")} 
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Shorttrack */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full group">
                        <div className="overflow-hidden h-72 w-full">
                            <img src={`${import.meta.env.BASE_URL}Shorttrack Hanne Desmet Foto.png`} alt="Shorttrack"
                                className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-blue-900 mb-2">{t("shorttrack")}</h2>
                            
                            <p className="text-gray-600 mb-4 flex-grow">
                                {t("home_st_desc")}
                            </p>
                            
                            <Link to="/short-track" className="text-blue-700 font-bold hover:text-blue-900 mt-auto flex items-center gap-2">
                                {t("readMore")}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Initiations */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">{t("home_initiation_section_title")}</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        {t("home_initiation_section_text")}
                    </p>

                    <Link to="/initiations"
                        className="inline-block bg-blue-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
                        {t("home_initiation_section_btn")}
                    </Link>
                </div>

                <div className="mt-12 text-center border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">{t("partners")}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center items-center opacity-80 hover:opacity-100 transition-opacity">
                        <a href="https://www.antwerpen.be" target="_blank" rel="noopener noreferrer">
                            {/* UPDATED: Changed h-16 to h-24 md:h-32 */}
                            <img src={`${import.meta.env.BASE_URL}stad_antwerpen.jpg`} alt="Stad Antwerpen Logo" className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </a>
                        <a href="https://www.skatebelgium.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}kbkf.jpeg`} alt="K.B.K.F. Logo" className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </a>
                        <a href="https://www.kbsf.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}kbsf.png`} alt="K.B.S.F. Logo" className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </a>
                        <a href="https://www.vlsu.be" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}vlsu.png`} alt="VLSU Logo" className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </a>
                        <a href="https://www.thefoodmaker.com" target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}foodmaker.png`} alt="Foodmaker Logo" className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;