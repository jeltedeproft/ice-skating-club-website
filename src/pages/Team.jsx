import React from "react";

// Example data (replace with your real coaches/staff)
const teamMembers = [
  {
    name: "Peter Vermeeren",
    role: "Trainer Shorttrack",
    image: `${import.meta.env.BASE_URL}coaches/peterVermeeren.jpg`,
    objectPosition: "object-top", // align higher so his face is visible
  },
  {
    name: "Lieselot Noiron",
    role: "Trainer Shorttrack",
    image: `${import.meta.env.BASE_URL}coaches/lieselotNoiron.jpg`,
    objectPosition: "object-center", // default center
  },
  {
    name: "Koen Turcksin",
    role: "Trainer Shorttrack",
    image: `${import.meta.env.BASE_URL}coaches/koenTurcksin.jpg`,
    objectPosition: "object-center", // default center
  },
  {
    name: "Wolter Hartog",
    role: "Monitor",
    image: `${import.meta.env.BASE_URL}coaches/wolterHartog.jpg`,
    objectPosition: "object-center", // default center
  },
  {
    name: "Anke Declerck",
    role: "Monitor",
    image: `${import.meta.env.BASE_URL}coaches/ankeDeclerck.jpg`,
    objectPosition: "object-center", // default center
  },
];

function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Full-width Banner */}
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")',
            filter: "blur(1px)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 px-6 py-3 rounded-lg">
            Ons Team
          </h1>
          <p className="text-lg text-white drop-shadow-md max-w-2xl">
            Maak kennis met onze coaches en staff die elke dag het beste uit onze
            schaatsers halen.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto text-center py-16 px-6">
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className={`w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-200 mb-4 ${member.objectPosition}`}
              />
              <h3 className="text-xl font-semibold text-blue-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Team;
