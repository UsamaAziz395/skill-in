// import { useState } from 'react'
// import './App.css'
// import { Routes, Route } from "react-router-dom";
// import Home from './Pages/Home/Home'
// import Careers from './Pages/Careers/Careers'
// import Blog from './Pages/Blog/Blog'
// import About from './Pages/About/About'
// import SignIn from './Pages/SignIn/SignIn'
// import SignUp from './Pages/SignUp/SignUp';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>

//    <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* 404 fallback */}
//         <Route
//           path="*"
//           element={
//             <div className="p-8 text-center">
//               <h1 className="text-4xl font-bold text-gray-800">404</h1>
//               <p className="mt-2 text-gray-600">Page not found</p>
//             </div>
//           }
//         />
//       </Routes>
   
   
//    </>
//   )
// }

// export default App

import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

// 1. Direct imports ki jagah Lazy imports use karein
const Home = lazy(() => import('./Pages/Home/Home'));
const Careers = lazy(() => import('./Pages/Careers/Careers'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const About = lazy(() => import('./Pages/About/About'));
const SignIn = lazy(() => import('./Pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'));

function App() {
  return (
    <>
      {/* 2. Suspense wrap karein aur Fallback (Loading UI) dein */}
      <Suspense 
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-12 h-12 border-4 border-[#F48C06] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-xl text-gray-600">Page not found</p>
                <a href="/" className="mt-6 text-[#F48C06] hover:underline">Go back to Home</a>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

