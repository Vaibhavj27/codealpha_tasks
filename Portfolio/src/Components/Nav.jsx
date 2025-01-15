import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function Nav() {
  return (
    <nav className=' flex justify-between items-center py-6 ' >
        <div className='flex flex-shrink-0 items-center'>
            <h1 className=' text-neutral-300 text-6xl px-4'>VJ</h1>
        </div>
        <div className='flex gap-5 items-center text-neutral-300 text-2xl'>
             <FaGithub/>
             <FaLinkedin />
             <FaInstagram />
        </div>
         </nav>

  )
}

export default Nav