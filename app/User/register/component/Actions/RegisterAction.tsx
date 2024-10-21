"use server"

import prisma from "@/lib";

export async function ActionFunction(formData: FormData) {
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (name && password && username) {
        console.log({name,username,password})
        const creater = await prisma.user.create({
            data: {name, password, email:username}})
        console.log(creater)
    } else {
        console.error("a value is missing")
    }
}