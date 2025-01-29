import React from "react";
import { FaChevronRight, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="mt-6 md:mb-auto font-dmsans">
      <div className="w-full bg-black text-white items-center justify-between px-10 py-3">
        <div className="hidden md:flex gap-10 font-semibold text-sm tracking-wider mt-6">
          <a
            href="/"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFD56F")}
            onMouseLeave={(e) => (e.target.style.color = "White")}
          >
            HOME
          </a>
          <a
            href="/services"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFD56F")}
            onMouseLeave={(e) => (e.target.style.color = "White")}
          >
            SERVICE
          </a>
          <a
            href="/about_us"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFD56F")}
            onMouseLeave={(e) => (e.target.style.color = "White")}
          >
            ABOUT US
          </a>
          <a
            href="/blog"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFD56F")}
            onMouseLeave={(e) => (e.target.style.color = "White")}
          >
            BLOG
          </a>
          <a
            href="/contact_us" 
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFD56F")}
            onMouseLeave={(e) => (e.target.style.color = "White")}
          >
            CONTACT US
          </a>
          
          <div
            className="text-sm font-semibold tracking-wider ml-[490px]"
            style={{ color: "#FFD56F" }}
          >
            SIGN UP FOR OUR NEWSLETTER
          </div>
        </div>

        <div className="flex items-center justify-between gap-5  py-3">
          <div className="flex items-center gap-5">
            <GrLinkedin size={25} style={{ color: "#FFD56F" }} />
            <GrInstagram size={25} style={{ color: "#FFD56F" }} />
            <FaTwitter size={25} style={{ color: "#FFD56F" }} />
          </div>
          <div className=" flex text-sm font-semibold tracking-wider text-white">
            <input
              type="text"
              placeholder="Email Address"
              className="p-2 border border-white bg-black rounded-md focus:ring-1 focus:ring-white focus:outline-none h-[45px] w-[220px] placeholder-white"
            />
            <div className="border rounded-lg px-3 py-2 bg-black ml-3">
              <FaChevronRight className="mt-2" />
            </div>
          </div>
        </div>
      </div>        
      <div 
  className="w-full text-white flex items-center justify-center text-sm  px-10 py-3" 
  style={{ backgroundColor: "#74512D" }}
>
Privacy Policy | Copyright © 2024 Roboinform. All rights reserved
</div>



    </div>
  );
};

export default Footer;
