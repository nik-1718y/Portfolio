import React from 'react'
import about from '../assets/About.png'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>About</motion.h1>
        <div className='flex flex-wrap'>
            {/* lg:p-8 */}
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 '>
                <div className='flex items-center justify-center lg:py-4'>
                    <img className='rounded-2xl' height={250} width={250} src={about} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='pb-4 w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl'>Hello! I'm Amar Gupta, currently pursuing a B.Tech in Computer Science and Engineering with a passion for full-stack development. I build dynamic, responsive web applications using HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I'm also skilled in state management with Redux Toolkit and proficient in Java. <br />
                        I am dedicated to my work and eager to take on new challenges with a positive attitude. My strengths include a strong willingness to learn and a proactive approach to challenges. I am constantly seeking opportunities to grow and make meaningful contributions.
                        </p>
                        
                    </div>
                    <div className='lg:px-0 md:px-8'>
                        <button className='font-bold border border-neutral-50 rounded bg-neutral-900 px-2 py-1 text-neutral-50 hover:bg-white hover:text-neutral-900'>
                            <a 
                                href="/AmarGuptaResume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-inherit'>
                                My Resume
                            </a>
                        </button>

                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About