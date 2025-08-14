"use client";

import Link from "next/link";
import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import { FaArrowRight, FaCode } from "react-icons/fa";
import Contact from "./Contact/Contact";

const Page = () => {
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
    <div>
      {/* Hero Section */}
      <section className="animate-fade-in-up">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left animate-slide-in-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Mattis <span className="dark:text-violet-600">senectus</span> erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 animate-fade-in">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#"
                className="relative text-2xl font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 bg-gradient-to-r from-black via-gray-900 to-black"
                rel="noopener noreferrer"
              >
                Suspendisse
              </a>
              <Link
                href="/Contact"
                className="relative text-2xl font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 bg-gradient-to-r from-black via-gray-900 to-black"
              >
                Malesuada
              </Link>
            </div>
          </div>

          <div className="items-center -ml-8 justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] animate-zoom-in relative">
            {/* Left Text Content */}
            <div className="max-w-xl">
              <h2 className="flex items-center gap-2 mb-4">
                <img
                  src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif"
                  alt="About Me Icon"
                  width={30}
                  height={30}
                />
              </h2>

              <pre className="relative text-sm text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-2000 whitespace-pre-wrap">
                {`name: Md Robin Ahmed
located_in: Mymensingh, Bangladesh
current_work: Full-Stack Developer
education:
  - "Computer Science & Engineering at AIUB"

fields_of_interests:
  - "Web Development"
  - "Full Stack Development"
  - "Front-End Development"
  - "Back-end Development"
  - "Open Source"

currently_learning:
  - "Next.js 15"

2025_goals:
  - "Contribute to Open Source Projects"
  - "Build Amazing Full-Stack Applications"
  - "Learn Cloud Technologies"
  - "Share Knowledge with Community" ?
  - "<nav className="mt-8 flex flex-wrap justify-center gap-3">
  - "{createButton("First", currentPage === 1, () => goToPage(1))}
  - "{createButton("Prev", currentPage === 1, () =>
  - "goToPage(currentPage - 1)
  - )}
`}
              </pre>
            </div>

            {/* Right Image
            <img
              src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
              alt="Coding Animation"
              className="absolute right-0 top-0 h-full hidden sm:block object-contain"
              style={{ maxHeight: "370px" }}
            /> */}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <div className="font-sans min-h-screen animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center relative">
          <h1 className="font-extrabold text-3xl mb-8 animate-slide-in-down">
            About Me
          </h1>

          <img
            alt="Portrait of Md Robin Ahmed"
            className="mx-auto rounded-full border-4 border-yellow-400 w-[150px] h-[150px] object-cover animate-bounce-slow"
            height={150}
            src="https://i.ibb.co.com/Fq6XH0mR/IMG-20250813-180059.jpg"
            width={150}
          />

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed animate-fade-in-up">
            I’m Robin Ahmed, a passionate MERN-Stack Web Developer specializing
            in front-end development. I enjoy solving real-world problems
            through clean, scalable code and intuitive user experiences.
          </p>

          <h2 className="text-yellow-400 font-bold text-2xl py-6 mt-2 mb-6 animate-pulse">
            My Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-7xl mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 bg-gradient-to-r from-black via-gray-900 to-black"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Scroll To Top Button */}
          <button
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition transform hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <CgArrowUpO className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-16" id="portfolio">
        <h2 className="text-3xl mb-12 text-center animate-slide-in-down">
          My Portfolio
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            {
              title: "Corporate Website",
              desc: "Developed a sleek corporate website with responsive design and easy navigation.",
              img: "https://storage.googleapis.com/a1aa/image/0b380b5d-ee73-47cb-1137-bba6dfb0c9d3.jpg",
            },
            {
              title: "E-commerce Platform",
              desc: "Created a full-featured e-commerce platform with shopping cart and payment .",
              img: "https://storage.googleapis.com/a1aa/image/24c1421a-9a75-464e-9aee-463b25f52d1d.jpg",
            },
            {
              title: "Mobile App UI",
              desc: "Designed a modern and user-friendly mobile app interface for a startup.",
              img: "https://storage.googleapis.com/a1aa/image/851f41a8-6526-4c8e-023d-c35567771369.jpg",
            },
          ].map((project, i) => (
            <article
              key={i}
              className="relative text-xl font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 bg-gradient-to-r"
            >
              <img
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
                height={400}
                src={project.img}
                width={600}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <Link
                  href="/Contact"
                  className="font-semibold hover:underline flex items-center"
                >
                  View Project <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center animate-slide-in-down mt-10">
          <Link
            href="/MyPortfolio"
            className="text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-[1000ms] bg-gradient-to-r from-black via-gray-900 to-black"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Ripple & Other Animation Styles */}
      <style>{`
        @keyframes ripple {
          0% {
            box-shadow:
              0 0 0 0 rgba(255,255,255,0.3),
              0 0 0 20px rgba(255,255,255,0.2),
              0 0 0 40px rgba(255,255,255,0.2),
              0 0 0 60px rgba(255,255,255,0.2);
          }
          100% {
            box-shadow:
              0 0 0 20px rgba(255,255,255,0.3),
              0 0 0 40px rgba(255,255,255,0.3),
              0 0 0 60px rgba(255,255,255,0.3),
              0 0 0 80px rgba(255,255,255,0);
          }
        }
        .animate-ripple {
          animation: ripple 0.6s linear infinite;
        }

        @keyframes fadeInUp {
          from {opacity: 0; transform: translateY(20px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes slideInLeft {
          from {opacity: 0; transform: translateX(-50px);}
          to {opacity: 1; transform: translateX(0);}
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInDown {
          from {opacity: 0; transform: translateY(-50px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-slide-in-down {
          animation: slideInDown 1s ease-out;
        }

        @keyframes zoomIn {
          from {opacity: 0; transform: scale(0.8);}
          to {opacity: 1; transform: scale(1);}
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes bounceSlow {
          0%, 100% {transform: translateY(0);}
          50% {transform: translateY(-10px);}
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }
      `}</style>

      {/* Scroll to Top Button */}
      {/* <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#ffb400] w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        <FaCode />
      </button> */}
      <Contact />
    </div>
  );
};

export default Page;
