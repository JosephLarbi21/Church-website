import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

// ✅ Variants for smooth reusable animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-6">
      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Dream House{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          Chapel International
        </span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.2}
        className="mt-6 text-lg text-center text-neutral-300 max-w-4xl"
      >
        Dream House Chapel, The God-Kind. In our days, it is difficult to
        distinguish between ministry and industry. We are sure of the
        transformation through the preaching and the teachings of Jesus Christ
        for the empowerment of the sons and daughters in the body of Christ. We
        are again absolute in bringing together worshippers across board. For
        us, we do not despise small beginnings. Dream House Chapel, our God is
        TOO BIG to make you small, and VERY RICH to make you poor. You Are
        Recognized.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.4}
        className="mt-8 flex gap-4 justify-center flex-wrap"
      >
        <a
          href="/sermons"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Watch Sermons
        </a>
        <a
          href="/about"
          className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          More About Us
        </a>
      </motion.div>

      {/* Videos */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.6}
        className="flex flex-col md:flex-row mt-12 justify-center w-full max-w-6xl gap-4"
      >
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-blue-700 shadow-lg shadow-blue-500"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-blue-700 shadow-lg shadow-blue-500"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default HeroSection;
