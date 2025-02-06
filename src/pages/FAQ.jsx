import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the hackathon about?",
      answer:
        "Our hackathon is a platform for students to showcase their innovation by building projects that solve real-world problems. It is an exciting opportunity for developers, designers, and entrepreneurs to collaborate and create.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to all students, including developers, designers, and problem-solvers. Whether you are a beginner or an experienced developer, we encourage everyone to participate.",
    },
    {
      question: "What technologies can I use during the hackathon?",
      answer:
        "Participants are free to use any technology, programming language, or framework of their choice. We recommend using modern web technologies, but the choice is entirely up to you.",
    },
    {
      question: "How do I register for the hackathon?",
      answer:
        "You can register for the hackathon by filling out the registration form on our website. Make sure to submit the required details, including your team members and project idea.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No, the hackathon is completely free to attend. There are no fees for registration or participation.",
    },
    {
      question: "What are the prizes for the winners?",
      answer:
        "We have exciting prizes for the winners, including gift cards, gadgets, and internships with our sponsors. Details will be announced during the event.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg font-semibold text-gray-800 py-4 px-6 focus:outline-none hover:bg-gray-200"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
