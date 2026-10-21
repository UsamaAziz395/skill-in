import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Classroomdata from '../../data/Classroomdata';
import Education from '../../assets/Video/Education.mp4';

function PhysicalClassroom() {
  const data = Classroomdata[0]; 
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!data) return null; 

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ================= LEFT SIDE: Text Content ================= */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] leading-snug mb-6 relative">
            <span className="absolute -top-4 -left-6 w-12 h-12 bg-[#F48C06] opacity-20 rounded-full -z-10"></span>
            
            {data.headingPart1}{" "}
            <span className="text-[#F48C06]">{data.headingHighlight}</span>
            {data.headingPart2}
          </h2>
          
          <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
          
          <a 
            href={data.linkUrl} 
            className="text-gray-600 underline underline-offset-4 hover:text-[#2F327D] transition-colors font-medium"
          >
            {data.linkText}
          </a>
        </div>

        {/* ================= RIGHT SIDE: Video Player & Frames ================= */}
        {/* 
          Yahan 'relative' aur 'p-4' lagaya hai taake frames video ke bahar 
          thore se nazar aayein aur screen se bahar na jayein.
        */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center p-4 md:p-6 w-full max-w-lg mx-auto">
          
          {/* 1. Blue Square Frame (Top Left) */}
          {/* Positioned Absolute at top-left corner, with negative offset to overlap video */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 border-t-[6px] md:border-t-[8px] border-l-[6px] md:border-l-[8px] border-[#23BDEE] rounded-tl-2xl z-0"></div>
          
          {/* 2. Orange Square Frame (Bottom Right) */}
          {/* Positioned Absolute at bottom-right corner, with negative offset to overlap video */}
          <div className="absolute bottom-0 right-0 w-20 h-20 md:w-28 md:h-28 border-b-[6px] md:border-b-[8px] border-r-[6px] md:border-r-[8px] border-[#F48C06] rounded-br-2xl z-0"></div>

          {/* 3. Video Container */}
          {/* Z-10 lagaya hai taake yeh frames ke upar aaye. Rounded kiya hai taake clean lage. */}
          <div className="relative z-10 w-full h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] group bg-black">
            
            <video 
              ref={videoRef}
              src={Education} 
              className="w-full h-full object-cover" 
              loop
              onClick={handleVideoToggle}
            />
            
            {/* Dark Overlay & Play/Pause Button */}
            <div 
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
              <button 
                onClick={handleVideoToggle}
                className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-[#23BDEE] shadow-lg hover:scale-110 transition-transform duration-300"
              >
                {isPlaying ? <FaPause className="text-lg md:text-xl" /> : <FaPlay className="ml-1 text-lg md:text-xl" />}
              </button>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default PhysicalClassroom;