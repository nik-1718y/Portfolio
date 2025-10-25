import React from 'react'
import Ecommerce from '../assets/Projects/Ecommerce.png'
import Blog_Web_App from '../assets/Projects/Blog_Web_App.png'
import Sorting_Algorithm_Visualizer from '../assets/Projects/Sorting_Algorithm_Visualizer.png'
import Todo from '../assets/Projects/Todo.png'
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
            key="ShopSmart_Ecommerce_Platform" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-100' height={200} width={200} src={Ecommerce} alt="ShopSmart_Ecommerce_Platform" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold underline text-xl'><Link to={"https://shop-smart-qs29.onrender.com/"}>ShopSmart Ecommerce Platform</Link></h6>
                <p className='mb-4 text-neutral-400'>ShopSmart is a full-featured ecommerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS and ShadCN UI for sleek, responsive design. The project implements Redux Toolkit for state management and JWT for secure authentication and authorization. Cloudinary is used for efficient media storage, and PayPal integration ensures smooth online transactions. With features like product browsing, cart management, and order tracking, ShopSmart offers a seamless user experience across all devices, showcasing my skills in both frontend and backend development.
                </p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://shop-smart-qs29.onrender.com/">Live Demo</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/Amar-Gupta-721/ShopSmart-A-Full-Stack-Ecommerce-Website-MERN-">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>TailwindCSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>NodeJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ExpressJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>MongoDB</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReduxToolkit</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>JWT</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Cloudinary</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>PayPal</span>
                </motion.div>
            </div>

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
                <h6 className='mb-2 font-semibold underline text-xl'><Link to={"https://bloged-x12o.vercel.app/"}>Blog Web App</Link></h6>
                <p className='mb-4 text-neutral-400'>This Blog Web App is built using Tailwind CSS, JavaScript, React.js, Redux Toolkit, Node.js, MongoDB. The application enables users to create, read, update, and delete blog posts, as well as browse posts from other users. It includes secure user authentication, email verification, and password recovery features. This project demonstrates my ability to develop responsive, full-stack web applications with a focus on user experience and security.
                </p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://bloged-6pq09ly0o-niks-projects-1e287394.vercel.app/">Live Demo</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/nik-1718y/Bloged">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>NodeJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ExpressJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>MongoDB</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReduxToolkit</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>JWT</span>
                </motion.div>
                
            </div>

            <div key="Sorting_Algorithm_Visualizer" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-800' height={200} width={200} src={Sorting_Algorithm_Visualizer} alt="Sorting_Algorithm_Visualizer" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold text-xl underline'><Link to={"https://youtube-clone-i44ecsly8-niks-projects-1e287394.vercel.app"}>Youtube clone</Link></h6>
                <p className='mb-4 text-neutral-400'>This application is built using React.js and CSS. It allows users to visualize various sorting algorithms, such as Bubble Sort, Quick Sort, and Merge Sort, with real-time animations. Users can control the speed of the visualizations and adjust the size of the dataset. This project demonstrates my ability to build interactive web applications that simplify complex algorithms through visual representation.</p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://youtube-clone-i44ecsly8-niks-projects-1e287394.vercel.app">Live Demo</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/nik-1718y/youtube-clone">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                </motion.div>
            </div>

            <div key="Todo" className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='mt-2 mb-4 w-full lg:w-1/4 md:pr-5'>
                    <img className='shadow-md shadow-neutral-100' height={200} width={200} src={Todo} alt="Clock" />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-full lg:w-3/4">
                <h6 className='mb-2 font-semibold text-xl underline'><Link to={"https://todo-nine-olive.vercel.app/"}>Todo</Link></h6>
                <p className='mb-4 text-neutral-400'>This Todo application is built using HTML, Tailwind CSS, JavaScript, React.js, and Redux Toolkit. The application allows users to efficiently manage their tasks with features such as adding, updating, and deleting todos. Users can also mark tasks as complete or incomplete with a simple check/uncheck function. The project highlights my ability to build responsive and interactive web applications with advanced state management.</p>
                <div>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://todo-nine-olive.vercel.app/">Live Demo</Link></span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900'><Link to="https://github.com/Amar-Gupta-721/Todo">Source Code</Link></span>
                </div><br />
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind CSS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReduxToolkit</span>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}

export default Project