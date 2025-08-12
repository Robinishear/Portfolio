"use client";

import React from "react";

export default function SkillsGrid() {
  return (
    <div className="min-h-screen p-6 md:p-10 font-sans">
      <div className="py-5 flex justify-center items-center mt-6">
        <img
          src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
          alt="Coding Animation"
          className="h-full max-h-[370px] sm:block object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Frontend Development */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing frontend development with code brackets on a blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=%3C%2F%3E&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">Frontend Development</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              {
                alt: "HTML5 logo with orange background",
                src: "https://i.ibb.co.com/VYW8SvFL/download.png",
                label: "HTML5",
              },
              {
                alt: "CSS3 logo with blue background",
                src: "https://i.ibb.co.com/JRfMHjq1/download-1.png",
                label: "CSS3",
              },
              {
                alt: "JavaScript logo with yellow background",
                src: "https://i.ibb.co.com/Vc79JTMk/download-2.png",
                label: "JavaScript",
              },
              {
                alt: "React.js logo with light blue background",
                src: "https://i.ibb.co.com/NnjmBtNp/download-3.png",
                label: "React.js",
              },
              {
                alt: "Next.js logo with black background",
                src: "https://i.ibb.co.com/jk7pJxtL/download.jpg",
                label: "Next.js",
              },
              {
                alt: "React Router logo with red arrow on dark background",
                src: "https://i.ibb.co.com/tTTfwCY6/download-4.png",
                label: "React Router",
              },
              {
                alt: "Tailwind CSS logo with cyan background",
                src: "https://i.ibb.co.com/qF4tp8gS/download-1.jpg",
                label: "Tailwind CSS",
              },
            ].map(({ alt, src, label }, index) => (
              <div
                key={label + "-" + index}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Backend Development */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing backend development with gear and code on blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=BE&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">Backend Development</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              {
                alt: "Node.js logo with green background",
                src: "https://i.ibb.co.com/99z00GqQ/download-2.jpg",
                label: "Node.js",
              },
              {
                alt: "Express.js logo with gray background",
                src: "https://i.ibb.co.com/svXN2mPW/download-5.png",
                label: "Express.js",
              },
              {
                alt: "MongoDB logo with green background",
                src: "https://i.ibb.co.com/svFXgrC3/images.png",
                label: "MongoDB",
              },
              {
                alt: "Stripe logo with blue background",
                src: "https://i.ibb.co.com/RTyRCFdt/download-6.png",
                label: "Stripe",
              },
              {
                alt: "JWT logo with purple background",
                src: "https://i.ibb.co.com/MxZrG7pK/download-7.png",
                label: "Jwt",
              },
              {
                alt: "Axios logo with white background and purple border",
                src: "https://i.ibb.co.com/zhVg7fsY/download-8.png",
                label: "Axios",
              },
            ].map(({ alt, src, label }, index) => (
              <div
                key={label + "-" + index}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* UI/UX Design */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing UI/UX design with UX letters on blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=UX&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">UI/UX Design</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              {
                alt: "Figma logo with red, green, blue colors",
                src: "https://i.ibb.co.com/60vVXDF0/download-9.png",
                label: "Figma",
              },
              {
                alt: "Responsive Design icon with grid on gray background",
                src: "https://i.ibb.co.com/spSKSSrN/download-3.jpg",
                label: "Responsive Design",
              },
              {
                alt: "Responsive Design icon with grid on gray background",
                src: "https://i.ibb.co.com/spSKSSrN/download-3.jpg",
                label: "Responsive Design Duplicate",
              },
            ].map(({ alt, src, label }, index) => (
              <div
                key={label + "-" + index}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
          <span className="absolute w-8 h-8 rounded-full bg-purple-700 opacity-80 top-20 left-10 blur-[15px]" />
        </section>

        {/* Tools & Technologies */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing tools and technologies with gear and circuit on blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=TT&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">Tools &amp; Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              {
                alt: "VS Code logo with blue background",
                src: "https://i.ibb.co.com/1JhzbMrd/download-10.png",
                label: "VS Code",
              },
              {
                alt: "Firebase logo with yellow background",
                src: "https://i.ibb.co.com/23GvTppT/download-11.png",
                label: "Firebase",
              },
              {
                alt: "Vercel logo with black background",
                src: "https://i.ibb.co.com/sdP11cSK/download-12.png",
                label: "Vercel",
              },
              {
                alt: "Vite logo with yellow background",
                src: "https://i.ibb.co.com/Fb0xHTqq/download-13.png",
                label: "Vite",
              },
              {
                alt: "Netlify logo with teal background",
                src: "https://i.ibb.co.com/PsTYzz85/images-1.png",
                label: "Netlify",
              },
            ].map(({ alt, src, label }, index) => (
              <div
                key={label + "-" + index}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Cloud & DevOps */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing cloud and devops with cloud and rain on blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=CD&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">Cloud &amp; DevOps</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50">
              <img
                alt="Git logo with red background"
                className="w-4 h-4"
                src="https://i.ibb.co.com/XkWwpgxj/images-3.png"
              />
              GitHup
            </div>
          </div>
        </section>

        {/* Creative Skills */}
        <section className="rounded-2xl border border-[#2a1e5a] p-6 space-y-4 relative text-xl sm:text-2xl font-bold text-lime-300 px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000">
          <div className="flex items-center gap-3">
            <img
              alt="Icon representing creative skills with lightbulb on blue gradient background"
              className="w-8 h-8 rounded-md"
              src="https://placehold.co/32x32/png?text=CS&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff"
            />
            <h2 className="font-semibold text-lg">Creative Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              {
                alt: "UI Animation logo with orange background",
                src: "https://i.ibb.co.com/5xgNYjZJ/images-4.png",
                label: "UI Animation",
              },
              {
                alt: "Motion Animation logo with yellow background",
                src: "https://i.ibb.co.com/PZqnZcD8/download-17.png",
                label: "Motion Animation",
              },
            ].map(({ alt, src, label }, index) => (
              <div
                key={label + "-" + index}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

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
  - )}`}
        </pre>
      </div>
    </div>
  );
}
