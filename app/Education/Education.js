"use client";
import { GraduationCap, BookOpen, School } from "lucide-react";

export default function Education() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8">
        
        <h1 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-yellow-400" />
          Education
        </h1>

        {/* Current Study */}
        <div className="bg-white/5 rounded-xl p-6 hover:scale-[1.02] transition-all shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-blue-300">
            <School className="w-6 h-6" /> Current Study
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            I am currently studying at <span className="font-semibold text-white">Aliya Madrasha</span>.
          </p>
        </div>

        {/* Upcoming Exam */}
        <div className="bg-white/5 rounded-xl p-6 hover:scale-[1.02] transition-all shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-green-300">
            <BookOpen className="w-6 h-6" /> Upcoming Exam
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            I am preparing for my <span className="font-semibold text-white">SSC Examination</span>.
          </p>
        </div>

        {/* Previous Study */}
        <div className="bg-white/5 rounded-xl p-6 hover:scale-[1.02] transition-all shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-pink-300">
            <GraduationCap className="w-6 h-6" /> Previous Study
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Previously, I studied at <span className="font-semibold text-white">Qaumi Madrasha</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
