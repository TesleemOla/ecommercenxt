"use server"
import { supabase } from "@/utils/supabase/client";
type dataType ={
    email: string,
    password: string
}
export async function loginAction(userData: dataType){
    
    
    const { data, error } = await supabase.auth.signInWithPassword({
      ...userData
    })

    return { data, error}
}