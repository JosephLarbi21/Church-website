import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is in view
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
