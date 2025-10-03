import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-white">
      {/* SVG Wave */}
      <div className="absolute -top-6 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-0 fill-neutral-900"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        
        {/* About */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-blue-500 mb-3">
            Dream House Chapel International
          </h2>
          <p className="text-neutral-400">
            A vibrant, prophetic church in Accra, Ghana. Transforming lives
            through the Word, worship, and community.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-blue-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li><a href="/sermons" className="hover:text-white">Sermons</a></li>
            <li><a href="/more-about-us" className="hover:text-white">About Us</a></li>
            <li><a href="/ministries" className="hover:text-white">Ministries</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact + Social */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-blue-500 mb-3">
            Contact Us
          </h3>
         <p className="font-medium mb-3">
  Email:{" "}
  <a
    href="mailto:dreamhousechapelint@gmail.com"
    className="text-blue-400 hover:underline"
  >
    dreamhousechapelint@gmail.com
  </a>
</p>

<p className="font-medium">
  Phone:{" "}
  <a
    href="tel:+233269377402"
    className="text-blue-400 hover:underline"
  >
    +233 26 937 7402
  </a>
</p>

          <div className="flex space-x-6 mt-4 text-xl">
            <a href="#" className="hover:text-gray-400"><FaTiktok /></a>
            <a
              href="https://www.facebook.com/DreamHousechapeIint/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/DreamHousechapelint/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCAttgHbWZoimaRfHeGfBNDg/videos?view_as=subscriber"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="border-t border-neutral-700 py-4 text-center text-neutral-400 text-xs"
      >
        © {new Date().getFullYear()} POWERED BY DREAM MEDIA AND EVENTS | SUPPORTED BY DREAM HOUSE CHRIST AMBASADORS (DHOCA). All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
