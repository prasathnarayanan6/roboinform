import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Vedio from '../Assets/Media.mp4'
import ServiceImage1 from '../Assets/Logo.jpg';
import ServiceImage2 from '../Assets/Logo.jpg';
import ServiceImage3 from '../Assets/Logo.jpg';

const Services = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gray-800 text-white">
        <video
            src={Vedio} // Replace this with your actual video file path
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
          <h1 className="text-4xl font-semibold font-poppins mb-4">
            Customized Roboforming Solutions for Every Industry
          </h1>
          <h2 className="text-lg text-center mb-6 px-6">
            Experience the Future of Sheet Metal Forming with Our State-of-the-Art Technology.
          </h2>
          <button className="px-6 py-3 bg-[#FFD56F] rounded-md text-black font-semibold hover:bg-[#facc5c]">
            Request a Consultation
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-10 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Expertise
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          At RoboInform, we bring precision, innovation, and efficiency to sheet metal forming. With
          our advanced roboforming technology, we cater to diverse industries, ensuring tailored
          solutions for all your manufacturing needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={ServiceImage1}
              alt="Prototype Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
            <p className="text-gray-700">
              Rapid prototyping for efficient product testing and validation.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={ServiceImage2}
              alt="Custom Manufacturing"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Custom Manufacturing</h3>
            <p className="text-gray-700">
              Tailored sheet metal forming to meet specific client requirements.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={ServiceImage3}
              alt="High-Precision Forming"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">High-Precision Forming</h3>
            <p className="text-gray-700">
              Ensuring dimensional accuracy for complex components.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Served Section */}
      <div className="py-10 px-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Industries We Serve
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
          From aerospace to electronics, our solutions empower various industries to achieve
          manufacturing excellence.
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-white shadow-md rounded-md px-4 py-2">Aerospace</li>
          <li className="bg-white shadow-md rounded-md px-4 py-2">Automotive</li>
          <li className="bg-white shadow-md rounded-md px-4 py-2">Electronics</li>
          <li className="bg-white shadow-md rounded-md px-4 py-2">Consumer Goods</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="py-10 bg-gray-800 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Discover How Our Services Can Elevate Your Business
        </h2>
        <button className="px-6 py-3 bg-[#FFD56F] rounded-md text-black font-semibold hover:bg-[#facc5c]">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
