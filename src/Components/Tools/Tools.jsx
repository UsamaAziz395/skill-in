import React from 'react';
import Toolimg from '../../assets/images/features/Toolimg.png';

function Tools() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto font-sans">
      
      {/* Grid Container: Mobile pe 1 column, Desktop pe 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div className="order-2 lg:order-1">
          <h1 className=" text-2xl md:text-3xl font-bold text-[#2F327D] leading-snug mb-6">
            <span className="text-[#F48C06]">Tools</span> For Teachers <br /> And Learners
          </h1>
          
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img 
            src={Toolimg} 
            alt="Toolsimg" 
            className="w-full max-w-md lg:max-w-full object-contain" 
          />
        </div>

      </div>
      
    </div>
  );
}

export default Tools;