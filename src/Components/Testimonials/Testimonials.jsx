import React from "react";
import { FaArrowRight, FaChevronRight, FaStar } from "react-icons/fa";
import testimonialData from "../../data/Testimonialsdata";

function Testimonial() {
  // Array of Objects for Data
 

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto font-sans">
      
      {/* Map through the array data */}
      {testimonialData.map((data) => (
        <div key={data.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT SIDE: Text Content ================= */}
          <div className="order-2 lg:order-1">
            
            {/* Sub Heading with Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-gray-300"></span>
              <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
                {data.subHeading}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] leading-snug mb-6">
              {data.title}
            </h2>
            
            <div className="text-gray-500 text-sm md:text-base leading-relaxed space-y-4 mb-8 max-w-md">
              <p>{data.description1}</p>
              <p>{data.description2}</p>
              <p>{data.description3}</p>
            </div>
            
            {/* Assessment Button */}
            <button className="flex items-center gap-0 border border-[#F48C06] rounded-full text-[#F48C06] hover:bg-[#F48C06] hover:text-white transition-colors duration-300">
              <span className="px-6 py-3 font-medium text-sm md:text-base">{data.buttonText}</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-l border-[#F48C06] flex items-center justify-center">
                <FaArrowRight />
              </div>
            </button>
          </div>

          {/* ================= RIGHT SIDE: Image & Floating Review ================= */}
          <div className="order-1 lg:order-2 relative flex justify-center items-end mt-10 lg:mt-0">
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-sm h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg z-10">
              <img 
                src={data.image} 
                alt="Student" 
                className="w-full h-full object-cover object-top" 
              />
            </div>

            {/* Next Arrow Button (Floating right side) */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-10/12 w-12 h-12 bg-white rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#23BDEE] hover:scale-110 transition-transform z-30">
              <FaChevronRight />
            </button>

            {/* Floating Review Card (Overlapping bottom right) */}
            <div className="absolute -bottom-10 right-0 md:-right-8 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-6 z-20 w-[90%] md:w-[85%] border-l-4 border-[#FF5B5B]">
              <p className="text-gray-600 text-sm italic leading-relaxed mb-6">
                {data.review.quote}
              </p>
              
              <div className="flex justify-between items-end">
                <span className="text-[#2F327D] font-bold text-sm">
                  {data.review.author}
                </span>
                <div className="text-right">
                  <div className="flex text-[#FFC107] text-xs gap-1 mb-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="text-[10px] text-gray-400">{data.review.ratingText}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      ))}
    </section>
  );
}

export default Testimonial;