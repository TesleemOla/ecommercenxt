"use client"
import React from 'react'
// import { ActionFunction } from './Actions/RegisterAction'
import Link from 'next/link'


export default function Regform () {

    
   
  return (
    <form className="mx-auto my-4 sm:h-full space-y-5">
        <h1 className="font-semibold text-2xl ">Create an account</h1>
        <p className='font-bold text-sm'>Enter your details below</p>
        <div className="grid gap-1 my-2 sm:border-b-2 border-black">
            <label htmlFor="name" className="sm:hidden">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required className="p-2 sm:border-none sm:outline-none" />
        </div>
        <div className="grid gap-1 my-2 sm:border-b-2  border-black">
            <label htmlFor="username" className="sm:hidden">Email of Phone Number</label>
              <input type="text" name="username" id="username" placeholder="Email or Phone" required className="p-2 sm:border-none sm:outline-none" />
        </div>
        <div className="grid gap-1 my-2 sm:border-b-2  border-black">
            <label htmlFor="password" className="sm:hidden">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" required className="p-2 sm:border-none sm:outline-none" />
        </div>
        <button className="bg-button text-white rounded-lg p-2">Create Account</button>
          <p className='font-semibold text-sm my-4'>Already have an account? <Link href="/User/login" className="text-purple-700">Login</Link> your details below</p>
    </form>
  )
}

