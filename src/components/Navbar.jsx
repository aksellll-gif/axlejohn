import React,{useState} from 'react'
import bgLogo from '../assets/bg-logo.png'
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
 

  return (
    <nav className="sticky top-0 bg-white text-black drop-shadow-md p-4 z-50 ">
      <div className="max-w-7xl mx-auto h-10 flex-wrap flex justify-between items-center">
    {/* <img src="../public/AJ_LOGO.png" alt="LOGO" className="h-16 " /> */}
    <a href="#home">
<img src={bgLogo} alt="LOGO" className="h-8 " /></a>
    <div className='lg:hidden'>
      <button  onClick={() => setisOpen(!isOpen)}  className="text-xl focus:outline-none">
         {isOpen ? '✕' : '☰'}
      </button>
    </div>
        <div className={`flex flex-col text-center lg:space-x-6 text-lg font-sans font-bold ${isOpen ? 'block' : 'hidden'} lg:block absolute lg:static bg-white left-0 top-16 w-full lg:w-auto p-4 lg:p-0 cursor-pointer ` }>
         <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={100}
            className="py-2 relative inline-block hover:text-sky-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
            activeClass="text-sky-300"  onClick={() => setisOpen(false)}>Home</Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            className="py-2 relative inline-block hover:text-sky-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
            activeClass="text-sky-300"onClick={() => setisOpen(false)}>About</Link>
           
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={100}
            className="py-2 relative inline-block hover:text-sky-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
            activeClass="text-sky-300"  onClick={() => setisOpen(false)}>Projects</Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={52}
            duration={100}
            className="py-2 relative inline-block hover:text-sky-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
            activeClass="text-sky-300"  onClick={() => setisOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
