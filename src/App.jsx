import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import Blog from './Pages/Blog/Blog'
import About from './Pages/About/About'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

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
            <div className="p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800">404</h1>
              <p className="mt-2 text-gray-600">Page not found</p>
            </div>
          }
        />
      </Routes>
   
   
   </>
  )
}

export default App
