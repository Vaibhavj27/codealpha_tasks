import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import {motion} from "motion/react"

const ProjectArr=[
    {
        title: "BikesPoint- The bike rental platform",
        description:"This project is simple full stack application demonstrating the CRUD operations",
        technologies:['HTML','CSS','Javascript','NodeJs', 'ExpressJs','MongoDB'],
        image: Project1
    },
    {   
        title: "VAANI-User Interface for speech lingual therapy application",
        description:"This is my User Interface designing project.Created visually appealing and interactive user interface",
        technologies:['Figma'],
        image:Project2
    }
]



function Projects() {
  return (
    <>
    <div id='projects'>
        <motion.h1 
        whileInView={{
            opacity:1,
            y:0
        }}
        initial={{ opacity:0,
             y:-20
            }}
        transition={{
            duration:1,
            delay:0
        }}
        className='text-neutral-300 text-2xl p-5 text-center'>Projects</motion.h1>
       {
        ProjectArr.map((project, index)=>(
            <div key={index} className='flex flex-wrap items-center m-auto max-w-fit p-5'>
                <motion.div 
                 whileInView={{
                    opacity:1,
                    x:0
                 }}
                 initial={{
                    opacity:0,
                    x:-100
                 }}
                 transition={{
                    duration:1,
                    delay:0
                 }}
                 className='m-10'>
                        <img src={project.image} alt={project.title} className='h-[150px] w-[250px] content-stretch' />
                </motion.div>
                <motion.div 
                 whileInView={{
                    opacity:1,
                    x:0
                 }}
                 initial={{
                    opacity:0,
                    x:100
                 }}
                 transition={{
                    duration:1,
                    delay:0
                 }} className='max-w-xl'>
                    <h2 className='text-neutral-300 text-2xl p-5 '>{project.title}</h2>
                    <p className='text-neutral-500  p-5 '>{project.description}</p>
                    <div className='flex flex-wrap items-center'>{
                        project.technologies.map((tech,index)=>(
                            <div key={index} className='text-purple-500 bg-neutral-900 m-2 rounded p-1'>{tech}</div>
                        ))
                    }</div>
                </motion.div>
            </div>
        ))
       }
    </div>
    </>
  )
}

export default Projects