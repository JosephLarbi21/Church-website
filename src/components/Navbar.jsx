 import { Menu, X, Video } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/5text-gray-800/10">
      <div className="container px-6 mx-auto flex justify-between items-center relative lg:text-base">
        <div className="flex items-center flex-shrink-0">
          <img className="h-12 w-12 mr-3" src={logo} alt="Dream House Chapel Logo" />
          <span className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
            Dream House Chapel Int.
          </span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-16 space-x-10 text-gray-800 dark:text-gray-800">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-blue-600 transition-colors duration-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="" className="flex items-center space-x-2 py-2 px-4 border border-gray-300 rounded-md text-gray-800 hover:border-blue-600 transition-all">
            <Video size={20} />
            <span>Live</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-800 text-gray-800 py-2 px-5 rounded-md shadow-lg hover:opacity-90 transition-all"
          >
            <Video size={20} />
            <span>Watch Previous Service</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="lg:hidden text-gray-800 dark:text-gray-800">
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed  bg-neutral-900 w-full z-20 flex flex-col items-center justify-center lg:hidden">
         
            <ul className="mb-6 text-white">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="flex items-center space-x-2 py-2 px-4 border rounded-md text-gray-700 dark:text-gray-800 border-gray-300 hover:border-blue-600">
                <Video size={20} />
                <span>Live</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 text-gray-800 shadow-md hover:opacity-90"
              >
                <Video size={20} />
                <span>watch previous service</span>
              </a>
            </div>
            <button onClick={toggleNavbar} className="mt-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-800">
             
            </button>
          </div>
        
      )}
    </nav>
  );
};

export default Navbar;
 