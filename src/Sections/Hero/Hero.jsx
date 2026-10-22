import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaGraduationCap, FaEnvelope, FaChartBar, FaCheckCircle } from "react-icons/fa";
import Heroimg from '../../assets/images/Hero/Heroimg.png';
import Navbar from "../../Components/Navbar/Navbar";
import Ellipse from '../../assets/images/Hero/Ellipse.png';

function Hero() {
  return (
    <section className="relative w-full bg-[#FFF2E1] overflow-hidden pt-15 pb-32 font-sans">
      
      {/* Navbar */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left mt-5 lg:mt-0 z-20">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-[#F48C06]">Studying</span> <span className="text-[#2F327D]">Online is now</span> <br />
            <span className="text-[#2F327D]">much easier</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Join for Free - Linked to SignIn */}
            <Link 
              to="/signin" 
              className="w-full sm:w-auto bg-[#F48C06] text-white text-center font-medium px-8 py-3 rounded-full hover:bg-[#d97a05] transition-colors shadow-lg shadow-orange-200"
            >
              Join for free
            </Link>
            
            {/* Watch Video Button (No Modal) */}
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#23BDEE] shadow-md group-hover:scale-105 transition-transform">
                <FaPlay className="ml-1 text-sm" />
              </div>
              <span className="text-[#2F327D] font-medium text-sm md:text-base">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Image & Floating Cards */}
        <div className="relative w-full h-[500px] md:h-[550px] flex justify-center items-end mt-10 lg:mt-0">
          
          {/* Background Decorative Shapes */}
          <div className="absolute top-10 right-10 w-12 h-12 bg-[#FF5B5B] opacity-20 rounded-full z-0"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#F48C06] opacity-20 rounded-full z-0"></div>

          {/* Main Image */}
          <div className="relative z-10 w-full max-w-md h-full flex justify-center items-end">
             <img 
               src={Heroimg} 
               alt="Student" 
               className="w-auto h-[95%] object-contain"
             />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-[15%] left-0 md:left-10 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-10 h-10 bg-[#EDEFFF] text-[#4643C7] rounded-lg flex items-center justify-center">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2F327D]">250k</h4>
              <p className="text-[10px] text-gray-400">Assisted Student</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-[20%] left-0 md:-left-10 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3 z-20 w-64">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
                 <img 
                   src={Ellipse} 
                   alt="User" 
                   className="w-full h-full object-cover object-top" 
                 />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#2F327D]">User Experience Class</h4>
                <p className="text-[10px] text-gray-400">Today at 12.00 PM</p>
              </div>
            </div>
            <button className="bg-[#FF5B5B] hover:bg-red-600 text-white text-xs font-medium py-1.5 rounded-full transition-colors w-full">
              Join Now
            </button>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute top-[45%] -right-4 md:right-0 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-8 h-8 bg-orange-50 text-[#F48C06] rounded-full flex items-center justify-center">
              <FaEnvelope className="text-sm" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2F327D] flex items-center gap-1">
                Congratulations <FaCheckCircle className="text-green-500 text-xs" />
              </h4>
              <p className="text-[10px] text-gray-400">Your admission completed</p>
            </div>
          </div>

          {/* Floating Card 4 */}
          <div className="absolute top-[15%] -right-2 md:right-4 w-12 h-12 bg-[#FF5B5B]/20 rounded-xl flex items-center justify-center z-20">
            <div className="w-8 h-8 bg-[#FF5B5B] text-white rounded-lg flex items-center justify-center shadow-md">
              <FaChartBar className="text-sm" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM CURVE DESIGN ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] md:h-[120px]"
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