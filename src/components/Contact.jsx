import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div id='contact' className='pb-20 px-2 sm:px-4 md:px-8 lg:px-16'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>
        Get in Touch
      </motion.h1>
      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-32 lg:px-20">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className='w-full md:w-1/2 sm:mb-10 md:mb-0 xl:ml-20'>
          <div className='text-white mb-6'>
            <div className='flex items-center'>
              <FaUser className='text-2xl'/>
              <div className='ml-5 text-left'>
                <h2 className='text-lg font-semibold'>Name</h2>
                <span>Nikhil kumar yadav</span>
              </div>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <FaLocationDot className='text-2xl'/>
            <div className='ml-5 text-left'>
              <h2 className='text-lg font-semibold'>Address</h2>
              <span>Maharajganj, Uttar Pradesh</span>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <MdEmail className='text-2xl'/>
            <div className="ml-5 text-left">
              <h2 className='text-lg font-semibold'>Email</h2>
              <span><a href="mailto:nikhilyadavmrj470@gmail.com" className='text-blue-500 underline'>nikhilyadavmrj470@gmail.com</a></span>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <IoCall className='text-2xl'/>
            <div className='ml-5 text-left'>
              <h2 className='text-lg font-semibold'>Contact</h2>
              <span>+91 9918332990</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className='w-full md:w-1/2'>
          <div className='text-white mb-6'>
            <div className='flex items-center'>
              <FaLinkedin className='text-2xl'/>
              <div className='ml-5 text-left'>
                <h2 className='text-lg font-semibold'>LinkedIn</h2>
                <span><a href="https://www.linkedin.com/in/nikhil-kumar-yadav-22b916290/" target='blank' className='text-blue-500 underline'>Visit my LinkedIn Profile</a></span>
              </div>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <FaGithub className='text-2xl'/>
            <div className='ml-5 text-left'>
              <h2 className='text-lg font-semibold'>GitHub</h2>
              <span><a href="https://github.com/nik-1718y" target='blank' className='text-blue-500 underline'>Visit my GitHub Profile</a></span>
            </div>
          </div>

          <div className='flex items-center mb-6'>
            <GrResume className='text-2xl'/>
            <div className='ml-5 text-left'>
              <h2 className='text-lg font-semibold'>Resume</h2>
              <span><a 
              href="/AmarGuptaResume.pdf"
              target="_blank"
              className='text-blue-500 underline'>My Resume</a></span>
            </div>
          </div>

          <div className='flex items-center mb-6'>
            <SiLeetcode className='text-2xl'/>
            <div className='ml-5 text-left'>
              <h2 className='text-lg font-semibold'>LeetCode</h2>
              <span><a href="https://leetcode.com/u/N_17k/" target='blank' className='text-blue-500 underline'>Visit my LeetCode Profile</a></span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact