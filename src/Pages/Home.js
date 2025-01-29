import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Vedio from "../Assets/Media.mp4"; // Placeholder for robotic arm image
import Img2 from "../Assets/Precision.png"; // Replace with actual icons
import Img3 from "../Assets/cost_effective.png";
import Img4 from "../Assets/scalability.png";

const Home = () => {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
  <video
    src={Vedio} // Replace this with your actual video file path
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 font-dmsans">
    <h1 className="text-4xl font-semibold mb-4  ">
      Revolutionizing Sheet Metal Forming
    </h1>
    <h2 className="text-xl mb-3 px-4 text-center ">
      Discover the Future of Manufacturing with Advanced Roboforming Solutions.
    </h2>
    <button className="px-6 py-3 bg-[#FFD56F] rounded-md text-black font-semibold mt-4 hover:bg-[#facc5c] hover:text-black">
      Explore Our Services
    </button>
  </div>
</div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 font-dmsans">About RoboInform</h2>
          <p className="text-lg text-gray-900 leading-relaxed font-dmsans">
            At RoboInform, we specialize in innovative roboforming techniques that redefine 
            design customization with efficiency and scalability in sheet metal forming. 
            With cutting-edge technology and industry expertise, we deliver unparalleled 
            solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto text-center font-dmsans">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img src={Img2} alt="Precision" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Precision</h3>
              <p className="text-gray-600 mt-2">
                Achieve unmatched accuracy in metal forming.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Img3} alt="Cost Efficiency" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Cost Efficiency</h3>
              <p className="text-gray-600 mt-2">
                Save on manufacturing costs with innovative processes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Img4} alt="Scalability" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Scalability</h3>
              <p className="text-gray-600 mt-2">
                Seamlessly scale operations for any project size.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-400 text-white py-16 text-center font-dmsans">
        <h2 className="text-3xl font-semibold mb-4">Ready to Partner with Us?</h2>
        <p className="text-lg mb-6">
          Contact our team today and discover how we can elevate your business!
        </p>
        <button className="px-6 py-3 bg-white text-orange-400 rounded-md font-semibold hover:bg-gray-200">
          Get in Touch
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
