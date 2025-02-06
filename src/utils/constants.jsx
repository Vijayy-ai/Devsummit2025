// src/utils/constants.jsx

export const HACKATHON_DETAILS = {
  name: "DevSummit",
  date: "January 15, 2025",
  applyLink: "https://www.devSummit.com/apply",
};

export const SECTIONS = {
  aboutUs: "About Us",
  hackathonThemes: "Hackathon Themes",
  hackathonPrizes: "Hackathon Prizes",
  hackathonTimeline: "Hackathon Timeline",
  sponsors: "Sponsors",
  communityPartnership: "Community Partnership",
  mentors: "Mentors",
  team: "Meet the Team",
  faq: "FAQ",
  contactUs: "Contact Us",
  map: "Map",
};

export const HACKATHON_THEMES = [
  {
    id: 1,
    title: "AI and Machine Learning",
    description: "Building innovative solutions using AI and ML.",
  },
  {
    id: 2,
    title: "Blockchain and Web3",
    description: "Develop decentralized apps on the blockchain.",
  },
  {
    id: 3,
    title: "Sustainability and Green Tech",
    description: "Create eco-friendly tech solutions.",
  },
];

export const HACKATHON_PRIZES = [
  {
    rank: "1st",
    prize: "$5000 + Certificate",
  },
  {
    rank: "2nd",
    prize: "$3000 + Certificate",
  },
  {
    rank: "3rd",
    prize: "$1000 + Certificate",
  },
  {
    rank: "Honorable Mention",
    prize: "Certificate",
  },
];

export const TIMELINE = [
  {
    date: "January 1, 2025",
    event: "Registration opens",
  },
  {
    date: "January 15, 2025",
    event: "Hackathon starts",
  },
  {
    date: "January 30, 2025",
    event: "Hackathon ends",
  },
  {
    date: "February 5, 2025",
    event: "Results announced",
  },
];

export const SPONSORS = [
  {
    name: "TechCorp",
    logo: "/images/techcorp-logo.png", // path to the logo image
    website: "https://www.techcorp.com",
  },
  {
    name: "InnovateX",
    logo: "/images/innovatex-logo.png", // path to the logo image
    website: "https://www.innovatex.com",
  },
  {
    name: "GreenTech Solutions",
    logo: "/images/greentech-logo.png", // path to the logo image
    website: "https://www.greentech.com",
  },
];

export const MENTORS = [
  {
    name: "John Doe",
    expertise: "AI & Machine Learning",
    image: "/images/john-doe.jpg",
    bio: "AI researcher with 10 years of experience in building intelligent systems.",
  },
  {
    name: "Jane Smith",
    expertise: "Blockchain Development",
    image: "/images/jane-smith.jpg",
    bio: "Blockchain developer and consultant with expertise in decentralized finance.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Alice Johnson",
    role: "Event Manager",
    image: "/images/alice-johnson.jpg",
    bio: "Experienced event manager passionate about tech and innovation.",
  },
  {
    name: "Bob Lee",
    role: "Developer",
    image: "/images/bob-lee.jpg",
    bio: "Full-stack developer with a strong background in web and mobile apps.",
  },
  {
    name: "Charlie Kim",
    role: "Marketing Lead",
    image: "/images/charlie-kim.jpg",
    bio: "Marketing specialist with a focus on digital marketing and growth strategies.",
  },
];

export const FAQS = [
  {
    question: "How do I apply for the hackathon?",
    answer: "You can apply by clicking the 'Apply Now' button at the top of the page.",
  },
  {
    question: "What is the hackathon theme?",
    answer: "The hackathon focuses on innovation in AI, Blockchain, and Sustainability.",
  },
  {
    question: "Can I participate as a team?",
    answer: "Yes, you can form a team of up to 4 members.",
  },
  {
    question: "What are the prizes?",
    answer: "The winners will receive cash prizes, certificates, and exclusive mentorship opportunities.",
  },
];
