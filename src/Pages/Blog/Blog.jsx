import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaUser, FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Blog() {
  // Blog Data Array
  const blogData = [
    {
      id: 1,
      title: "5 Tips for Effective Online Learning",
      excerpt: "Discover how to stay focused and productive while studying from home. From setting up a dedicated workspace to managing your time effectively.",
      author: "Sarah Jenkins",
      date: "Oct 15, 2026",
      category: "Learning Tips",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "The Future of EdTech in 2027",
      excerpt: "Artificial Intelligence and Virtual Reality are changing the way we learn. Explore the upcoming trends in educational technology.",
      author: "David Chen",
      date: "Oct 12, 2026",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "How to Engage Students in a Virtual Classroom",
      excerpt: "Teachers share their best strategies for keeping students engaged and interactive during live Zoom classes.",
      author: "Emily White",
      date: "Oct 08, 2026",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Mastering Time Management as a Student",
      excerpt: "Balancing studies, assignments, and personal life can be tough. Here are proven methods to manage your time better.",
      author: "Michael Brown",
      date: "Oct 01, 2026",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "The Rise of Hybrid Learning Models",
      excerpt: "Why schools are adopting a mix of online and offline learning to provide the best of both worlds.",
      author: "Jessica Alba",
      date: "Sep 25, 2026",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Top 10 Tools for Interactive Quizzes",
      excerpt: "Make your assessments fun and engaging with these amazing quiz tools that integrate perfectly with Skilline.",
      author: "Alex Johnson",
      date: "Sep 20, 2026",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
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

        <div className="max-w-3xl mx-auto mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2F327D] mb-4">
            Our <span className="text-[#F48C06]">Blog</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Insights, tips, and the latest news from the world of online education.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#F48C06] focus:ring-2 focus:ring-[#F48C06]/20 outline-none shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID SECTION ================= */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogData.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#F48C06] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Meta Info */}
                <div className="flex items-center text-xs text-gray-400 mb-3 gap-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2F327D] mb-3 leading-snug group-hover:text-[#F48C06] transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-flex items-center gap-2 text-[#F48C06] font-medium text-sm hover:gap-3 transition-all mt-auto"
                >
                  Read More <FaArrowRight />
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* Pagination (Static) */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="w-10 h-10 rounded-full bg-[#F48C06] text-white font-bold shadow-md">1</button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-300 hover:bg-gray-100">2</button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-300 hover:bg-gray-100">3</button>
        </div>

      </section>
    </div>
  );
}

export default Blog;