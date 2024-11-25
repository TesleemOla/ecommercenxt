"use client"
import Link from 'next/link'
import {loginAction } from "../actions/loginAction"
import Alert from '@/app/Components/ui/toast'
import { useRef } from 'react'
import { redirect } from 'next/navigation'


const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  async function allAction(formData:FormData){
    const email = formData.get("username") as string;
    const password = formData.get("password") as string;
    const data = {email, password }

    try{
      const user   = await loginAction(data)
      console.log(user)
      if (user){
      formRef.current?.reset()
    Alert("Login successfull","success")
    redirect("/")
      }
    }
      catch(err){
        if (err instanceof Error){
        Alert(err?.message , "info")
        }
      }
   
  }
  return (
    <form className="sm:w-1/3 my-4" action={allAction} ref={formRef}>
          <h1 className="font-semibold text-2xl ">Login to Exclusive</h1>
          <p className='font-bold text-sm'>Enter your details below</p>
          <div className="grid gap-1 my-2 sm:border-b-2 border-black">
              <label htmlFor="username" className="sm:hidden">Email or Phone Number</label>
              <input type="text" name="username" id="username" placeholder="Email or Phone Number" required className="p-2 sm:border-none sm:outline-none" />
          </div>

          <div className="grid gap-1 my-2 sm:border-b-2 border-black">
              <label htmlFor="password" className="sm:hidden">Password</label>
              <input type="password" name="password" id="password" placeholder="password" required className="p-2 sm:border-none sm:outline-none" />
          </div>
          <span className="flex gap-5 items-center">
            <button className="bg-button text-white p-4 py-2 rounded-lg">Log In</button>
            <Link href="#">Forgot password?</Link>
          </span>
    </form>
  )
}

export default LoginForm