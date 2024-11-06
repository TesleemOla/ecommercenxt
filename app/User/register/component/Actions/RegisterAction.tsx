"use server"

// import prisma from "@/lib";
import { supabase } from "@/utils/supabase/client"


export async function ActionFunction(formData: FormData) {
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (name && password && username) {
        try{           
            const { data, error } = await supabase.auth.signUp({
                email: username,
                password: password,
                options: {
                    data: {
                        name: name 
                    }
                }
            })
            console.log(error)
            return data? data: error?.message
            
        }
        catch(err){
            console.log(err);
            throw ("Error creating user. Please try again!")
        }
    } else {
        throw ("a value is missing")
    }
}