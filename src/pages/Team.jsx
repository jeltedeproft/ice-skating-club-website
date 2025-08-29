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
    name: "Lieselot Norion",
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
];

function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10">
          Ons Team
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Maak kennis met onze coaches en staff die elke dag het beste uit onze
          schaatsers halen.
        </p>

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
