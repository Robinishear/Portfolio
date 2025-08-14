"use client"; // Needed if you want interactivity

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Martin Valentine",
    email: "nyjuzeka@mailinator.com",
    message: "Fugiat odio incididu",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center py-10 min-h-screen ">
      <div className="flex  flex-col md:flex-row gap-20 max-w-5xl w-full px-4">
        {/* Left Form */}
        <form
          onSubmit={handleSubmit}
          className=" p-6 w-full max-w-md shadow-smrelative font-bold rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 border border-gray-300"
          autoComplete="off"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-center font-semibold  mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-center font-semibold  mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-center font-semibold  mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2  resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 bg-gradient-to-r from-black via-gray-900 to-black"
          >
            Send Message
          </button>
        </form>

        {/* Right Information */}
        <div className="p-6 w-full max-w-md shadow-smrelative font-bold rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000 border border-gray-300">
          <h2 className="0 font-extrabold text-xl text-center mb-4 select-none">
            Our Information
          </h2>
          <hr className="border-gray-300 mb-6" />

          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-3 ">
              <FaMapMarkerAlt className="0 text-lg" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">
            123 FoodShare Avenue, mymenshingho, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 ">
              <FaEnvelope className="0 text-lg" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">mdrobinahmed57898@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 ">
              <FaPhoneAlt className=" text-lg" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+880 133 4757 898</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 mt-6 mb-4" />
          <p className="text-center  font-semibold select-none mb-2">
            Follow Us
          </p>
         <div className="flex justify-center gap-3 text-xl">
  <Link
    href="https://web.facebook.com/md.robin.ahmed.548869"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000"
  >
    <FaFacebookF />
  </Link>

  <Link
    href="https://www.linkedin.com/in/md-robin1/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000"
  >
    <FaLinkedinIn />
  </Link>

  <Link
    href="https://github.com/Robinishear"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000"
  >
    <FaGithub />
  </Link>

  <Link
    href="https://web.whatsapp.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer relative font-bold text-lime-300 rounded-2xl px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-1000"
  >
    <FaWhatsapp />
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
