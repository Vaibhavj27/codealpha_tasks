import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import {  SiMongodb} from 'react-icons/si'
import figma from '../assets/figma-icon.svg'
import java from '../assets/java-icon.svg'
import tailwind from '../assets/tailwindcss-icon.svg'
import { motion } from "motion/react"

const iconAnimate= (duration)=>(
  {
    initial:{y:-10},
    animate:{
       y:[10,-10],
      transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  },
    
  }
);

function Technologies() {
  return (
    <motion.div
     whileInView={{
         opacity:1,
         y:0
     }}
     initial={{
        opacity:0,
        y:50
     }}
     transition={{
      duration:1,
      delay:0
     }}
      className='text-center p-10 m-20'>
      <h1 className='text-neutral-300 text-2xl p-5 m-auto'> Technologies</h1>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
           <motion.div 
             variants={iconAnimate(1.5)}
             initial='initial'
             animate='animate'
              className='text-cyan-400 text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <FaReact />
           </motion.div>
           <motion.div 
             variants={iconAnimate(3)}
             initial='initial'
             animate='animate' className='text-green-600 text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <FaNodeJs />
           </motion.div>
           <motion.div 
             variants={iconAnimate(5)}
             initial='initial'
             animate='animate'
              className='text-green-500 text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <SiMongodb />
           </motion.div>
           <motion.div 
             variants={iconAnimate(5)}
             initial='initial'
             animate='animate'
              className=' text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <img src={java} alt="" />
           </motion.div>
           <motion.div 
             variants={iconAnimate(3)}
             initial='initial'
             animate='animate'
              className=' text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <img src={figma} alt="" />
           </motion.div>
           <motion.div 
             variants={iconAnimate(1.5)}
             initial='initial'
             animate='animate'
              className=' text-6xl bg-gray-800 border-gray-700 border-2 p-1 rounded'>
            <img src={tailwind} alt="" />
           </motion.div>
      </div>
    </motion.div>
  )
}

export default Technologies