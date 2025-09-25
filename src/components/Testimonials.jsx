import { motion } from "framer-motion";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="tracking-wide bg-gray-900 min-h-screen text-white py-16 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
      >
        Testimonies From Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          Members
        </span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
              delay: index * 0.25, // stagger effect
            }}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
          >
            <div className="bg-blue-900/40 rounded-md p-6 text-md border border-blue-800 shadow-lg hover:shadow-blue-600/40 transition">
              <p className="text-neutral-200">{testimonial.text}</p>

              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-blue-500"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="font-semibold text-blue-300">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm font-normal italic text-neutral-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
