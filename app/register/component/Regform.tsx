"use client"
import React, { useRef } from 'react'
import { ActionFunction } from './Actions/RegisterAction'
import Link from 'next/link'
import Alert from '@/app/Components/ui/toast'



export default function Regform () {

    const formRef = useRef<HTMLFormElement>(null)
    async function clientAction(formData: FormData){
      try{
      const tryRegister = await ActionFunction(formData)
      if(tryRegister?.user){
        Alert("User registration successful", "success")
        formRef?.current?.reset()
      }
      
      }
      catch(err){
        if(err instanceof Error){
          Alert(err?.message, "error")
        }
      }

    }
   
  return (
    <form className="mx-auto my-4 sm:h-full space-y-5" action={clientAction} ref={formRef}>
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
          <p className='font-semibold text-sm my-4'>Already have an account? <Link href="/login" className="text-purple-700">Login</Link> your details below</p>
    </form>
  )
}

