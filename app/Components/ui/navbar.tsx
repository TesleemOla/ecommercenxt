"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ExLogo from '../icons/ExLogo'
import { Burger, Cart, Love, Profile, Search } from '../icons'

const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <header className="flex p-4 shadow-2xl w-full justify-between sticky top-0 z-10 bg-white">
        <Link href="/" className='pl-4'>
          <ExLogo />
        </Link>
        
          
        
        <nav className="hidden sm:flex cursor-pointer flex-wrap sm:justify-between w-1/2">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/User/register">Sign Up</Link>
        <div className="flex gap-5 w-1/2">
              <div className="relative border-2 rounded-lg  bg-gray-300">
                <input type="search" name="search" id="search" className="bg-gray-300 border-none outline-none" />
                <div className="absolute right-0 top-0 text-white" >
                  <Search />
                </div>
              </div>

              <Love />
              <Cart />
              <Profile />
            </div>
        </nav>
      <nav className={`flex flex-col px-2 items-end absolute right-0 top-3 cursor-pointer sm:hidden`} onClick={()=>setOpen(!open)}>
          <Burger open={open} />
        <span className={`transition-[opacity] ease-in-out bg-white shadow-lg px-10 ${open ? "opacity-100" : "opacity-0"}`}>
          <span className="grid text-2xl font-bold gap-5">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/User/register">Sign Up</Link>
          </span>
          <span className="grid grid-cols-2 my-5">
       

          <Love />
          <Cart />
          <Profile />
          </span>
          </span>
        </nav>
       
       
    </header>
  )
}

export default Navbar