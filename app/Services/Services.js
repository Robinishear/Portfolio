"use client";

import React from "react";

export default function SkillsGrid() {
  const skillSections = [
    {
      title: "Frontend Development",
      icon: "https://placehold.co/32x32/png?text=%3C%2F%3E&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [
        { label: "HTML5", src: "https://i.ibb.co/VYW8SvFL/download.png", alt: "HTML5 logo" },
        { label: "CSS3", src: "https://i.ibb.co/JRfMHjq1/download-1.png", alt: "CSS3 logo" },
        { label: "JavaScript", src: "https://i.ibb.co/Vc79JTMk/download-2.png", alt: "JavaScript logo" },
        { label: "React.js", src: "https://i.ibb.co/NnjmBtNp/download-3.png", alt: "React.js logo" },
        { label: "Next.js", src: "https://i.ibb.co/jk7pJxtL/download.jpg", alt: "Next.js logo" },
        { label: "Tailwind CSS", src: "https://i.ibb.co/qF6tp8gS/download-1.jpg", alt: "Tailwind CSS logo" },
        { label: "React Router", src: "https://i.ibb.co/tTTfwCY6/download-6.png", alt: "React Router logo" },
      ],
    },
    {
      title: "Backend Development",
      icon: "https://placehold.co/32x32/png?text=BE&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [
        { label: "Node.js", src: "https://i.ibb.co/99z00GqQ/download-2.jpg", alt: "Node.js logo" },
        { label: "Express.js", src: "https://i.ibb.co/svXN2mPW/download-5.png", alt: "Express.js logo" },
        { label: "MongoDB", src: "https://i.ibb.co/svFXgrC3/images.png", alt: "MongoDB logo" },
        { label: "Stripe", src: "https://i.ibb.co/RTyRCFdt/download-6.png", alt: "Stripe logo" },
        { label: "JWT", src: "https://i.ibb.co/MxZrG7pK/download-7.png", alt: "JWT logo" },
        { label: "Axios", src: "https://i.ibb.co/zhVg7fsY/download-8.png", alt: "Axios logo" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: "https://placehold.co/32x32/png?text=UX&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [
        { label: "Figma", src: "https://i.ibb.co/60vVXDF0/download-9.png", alt: "Figma logo" },
        { label: "Responsive Design", src: "https://i.ibb.co/spSKSSrN/download-3.jpg", alt: "Responsive Design logo" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "https://placehold.co/32x32/png?text=TT&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [
        { label: "VS Code", src: "https://i.ibb.co/1JhzbMrd/download-10.png", alt: "VS Code logo" },
        { label: "Firebase", src: "https://i.ibb.co/23GvTppT/download-11.png", alt: "Firebase logo" },
        { label: "Vercel", src: "https://i.ibb.co/sdP11cSK/download-12.png", alt: "Vercel logo" },
        { label: "Vite", src: "https://i.ibb.co/Fb0xHTqq/download-13.png", alt: "Vite logo" },
        { label: "Netlify", src: "https://i.ibb.co/PsTYzz85/images-1.png", alt: "Netlify logo" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "https://placehold.co/32x32/png?text=CD&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [{ label: "GitHub", src: "https://i.ibb.co/XkWwpgxj/images-3.png", alt: "GitHub logo" }],
    },
    {
      title: "Creative Skills",
      icon: "https://placehold.co/32x32/png?text=CS&font=roboto&font-weight=700&font-size=18&bg=2a1e5a&fg=7f8aff",
      skills: [
        { label: "UI Animation", src: "https://i.ibb.co/5xgNYjZJ/images-6.png", alt: "UI Animation logo" },
        { label: "Motion Animation", src: "https://i.ibb.co/PZqnZcD8/download-17.png", alt: "Motion Animation logo" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10 font-sans bg-gradient-to-br ">
      {/* Header Animation */}
      <div className="flex justify-center py-5">
        <img
          src="https://user-images.githubusercontent.com/76038190/229223263-cf2e6b07-2615-6f87-9c38-e37600f8381a.gif"
          alt="Coding Animation"
          className="h-full max-h-[370px] rounded-lg shadow-lg object-contain"
        />
      </div>

      {/* Skills Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10">
        {skillSections.map((section, idx) => (
          <section
            key={`${section.title}-${idx}`}
            className="relative flex flex-col gap-4 p-5  border border-[#3a2e7a] rounded-2xl shadow-md hover:shadow-cyan-400/60 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-3">
              <img src={section.icon} alt={`${section.title} icon`} className="w-8 h-8 rounded-md" />
              <h2 className="font-semibold text-lg text-lime-300">{section.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {section.skills.map(({ label, src, alt }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex items-center gap-2 px-3 py-2 bg-[#2a2470]/70 rounded-md border border-[#3a2e7a] shadow-md text-xs font-medium text-lime-300 hover:scale-110 hover:shadow-cyan-400/50 transition-transform duration-300"
                >
                  <img src={src} alt={alt} className="w-6 h-6 rounded-full" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Personal Info */}
        <pre className="col-span-full p-4 bg-[#1e1b4d]/90 border border-[#3a2e7a] rounded-2xl shadow-md text-lime-300 text-sm whitespace-pre-wrap hover:shadow-cyan-400/60 transition duration-300">
{`name: Md Robin Ahmed
location: Mymensingh, Bangladesh
current_work: Full-Stack Developer
education:
  - Computer Science & Engineering at AIUB

fields_of_interests:
  - Web Development
  - Full Stack Development
  - Front-End Development
  - Back-end Development
  - Open Source

currently_learning:
  - Next.js 15

2025_goals:
  - Contribute to Open Source Projects
  - Build Amazing Full-Stack Applications
  - Learn Cloud Technologies
  - Share Knowledge with Community`}
        </pre>
      </div>
    </div>
  );
}
