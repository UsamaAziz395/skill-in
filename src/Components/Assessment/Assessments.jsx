import React from "react";
import { FaTimes, FaCheck, FaPaperPlane } from "react-icons/fa";
import Quizz from '../../assets/images/Quizz.png'

function Assessments() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        
        {/* ================= LEFT SIDE: Quiz Card & Shapes ================= */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          
          {/* --- Background Decorative Shapes --- */}
          
          {/* 1. Big Blue Circle (Top Left) */}
          <div className="absolute top-4 left-4 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-[#4643C7] rounded-full opacity-90 z-0"></div>
          
          {/* 2. Small Orange Dot (Top Center) */}
          <div className="absolute top-0 left-1/3 w-4 h-4 bg-[#F48C06] rounded-full z-0"></div>
          
          {/* 3. Small Green Dot (Bottom Left) */}
          <div className="absolute bottom-20 left-8 md:left-16 w-3 h-3 bg-[#23BDEE] rounded-full z-0"></div>

          {/* 4. Small Pink Dot (Middle Right of Card) */}
          <div className="absolute top-[55%] right-[15%] w-3 h-3 bg-[#FF5B5B] rounded-full z-0"></div>


          {/* --- Main Quiz Card --- */}
          <div className="relative z-10 w-[85%] md:w-[70%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] pt-5">
            
            {/* Top Icons (Cross and Check) */}
            <div className="absolute -top-4 right-6 flex gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-red-500 border border-gray-100">
                <FaTimes />
              </div>
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-green-500 border border-gray-100">
                <FaCheck />
              </div>
            </div>

            {/* Question Pill */}
            <div className="inline-block bg-[#EDEFFF] text-[#4643C7] font-medium text-sm px-5 py-1.5 rounded-full mb-6">
              Question 1
            </div>

            {/* Question Text */}
            <h3 className="text-xl md:text-2xl font-bold text-[#2F327D] leading-snug mb-6 pr-4">
              True or false? This play takes place in Italy
            </h3>

            {/* Image Container */}
            <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden mb-6 relative">
               <img src={ Quizz} alt="Venice" className="w-full h-full object-cover" />
            </div>

            {/* Success Toast (Moved slightly UP with bottom-4) */}
            <div className="absolute bottom-4 -right-4 md:-right-8 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] px-4 py-3 flex items-center gap-3 z-20">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                <FaPaperPlane className="-ml-1 mt-0.5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Your answer was</p>
                <p className="text-sm font-bold text-green-500">sent successfully</p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: Text Content ================= */}
        <div className="text-left lg:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] leading-snug mb-4">
            Assessments, <br />
            <span className="text-[#F48C06]">Quizzes, Tests</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Assessments;