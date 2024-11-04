import { useFormStatus } from "react-dom"
export default function SubmitBtn({dataStr}:{dataStr:string}){
    const { pending } = useFormStatus()

    return <button disabled={pending} className=" border-black p-2 px-4 " >
    {!pending ? dataStr: "...Loading"}
    </button>
}