import React from "react";
import Skillindata from '../../data/Skillindata'



function WhatIsSkilline() {


  return (
    <div className="py-16 px-4 max-w-6xl mx-auto text-center font-sans">
      
      {/* Heading Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#2F327D]">What is</span>{" "}
        <span className="text-[#F48C06]">Skilline?</span>
      </h2>
      <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
        Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {Skillindata.map((card) => (
          <div 
            key={card.id} 
            className="relative group overflow-hidden rounded-3xl h-[200px] md:h-[250px] shadow-lg"
          >
            {/* Background Image */}
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay (Taake text clear nazar aaye) */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6">
              
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6 tracking-wide">
                {card.title}
              </h3>

              <button 
                className={`px-8 py-3 rounded-full font-medium text-sm md:text-base ${card.buttonStyle}`}
              >
                {card.buttonText}
              </button>

            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default WhatIsSkilline;