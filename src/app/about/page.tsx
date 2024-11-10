import React from 'react'

import hijab from './../../public/hijab.jpg'
import Image from 'next/image'



export default function about() {
  return (
    <div className='.about'>

<div id='about_1' >
    <Image src={hijab} alt="" width={400} height={400} className='border rounded-full'/>
  </div>

    <div id='about'>
    As a passionate Master's in Economics graduate, I thrive  
at the intersection of data and innovation. Currently, I'm 
diving deep into the world of technology as I pursue a
Certified Cloud Applied Generative AI Engineer and Developer
course, where I am honing my skills to transform complex 
economic models into scalable, cloud-based solutions.With a 
strong analytical mindset and a flair for creative problem-solving, I
  leverage my economic expertise to drive impactful AI-driven strategies. 
    </div>

<button className='btn'><a href="/">Home</a></button>
  </div>
  )
}
