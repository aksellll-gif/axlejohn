  import React from 'react'
  import { useState } from 'react';
  import { TypeAnimation } from 'react-type-animation';
  import resumePic from '../assets/RESUME_PIC.png';
  import Facebook from '../assets/fb.png';
  import Instagram from '../assets/ig.png';
  import Git from '../assets/git.png';
  import LinkedIn from '../assets/linkedin.jpg';
  import GradPic1 from '../assets/grad-pic1.jpg';
  import GradPic2 from '../assets/grad-pic2.jpg';
  import { Button } from "@/components/ui/button";
  import { motion } from "motion/react"


  export default function Home() {

    return (
      
      <div id='home' className='scroll-mt-20 bg-white flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-30 px-6 lg:px-20 py-5 lg:py-25 lg:pb-80 dark:bg-gray-200 dark:text-black '>
      <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{
              duration: 1,  
              ease: "easeOut",
              delay: 0.5, 
            }} className='flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left'>
        <h1 className='text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold'>Hi, I'm</h1>
        <h1 className='text-4xl sm:text-5xl lg:text-4xl  xl:text-6xl font-bold'>Axle-John Jebulan</h1>
        <h2 className='text-xl sm:text-1xl lg:text-xl xl:text-2xl font-medium'>Aspiring Front-End Developer</h2>

  <TypeAnimation
    className="text-md lg:text-xl  font-small text-gray-800"
    sequence={[    
      1500, 
        "Let's build your vision together — get in touch!", 
        1000,
        '',
        1000,
        "Dedicated to building clean, user-friendly websites",
        1000,
        '',
        1000,
        "Ready to learn, grow, and innovate every day.",
        1000,
        '',
    ]}
    speed={60}
    repeat={Infinity}
  />
        <div className='flex justify-center items-center space-x-8 mt-4 '>
          <a href="https://www.facebook.com/profile.php?id=61578601443044">
        <img src={Facebook} alt="Facebook" className='h-11 w-11 hover:scale-120 transition-transform duration-300'/>
        </a>
        <a href="https://www.instagram.com/axe.soull/">
        <img src={Instagram} alt="Instagram" className='h-7 w-7 hover:scale-120 transition-transform duration-300' />
        </a>
        <a href="https://www.linkedin.com/in/axlejohn-jebulan-39a5a7377/">
        <img src={LinkedIn} alt="LinkedIn" className='h-8 w-8 hover:scale-120 transition-transform duration-300' />
        </a>
        <a href="https://github.com/aksellll-gif">
        <img src={Git} alt="Github"  className='h-8 w-14 hover:scale-120 transition-transform duration-300'/>
        </a>
        </div>
        <div className='flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 mt-6 items-center sm:items-start'>
      <a href="#project"><Button variant="outline" className= "h-12 w-40 font-bold text-md" >View Projects</Button></a>
      <a href="#contact"><Button className="h-12 w-40 font-medium text-md">Contact Me</Button></a>
        </div>
        </motion.div>
    
        <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}  
        animate={{ opacity: 1, scale: 1 }} 
       transition={{
       duration: 1, 
      ease: "easeOut", 
      delay: 0.3,  
    }} className="ml-10 pb-20 lg:pb-0 ">
      <img
        src={GradPic2}
        alt="Resume PIC"
        className="w-80 lg:w-80 xl:w-100  object-cover rounded-xl shadow-lg"
      />
    </motion.div>
    
      </div>
    )
  }
