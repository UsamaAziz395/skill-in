import React from "react";
// import Logo from '../assets/images/logo-white.png'; // Apna logo path yahan dalein
import footerData from "../../data/Footerdata";

function Footer() {
 
  return (
    <footer className="bg-[#252641] text-white pt-16 pb-8 font-sans">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* Logo & Tagline Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 w-full relative">
          
          {/* Logo (Aap yahan apni image use karein) */}
          <div className="flex items-center gap-2">
            {/* Placeholder for Logo Image */}
            <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center text-xl font-bold">
              S
            </div>
            <span className="text-2xl font-bold tracking-wide">Skilline</span>
          </div>

          {/* Divider Line (Desktop Only) */}
          <div className="hidden md:block w-px h-12 bg-gray-500"></div>

          {/* Tagline */}
          <p className="text-gray-300 text-sm md:text-base max-w-[150px] text-center md:text-left leading-tight">
            {footerData.brand.tagline}
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-lg flex flex-col items-center mb-12">
          <h3 className="text-gray-300 mb-4 text-base md:text-lg">
            {footerData.newsletter.heading}
          </h3>
          
          <form className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">
            <input
              type="email"
              placeholder={footerData.newsletter.placeholder}
              className="w-full px-6 py-3 bg-transparent border border-gray-500 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white sm:rounded-r-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#545AE8] hover:bg-[#4348c4] transition-colors rounded-full font-medium sm:rounded-l-none"
            >
              {footerData.newsletter.buttonText}
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400 mb-6">
          {footerData.links.map((link, index) => (
            <React.Fragment key={index}>
              <a href={link.path} className="hover:text-white transition-colors">
                {link.name}
              </a>
              {/* Divider pipe (|) except for last item */}
              {index !== footerData.links.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-gray-400 text-center">
          {footerData.copyright}
        </p>

      </div>
    </footer>
  );
}

export default Footer;