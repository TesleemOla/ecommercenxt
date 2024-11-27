"use client"

import { usePathname } from "next/navigation"

export default function CurrentPage() {

    const location = usePathname()
    return (
        <p className="font-normal">{location}</p>
    )
}