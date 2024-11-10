"use client"

import React from 'react'
import { useState } from 'react'

export default function Contact() {

  const[name, setName] = useState(" ")
  const[email, setEmail] = useState(" ")
  const[message, setMessage] = useState(" ")

  const [isTrue, setTrue] = useState(false)

const onclickHandler =(e: any)=> {
  e.preventDefault();
  setTrue(true)
}

  return (
   <main>
      
      
     <h1 className='p-5 flex justify-center'> <i className='bx bxs-message'></i> Reach Me Out </h1>
     
      <form >

<div id='inputs'>
  
  <label htmlFor="name"> Name</label>
  <input type="text" 
  onChange={(e) =>setName(e.target.value)} value={name} />
</div>

<div  id='inputs'>
  <label htmlFor="email"> Email</label>
  <input type="email" 
   onChange={(e) =>setEmail(e.target.value)} value={email} />
</div>

<div id='inputs'>
  <label htmlFor="message"> Message</label>
  <input type="message"  
   onChange={(e) =>setMessage(e.target.value)} value={message} />
</div>

<div>
<button onClick={onclickHandler} className='btn'>Send</button>
  </div>

      </form>
      <br />
 {isTrue && <div className='flex flex-col justify-center items-center '>
  <div id='output'> 
  <p><b>Name:</b>{name}</p>
  <p><b>Email:</b> {email}</p> 
  <p><b>Message: </b> {message}</p> 
  </div>
</div>
}  

<button className='btn'><a href="/">Home</a></button>
</main>
    
  )
}

