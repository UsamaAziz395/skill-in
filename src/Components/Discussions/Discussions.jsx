import React from "react";
import { FaUsers } from "react-icons/fa";
import Sarah from '../../assets/images/Discussions/Sarah.jpg'
import Bally from '../../assets/images/Discussions/Bally.png';

function OneOnOne() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        
        {/* ================= LEFT SIDE: Complex UI ================= */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          
          {/* --- BACKGROUND ITEMS (Absolute Positioned) --- */}
          
          {/* 1. Background Grey Window (Square with Top Dots) */}
          <div className="absolute top-0 left-0 w-[85%] h-[75%] bg-[#F1F3F8] rounded-2xl border border-gray-200 z-0">
            {/* Mac-style dots */}
            <div className="flex gap-1.5 p-3">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            </div>
            {/* Faded background image placeholder inside window */}
            <div className="absolute top-10 left-10 w-1/2 h-20 bg-gray-300 rounded-lg opacity-40"></div>
            <div className="absolute top-10 right-10 w-1/3 h-20 bg-gray-300 rounded-lg opacity-40"></div>
          </div>

          {/* 2. Big Blue Circle (Top Right) */}
          <div className="absolute top-2 right-4 md:right-10 w-16 h-16 md:w-24 md:h-24 border-[8px] border-[#23BDEE] rounded-full z-0"></div>

          {/* 3. Orange Triangle (Right Middle) */}
          <div className="absolute top-[40%] -right-2 md:right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#F48C06] rotate-90 z-0"></div>

          {/* 4. Faded Blue Shape behind card (Left Side) */}
          <div className="absolute bottom-16 left-0 w-32 h-40 bg-[#23BDEE]/20 rounded-2xl z-0"></div>


          {/* --- MAIN FLOATING CARD --- */}
          <div className="relative z-10 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5 md:p-6 mt-10">
            
            {/* Card Top Bar (Mac dots) */}
            <div className="flex gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            </div>

            {/* Floating Users Icon (Left side of card) */}
            <div className="absolute top-[20%] -left-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#23BDEE] z-20">
              <FaUsers className="text-xl" />
            </div>

            {/* Images Container */}
            <div className="flex gap-4 mb-5">
              {/* Teacher Image */}
              <div className="w-1/2 h-36 rounded-xl overflow-hidden shadow-sm relative">
                <img src={Sarah} alt="Teacher" className="w-full h-full object-cover" />
              </div>
              
              {/* Student Image with Name Tag */}
              <div className="w-1/2 h-36 rounded-xl overflow-hidden shadow-sm relative">
                <img src={Bally} alt="Student" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                  Patricia Mendoza
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="flex items-center justify-between mt-2">
              <div>
                <h4 className="text-sm font-bold text-[#2F327D]">Private Discussion</h4>
                <p className="text-[11px] text-gray-400 mt-1">Your video can't be seen by others</p>
              </div>
              <button className="bg-[#FF5B5B] hover:bg-red-600 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors shadow-md shadow-red-200">
                End Discussion
              </button>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: Text Content ================= */}
        <div className="text-left lg:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] leading-snug mb-4">
            One-on-One <br />
            <span className="text-[#F48C06]">Discussions</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
          </p>

          <button className="px-6 py-2.5 border border-[#F48C06] text-[#F48C06] rounded-full font-medium hover:bg-[#F48C06] hover:text-white transition-colors duration-300">
            See more features
          </button>
        </div>

      </div>
    </section>
  );
}

export default OneOnOne;