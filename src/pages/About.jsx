import React from "react";

const About = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Hackathon</h2>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our college hackathon! This is an exciting event where developers, designers, and problem-solvers come together to build innovative solutions. Whether you're a beginner or an experienced professional, we encourage everyone to participate and showcase their creativity.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Event Goals</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Foster creativity and innovation</li>
              <li>Encourage teamwork and collaboration</li>
              <li>Build real-world solutions with modern technologies</li>
              <li>Provide learning opportunities through workshops and mentoring</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Who Can Participate?</h3>
            <p className="text-gray-600">
              This hackathon is open to all students from various fields, including computer science, engineering, design, and other related disciplines. Whether you're a developer, a designer, or an entrepreneur, there's a place for you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
