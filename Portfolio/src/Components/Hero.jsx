import React from 'react'
import profile from '../assets/IMG_1173.png'
import { motion } from "motion/react"
function Hero() {
  return (
    <div className='flex  flex-wrap  items-center  my-28 ' id='home'>
        <div className='w-full lg:w-1/2 '>
        <div className='flex flex-col items-center lg:items-start justify-center lg:pl-20'>
            <motion.h1 
            initial={{x:-100, opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:0.5 , delay:0}}
            className='font-thin text-4xl lg:text-6xl tracking-tight text-neutral-300 pb-16'>Vaibhav Jagtap</motion.h1>
            <motion.span 
             initial={{x:-100, opacity:0}}
             animate={{x:0 , opacity:1}}
             transition={{duration:0.5 , delay:0.5}}
             className='bg-gradient-to-r from-orange-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
             <motion.p
              initial={{x:-100, opacity:0}}
              animate={{x:0 , opacity:1}}
              transition={{duration:0.5 , delay:1}}
               className='text-neutral-300 font-thin tracking-tighter py-7 max-w-xl'> Hi, I’m Vaibhav, a passionate IT student specializing in web development with expertise in HTML, CSS, JavaScript,
               and UI design using tools like Figma. Currently in my third year at DR D Y Patil Institute of Technology,
                I have a strong foundation in C++ and Java, and I’m always eager to expand my skill set. 
                I enjoy creating user-friendly, visually appealing websites and applications, 
                and I’ve worked on exciting projects like a bike rental system with features like user authentication, booking management, and MongoDB integration.
                  </motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 m-auto'>
          <motion.img 
           initial={{x:200, opacity:0}}
           animate={{x:0 , opacity:1}}
           transition={{duration:0.5 , delay:0}}
          src={profile} alt="Profile pic" className='rounded lg:h-[500px] lg:w-[500px] h-auto w-auto lg:ml-20' />
       
        </div>
    </div>
  )
}

export default Hero