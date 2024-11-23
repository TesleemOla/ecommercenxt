'use client'
import Link from "next/link"





export default function MainError() {
  

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Link href="/">
                Go to homepage
            </Link>

        </div>
    )
}