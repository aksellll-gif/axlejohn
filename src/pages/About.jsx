import React from 'react'
import bg from '../assets/bg.jpg'
import laptopMockup from '../assets/laptop-mockup.png'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import Html from '../assets/html.png'
import Css from '../assets/css-3.png'
import Tailwind from '../assets/tailwind.png'
import ReactJs from '../assets/reactjs.png'
import Javascript from '../assets/javascript.png'
import Typescript from '../assets/typescript.png'
import Php from '../assets/php.png'
import Python from '../assets/python.png'
import Mysql from '../assets/mysql.png'
import Postgresql from '../assets/postgresql.png'
import Vercel from '../assets/vercel.png'
import Vscode from '../assets/vscode.png'
import Vite from '../assets/vite.png'
import Xampp from '../assets/xampp.png'
import Techgit from '../assets/tech-git.png'
import Npm from '../assets/npm.png'
import Github from '../assets/github.png'
import Figma from '../assets/figma.png'
import { Separator } from "@/components/ui/separator"
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLinkIcon } from 'lucide-react';
export default function About() {
  return (
    
    <div id = "about" className=' max-h-fit bg-white flex flex-col items-center pt-30 lg:pt-0  inter-normal'>
    <ScrollVelocity
    texts={[
    
      <div className="flex flex-wrap justify-center items-center space-x-4">
        <img src={Html} alt="HTML" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Javascript} alt="JavaScript" className="icon grayscale w-10 h-10 mx-2" />
            <img src={Css} alt="CSS" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Tailwind} alt="Tailwind CSS" className="icon grayscale w-10 h-10 mx-2" />
        <img src={ReactJs} alt="React" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Typescript} alt="TypeScript" className="icon grayscale w-10 h-10 mx-2" />
      </div>,


      <div className="flex flex-wrap justify-center items-center space-x-4">
        <img src={Php} alt="PHP" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Python} alt="Python" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Mysql} alt="MySQL" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Postgresql} alt="PostgreSQL" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Php} alt="PHP" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Python} alt="Python" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Mysql} alt="MySQL" className="icon grayscale w-10 h-10 mx-2" />
        <img src={Postgresql} alt="PostgreSQL" className="icon grayscale w-10 h-10 mx-2" />
        
      </div>,
    ]}
    velocity={200} 
    className="custom-scroll-text flex flex-col justify-center items-center space-y-4"
/>
      <motion.div 
            initial={{ opacity: 0, y: 100 }}        
            whileInView={{ opacity: 1, y: 0 }}     
            viewport={{ once: true, amount: 0.3 }}
            transition={{
            duration: 1,
            ease: "easeOut",
              }} >
     <h1 className='font-extrabold text-4xl text-center pt-30 '>About Me</h1>
  <p className="relative text-center font-normal text-md text-gray-700 mb-20  before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-400 before:left-[-10px] before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-400 after:right-[-10px] after:top-1/2 ">
  Who I Am
</p>
</motion.div>
 <div className='flex flex-col-reverse lg:flex-row-reverse  gap-10 max-w-6xl mt-5 '>
    <div className='flex flex-col justify-center text-center lg:text-left space-y-6 max-w-lg mx-auto lg:mx-0 montserrat-normal '>
        <motion.p  
         initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,  
            ease: "easeOut", 
            delay: 0.3, 
          }} className='leading-relaxed text-sm sm:text-base px-8 lg:px-0 text-gray-800'>Hello! I’m Axle-John Jebulan an aspiring front-end developer with a passion for curiosity, creativity, and building meaningful things on the web.
             I enjoy crafting responsive interfaces using React, Tailwind CSS, and JavaScript. I believe in writing clean, maintainable code and constantly improving through feedback. My journey is just beginning,
             but I’m excited to grow, connect with other developers, and create valuable digital experiences.</motion.p>
              <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 100,      
               damping: 12,         
               delay: 0.2,         
               }}>          
               <a href="./public/Axle-John_DG_Jebulan_Resume.pdf">
               <Button className="w-fit mx-auto lg:mx-0 transform transition-transform duration-300 hover:scale-110">Download CV</Button>
               </a>
               </motion.div>
               </div>
               <motion.div  
                initial={{ x: -50, opacity: 0 }}  
               whileInView={{ x: 0, opacity: 1 }}   
                viewport={{ once: true, amount: 0.3 }}      
               transition={{
               duration: 1,      
               ease: "easeOut",
          
        }}>
      <img
        src={laptopMockup}
        alt="LaptopMockUp"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[560px] h-auto drop-shadow-[15px_15px_8px_black] mb-5 lg:mb-0 transform transition-transform duration-300 hover:scale-110"
       
      />
      </motion.div>
      </div>
    <motion.div 
            initial={{ opacity: 0, y: 100 }}        
            whileInView={{ opacity: 1, y: 0 }}     
            viewport={{ once: true, amount: 0.3 }}
            transition={{
            duration: 1,
            ease: "easeOut",
              }}>
     <h1 className='font-extrabold text-4xl pt-50 '>Skills</h1>
     <p className="relative font-normal text-md text-gray-700 mb-20 before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-400 before:left-[-60px] before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-400 after:right-[-60px] after:top-1/2">
  Tech Stack
