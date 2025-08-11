"use client";

import React from "react";
import {
  FaPalette,
  FaCode,
  FaServer,
  FaCubes,
  FaFileCode,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPalette size={28} color="#ffb400" />,
      title: "Web Design",
      description:
        "I’m A Website Designer Who Is Passionate About Making Error-Free Fully Responsive Conversion PSD Or Figma To HTML.",
    },
    {
      icon: <FaCode size={28} color="#ffb400" />,
      title: "Front-End Developer",
      description:
        "I’m A Front-End Web Developer Who Is Passionate About Making Error-Free Websites Using HTML, CSS, Bootstrap, JS, React.",
    },
    {
      icon: <FaServer size={28} color="#ffb400" />,
      title: "Web Development",
      description:
        "I’m A Web Developer Who Is Passionate About Making Error-Free Websites With HTML, CSS, JS, MongoDB, Node, Express, ReactJS.",
    },
    {
      icon: <FaCubes size={28} color="#ffb400" />,
      title: "MERN Development",
      description:
        "I’m A MERN Stack Web Developer Who Is Passionate About Making Error-Free Websites With MongoDB, Node, Express, ReactJS.",
    },
    {
      icon: <FaFileCode size={28} color="#ffb400" />,
      title: "PSD To HTML",
      description:
        "I’m A Web Designer Who Is Passionate About Fully Responsive PSD To HTML Conversion With HTML, CSS, JS.",
    },
    {
      icon: <FaFigma size={28} color="#ffb400" />,
      title: "Figma To HTML",
      description:
        "I’m A Web Designer Who Is Passionate About Fully Responsive Conversion With HTML, CSS, JS And 100% Client Satisfaction.",
    },
  ];

  return (
    <>
      <main className=" min-h-screen bg-[#12141e] text-white">
        <div className="text-center pt-6 pb-10 text-2xl md:text-3xl font-extrabold text-[#ffb400]">
          My Services
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {services.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-2500 bg-gradient-to-r from-black via-gray-900 to-black"
            >
              <div className="mb-3 font-extrabold flex items-center gap-2">
                {icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">
                {title}
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed mb-4">
                {description}
              </p>
              <div className="text-[#e94e1b] font-semibold text-xs md:text-sm flex items-center gap-1 cursor-pointer select-none">
                Say Hello <FaCode className="inline" />
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#ffb400] w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <FaCode />
        </button>
      </main>
    </>
  );
}
