"use client"
import SubmitBtn from "./submitButton"
import { useRef } from "react"
export default function UploadFile(){

    const inputRef = useRef<HTMLInputElement>(null)
    

    function uploadFn(formData: FormData){
        const image = formData.get("imagefile") as string
        console.log("clicked", image)
    }
    function handleSelect(){
        inputRef?.current?.click()
    }

    return (
        <form action={uploadFn} className="flex flex-col">
            <input type="file" name="imagefile" ref={inputRef} className="hidden" />
            <button onClick={handleSelect} className=" border-1 p-2 px-4 " >Select File</button>
            <SubmitBtn dataStr="Upload" />
        </form>
    )
}