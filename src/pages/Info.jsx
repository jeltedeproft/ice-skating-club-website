import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info as InfoIcon, Target, Users, Snowflake, Activity, Medal, ChevronRight } from 'lucide-react';

function Info() {
  // Animatie varianten voor soepele binnenkomst
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient pb-12">
      
      {/* Hero Section */}
      <div className="relative w-full h-80 overflow-hidden shadow-lg mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")' }} 
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-2"
          >
            Info & Doelstellingen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-lg md:text-xl font-light tracking-wide"
          >
            Ice Diamonds Antwerp
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8"
        >
          
          {/* Algemene Visie */}
          <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Visie en Organisatie</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ice Diamonds Antwerp is een omni sportclub in België waar meerdere sporttakken binnen dezelfde vereniging worden aangeboden. Het topsportbeleid sluit aan op de breedtesport, waardoor er gestreefd wordt naar een consistente visie tussen beide niveaus. De club werkt centraal om efficiëntiewinst te behalen en verschillende faciliteiten toegankelijk te maken voor sporters uit uiteenlopende disciplines. Dit zorgt ervoor dat programma's beter kunnen worden afgestemd op elkaar.
              </p>
              <p>
                De club streeft naar het aantrekken van passende expertise, waarbij iedere rol vervuld wordt door personen met overeenkomstige visie en kwalificaties. Er wordt gewerkt aan een stabiele omgeving voor diverse sporters. Trainers beschikken over de vereiste diploma's en competenties voor begeleiding van ontwikkelings- en prestatieprogramma’s. Experts worden geselecteerd op basis van kennis en ervaring.
              </p>
            </div>
          </motion.section>

          {/* Disciplines Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Figure Skating */}
            <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-t-4 border-cyan-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full">
                  <Snowflake size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Figure Skating</h2>
              </div>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Binnen de sporttak Figure Skating richt men zich op jeugdleden vanaf 4 jaar en young adults vanaf 14 jaar. Na initiatielessen worden leden ingedeeld in groepen. Twee keer per jaar leggen zij clubbrevetten af en vindt een evaluatie van hun kennis plaats.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                  <h3 className="font-semibold text-cyan-800 mb-2 text-sm uppercase tracking-wide">Recreatief & Show</h3>
                  <p>
                    Recreanten die ervoor kiezen niet deel te nemen aan wedstrijden, blijven betrokken via trainingen gericht op het jaarlijkse schaatsgala en andere evenementen, zoals een kerstshow of Free Podium.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-2 text-sm uppercase tracking-wide">Competitie</h3>
                  <p>
                    Recreanten met potentieel worden persoonlijk benaderd voor het competitieve circuit met een individueel trainingsschema. Voor competitieven wordt een schema ontwikkeld met on-ice en off-ice trainingen (waaronder ballet en fysiek).
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Shorttrack */}
            <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                  <Activity size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Shorttrack</h2>
              </div>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  In de sporttak shorttrack (snelschaatsen) zijn deelnemers van alle leeftijden welkom (vanaf ca. 8 jaar). Zij starten met proeflessen en initiatietrainingen, waarna ze ingedeeld worden bij startersgroepen.
                </p>
                <p className="font-medium text-indigo-900">
                  Ongeveer 85% stroomt vervolgens door naar competitief schaatsen.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 text-yellow-600 rounded-full">
                    <Medal size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Wedstrijden</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Shorttrack en solo Figure Skating nemen momenteel deel aan nationale en internationale wedstrijden, waaronder Belgische en Vlaamse kampioenschappen, Grand Prix Junior en Senior, Olympische-, Europese- en wereldkampioenschappen.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Links Section */}
          <motion.section variants={itemVariants} className="flex justify-center mt-4">
            <Link 
              to="/info/sportsmedical" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Activity className="w-5 h-5" />
              <span>Ga naar Sportmedisch Onderzoek</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}

export default Info;