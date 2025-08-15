"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaLaptopCode,
  FaFileCode,
  FaObjectGroup,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Design",
    description:
      "I’m a Website Designer passionate about making error-free, fully responsive conversions from PSD or Figma to HTML.",
    highlight: false,
  },
  {
    icon: <FaLaptopCode />,
    title: "Front-End Developer",
    description:
      "I’m a Front-End Developer skilled in creating error-free websites using HTML, CSS, Bootstrap, JavaScript, and React.",
    highlight: false,
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "I’m a Web Developer building robust, error-free websites using HTML, CSS, JavaScript, MongoDB, Node, Express, and ReactJS.",
    highlight: true,
  },
  {
    icon: <FaLaptopCode />,
    title: "MERN Development",
    description:
      "I’m a MERN Stack Developer passionate about creating fully functional websites using MongoDB, Node, Express, and ReactJS.",
    highlight: false,
  },
  {
    icon: <FaFileCode />,
    title: "PSD To HTML",
    description:
      "I convert PSD designs into fully responsive HTML using HTML, CSS, and JavaScript with attention to detail.",
    highlight: false,
  },
  {
    icon: <FaObjectGroup />,
    title: "Figma To HTML",
    description:
      "I provide fully responsive conversions from Figma to HTML using HTML, CSS, and JavaScript, ensuring 100% client satisfaction.",
    highlight: false,
  },
];

export default function WhatIDo() {
  return (
    <section className="min-h-screen flex justify-center items-start py-10 px-4">
      <div className="max-w-7xl w-full">
        {/* Title Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-gray-300">What I Do</h2>
          <p className=" text-sm  mt-1">
            My Services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 border border-transparent transition-all relative group p-5 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/50 shadow-lg  hover:shadow-cyan-400/60  transform hover:-translate-y-2 transition-all duration-500 duration-1000 shadow-[0_0_10px_${
                service.highlight ? "#5a6aff" : "#4a4a4a"
              }] hover:border-cyan-400/60`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className=" text-2xl mb-3">
                {service.icon}
              </div>
              <h3 className=" text-sm mb-1">{service.title}</h3>
              <p className="text-xs leading-tight mb-4">
                {service.description}
              </p>
              <Link href="/Contact">
              <button className=" relative group p-1 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  hover:shadow-cyan-400/60  transform hover:-translate-y-2 transition-all duration-500  text-xs flex items-center gap-1 hover:underline">
                Say Hello <i className="fas fa-arrow-right"></i>
              </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
