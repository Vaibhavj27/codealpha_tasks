import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Nav() {
  return (
    <nav className=' flex justify-between items-center py-6 ' >
        <div className='flex flex-shrink-0 items-center'>
            <h1 className=' text-neutral-300 text-6xl px-4'>VJ</h1>
        </div>
        <div className='flex gap-7 items-center text-neutral-300 font-light'>
             <Link to="home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Home</Link>

<Link to="projects" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Projects</Link>

<Link to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Contact</Link>
        </div>
        <div className='flex gap-5 items-center text-neutral-300 text-2xl'>
             <a href="https://github.com/Vaibhavj27"><FaGithub/></a>
             <a href="https://www.linkedin.com/in/vaibhav-jagtap27/"><FaLinkedin /></a>
             <a href="https://www.instagram.com/__vaibhav__.27/"><FaInstagram /></a>
        </div>
         </nav>

  )
}

export default Nav