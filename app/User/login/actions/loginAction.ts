"use server"
import { supabase } from "@/utils/supabase/component";

export async function loginAction(formData: FormData){
    const email = formData.get("username") as string;
    const password = formData.get("password") as string;

    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

   return { data, error}

}