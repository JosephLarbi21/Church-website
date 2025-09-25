import { Menu, X, Video } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="container px-6 mx-auto flex justify-between items-center relative lg:text-base">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-12 w-12 mr-3" src={logo} alt="Dream House Chapel Logo" />
          <span className="text-2xl font-semibold tracking-tight">
            Dream House Chapel Int.
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-16 space-x-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="flex items-center space-x-2 py-2 px-4 border border-gray-600 rounded-md hover:border-blue-500 transition-all"
          >
            <Video size={20} />
            <span>Live</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-5 rounded-md shadow-lg hover:opacity-90 transition-all"
          >
            <Video size={20} />
            <span>Watch Previous Service</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="lg:hidden text-white">
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer with overlay + animation */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-80"
              onClick={toggleNavbar}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-neutral-900 z-40 flex flex-col shadow-lg"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                <span className="text-white text-lg font-semibold">Menu</span>
                <button onClick={toggleNavbar} className="text-gray-300 hover:text-white">
                  <X size={28} />
                </button>
              </div>

              <ul className="flex flex-col text-white text-base font-medium px-6 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={toggleNavbar}
                      className="block py-2 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 px-6 mt-auto mb-6">
                <a
                  href="#"
                  className="flex justify-center items-center gap-2 py-2 border rounded-md text-gray-200 border-gray-500 hover:border-blue-600"
                >
                  <Video size={20} />
                  <span>Live</span>
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center gap-2 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-md hover:opacity-90"
                >
                  <Video size={20} />
                  <span>Watch Previous</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
