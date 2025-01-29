import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Vedio1 from '../Assets/Media.mp4';

const Blog = () => {
  return (
    

      <div className="relative w-full font-dmsans">
  {/* Navbar */}
  <Navbar />
  <div className="relative w-full h-[500px] bg-gray-800 text-white ">
      <div><video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Vedio1}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      /><div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
      <h1 className="text-4xl font-semibold mb-4">
      Stay Ahead with Roboforming Insights
      </h1>
      <h2 className="text-lg text-center mb-6 px-6 font-dmsans">
      Explore the Latest Trends, Techniques, and Innovations in Sheet Metal Forming.
      </h2>
      
    </div></div>
      
    </div>
  

     

      {/* Blog Content Section */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Featured Article */}
        <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Featured Article</h2>
          <p className="mt-2 text-gray-700">
            Discover the latest advancements in Roboforming and how they are transforming the industry.
          </p>
          <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            Read More
          </button>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Roboforming Basics', 'Industry Trends', 'Case Studies', 'Innovations'].map((category, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="text-gray-600 mt-2">Explore articles related to {category.toLowerCase()}.</p>
              <button className="mt-3 text-orange-600 hover:underline">View Articles</button>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Subscribe CTA */}
        <div className="mt-10 text-center bg-orange-400 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Subscribe to Our Blog</h3>
          <p className="mt-2">Get the latest updates delivered to your inbox.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 p-2 w-1/4 rounded text-black"
          />
          <button className="mt-2 ml-2 bg-white text-orange-600 px-4 py-2 rounded hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
