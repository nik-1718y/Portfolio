import React from 'react'
import Blog_Web_App from '../assets/Projects/Blog_Web_App.png'
import calculator from '../assets/Projects/Calculator.png'
import clock from '../assets/Projects/Clock.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Project = () => {
  return (
    <div id='projects' className='border-b border-neutral-900 pb-4 xl:px-52 lg:px-24 md:px-24'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            <div 
            key="blog_web_app" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-100' height={200} width={200} src={Blog_Web_App} alt="Blog_Web_App" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold underline text-xl'><Link to={"https://blogapp-mu-puce.vercel.app/"}>Blog Web App</Link></h6>
                <p className='mb-4 text-neutral-400'>This Blog Web App is a dynamic platform that allows users to create, view, and engage with blogs.
                This application is built with modern web technologies and offers a seamless user experience. Key features include :
                <br /><br />
                <span className="font-bold">Blog Creation:</span> Users can easily create and publish their own blogs, adding rich text, images, and other media to
                share their thoughts and stories.
                <br />
                <span className="font-bold">Browse Blogs:</span> Explore blogs created by other users.
                <br />
                <span className="font-bold">User Authentication:</span> Secure sign-up and login processes ensure that user data is protected.
                <br />
                <span className="font-bold">Email Verification:</span> New users are required to verify their email addresses to ensure the authenticity of accounts
                and enhance platform security.
                <br />
                <span className="font-bold">Forgot Password:</span> Convenient password recovery options allow users to reset their passwords via email, ensuring
                they can always regain access to their accounts.</p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://blogapp-mu-puce.vercel.app/">Live</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/Amar-Gupta-721/Blog_Web_App">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React js</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Redux</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Material UI</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Appwrite</span>
                </motion.div>
                
            </div>
            <div key="calculator" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-800' height={200} width={200} src={calculator} alt="Calculator" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold text-xl underline'><Link to={"https://amar-gupta-721.github.io/Calculator/"}>Calculator</Link></h6>
                <p className='mb-4 text-neutral-400'>This calculator is a fully functional calculator built using HTML, CSS, and JavaScript. Designed to perform basic arithmetic operations, the calculator features a clean and intuitive interface. It allows users to perform addition, subtraction, multiplication, and division with ease. The project also includes interactive buttons and a responsive display screen that adjusts to various input values. The layout is styled using CSS, ensuring a visually appealing design, while JavaScript handles the logic and functionality, making the calculator both user-friendly and efficient.</p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://amar-gupta-721.github.io/Calculator/">Live</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/Amar-Gupta-721/Calculator">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                </motion.div>
                
            </div>
            <div key="clock" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-100' height={200} width={200} src={clock} alt="Clock" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold text-xl underline'><Link to={"https://amar-gupta-721.github.io/Clock-Project/"}>Clock</Link></h6>
                <p className='mb-4 text-neutral-400'>This clock is a fully functional clock built using HTML, CSS, and JavaScript. The clock features a real-time display of hours, minutes, and seconds, with an elegant design that updates every second to reflect the current time. The project uses HTML to structure the clock elements, CSS for styling and layout, ensuring a clean and modern look, and JavaScript to handle the real-time updates and functionality.</p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://amar-gupta-721.github.io/Clock-Project/">Live</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/Amar-Gupta-721/Clock-Project">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                </motion.div>
                
            </div>
        </div>
    </div>
  )
}

export default Project