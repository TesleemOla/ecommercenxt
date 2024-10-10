import Image from 'next/image'
import React from 'react'
import LoginForm from './components/LoginForm'

const Page = () => {
  return (
        <main className="sm:flex sm:items-center sm:gap-10 mr-5">
          <Image src="/images/ecom-cart.jpg" alt="ecommerce" width={100} height={500} />
          <LoginForm />
        </main>
  )
}

export default Page