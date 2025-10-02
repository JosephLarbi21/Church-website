import { motion } from "framer-motion";
import { testimonials } from "../constants";

// ✅ Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="bg-neutral-950 text-white min-h-screen py-20 px-6">
      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16"
      >
        What Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
          Members Say
        </span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0.2 + index * 0.2}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg 
                       hover:shadow-blue-600/30 transition-all duration-300"
          >
            {/* Quote */}
            <p className="text-neutral-300 leading-relaxed mb-6 italic">
              “{testimonial.text}”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="text-lg font-semibold text-white">
                  {testimonial.user}
                </h6>
                <span className="text-sm text-neutral-400">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
