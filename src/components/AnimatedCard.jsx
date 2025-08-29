import { motion } from 'framer-motion';
const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
export default AnimatedCard;