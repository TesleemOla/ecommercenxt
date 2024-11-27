import Link from "next/link";
import CurrentPage from "../Components/ui/currentpage";

export default function ContactPage() {

    return (
        <div>
            <span className="flex">
                <Link href="/" className="opacity-50 font-extralight">Home</Link>
                <CurrentPage />  
            </span>
        </div>
    )
}