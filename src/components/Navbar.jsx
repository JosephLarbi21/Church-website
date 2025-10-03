import { Menu, X, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900 shadow-md border-b border-neutral-800"
          : "bg-neutral-900/80 backdrop-blur-md"
      } text-white py-3 sm:py-4`}
    >
      <div className="container px-4 sm:px-6 mx-auto flex justify-between items-center relative text-sm sm:text-base">
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3" src={logo} alt="Logo" />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight truncate">
            Dream House Chapel Int.
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-12 space-x-8 xl:space-x-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`transition-colors duration-300 ${
                  currentPath === item.href
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <a
            href="/livestream"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium shadow-md transition-all duration-300 ${
              currentPath === "/livestream"
                ? "border-blue-500 text-blue-400 bg-blue-500/10 shadow-blue-500/30"
                : "border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-blue-500/30"
            }`}
          >
            <Video size={18} />
            <span>Livestream</span>
          </a>

          <a
            href="/sermons"
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
              currentPath === "/sermons"
                ? "bg-gradient-to-r from-blue-600 to-blue-900 shadow-blue-600/40"
                : "bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:scale-105 hover:shadow-blue-600/40"
            }`}
          >
            <Video size={18} />
            <span>Watch Videos</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="lg:hidden text-white">
          {mobileDrawerOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-neutral-900 z-40 flex flex-col shadow-lg overflow-y-auto"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
              <span className="text-white text-lg font-semibold">Menu</span>
              <button
                onClick={toggleNavbar}
                className="text-gray-300 hover:text-white"
              >
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col text-white text-base font-medium px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={toggleNavbar}
                    className={`block py-2 transition-colors ${
                      currentPath === item.href
                        ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                        : "hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 px-4 mt-auto mb-6">
              <a
                href="/livestream"
                onClick={toggleNavbar}
                className={`flex justify-center items-center gap-2 py-2 text-sm rounded-md ${
                  currentPath === "/livestream"
                    ? "border border-blue-500 text-blue-400 bg-blue-500/10"
                    : "text-gray-200 border border-gray-500 hover:border-blue-600"
                }`}
              >
                <Video size={18} />
                <span>Live</span>
              </a>
              <a
                href="/sermons"
                onClick={toggleNavbar}
                className={`flex justify-center items-center gap-2 py-2 text-sm rounded-md shadow-md ${
                  currentPath === "/sermons"
                    ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white"
                    : "bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:opacity-90"
                }`}
              >
                <Video size={18} />
                <span>Watch Previous</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
