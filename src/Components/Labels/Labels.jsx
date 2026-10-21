import React from 'react'
import Google from '../../assets/images/Labels/Google.png'
import Netflix from '../../assets/images/Labels/Netflix.png'
import Airbnb from '../../assets/images/Labels/Airbnb.png'
import Amazon from '../../assets/images/Labels/Amazon.png'
import facebook from '../../assets/images/Labels/facebook.png'
import Grab from '../../assets/images/Labels/Grab.png'

function Labels() {
  return (
    <div className='text-center py-3'>

      <h1 className='text-gray-600 font-medium'>Trusted by 5,000+ Companies Worldwide</h1>

      <div className='flex justify-center items-center flex-wrap mt-5 gap-10'>
        <img src={Google}    alt="Googleimg"    className='h-8 object-contain' />
        <img src={Netflix}   alt="Netfliximg"   className='h-8 object-contain' />
        <img src={Airbnb}    alt="Airbnbimg"    className='h-8 object-contain' />
        <img src={Amazon}    alt="Amazonimg"    className='h-8 object-contain' />
        <img src={facebook}  alt="facebookimg"  className='h-8 object-contain' />
        <img src={Grab}      alt="Grabimg"      className='h-8 object-contain' />
      </div>

    </div>
  )
}

export default Labels