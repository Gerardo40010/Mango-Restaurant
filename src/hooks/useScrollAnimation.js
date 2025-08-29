import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return { ref, inView, motion, fadeIn };
};