"use client";

import Link from "next/link";
import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import { FaArrowRight, FaCode } from "react-icons/fa";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Services from "./Services/Services";

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
    <div className="relative min-h-screen flex items-center">
  <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Text */}
    <div className="text-center lg:text-left">
      <p className="tracking-tight text-white">
        <span className="block font-serif italic font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400">
          Hi, I’m -
        </span>
        <span className="block font-serif italic font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400">
          Robin Ahmed
        </span>
      </p>

      <p className="mt-6 font-sans text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
        I’m a passionate{" "}
        <span className="font-semibold text-white">MERN Stack Developer</span>{" "}
        with expertise in building full-stack web apps, real-time systems, and
        interactive UI.
      </p>

      {/* <p className="mt-6 font-sans text-lg text-white">
        Available from{" "}
        <span className="font-bold text-amber-400">$</span>
      </p> */}

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
        <a
          href="#projects"
          className="px-6 py-3 text-lg font-semibold text-black bg-amber-400 rounded-xl shadow hover:bg-amber-500 transition"
        >
          View Projects
        </a>
        <a
          href="Contact"
          className="px-6 py-3 text-lg font-semibold text-white border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="flex justify-center lg:justify-end">
      <img
        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        src="https://i.ibb.co.com/C3jy8Bh0/1739706192989.jpg"
        alt="Hero Image"
      />
    </div>

  </div>
</div>

    {/* About */}
  <About></About>
  <Services/>

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
              className="relative text-sx rounded-2xl px-5 py-2 shadow-lg  hover:shadow-cyan-400/60  transition duration-1000 bg-gradient-to-r"
            >
              <img
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
                height={400}
                src={project.img}
                width={600}
              />
              <div className="p-6">
                <h3 className=" mb-2">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <Link
                  href="/MyPortfolio"
                  className=" hover:underline flex items-center"
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
            className=" rounded-2xl px-4 sm:px-5 py-2 shadow-lg  hover:shadow-cyan-400/60  transition duration-[1000ms] bg-gradient-to-r from-black via-gray-900 to-black"
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


      <Contact />
    </div>
  );
};

export default Page;
