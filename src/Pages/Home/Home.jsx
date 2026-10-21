import React from 'react'
import Labels from '../../Components/Labels/Labels'
import Cloud from '../../Sections/Cloud/Cloud'
import Skillin from '../../Sections/Skillin/sKillin'
import Classroom from '../../Sections/Classroom/Classroom'
import Tools from '../../Components/Tools/Tools'
import Footer from '../../Sections/Footer/Footer'
import Integrations from '../../Components/Integration/Integration'
import Assessments from '../../Components/Assessment/Assessments'
import ClassManagement from '../../Components/Managment/Managment'
import Discussions from '../../Components/Discussions/Discussions'
import Testimonial from '../../Components/Testimonials/Testimonials'
import Resources from '../../Sections/Resources/Resources'
import Hero from '../../Sections/Hero/Hero'

function Home() {
  return (
    <div>

      <Hero />
      <Labels />
      <Cloud />
      <Skillin />
      <Classroom />
      <Tools />
      <Integrations />
      <Assessments />
      <ClassManagement />
      <Discussions />
      <Testimonial />
      <Resources />
      <Footer />
      
    </div>
  )
}

export default Home
