import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaGraduationCap, FaEnvelope, FaChartBar, FaCheckCircle } from "react-icons/fa";
import Heroimg from '../../assets/images/Hero/Heroimg.png';
import Navbar from "../../Components/Navbar/Navbar";
import Ellipse from '../../assets/images/Hero/Ellipse.png';

function Hero() {
  return (
    <section className="relative w-full bg-[#FFF2E1] overflow-hidden pt-20 lg:pt-15 pb-24 lg:pb-32 font-sans">
      
      {/* Navbar */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mt-4 lg:mt-12">
        
        {/* ================= LEFT SIDE: Text Content ================= */}
        <div className="text-center lg:text-left mt-5 lg:mt-0 z-20">
          {/* Mobile ke liye heading aur choti ki gayi hai (text-2xl) */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6 leading-tight">
            <span className="text-[#F48C06]">Studying</span> <span className="text-[#2F327D]">Online is now</span> <br className="hidden sm:block" />
            <span className="text-[#2F327D]">much easier</span>
          </h1>
          
          {/* Text size reduced for mobile (text-xs) */}
          <p className="text-gray-500 text-xs sm:text-base max-w-[280px] sm:max-w-md mx-auto lg:mx-0 leading-relaxed mb-6 lg:mb-8">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6">
            
            <Link 
              to="/signin" 
              className="w-full sm:w-auto bg-[#F48C06] text-white text-center font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#d97a05] transition-colors shadow-lg shadow-orange-200"
            >
              Join for free
            </Link>
            
            <button className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#23BDEE] shadow-md group-hover:scale-105 transition-transform">
                <FaPlay className="ml-1 text-xs sm:text-sm" />
              </div>
              <span className="text-[#2F327D] font-medium text-xs sm:text-base">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: Image & Floating Cards ================= */}
        {/* Height further reduced for mobile */}
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] flex justify-center items-end mt-8 lg:mt-0">
          
          {/* Background Decorative Shapes */}
          <div className="absolute top-10 right-4 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#FF5B5B] opacity-20 rounded-full z-0"></div>
          <div className="absolute bottom-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#F48C06] opacity-20 rounded-full z-0"></div>

          {/* Main Image - Max-width reduced for mobile */}
          <div className="relative z-10 w-full max-w-[200px] sm:max-w-md h-full flex justify-center items-end">
             <img 
               src={Heroimg} 
               alt="Student" 
               className="w-auto h-[90%] sm:h-[95%] object-contain"
             />
          </div>

          {/* --- FLOATING CARDS --- */}
          {/* Cards scaled down further (scale-75) for mobile */}

          {/* Floating Card 1 */}
          <div className="absolute top-[5%] sm:top-[15%] -left-3 sm:left-0 md:left-10 bg-white rounded-lg sm:rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] px-2 sm:px-4 py-1.5 sm:py-3 flex items-center gap-1.5 sm:gap-3 z-20 scale-75 sm:scale-100 origin-left">
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#EDEFFF] text-[#4643C7] rounded-md sm:rounded-lg flex items-center justify-center">
              <FaGraduationCap className="text-sm sm:text-xl" />
            </div>
            <div>
              <h4 className="text-[10px] sm:text-sm font-bold text-[#2F327D]">250k</h4>
              <p className="text-[8px] sm:text-[10px] text-gray-400">Assisted Student</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-[10%] sm:bottom-[20%] -left-4 sm:left-0 md:-left-10 bg-white rounded-xl sm:rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.12)] p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-3 z-20 w-40 sm:w-64 scale-75 sm:scale-100 origin-left">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
                 <img 
                   src={Ellipse} 
                   alt="User" 
                   className="w-full h-full object-cover object-top" 
                 />
              </div>
              <div>
                <h4 className="text-[9px] sm:text-xs font-bold text-[#2F327D]">User Experience Class</h4>
                <p className="text-[8px] sm:text-[10px] text-gray-400">Today at 12.00 PM</p>
              </div>
            </div>
            <button className="bg-[#FF5B5B] hover:bg-red-600 text-white text-[9px] sm:text-xs font-medium py-1 sm:py-1.5 rounded-full transition-colors w-full">
              Join Now
            </button>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute top-[55%] sm:top-[45%] -right-3 sm:-right-2 md:right-0 bg-white rounded-lg sm:rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] px-2 sm:px-4 py-1.5 sm:py-3 flex items-center gap-1.5 sm:gap-3 z-20 scale-75 sm:scale-100 origin-right">
            <div className="w-5 h-5 sm:w-8 sm:h-8 bg-orange-50 text-[#F48C06] rounded-full flex items-center justify-center">
              <FaEnvelope className="text-[10px] sm:text-sm" />
            </div>
            <div>
              <h4 className="text-[9px] sm:text-sm font-bold text-[#2F327D] flex items-center gap-1">
                Congratulations <FaCheckCircle className="text-green-500 text-[8px] sm:text-xs" />
              </h4>
              <p className="text-[7px] sm:text-[10px] text-gray-400">Your admission completed</p>
            </div>
          </div>

          {/* Floating Card 4 */}
          <div className="absolute top-[5%] sm:top-[15%] -right-2 sm:-right-2 md:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#FF5B5B]/20 rounded-lg sm:rounded-xl flex items-center justify-center z-20 scale-75 sm:scale-100 origin-right">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF5B5B] text-white rounded-md sm:rounded-lg flex items-center justify-center shadow-md">
              <FaChartBar className="text-[10px] sm:text-sm" />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CURVE DESIGN */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-[40px] sm:h-[80px] md:h-[120px]"
        >
          <path 
            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      
    </section>
  );
}

export default Hero;