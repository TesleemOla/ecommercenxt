export async function ActionFunction(prevState: boolean, formData: FormData) {
    "use server"
    const name = formData.get("name") as string;
    const userName = formData.get("userName") as string;
    const password = formData.get("password") as string;
    if (name && password && userName) {
        console.log({name,userName,password})
    } else {
        console.error("a value is missing")
    }
}