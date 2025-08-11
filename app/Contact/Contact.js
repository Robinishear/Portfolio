"use client";

import React from "react";
import { FaCode } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-[#12141e] text-white  min-h-screen py-6 px-4">
      <div className="text-center text-[#ffb400] pt-6 pb-10 text-lg md:text-xl font-semibold">
        Get in Touch
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://placehold.co/600x400/png?text=Contact+Page+Image"
          alt="Person working on a laptop with contact icons around"
          className="rounded-xl border border-[#ffb400]"
        />

        <form className="space-y-6 border border-[#ffb400] rounded-xl p-8">
          <div>
            <label
              htmlFor="name"
              className="block text-[#ffb400] font-semibold mb-2 text-base"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-md border border-[#ffb400] bg-[#12141e] text-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#ffb400]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#ffb400] font-semibold mb-2 text-base"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-md border border-[#ffb400] bg-[#12141e] text-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#ffb400]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#ffb400] font-semibold mb-2 text-base"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here"
              rows={5}
              className="w-full rounded-md border border-[#ffb400] bg-[#12141e] text-white px-4 py-2 text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#ffb400]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#ffb400] text-black font-semibold px-6 py-3 rounded-md text-base hover:bg-yellow-400 transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#ffb400] w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        <FaCode />
      </button>
    </main>
  );
}
