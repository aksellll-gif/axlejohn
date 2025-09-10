import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import phoneCall from '../assets/phone-call.png';
import email from '../assets/email.png';
import location from '../assets/location.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";


export default function Contact() {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_imt7w22', 'template_j0cpkra', form.current, {
        publicKey: '7PXE829iK9q9SxEaD',
      })
      .then(() => {
      toast.success("Message Sent", {
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      form.current?.reset();
    })
    .catch(() => {
      toast.error("Oops! Something went wrong.", {
        description: "Your message could not be sent. Please try again.",
      });
    });
};

  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center bg-white px-4 inter-normal">
      <motion.div 
            initial={{ opacity: 0, y: 50 }}        
            whileInView={{ opacity: 1, y: 0 }}     
            viewport={{ once: true, amount: 0.3 }}
            transition={{
            duration: 1,
            ease: "easeOut",
              }}  >
      <h1 className='font-extrabold text-4xl text-center'>Contact</h1>
      <p className="relative text-center font-normal text-md text-gray-700 mb-5 before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-400 before:left-[-60px] before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-400 after:right-[-60px] after:top-1/2">
        Get in Touch
      </p>
      </motion.div>
     <motion.h1 initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1,
         ease: "easeOut",
          delay: 0.5, }}
           className='font-normal text-xl text-center mb-10'>Let’s discuss how we can work together and grow</motion.h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-12 w-full max-w-5xl mb-10 text-center lg:text-left">
        
    
        <div className="w-full lg:w-1/2 mt-5 max-w-md mx-auto px-4 lg:px-0">
        <motion.div
        initial={{ x: -20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
         viewport={{ once: true, amount: 0.3 }}      
         transition={{
          duration: 1,      
          ease: "easeOut",
          
        }}>
          <h1 className="text-xl sm:text-2xl font-bold">Contact Information</h1>

          <div className="grid gap-4 justify-center lg:justify-start pl-8 lg:pl-0 mt-5">

  <div className="grid grid-cols-[2.5rem_1fr] items-center text-sm sm:text-base lg:text-lg">
    <img src={phoneCall} alt="Phone" className="w-6 h-6 mx-auto" />
    <p className="text-left">+639458874613</p>
  </div>

 
  <div className="grid grid-cols-[2.5rem_1fr] items-center text-sm sm:text-base lg:text-lg">
    <img src={email} alt="Email" className="w-6 h-6 mx-auto" />
    <p className="text-left">jebulanaxlejohn29@gmail.com</p>
  </div>

 
  <div className="grid grid-cols-[2.5rem_1fr] items-center text-sm sm:text-base lg:text-lg">
    <img src={location} alt="Location" className="w-6 h-6 mx-auto" />
    <p className="text-left">Angat, Bulacan, Philippines</p>
  </div>
</div>
</motion.div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-8">
            <motion.div  
              initial={{ opacity: 0, scale: 0.2 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 1020,      
               damping: 12,         
               delay: 0.4,         
               }}
               >
            <a href="https://www.facebook.com/profile.php?id=61578601443044" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#1877F2] h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 1020,      
               damping: 12,         
               delay: 0.6,         
               }}>
            <a href="https://www.instagram.com/axe.soull/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E4405F] h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.2 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 1020,      
               damping: 12,         
               delay: 0.8,         
               }}>
            <a href="https://www.linkedin.com/in/axlejohn-jebulan-39a5a7377/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0A66C2] h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}       
               whileInView={{ opacity: 1, scale: 1 }}      
               viewport={{ once: true, amount: 0.3 }}     
               transition={{
               type: "spring",     
               stiffness: 1020,      
               damping: 12,         
               delay: 1,         
               }}>
            <a href="https://github.com/aksellll-gif" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            </motion.div>
          </div>
       <motion.div
        initial={{ x: -20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
         viewport={{ once: true, amount: 0.3 }}      
         transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} 
          className='space-y-2 text-center lg:text-left mt-10'>
          <h1 className='font-bold text-md '>Turning Conversations Into Creations</h1>
          <p className='text-sm font-light'>It all starts with a message. A simple idea can grow into something impactful and lasting. Let’s take the first step and build something exceptional together.</p>
        </motion.div>
        </div>

        {/* Contact Form */}
        <form  ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 max-w-md mx-auto px-4 lg:px-0">
          <motion.div
          initial={{ x: 20, opacity: 0 }}  
         whileInView={{ x: 0, opacity: 1 }}   
         viewport={{ once: true, amount: 0.3 }}      
         transition={{
          duration: 1,      
          ease: "easeOut",
          
        }} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                 name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="h-12 w-full shadow-md rounded-md hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                 name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="h-12 w-full shadow-md rounded-md hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Your Message</Label>
              <textarea
                id="message"
                 name="message"
                placeholder="Write your message here"
                required
                className="resize-none p-3 border rounded shadow-md h-32 w-full hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit" value="Send"
              className="w-40 h-12 font-medium text-md mx-auto shadow-md hover:scale-105"
            >
              Send Message
            </Button>            
          </motion.div>
        </form>
      </div>
    </div>
  );
}