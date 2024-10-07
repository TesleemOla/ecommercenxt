"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ExLogo from '../icons/ExLogo'
import { Burger, Cart, Love, Search } from '../icons'

const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <header className=" flex justify-between w-full py-2 px-4 shadow-2xl">
        <div className='pl-4'>
          <ExLogo />
        </div>
        
          
        
        <nav className="hidden sm:flex flex-wrap sm:justify-between w-1/2">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
        <div className="hidden sm:flex gap-5 w-1/2">
              <div className="relative border-2 rounded-sm  bg-gray-300">
                <input type="search" name="search" id="search" className="bg-gray-300 border-none outline-none" />
                <div className="absolute right-0 top-0 text-white" >
                  <Search />
                </div>
              </div>

              <Love />
              <Cart />
            </div>
        </nav>
      <nav className="flex flex-col items-end px-2 bg-white absolute right-1 top-2 sm:hidden transition-opacity" onClick={()=>setOpen(!open)}>
          <Burger open={open} />
          {open && <>
          <span className="grid">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
          </span>
          <span className="grid grid-cols-2">
          <span className="relative border-2 rounded-sm  bg-gray-300 col-span-2">
            <input type="search" name="search" id="search" className="bg-gray-300 border-none outline-none" />
            <span className="absolute right-0 top-0 text-white" >
              <Search />
            </span>
          </span>

          <Love />
          <Cart />
          </span>
          </>}
        </nav>
       
       
    </header>
  )
}

export default Navbar