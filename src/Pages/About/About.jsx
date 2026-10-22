import React from "react";
import { Link } from "react-router-dom";
import { 
  FaCheckCircle, 
  FaUsers, 
  FaGraduationCap, 
  FaGlobe, 
  FaLinkedin, 
  FaTwitter,
  FaArrowLeft
} from "react-icons/fa";

function About() {
  // Stats Data
  const stats = [
    { id: 1, icon: <FaUsers />, number: "250k+", text: "Active Students" },
    { id: 2, icon: <FaGraduationCap />, number: "10k+", text: "Expert Tutors" },
    { id: 3, icon: <FaGlobe />, number: "50+", text: "Countries Reached" },
    { id: 4, icon: <FaCheckCircle />, number: "99%", text: "Satisfaction Rate" },
  ];

  // Team Data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Emily White",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Lead Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    }
  ];

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
            We are <span className="text-[#F48C06]">Skilline</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We believe that education should be accessible to everyone, everywhere. 
            Our mission is to bridge the gap between teachers and students through innovative technology.
          </p>
        </div>
      </section>

      {/* ================= 2. OUR STORY / MISSION SECTION ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#23BDEE]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F48C06]/20 rounded-full z-0"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team Working" 
              className="relative z-10 w-full rounded-2xl shadow-lg object-cover h-[400px]"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-6">
              Our Story
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Skilline was founded in 2021 with a simple idea: to create a virtual classroom that feels as engaging as a physical one. We saw the challenges educators and students faced during the sudden shift to online learning and decided to build a solution that combines powerful management tools with interactive video conferencing.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Today, Skilline is used by thousands of institutions worldwide, helping them manage classes, track attendance, and conduct online assessments effortlessly.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#23BDEE] text-xl" />
                <span className="text-[#2F327D] font-medium">Interactive Virtual Classrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#23BDEE] text-xl" />
                <span className="text-[#2F327D] font-medium">Seamless Teacher-Student Communication</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#23BDEE] text-xl" />
                <span className="text-[#2F327D] font-medium">Advanced Assessment & Gradebook Tools</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. STATS SECTION ================= */}
      <section className="py-16 bg-[#2F327D]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center p-4">
                <div className="text-[#F48C06] text-4xl mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. TEAM SECTION ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
          Meet Our <span className="text-[#F48C06]">Team</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          The passionate people behind Skilline who work tirelessly to improve online education.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2F327D] hover:text-[#F48C06] transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2F327D] hover:text-[#F48C06] transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2F327D] mb-1">{member.name}</h3>
                <p className="text-[#F48C06] text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. CALL TO ACTION (CTA) ================= */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-[#FFF2E1] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F48C06]/20 rounded-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4 relative z-10">
            Ready to start learning?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto relative z-10">
            Join thousands of students and educators who are already using Skilline to make online education better.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-[#F48C06] text-white font-medium px-8 py-3 rounded-full hover:bg-[#d97a05] transition-colors shadow-lg relative z-10"
          >
            Join for Free
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;