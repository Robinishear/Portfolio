"use client";

import React from "react";
import { FaCode } from "react-icons/fa";

const About = () => {
  const skills = [
    "JavaScript",
    "React.Js",
    "Node.Js",
    "Express.Js",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
    "Next Js",
    "AOS",
    "Figma",
    "HTML",
    "CSS",
    "Git & GitHub",
    "TanStack Query",
  ];

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br ">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center relative">
        {/* Title */}
        <h1
          className="font-extrabold text-4xl mb-10 tracking-wide animate-fade-in-down"
          style={{ animationDuration: "1s", animationFillMode: "forwards" }}
        >
          About Me
        </h1>

        {/* Portrait */}
        <img
          alt="Portrait of a man with beard and suit"
          className="mx-auto rounded-full border-4 border-yellow-400 w-[150px] h-[150px] object-cover animate-bounce-slow"
          height={150}
          src="https://i.ibb.co.com/Fq6XH0mR/IMG-20250813-180059.jpg"
          width={150}
          style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
        />

        {/* Description */}
        <p
          className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed px-2 sm:px-0 animate-fade-in-up"
          style={{ animationDuration: "1.5s", animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          I’m Robin Ahmed, A Passionate MERN-Stack Web Developer Specializing In The Front-End Development. I Enjoy Solving Real-World Problems Through Clean, Scalable Code And Intuitive User Experiences.
        </p>

        {/* Skills Header */}
        <h2
          className="text-yellow-400 font-bold text-2xl py-6 mt-10 mb-6 animate-pulse"
          style={{ animationDuration: "2s", animationIterationCount: "infinite" }}
        >
          My Skills
        </h2>

        {/* Skills List */}
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="relative font-semibold text-lime-300 rounded-2xl px-6 py-2 shadow-lg bg-gradient-to-r from-black via-gray-900 to-black hover:shadow-amber-600/70 transition duration-500 ease-in-out cursor-default"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Scroll to Top Button */}
   
        <button
               aria-label="Scroll to top"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="fixed bottom-6 right-6 bg-[#ffb400] w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
             >
               <FaCode />
             </button>
      </div>

      {/* Custom animations */}
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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in-down {
          animation-name: fade-in-down;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-duration: 1s;
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-duration: 1s;
        }
        .animate-bounce-slow {
          animation-name: bounce-slow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 3s;
        }
      `}</style>
    </div>
  );
};

export default About;
