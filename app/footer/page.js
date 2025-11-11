import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-200 text-gray-400 dark:text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 dark:border-gray-300">
        
        {/* About Us */}
        <div>
          <h3 className="text-white dark:text-black text-lg mb-4 font-semibold">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            Centralized & authentic modern restaurant <br />
            delivering world-class dining experiences.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white dark:text-black text-lg mb-4 font-semibold">
            Explore
          </h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white dark:text-black text-lg mb-4 font-semibold">
            Contact Info
          </h3>
          <p>📍 123 Food St, City Center</p>
          <p>📱 +123 456 789</p>
          <p>📧 info@restan.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white dark:text-black text-lg mb-4 font-semibold">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Join our list for latest news & offers.
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded border border-gray-600 dark:border-gray-400 bg-transparent focus:outline-none"
            />
            <button className="w-full py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="w-[150px] h-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="Restan Logo"
          />
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 md:mt-0 text-gray-500 dark:text-gray-600">
          © 2025 Restan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
