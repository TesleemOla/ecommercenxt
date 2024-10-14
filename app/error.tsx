'use client'
import Link from "next/link"

 // Error components must be Client Components



export default function Error() {
  

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Link href="/">
                Go to homepage
            </Link>

        </div>
    )
}