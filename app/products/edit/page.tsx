"use client"

// import { createClient } from '@/utils/supabase/server'

export default function PrivatePage() {


    // const supabase = await createClient()

    // const { data, error } = await supabase.auth.getSession()
    const user = localStorage.getItem("user")
    if(user){
        const parsedUser = JSON.parse(user)
        console.log(parsedUser)
    }
    // console.error(error)
    return <p>Hello 
        
    </p>
}