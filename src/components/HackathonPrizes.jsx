import React from "react";

function HackathonPrizes() {
  const prizes = [
    {
      title: "1st Prize",
      description: "₹50,000 cash prize + Exclusive DevSummit Trophy",
      details:
        "Awarded to the team with the most innovative and impactful project.",
    },
    {
      title: "2nd Prize",
      description: "₹30,000 cash prize + Mentorship Session",
      details:
        "Awarded to the team with the second-best project, showcasing technical excellence.",
    },
    {
      title: "3rd Prize",
      description: "₹20,000 cash prize + Swag Packs",
      details:
        "Awarded to the team with the third-best project based on creativity and implementation.",
    },
    {
      title: "Best Student Project",
      description: "₹10,000 cash prize + Internship Opportunities",
      details:
        "Awarded to the best project created by students, offering valuable industry experience.",
    },
    {
      title: "Audience Choice Award",
      description: "₹5,000 cash prize + Free Tickets to Future Events",
      details:
        "Awarded to the project with the most public votes during the hackathon.",
    },
  ];

  return (
    <section className="hackathon-prizes py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">
          Hackathon Prizes
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Check out the exciting prizes waiting for you! We've got cash prizes,
          trophies, internships, and more for the winners.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-lime-300 #bef264 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-[#A7FF40] mb-4">
                {prize.title}
              </h3>
              <p className="text-lg font-medium text-gray-800 mb-2">
                {prize.description}
              </p>
              <p className="text-gray-600">{prize.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HackathonPrizes;
