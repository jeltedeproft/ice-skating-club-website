import React from 'react';

function Info() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")', filter: 'blur(1px)' }} />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">Info</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-8">
          <section className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Prestaties en doelstellingen Ice Diamonds Antwerp
            </h2>
            <p className="text-gray-700 mb-4">
              Prestaties en doelstellingen Ice Diamonds Antwerp
            </p>
            <p className="text-gray-700 mb-4">
              Ice Diamonds Antwerp is een omni sportclub in België waar meerdere sporttakken binnen dezelfde vereniging worden aangeboden. Het topsportbeleid sluit aan op de breedtesport, waardoor er gestreefd wordt naar een consistente visie tussen beide niveaus. De club werkt centraal om efficiëntiewinst te behalen en verschillende faciliteiten toegankelijk te maken voor sporters uit uiteenlopende disciplines. Dit zorgt ervoor dat programma's beter kunnen worden afgestemd op elkaar.
            </p>
            <p className="text-gray-700 mb-4">
              De club streeft naar het aantrekken van passende expertise, waarbij iedere rol vervuld wordt door personen met overeenkomstige visie en kwalificaties. Er wordt gewerkt aan een stabiele omgeving voor diverse sporters. Trainers beschikken over de vereiste diploma's en competenties voor begeleiding van ontwikkelings- en prestatieprogramma’s. Experts worden geselecteerd op basis van kennis en ervaring.
            </p>
            <p className="text-gray-700 mb-4">
              Binnen de sporttak Figure Skating richt men zich op jeugdleden vanaf 4 jaar en young adults vanaf 14 jaar. Na initiatielessen worden leden ingedeeld in groepen. Twee keer per jaar leggen zij clubbrevetten af en vindt een evaluatie van hun kennis plaats. Ook recreatieve leden krijgen educatie en ervaring, terwijl talentherkenning mogelijk wordt gemaakt.
            </p>
            <p className="text-gray-700 mb-4">
              Recreanten met potentieel voor deelname aan wedstrijden worden persoonlijk benaderd en geïnformeerd over de mogelijkheden tot doorgroei naar het competitieve circuit. Hiervoor wordt een individueel trainingsschema opgesteld, aangepast aan het niveau van de schaatser. Daarnaast worden specifieke trainingen aangeboden ter voorbereiding op de CLT-tests (Competition Level Test).
            </p>
            <p className="text-gray-700 mb-4">
              Recreanten die ervoor kiezen niet deel te nemen aan wedstrijden, blijven betrokken via trainingen gericht op het jaarlijkse schaatsgala en andere evenementen, zoals bv een kerstshow of Free Podium.
            </p>
            <p className="text-gray-700 mb-4">
              Competitieven: in overleg met het bestuur wordt een aangepast trainingsschema ontwikkeld, bestaande uit meerdere intensiteitsniveaus. Dit schema omvat zowel on-ice als off-ice trainingen, waaronder ballet en fysieke oefensessies.
            </p>
            <p className="text-gray-700 mb-4">
              In de sporttak shorttrack (snelschaatsen) zijn deelnemers van alle leeftijden welkom. Zij starten met proeflessen en initiatietrainingen, waarna ze ingedeeld worden bij startersgroepen. Ongeveer 85% stroomt vervolgens door naar competitief schaatsen. De leeftijd binnen shorttrack begint rond 8 jaar en hoger.
            </p>
            <p className="text-gray-700 mb-4">
              Shorttrack en solo Figure Skating nemen momenteel deel aan nationale en internationale wedstrijden, waaronder Belgische en Vlaamse kampioenschappen, Grand Prix Junior en Senior, Olympische-, Europese- en wereldkampioenschappen.
            </p>
          </section>
          <p className="text-lg text-gray-700 mb-6">
            Links
          </p>
          <ul className="space-y-4">
            <li><a href="/info/sportsmedical" className="text-blue-600 hover:text-blue-800 transition duration-200">Sportmedisch Onderzoek</a></li>
            {/* Voeg hier meer subpagina's toe als nodig */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;