import React, { useState } from 'react';
import { screenElments } from './constant';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

function BottomNav() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-50 shadow-md rounded-full hidden sm:block z-2">
        <div className="flex justify-between mx-5 p-2 relative gap-4 sm:gap-8">
          {screenElments.map((item) => {
            const isActive = pathname === item.path;
            const isHovered = item.id === hoveredItem
            console.log(isActive);
            
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  style={{
                    backgroundColor: isActive || isHovered ? item.activeColor : 'transparent',
                    transition: 'background-color 0.3s ease',
                  }}
                  className="flex items-center p-2 rounded-lg transition-colors cursor-pointer"
                >
                  <ion-icon
                    name={item.iconName}
                    size="large"
                    style={{ color: 'white' }}
                  ></ion-icon>
                </Link>

                {/* Tooltip Pop-Up */}
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-1.5 rounded-md shadow-md"
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        title="Add New"
        onClick={toggleMenu}
        className="z-2 group cursor-pointer sm:hidden outline-none hover:rotate-90 duration-300 fixed bottom-5 left-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-20 left-5 w-40 bg-gray-800 rounded-lg shadow-md p-2 sm:hidden z-2"
          >
            {screenElments.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg"
              >
                <ion-icon name={item.iconName} size="large" style={{ color: 'white' }}></ion-icon>
                <span className="text-white">{item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BottomNav;
