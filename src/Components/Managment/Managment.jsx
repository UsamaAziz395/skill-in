import React from "react";
import { FaStar, FaBook } from "react-icons/fa";
import picone from '../../assets/images/Managment/picone.png';
import pictwo from '../../assets/images/Managment/pictwo.png';
import picthree from '../../assets/images/Managment/picthree.png';
import picfour from '../../assets/images/Managment/picfour.png';

function ClassManagement() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        
        {/* ================= LEFT SIDE: Text Content ================= */}
        <div className="text-left order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F48C06] leading-snug mb-2">
            Class Management
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2F327D] mb-4">
            Tools for Educators
          </h3>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
          </p>
        </div>

        {/* ================= RIGHT SIDE: Complex UI ================= */}
        <div className="relative w-full h-[500px] flex items-center justify-center order-1 lg:order-2">
          
          {/* 1. Background Blue Shape (Left Side of Card) */}
          <div className="absolute top-[35%] -left-4 w-32 h-48 bg-[#23BDEE]/20 rounded-2xl rounded-tr-none z-0"></div>

          {/* 2. Small Blue Dots (Top Right) */}
          <div className="absolute top-6 right-12 w-4 h-4 bg-[#23BDEE] rounded-full opacity-60 z-0"></div>
          <div className="absolute top-10 right-6 w-2.5 h-2.5 bg-[#23BDEE] rounded-full opacity-60 z-0"></div>

          {/* 3. Main GradeBook Card Container */}
          <div className="relative w-[90%] md:w-[85%] h-[350px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10">
            
            {/* Card Header (Blue Bar) */}
            <div className="absolute top-0 left-0 w-full h-14 bg-[#4DB6EB] rounded-t-2xl flex items-center justify-center z-0">
              <span className="text-white font-bold text-lg tracking-wide">GradeBook</span>
            </div>

            {/* Floating Star Icon (Top Left) */}
            <div className="absolute -top-6 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
              <div className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-white">
                <FaStar className="text-lg" />
              </div>
            </div>

            {/* Floating Book Icon (Top Right) */}
            <div className="absolute top-8 -right-5 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
              <div className="w-10 h-10 bg-[#4DB6EB] rounded-full flex items-center justify-center text-white">
                <FaBook className="text-sm" />
              </div>
            </div>

            {/* --- CHART AREA (Bars & Avatars) --- */}
            <div className="absolute top-20 left-0 w-full px-6 z-10 flex flex-col gap-6">
              
              {/* Row 1 */}
              <div className="relative w-full flex items-end">
                {/* Blue Bar */}
                <div className="w-[60%] h-6 bg-[#23BDEE] rounded-r-full relative">
                  
                  {/* Avatar 1 (Man) - IMAGE ADDED */}
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-gray-200 border-[3px] border-white rounded-full overflow-hidden shadow-md z-20">
                    <img src={picone} alt="Student 1" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Score Pill 1 (100) */}
                  <div className="absolute -right-4 top-0 w-10 h-8 bg-[#23BDEE]/20 text-[#23BDEE] rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm z-20">
                    100
                  </div>

                  {/* Small Star below Avatar 1 */}
                   <div className="absolute left-2 top-8 text-[#FFC107] text-xs z-20">
                      <FaStar />
                   </div>
                </div>
              </div>

              {/* Row 2 (Offset) */}
              <div className="relative w-full flex justify-end">
                <div className="w-[70%] h-6 bg-[#23BDEE] rounded-l-full relative flex justify-start">
                  
                  {/* Avatar 2 (Man) - IMAGE ADDED */}
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-gray-200 border-[3px] border-white rounded-full overflow-hidden shadow-md z-20">
                     <img src={pictwo} alt="Student 2" className="w-full h-full object-cover" />
                  </div>

                  {/* Score Pill 2 (9) */}
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-[#23BDEE]/20 text-[#23BDEE] rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm z-20">
                    9
                  </div>
                </div>
              </div>

              {/* Row 3 (Green Bar) */}
              <div className="relative w-full flex items-start">
                <div className="w-[50%] h-6 bg-[#7ED321] rounded-r-full relative">
                  
                  {/* Avatar 3 (Woman) - IMAGE ADDED */}
                  <div className="absolute -right-6 -top-4 w-12 h-12 bg-gray-200 border-[3px] border-white rounded-full overflow-hidden shadow-md z-20">
                    <img src={picthree} alt="Student 3" className="w-full h-full object-cover" />
                  </div>

                  {/* Score Pill 3 (85) */}
                  <div className="absolute -right-2 top-6 w-10 h-8 bg-[#7ED321]/20 text-[#7ED321] rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm z-20">
                    85
                  </div>
                </div>
              </div>

            </div>

            {/* --- Export Button & Red Bar Area --- */}
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 z-20">
              
              {/* Red Bar with Avatar */}
              <div className="relative w-40 h-6 bg-[#FF5B5B] rounded-l-full flex items-center justify-end pr-2">
                 {/* Avatar 4 (Woman) - IMAGE ADDED */}
                 <div className="absolute -left-4 -top-4 w-12 h-12 bg-gray-200 border-[3px] border-white rounded-full overflow-hidden shadow-md z-20">
                    <img src={picfour} alt="Student 4" className="w-full h-full object-cover" />
                  </div>

                  {/* Score Pill 4 (75) */}
                  <div className="absolute -left-4 top-6 w-10 h-8 bg-[#FF5B5B]/20 text-[#FF5B5B] rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm z-20">
                    75
                  </div>
              </div>

              {/* Export Button */}
              <button className="bg-[#4643C7] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#3b38a8] transition-colors z-30">
                Export
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ClassManagement;