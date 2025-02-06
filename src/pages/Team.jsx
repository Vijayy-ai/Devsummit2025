import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Satyam Don",
      role: "Event Manager",
      photo: "/images/john-doe.jpg",
    },
    {
      name: "Yajju Badmosh ",
      role: "Lead Developer",
      photo: "/images/jane-smith.jpg",
    },
    {
      name: "Prince bhaii ",
      role: "Design Lead",
      photo: "/images/mark-johnson.jpg",
    },
    {
      name: "Ram Seth",
      role: "Marketing Head",
      photo: "/images/sara-lee.jpg",
    },
    {
      name: "Rishu gunda",
      role: "Sponsor Relations",
      photo: "/images/emma-brown.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
