import React from "react";
import Resourcesdata from '../../data/Resourcesdata'

function LatestNews() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto font-sans">
      
      {/* ================= HEADING SECTION ================= */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2F327D] mb-3">
          {Resourcesdata.heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          {Resourcesdata.subHeading}
        </p>
      </div>

      {/* ================= GRID LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* --- LEFT SIDE: Featured News --- */}
        <div className="flex flex-col group cursor-pointer">
          {/* Featured Image */}
          <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden mb-6 relative">
            <img 
              src={Resourcesdata.featuredNews.image} 
              alt="Featured News" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Featured Content */}
          <div>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 ${Resourcesdata.featuredNews.badgeColor}`}>
              {Resourcesdata.featuredNews.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#2F327D] leading-snug mb-3 group-hover:text-[#F48C06] transition-colors">
              {Resourcesdata.featuredNews.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
              {Resourcesdata.featuredNews.description}
            </p>
            <a 
              href={Resourcesdata.featuredNews.linkUrl} 
              className="text-gray-400 text-sm underline underline-offset-4 hover:text-[#F48C06] transition-colors"
            >
              {Resourcesdata.featuredNews.linkText}
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: Side News List --- */}
        <div className="flex flex-col gap-6 md:gap-8">
          {Resourcesdata.sideNews.map((news) => (
            <div 
              key={news.id} 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 group cursor-pointer"
            >
              {/* Side Image with Badge overlay */}
              <div className="relative w-full sm:w-[220px] h-[150px] shrink-0 rounded-xl overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Floating Badge on Image */}
                <span className={`absolute bottom-2 right-2 px-3 py-1 rounded-md text-[10px] font-bold shadow-md ${news.badgeColor}`}>
                  {news.badge}
                </span>
              </div>

              {/* Side Text Content */}
              <div className="flex flex-col justify-center">
                <h4 className="text-[#2F327D] font-bold text-sm md:text-base leading-snug mb-2 group-hover:text-[#F48C06] transition-colors">
                  {news.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestNews;