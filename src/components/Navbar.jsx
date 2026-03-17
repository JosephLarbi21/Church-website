import React, { useState, useEffect } from "react";
import { Menu, X, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const currentPath = window.location.pathname;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
            <img
              src={logo}
              alt="Dream House Chapel Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">

            <a
              href="/livestream"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 transition"
            >
              <Video size={18} />
              <span>Live</span>
            </a>

            <a
              href="/sermons"
              className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
            >
              <Video size={18} />
              <span>Watch Sermons</span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleNavbar} className="lg:hidden text-white">
            {mobileDrawerOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-neutral-900 z-40 flex flex-col shadow-lg"
          >

            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={toggleNavbar}>
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col px-6 py-6 space-y-5">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={toggleNavbar}
                    className={`block transition ${
                      currentPath === item.href
                        ? "text-blue-400"
                        : "hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-6 space-y-3 mt-auto mb-6">

              <a
                href="/livestream"
                onClick={toggleNavbar}
                className="flex items-center justify-center gap-2 border border-red-500 text-red-400 py-2 rounded-md"
              >
                <Video size={18} />
                Live Service
              </a>

              <a
                href="/sermons"
                onClick={toggleNavbar}
                className="flex items-center justify-center gap-2 bg-purple-600 py-2 rounded-md"
              >
                <Video size={18} />
                Watch Sermons
              </a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;