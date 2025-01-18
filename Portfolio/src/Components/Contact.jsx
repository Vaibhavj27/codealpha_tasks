import React from 'react'
import { useState } from 'react';
import { motion } from "motion/react"



function Contact() {
  const [submit,setSubmit]= useState("Send Message")
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ea121aa8-93d5-4346-b5cd-12b33c8bcfd1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    
      if(res.success)
      {
        setSubmit("message sent")
      }

  };


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
    className="m-20 text-neutral-300" id='contact' >
        <h1 className='text-neutral-300 text-2xl p-5 text-center'>Get in Touch</h1>
        <form onSubmit={onSubmit}>
     <div className='w-fit m-auto bg-neutral-900 border-neutral-600 border-spacing-1 p-10 rounded-md flex flex-col  gap-10' >
     
        <div className=' '>
          <label >Name:</label>
          <input type="text" placeholder='Enter your name' name='name' className='m-2 p-1 rounded lg:ml-8' required/>
        </div>
        
        <div className=' '>
          <label >Email:</label>
          <input type="email" name="email" placeholder='Enter your email'className='m-2 p-1 rounded lg:ml-9' required  />
        </div>
        
        <div className=''>
          <label >Message:</label>
          <input type="textarea" placeholder='Enter message' name='message' className='m-2 p-1 rounded ' required/>
        </div>
        
        <div className='m-auto'>
          <input type="submit" value={submit}  className='text-center  hover:bg-[white]/20 border-neutral-500 border-2 active:bg-transparent  p-1 text-neutral-300 rounded backdrop-blur-3xl' />
        </div>
        
        </div>
        </form>
    </motion.div>
  )
}

export default Contact