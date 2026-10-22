import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaChevronDown, 
  FaChevronUp, 
  FaHeart, 
  FaGlobe, 
  FaLaptopHouse, 
  FaGraduationCap,
  FaArrowLeft 
} from "react-icons/fa";

function Career() {
  // Benefits Data
  const benefits = [
    { id: 1, icon: <FaGlobe />, title: "Remote First", desc: "Work from anywhere in the world. We believe in flexibility." },
    { id: 2, icon: <FaHeart />, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
    { id: 3, icon: <FaLaptopHouse />, title: "Home Office Setup", desc: "Get a stipend to build your perfect home office." },
    { id: 4, icon: <FaGraduationCap />, title: "Learning Budget", desc: "Annual budget for courses, books, and conferences." },
  ];

  // Jobs Data
  const jobOpenings = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "We are looking for an expert React developer to lead our frontend team and build beautiful, performant user interfaces for our virtual classroom platform.",
    },
    {
      id: 2,
      role: "UX/UI Designer",
      department: "Design",
      location: "London, UK (Hybrid)",
      type: "Full-Time",
      description: "Shape the future of online education. You will be responsible for creating intuitive and engaging experiences for teachers and students.",
    },
    {
      id: 3,
      role: "Customer Success Manager",
      department: "Operations",
      location: "New York, USA",
      type: "Full-Time",
      description: "Help our partner schools and universities get the most out of Skilline. You will be the bridge between our product and our users.",
    },
    {
      id: 4,
      role: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Part-Time",
      description: "Create compelling blogs, case studies, and social media content to attract educators and students to our platform.",
    }
  ];

  // State for Accordion (which job is open)
  const [openJobId, setOpenJobId] = useState(null);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="font-sans bg-white">
      
      {/* ================= 1. HERO SECTION ================= */}
      {/* Relative position diya hai taake Back button iske upar set ho sake */}
      <section className="relative bg-[#FFF2E1] py-20 px-4 text-center">
        
        {/* Back to Home Button (Top Left) */}
        <div className="absolute top-6 left-4 md:top-8 md:left-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#2F327D] font-medium hover:text-[#F48C06] transition-colors bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-transparent hover:border-[#F48C06]/30"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F327D] mb-6">
            Join the <span className="text-[#F48C06]">Mission</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a team of dreamers, builders, and educators. Help us shape the future of online learning and make education accessible to everyone.
          </p>
        </div>
      </section>

      {/* ================= 2. WHY JOIN US SECTION ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We take care of our team so they can take care of our users. Here are some of the perks of being a Skilliner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-[#F48C06]/10 text-[#F48C06] rounded-full flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2F327D] mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. OPEN POSITIONS SECTION ================= */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
              Open Positions
            </h2>
            <p className="text-gray-500">
              Find your next role and grow with us.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all"
              >
                {/* Job Header (Clickable) */}
                <button 
                  onClick={() => toggleJob(job.id)}
                  className="w-full flex flex-col md:flex-row justify-between items-start md:items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="mb-4 md:mb-0">
                    <span className="inline-block bg-[#23BDEE]/10 text-[#23BDEE] text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-bold text-[#2F327D]">{job.role}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                      <span className="flex items-center gap-1"><FaClock /> {job.type}</span>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#2F327D]">
                    {openJobId === job.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {/* Job Details (Accordion Content) */}
                {openJobId === job.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    <Link 
                      to={`/apply/${job.id}`} 
                      className="inline-block bg-[#F48C06] text-white font-medium px-6 py-2 rounded-full hover:bg-[#d97a05] transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA SECTION ================= */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#2F327D] mb-4">Don't see a perfect fit?</h2>
        <p className="text-gray-500 mb-6">Send us your resume anyway. We are always looking for great talent.</p>
        <a 
          href="mailto:careers@skilline.com" 
          className="inline-flex items-center gap-2 text-[#F48C06] font-medium border border-[#F48C06] px-6 py-2 rounded-full hover:bg-[#F48C06] hover:text-white transition-colors"
        >
          Contact Us <FaBriefcase />
        </a>
      </section>

    </div>
  );
}

export default Career;