</p>
</motion.div>
     <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40'>
      <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,  
            ease: "easeOut" }}> 
      <Card className='w-full max-w-sm min-h-100 shadow-[0_10px_10px_rgba(0,0,0,0.35)] '>
  <CardHeader>
    <CardTitle className='text-center mb-3'>Front End Developer</CardTitle>
    <Separator />
  </CardHeader>
  <CardContent className='flex flex-wrap gap-6 justify-center montserrat-normal text-sm'>
  <div className='flex flex-col items-center'>
    <img src={Html} alt="HTML"  className="max-w-16 max-h-16 mb-2" />
    <p>HTML</p>
    </div>
    <div className='flex flex-col items-center'>
    <img src={Css} alt="CSS"  className="max-w-16 max-h-16 mb-2"/>
    <p>CSS</p>
    </div>
      <div className='flex flex-col items-center'>
    <img src={Tailwind} alt="TAILWIND"  className="max-w-16 max-h-16 mb-2"/>
       <p>Tailwind</p>
       </div>       
          <div className='flex flex-col items-center'>
    <img src={Javascript} alt="JAVASCRIPT" className="max-w-16 max-h-16 mb-2" />
       <p>JavaScript</p>
       </div>
       <div className='flex flex-col items-center'>
    <img src={ReactJs} alt="ReactJs" className="max-w-16 max-h-16 mb-2" />
       <p>React</p>
       </div>
       <div className='flex flex-col items-center'>
    <img src={Typescript} alt="TYPESCIRPT" className="max-w-16 max-h-16 mb-2" />
          <p>TypeScript</p>
          </div>
  </CardContent> 
</Card>
</motion.div>
 <motion.div initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,  
            ease: "easeOut",
            delay: 0.2, 
          }}>
 <Card className='w-full max-w-sm min-h-100 shadow-[0_10px_10px_rgba(0,0,0,0.35)]'>
  <CardHeader>
    <CardTitle className='text-center mb-3'>Back End Developer</CardTitle>
    <Separator />
  </CardHeader>
  <CardContent className='flex flex-wrap gap-6 justify-center montserrat-normal text-sm'>
  <div className='flex flex-col items-center'>
    <img src={Php} alt="PHP"  className="max-w-16 max-h-16 mb-2" />
    <p>PHP</p>
    </div>
    <div className='flex flex-col items-center'>
    <img src={Python} alt="PYTHON"  className="max-w-16 max-h-16 mb-2"/>
    <p>Python</p>
    </div>
      <div className='flex flex-col items-center'>
    <img src={Mysql} alt="MYSQL"  className="max-w-16 max-h-16 mb-2"/>
       <p>MySql</p>
       </div>
       <div className='flex flex-col items-center'>
    <img src={Postgresql} alt="POSTGRESQL" className="max-w-16 max-h-16 mb-2" />
       <p>PostgreSql</p>
       </div>
  </CardContent> 
</Card>
</motion.div>

 <motion.div initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{
            duration: 1,  
            ease: "easeOut", 
            delay: 0.3, 
          }}>

 <Card className='w-full max-w-sm min-h-100 shadow-[0_10px_10px_rgba(0,0,0,0.35)]'>
  <CardHeader>
    <CardTitle className='text-center mb-3'>Other Tools</CardTitle>
     <Separator />
  </CardHeader>
  <CardContent className='flex flex-wrap gap-6 justify-center montserrat-normal text-sm'>
    <div className='flex flex-col items-center '>
    <img src={Vscode} alt="VSCODE"  className="max-w-14 max-h-14 mb-2"/>
    <p>VsCode</p>
    </div>
  <div className='flex flex-col items-center'>
    <img src={Vercel} alt="VERCEL"  className="max-w-14 max-h-14 mb-2"/>
    <p>Vercel</p>
    </div>
      <div className='flex flex-col items-center'>
    <img src={Vite} alt="VITE" className="max-w-14 max-h-14 mb-2"/>
       <p>Vite</p>
       </div>
       <div className='flex flex-col items-center'>
    <img src={Xampp} alt="XAMPP" className="max-w-14 max-h-14 mb-2" />
       <p>Xampp</p>
       </div>
       <div className='flex flex-col items-center'>
    <img src={Npm} alt="NPM" className="max-w-14 max-h-14 mb-2" />
          <p>Npm</p>
          </div>
          <div className='flex flex-col items-center'>
    <img src={Techgit} alt="GIT" className="max-w-14 max-h-14 mb-2" />
          <p>Git</p>
          </div>
          <div className='flex flex-col items-center'>
    <img src={Github} alt="GITHUB" className="max-w-14 max-h-14 mb-2" />
          <p>Github</p>
          </div>
          <div className='flex flex-col items-center'>
    <img src={Figma} alt="FIGMA" className="max-w-14 max-h-14 mb-2" />
          <p>Figma</p>
          </div>
  </CardContent> 
</Card>
</motion.div>
</div>

    </  div>

  )
}
