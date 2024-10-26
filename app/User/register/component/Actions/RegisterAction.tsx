"use server"

import prisma from "@/lib";

export async function ActionFunction(formData: FormData) {
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (name && password && username) {
        console.log({name,username,password})
        try{
        const creater = await prisma.user.create({
            data: {name, password, email:username}})
        console.log(creater)
        }
        catch(err: any){
            console.log(err?.message);
        }
    } else {
        console.error("a value is missing")
    }
}