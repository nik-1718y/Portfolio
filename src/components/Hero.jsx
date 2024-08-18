import React from 'react'
import profile from '../assets/Profile.png'
// framer motion library
import { motion } from "framer-motion"



const Hero = () => {
    const container = (delay)=>({
        hidden : {x:-100, opacity: 0},
        visible : {
            x : 0,
            opacity : 1,
            transition : {duration : 0.5, delay : delay}
        }
    })
  return (
    <div id='hero' className='border-b border-neutral-900 pb-4 px-8 pt-20 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl pt-3'>Amar Gupta</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Front End Developer</motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>Hello! I'm Amar Gupta, currently pursuing a B.Tech in Computer Science and Engineering. I am passionate about frontend development and enjoy creating intuitive and responsive user interfaces. With experience in HTML, CSS, JavaScript, React, and other modern web technologies, I strive to build dynamic and user-friendly web applications.</motion.p>
            </div>
            </div>
            {/*  */}
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x: 100, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className='' src={profile} height={500} width={500} alt="Amar Gupta" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero