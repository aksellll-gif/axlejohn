import React from 'react';
import capsLms from '../assets/caps-lms.png';
import brgyDalayap from '../assets/brgy-dalayap.png';
import gymMngmnt from '../assets/gym-management.png';
import { motion } from "motion/react"
import { ExternalLinkIcon } from 'lucide-react';
import { Github } from 'lucide-react';
export default function Project() {
  return (
    <div id='project' className='max-h-fit bg-white items-center justify-center inter-normal py-40 lg-py:10'>
      <motion.div 
            initial={{ opacity: 0, y: 20 }}        
            whileInView={{ opacity: 1, y: 0 }}     
            viewport={{ once: true, amount: 0.3 }}
            transition={{
            duration: 1,
            ease: "easeOut",
              }} 
      className="text-center">
        <h1 className='font-extrabold text-4xl mb-1'>Projects</h1>

        <p className="relative font-normal text-md text-gray-700 mb-20 inline-block before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-400 before:left-[-60px] before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-400 after:right-[-60px] after:top-1/2">
          What I’ve Done
        </p>
      </motion.div>
      <div className='space-y-30 '>
        {/* first sec*/}
      <div className='flex flex-col lg:flex-row  max-w-5xl mx-auto items-center gap-8 px-4 sm:px-10 lg:px-0 py-8' >
    <motion.div 
        initial={{ x: -20, opacity: 0 }}  
        whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} >
    <img
          
        src={capsLms} alt="Caps-LMS"  className='w-full h-auto max-w-[480px] object-cover rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl' />
    </motion.div>
    <div className="flex flex-col items-center lg:items-start">
     <motion.h1 initial={{ x: 20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} className='text-2xl font-bold text-gray-800 mb-4 text-center lg:text-start '>LEARNING MANAGEMENT SYSTEM (LEVEL 1)</motion.h1>
     <div className='flex flex-row gap-2 '>
     <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 100,      
               damping: 12,         
               delay: 0.2,         
               }}
               className="flex flex-wrap gap-2 mb-4">
      {['Next JS', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'].map((tech) => (
        <p
          key={tech}
          className="bg-black rounded-full text-white font-light px-4 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-sm"
        >
          {tech}
        </p>
      ))}
    </motion.div>
     </div>
     <motion.p 
          initial={{ x: 20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} className='text-gray-600 leading-relaxed text-center lg:text-start max-w-lg mx-auto'>The system provides interactive learning materials, monitors student performance,
         and generates descriptive analytics on reading accuracy, pronunciation, and progress to support both students and educators.</motion.p>
 <div className="flex flex-row mx-5 space-x-3 my-3">
      <motion.div 
                 initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.4,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
   <a href="https://capstone-lms.vercel.app/"> <ExternalLinkIcon className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
  <motion.div    initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.6,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
  <a href="https://github.com/aksellll-gif/capstone-lms "><Github className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
</div>
    </div>
      </div>

      {/* second sec*/}
       <div className='flex flex-col lg:flex-row-reverse  max-w-5xl mx-auto items-center gap-8 px-4 sm:px-10 lg:px-0 py-8' >
    <motion.div className ="flex-shrink-0" 
         initial={{ x: 20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
         viewport={{ once: true, amount: 0.3 }}      
         transition={{
          duration: 1,      
          ease: "easeOut",
          
        }}>
    
    <img src={brgyDalayap} alt="brgDalayap"  className='w-full h-auto max-w-[480px] object-cover rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl' />
    </motion.div>
    <div className="flex flex-col items-center lg:items-start">
     <motion.h1 
        initial={{ x: -20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }}
        className='text-2xl font-bold text-gray-800 mb-4 text-center lg:text-start'>WEB-BASED BARANGAY RECORDS MANAGEMENT SYSTEM (BRMS)</motion.h1>
     <div className='flex flex-row gap-2 '>
     <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 100,      
               damping: 12,         
               delay: 0.2,         
               }}className="flex flex-wrap gap-2 mb-4">
      {['HTML', 'CSS', 'BootStrap', 'PHP', 'MySQL'].map((tech) => (
        <p
          key={tech}
          className="bg-black rounded-full text-white font-light px-4 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-sm"
        >
          {tech}
        </p>
      ))}
    </motion.div>
     </div>
     <motion.p 
         initial={{ x: -20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }}
        className='text-gray-600 leading-relaxed text-center lg:text-start max-w-lg mx-auto '>This system is designed to determine totals and track all documents and data related to individuals.
       The local government entity maintains Barangay records, which include a variety of data, such as information about Barangay officials,
       staff, zone leaders, households, residents, permits, blotters, and Barangay clearances.</motion.p>
     <div className="flex flex-row mx-5 space-x-3 my-3">
      <motion.div 
                 initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.4,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
   <a href=""> <ExternalLinkIcon className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
  <motion.div    initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.6,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
  <a href="https://github.com/aksellll-gif/brms-admin"><Github className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
</div>
    </div>
      </div>

      {/* thrid sec*/}
       <div className='flex flex-col lg:flex-row  max-w-5xl mx-auto items-center gap-8 px-4 sm:px-10 lg:px-0 py-8' >
   <motion.div  
        initial={{ x: -20, opacity: 0 }}  
        whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} className="flex-shrink-0  ">
    <img src={gymMngmnt} alt="GYM-MANAGEMENT"  className='w-full h-auto max-w-[480px] object-cover rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl' />
    </motion.div>
    <div className="flex flex-col items-center lg:items-start">
     <motion.h1  
        initial={{ x: 20, opacity: 0 }}  
        whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} className='text-2xl font-bold text-gray-800 mb-4 text-center lg:text-start'>INFORMATION SYSTEM FOR HERDOZA FITNESS CENTER</motion.h1>
     <div className='flex flex-row gap-2 '>
     <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 100,      
               damping: 12,         
               delay: 0.2,         
               }} className="flex flex-wrap gap-2 mb-4">
      {['HTML', 'CSS', 'JavaScript' ].map((tech) => (
        <p
          key={tech}
          className="bg-black rounded-full text-white font-light px-4 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-sm"
        >
          {tech}
        </p>
      ))}
    </motion.div>
     </div>
     <motion.p  
        initial={{ x: 20, opacity: 0 }}  
        whileInView={{ x: 0, opacity: 1 }}   
        viewport={{ once: true, amount: 0.3 }}      
        transition={{
          duration: 1,      
          ease: "easeOut",
          
        }}  className='text-gray-600 leading-relaxed lg:text-start max-w-lg mx-auto text-justify '>This system integrate various functionalities including facility information, facility rate,
       an exercise for beginners with YouTube video to help them execute the exercise, and information about the researchers. This information system will play a special role for the management to enhance the 
       customer's user experience and the fitness center experience.
     </motion.p>
     <div className="flex flex-row mx-5 space-x-3 my-3">
      <motion.div 
                 initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.4,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
   <a href="https://aksellll-gif.github.io/gym-management/"> <ExternalLinkIcon className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
  <motion.div    initial={{ opacity: 0, scale: 0.2 }}       
                 whileInView={{ opacity: 1, scale: 1 }}      
                 viewport={{ once: true, amount: 0.3 }}     
                 transition={{
                 type: "spring",     
                 stiffness: 1020,      
                 damping: 12,         
                 delay: 0.6,         
                 }}>
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-120 transition-transform duration-300">
  <a href="https://github.com/aksellll-gif/gym-management"><Github className="w-6 h-6 text-white" /></a>
  </div>
  </motion.div>
</div>
    </div>
      </div>
      </div>
    </div>
  );
}