import { useState, useEffect } from "react";
import React from "react";
import img1 from "../Assets/Logonew.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <div className="relative top-0 left-0 w-full bg-[#FBFBFB] text-black flex items-center justify-between px-10 py-3 font-dmsans">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-700"></div>

      {/* Logo Section */}
      <div>
        <img
          src={img1}
          alt="Logo"
          style={{ width: "200px", height: "auto" }}
          className="p-2"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 font-semibold text-sm tracking-wider">
        <button
          onClick={() => (window.location.href = "/")}
          className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
            activePage === "/" ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => (window.location.href = "/services")}
          className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
            activePage === "/services" ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
          }`}
        >
          SERVICE
        </button>
        <button
          onClick={() => (window.location.href = "/about_us")}
          className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
            activePage === "/about_us" ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
          }`}
        >
          ABOUT US
        </button>
        <button
          onClick={() => (window.location.href = "/blog")}
          className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
            activePage === "/blog" ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
          }`}
        >
          BLOG
        </button>
        <button
          onClick={() => (window.location.href = "/contact")}
          className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
            activePage === "/contact" ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
          }`}
        >
          CONTACT US
        </button>
      </div>

      {/* Contact Us Button */}
      <div>
        <button
          className="border px-6 py-2 rounded-md font-semibold transition-all"
          style={{ borderColor: "#FFD56F", color: "#FFD56F" }}
        >
          CLIENT PORTAL
        </button>
      </div>
    </div>
  );
};

export default Navbar;
