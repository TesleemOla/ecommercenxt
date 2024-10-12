import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <form className="sm:w-1/3 my-4">
          <h1 className="font-semibold text-2xl ">Login to Exclusive</h1>
          <p className='font-bold text-sm'>Enter your details below</p>
          <div className="grid gap-1 my-2 sm:border-b-2 border-black">
              <label htmlFor="username" className="sm:hidden">Email or Phone Number</label>
              <input type="text" name="username" id="username" placeholder="Email or Phone Number" required className="p-2 sm:border-none sm:outline-none" />
          </div>

          <div className="grid gap-1 my-2 sm:border-b-2 border-black">
              <label htmlFor="name" className="sm:hidden">Password</label>
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