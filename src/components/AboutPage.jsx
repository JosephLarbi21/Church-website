import { motion } from "framer-motion";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const AboutPage = () => {
  return (
    <div className="bg-neutral-900 text-white py-16 px-6 min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ amount: 0.2 }} // ✅ triggers again when scrolled back
        className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide"
      >
        About Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          Prophet.
        </span>
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center mt-12 gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          viewport={{ amount: 0.2 }}
          className="p-2 w-full lg:w-1/3 flex justify-center"
        >
          <img
            src={codeImg}
            alt="Prophet"
            className="rounded-lg shadow-lg max-w-xs object-cover"
          />
        </motion.div>

        {/* Checklist Section */}
        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2 * index, // stagger
              }}
              viewport={{ amount: 0.2 }} // ✅ re-triggers
              className="mb-10"
            >
              <h5 className="mt-1 mb-2 text-xl font-semibold text-blue-300">
                {item.title}
              </h5>
              <p className="text-md text-neutral-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
