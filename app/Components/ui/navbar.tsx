import Link from 'next/link'
import React from 'react'
import ExLogo from '../icons/ExLogo'
import { Cart, Love } from '../icons'

const Navbar = () => {
  return (
    <header className="flex justify-between py-2 px-4 shadow-2xl">
        <div>
          <ExLogo />
        </div>
        <nav className="flex flex-col sm:flex-row sm:justify-between sm:w-1/3">
            <Link href="/home">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
        </nav>
        <div className="flex justify-between w-1/3">
            <div>
                <label htmlFor="search"></label>
                <input type="search" name="search" id="search" />
            </div>
            <Love />
            <Cart />
        </div>
       
    </header>
  )
}

export default Navbar