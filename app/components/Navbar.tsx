'use client';

import React from 'react';

export default function Navbar() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="w-full top-0 z-50 bg-opacity-95 bg-dark-navy">
      <div className="max-w-7xl mx-auto  py-4">
        <div className="
          flex flex-col items-center gap-3`
          md:flex-row md:justify-between md:items-center
        ">
          <a href="/" className="flex items-center space-x-2">
            {/* logo / title */}
          </a>

          <div className="
            flex flex-wrap justify-center
            gap-x-6 gap-y-2 py-2
            md:justify-end md:gap-x-8
          ">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, '#work')}
              className="nav-link text-gray-300 hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="nav-link text-gray-300 hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="nav-link text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
