"use client";

import React from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaMagic,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.Js", icon: <FaReact /> },
    { name: "Node.Js", icon: <FaNodeJs /> },
    { name: "Express.Js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Next Js", icon: <SiNextdotjs /> },
    { name: "AOS", icon: <FaMagic /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "TanStack Query", icon: <FaDatabase /> },
  ];

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br  via-black  ">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center relative">
        {/* Title */}
        <h1 className="font-extrabold text-4xl mb-10 tracking-wide animate-fade-in-down">
          About Me
        </h1>

        {/* Portrait */}
        <img
          alt="Portrait of Robin Ahmed"
          className="mx-auto rounded-full border-4 border-yellow-400 w-[150px] h-[150px] object-cover animate-bounce-slow shadow-lg"
          src="https://i.ibb.co.com/Fq6XH0mR/IMG-20250813-180059.jpg"
        />

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed animate-fade-in-up">
          I’m Robin Ahmed, a passionate MERN-Stack Web Developer specializing in
          front-end development. I enjoy solving real-world problems through
          clean, scalable code and intuitive user experiences.
        </p>

        {/* Skills Header */}
        <h2 className=" font-bold text-2xl py-10 mt-10 mb-6 animate-pulse">
          My Skills
        </h2>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="relative group p-5 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  hover:shadow-cyan-400/60  transform hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl  group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="mt-2 font-semibold">{skill.name}</p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/60  transition-all duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6  w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <FaCode />
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
