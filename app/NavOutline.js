"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Button base style
  const btnClass =
    "relative text-lg sm:text-xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-400/50 transition   duration-2000 bg-gradient-to-r from-black via-gray-900 to-black group";
  const activeBtnClass =
    "relative text-lg sm:text-xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-400/50 transition   duration-2000 bg-gradient-to-r from-black via-gray-900 to-black group";

  // Hover underline effect style
  const underline =
    "absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 ";

  return (
    <nav className="py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-center sm:text-left"
          >
            <span className="relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition   duration-2000 bg-gradient-to-r from-black via-gray-900 to-black">
              <span className="text-amber-300">MR</span>
              <span className="ml-1">'Robin</span>
            </span>
          </a>

          {/* Desktop Menu */}

          <div className="hidden sm:flex sm:space-x-4 ml-6 sm:ml-20 justify-center flex-1">
            <Link href="/">
              <button className={activeBtnClass}>
                Home <span className={underline}></span>
              </button>
            </Link>

            <Link href="/About">
              <button className={btnClass}>
                About <span className={underline}></span>
              </button>
            </Link>

            <Link href="/Services">
              <button className={btnClass}>
                Services <span className={underline}></span>
              </button>
            </Link>

            <Link href="/MyPortfolio">
              <button className={btnClass}>
                Portfolio <span className={underline}></span>
              </button>
            </Link>

            <Link href="/Contact">
              <button className={btnClass}>
                Contact <span className={underline}></span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 rounded-md text-lime-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <RxDragHandleHorizontal size={24} />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1 text-center">
            <Link href="/">
              <button className={activeBtnClass + " w-11/12"}>
                Home <span className={underline}></span>
              </button>
            </Link>

            <Link href="/About">
              <button className={btnClass + " w-11/12"}>
                About <span className={underline}></span>
              </button>
            </Link>

            <Link href="/Services">
              <button className={btnClass + " w-11/12"}>
                Services <span className={underline}></span>
              </button>
            </Link>

            <Link href="/MyPortfolio">
              <button className={btnClass + " w-11/12"}>
                Portfolio <span className={underline}></span>
              </button>
            </Link>

            <Link href="/Contact">
              <button className={btnClass + " w-11/12"}>
                Contact <span className={underline}></span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
