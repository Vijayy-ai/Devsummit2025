import { motion } from "framer-motion";

// Shared animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

export const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Shared styles for section backgrounds
export const sectionStyles = `
  .animated-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(167, 255, 64, 0.1) 0%, transparent 50%);
    opacity: 0.5;
    animation: pulse 4s ease-in-out infinite;
  }

  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle 1.5s infinite;
  }

  .floating-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(167, 255, 64, 0.5);
    border-radius: 50%;
    filter: blur(1px);
    animation: float 10s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 0.7; }
  }

  @keyframes twinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(10px, -10px); }
    50% { transform: translate(20px, 0); }
    75% { transform: translate(10px, 10px); }
  }
`;

// Shared component for section transitions
export const SectionTransition = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    className={className}
  >
    {children}
  </motion.div>
);

// Shared component for floating particles background
export const FloatingParticles = ({ count = 20 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="floating-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 10}s`
        }}
      />
    ))}
  </div>
); 