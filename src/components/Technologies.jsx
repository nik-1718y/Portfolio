import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import {animate, motion} from 'framer-motion'
import { SiRedux } from "react-icons/si";

const Technologies = () => {
    const iconMotions = (duration)=>({
        initial : {y:-10},
        animate : {
            y : [10, -10],
            transition : {
                duration : duration,
                ease : "linear",
                repeat : Infinity,
                repeatType : "reverse"
            }
        }
    })
  return (
    <div id='skills' className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconMotions(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconMotions(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            variants={iconMotions(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3 className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div 
            variants={iconMotions(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
            variants={iconMotions(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            variants={iconMotions(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedux className='text-7xl text-purple-600'/>
            </motion.div>

            <motion.div 
            variants={iconMotions(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-300'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies