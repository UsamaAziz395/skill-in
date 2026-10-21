import React from "react";
import { FaFileAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import featuresData from '../../data/Clouddata'

function AllInOne() {


  return (
    <div className="py-20 px-8 max-w-6xl mx-auto text-center font-sans">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#2F327D]">All-In-One</span>{" "}
        <span className="text-[#F48C06]">Cloud Software.</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {featuresData.map((feature) => {
          
          // Icon component ko capitalize variable mein assign kiya
          const IconComponent = feature.icon; 

          return (
            <div
              key={feature.id}
              className="bg-white p-8 pt-14 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Floating Icon Circle */}
              <div
                className={`absolute -top-7 w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-md ${feature.bgColor}`}
              >
                <IconComponent />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#2F327D] mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default AllInOne;