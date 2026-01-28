import React, { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

function Team() {
  const t = useTranslation();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DATA STRUCTURE
  const teamData = {
    shorttrack: [
      {
        name: "Peter Vermeeren",
        role: "Trainer Shorttrack",
        image: `${import.meta.env.BASE_URL}coaches/peterVermeeren.jpg`,
        objectPosition: "object-top",
      },
      {
        name: "Lieselot Noiron",
        role: "Trainer Shorttrack",
        image: `${import.meta.env.BASE_URL}coaches/lieselotNoiron.jpg`,
        objectPosition: "object-center",
      },
      {
        name: "Koen Turcksin",
        role: "Trainer Shorttrack",
        image: `${import.meta.env.BASE_URL}coaches/koenTurcksin.jpg`,
        objectPosition: "object-center",
      },
      {
        name: "Wolter Hartog",
        role: "Monitor",
        image: `${import.meta.env.BASE_URL}coaches/wolterHartog.jpg`,
        objectPosition: "object-center",
      },
      {
        name: "Anke Declerck",
        role: "Monitor",
        image: `${import.meta.env.BASE_URL}coaches/ankeDeclerck.jpg`,
        objectPosition: "object-center",
      },
    ],
    figureskating: [], // Empty for now
    staff: []          // Empty for now
  };

  // Helper component for a single section
  const TeamSection = ({ title, members, id }) => (
    <section id={id} className="mb-20 relative">
      
      {/* Section Header with 'Ice Line' decoration */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wider">
          {title}
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-30"></div>
      </div>

      {/* Grid or Empty State */}
      {members.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icy Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/0 to-cyan-100/0 group-hover:from-cyan-100/30 group-hover:to-blue-100/30 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="relative w-40 h-40 mx-auto mb-5">
                    {/* Image Border/Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-blue-100 group-hover:border-cyan-300 transition-colors duration-300"></div>
                    <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full rounded-full object-cover shadow-sm ${member.objectPosition}`}
                    />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyan-600 font-medium uppercase text-xs tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white/40 backdrop-blur-sm border border-blue-100 rounded-xl p-12 text-center">
            <svg className="w-12 h-12 text-blue-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-gray-500 italic text-lg">{t("team_coming_soon")}</p>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      
      {/* Hero Banner */}
      <div className="relative w-full h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")',
            filter: "blur(2px)",
          }}
        />
        {/* Blue Overlay for contrast */}
        <div className="absolute inset-0 bg-blue-900/30" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {t("team_title")}
          </h1>
          <div className="h-1 w-24 bg-yellow-400 rounded-full shadow-lg"></div>
          <p className="text-lg text-white font-medium drop-shadow-md max-w-2xl px-4">
            {t("team_intro")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        
        <TeamSection 
            id="shorttrack" 
            title={t("team_tab_st")} 
            members={teamData.shorttrack} 
        />
        
        <TeamSection 
            id="figureskating" 
            title={t("team_tab_fs")} 
            members={teamData.figureskating} 
        />
        
        <TeamSection 
            id="staff" 
            title={t("team_tab_staff")} 
            members={teamData.staff} 
        />

      </div>
    </div>
  );
}

export default Team;