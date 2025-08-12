"use client";

import React from "react";

export default function SkillsGrid() {
  return (
    <div
      className="min-h-screen p-6 md:p-10 font-sans "
     
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Frontend Development */}
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4 rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src:
                  "https://placehold.co/16x16/png?text=5&font=roboto&font-weight=700&font-size=12&bg=e34f26&fg=fff",
                label: "HTML5",
              },
              {
                alt: "CSS3 logo with blue background",
                src:
                  "https://placehold.co/16x16/png?text=3&font=roboto&font-weight=700&font-size=12&bg=1572b6&fg=fff",
                label: "CSS3",
              },
              {
                alt: "JavaScript logo with yellow background",
                src:
                  "https://placehold.co/16x16/png?text=JS&font=roboto&font-weight=700&font-size=12&bg=f7df1e&fg=000",
                label: "JavaScript",
              },
              {
                alt: "React.js logo with light blue background",
                src:
                  "https://placehold.co/16x16/png?text=⚛&font=roboto&font-weight=700&font-size=12&bg=61dafb&fg=000",
                label: "React.js",
              },
              {
                alt: "Next.js logo with black background",
                src:
                  "https://placehold.co/16x16/png?text=N&font=roboto&font-weight=700&font-size=12&bg=000&fg=fff",
                label: "Next.js",
              },
              {
                alt: "React Router logo with red arrow on dark background",
                src:
                  "https://placehold.co/16x16/png?text=➔&font=roboto&font-weight=700&font-size=12&bg=dd0031&fg=fff",
                label: "React Router",
              },
              {
                alt: "Tailwind CSS logo with cyan background",
                src:
                  "https://placehold.co/16x16/png?text=~&font=roboto&font-weight=700&font-size=12&bg=06b6d4&fg=fff",
                label: "Tailwind CSS",
              },
            ].map(({ alt, src, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Backend Development */}
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src:
                  "https://placehold.co/16x16/png?text=N&font=roboto&font-weight=700&font-size=12&bg=3c873a&fg=fff",
                label: "Node.js",
              },
              {
                alt: "Express.js logo with gray background",
                src:
                  "https://placehold.co/16x16/png?text=Ex&font=roboto&font-weight=700&font-size=12&bg=555555&fg=fff",
                label: "Express.js",
              },
              {
                alt: "MongoDB logo with green background",
                src:
                  "https://placehold.co/16x16/png?text=MDB&font=roboto&font-weight=700&font-size=12&bg=4db33d&fg=fff",
                label: "MongoDB",
              },
              {
                alt: "Stripe logo with blue background",
                src:
                  "https://placehold.co/16x16/png?text=S&font=roboto&font-weight=700&font-size=12&bg=3a7bd5&fg=fff",
                label: "Stripe",
              },
              {
                alt: "JWT logo with purple background",
                src:
                  "https://placehold.co/16x16/png?text=Jwt&font=roboto&font-weight=700&font-size=12&bg=6a2c91&fg=fff",
                label: "Jwt",
              },
              {
                alt: "Axios logo with white background and purple border",
                src:
                  "https://placehold.co/16x16/png?text=1&font=roboto&font-weight=700&font-size=12&bg=5a5aaf&fg=000",
                label: "Axios",
              },
            ].map(({ alt, src, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* UI/UX Design */}
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src:
                  "https://placehold.co/16x16/png?text=F&font=roboto&font-weight=700&font-size=12&bg=ff7262&fg=fff",
                label: "Figma",
              },
              {
                alt: "Responsive Design icon with grid on gray background",
                src:
                  "https://placehold.co/16x16/png?text=R&font=roboto&font-weight=700&font-size=12&bg=6b7b8c&fg=fff",
                label: "Responsive Design",
              },
            ].map(({ alt, src, label }) => (
              <div
                key={label}
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
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src:
                  "https://placehold.co/16x16/png?text=VS&font=roboto&font-weight=700&font-size=12&bg=0078d7&fg=fff",
                label: "VS Code",
              },
              {
                alt: "Firebase logo with yellow background",
                src:
                  "https://placehold.co/16x16/png?text=FB&font=roboto&font-weight=700&font-size=12&bg=ffca28&fg=000",
                label: "Firebase",
              },
              {
                alt: "Vercel logo with black background",
                src:
                  "https://placehold.co/16x16/png?text=V&font=roboto&font-weight=700&font-size=12&bg=646cff&fg=fff",
                label: "Vercel",
              },
              {
                alt: "Vite logo with yellow background",
                src:
                  "https://placehold.co/16x16/png?text=Vt&font=roboto&font-weight=700&font-size=12&bg=ffcb2b&fg=000",
                label: "Vite",
              },
              {
                alt: "Netlify logo with teal background",
                src:
                  "https://placehold.co/16x16/png?text=Nf&font=roboto&font-weight=700&font-size=12&bg=00c8b8&fg=fff",
                label: "Netlify",
              },
            ].map(({ alt, src, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Cloud & DevOps */}
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src="https://placehold.co/16x16/png?text=G&font=roboto&font-weight=700&font-size=12&bg=f05032&fg=fff"
              />
              Git
            </div>
          </div>
        </section>

        {/* Creative Skills */}
        <section className="rounded-xl border border-[#2a1e5a] p-6 space-y-4  relative text-xl sm:text-2xl font-bold text-lime-300 rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition  duration-1000">
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
                src:
                  "https://placehold.co/16x16/png?text=An&font=roboto&font-weight=700&font-size=12&bg=ea6a47&fg=fff",
                label: "UI Animation",
              },
              {
                alt: "Motion Animation logo with yellow background",
                src:
                  "https://placehold.co/16x16/png?text=MA&font=roboto&font-weight=700&font-size=12&bg=fff200&fg=000",
                label: "Motion Animation",
              },
            ].map(({ alt, src, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-[#3a2e7a] px-3 py-1 text-xs font-medium bg-[#1a1640]/50"
              >
                <img alt={alt} className="w-4 h-4" src={src} />
                {label}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
