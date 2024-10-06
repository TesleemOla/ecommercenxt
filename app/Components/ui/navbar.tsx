import Link from 'next/link'
import React from 'react'
import ExLogo from '../icons/ExLogo'
import { Cart, Love, Search } from '../icons'

const Navbar = () => {
  return (
    <header className="w-screen flex justify-between py-2 px-4 shadow-2xl">
        <div>
          <ExLogo />
        </div>
        <nav className="hidden sm:flex flex-wrap sm:justify-between sm:w-1/3">
            <Link href="/home">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
            <div className="hidden sm:flex sm:justify-between w-1/3">
              <div className="relative">
                <input type="search" name="search" id="search" className="w-1/4" />
                <div className="absolute right-0" >
                  <Search />
                </div>
              </div>

              <Love />
              <Cart />
            </div>
        </nav>
       
       
    </header>
  )
}

export default Navbar