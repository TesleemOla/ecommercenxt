"use server"

// import prisma from "@/lib";
import { supabase } from "@/utils/supabase/client"


export async function ActionFunction(formData: FormData) {
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (name && password && username) {
                
            const { data, error } = await supabase.auth.signUp({
                email: username,
                password: password,
                options: {
                    data: {
                        name: name 
                    }
                }
            })
          
     if(error){
        throw error
     }
     else{
        return data
     }
}
}