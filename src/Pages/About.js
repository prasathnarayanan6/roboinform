import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Vedio1 from '../Assets/Media.mp4';

const About = () => {
  return (
    <div className="relative w-full font-dmsans">
      {/* Navbar */}
      <Navbar />
      <div className="relative w-full h-[500px] overflow-hidden ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Vedio1}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-semibold">Welcome to RoboInform</h1>
          <p className="text-lg md:text-xl mt-4">
            Innovating the Future with Advanced Roboforming Technology
          </p>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        {/* Headline Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Story</h1>
          <p className="text-lg text-gray-600 mt-2">
            Transforming Ideas into Tangible Results with Precision.
          </p>
        </div>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src="/icons/mission-icon.svg" alt="Mission Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Mission</h2>
            <p className="text-gray-600 mt-2 text-center">
              Revolutionizing manufacturing with robotics and precision engineering.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src="/icons/vision-icon.svg" alt="Vision Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Vision</h2>
            <p className="text-gray-600 mt-2 text-center">
              To become a global leader in advanced sheet metal forming solutions.
            </p>
          </div>
          {/* Journey */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src="/icons/journey-icon.svg" alt="Journey Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Journey</h2>
            <p className="text-gray-600 mt-2 text-center">
              Achieving milestones through innovation, partnerships, and dedication.
            </p>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Join Us</h2>
          <p className="text-gray-600 mt-2">Help shape the future of manufacturing.</p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-800 transition">
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};   

export default About;
    