import React from "react";
import Googledrive from '../../assets/images/integrations/Googledrive.png';
import Dropeox from '../../assets/images/integrations/Dropeox.png';
import Onedrive from '../../assets/images/integrations/Onedrive.png';
import Team from '../../assets/images/integrations/Team.png';

function Integrations() {
 
  const integrationIcons = [
    { id: 1, img: Onedrive, alt: "OneDrive" },
    { id: 2, img: Dropeox, alt: "Dropbox" },
    { id: 3, img: Googledrive, alt: "Google Drive" },
    { id: 4, img: Team, alt: "Microsoft Teams" },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto font-sans">
      
      {/* Main Wrapper Box */}
      <div className="bg-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Icons/Images Grid */}
        <div className="grid grid-cols-2 gap-10 md:gap-14 w-full md:w-1/2 justify-items-center items-center">
          {integrationIcons.map((item) => (
            <div 
              key={item.id} 
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.alt} 
                className="w-24 md:w-28 object-contain" 
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          
          {/* Top Tagline with Lines */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gray-300"></span>
            <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
              Integrations
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2F327D] leading-snug mb-4">
            200+ educational tools and platform <span className="text-[#F48C06]">integrations</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
          </p>

          {/* Button */}
          <button className="px-6 py-2 border border-[#F48C06] text-[#F48C06] rounded-full font-medium hover:bg-[#F48C06] hover:text-white transition-colors duration-300">
            See All Integrations
          </button>
        </div>

      </div>
      
    </section>
  );
}

export default Integrations;