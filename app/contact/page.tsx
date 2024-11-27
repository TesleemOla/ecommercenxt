import Link from "next/link";
import {CurrentPage} from "../Components/ui";

export default function ContactPage() {

    return (
        <div>
            <nav className="flex">
                <Link href="/" className="opacity-50 font-extralight">Home</Link>
                <CurrentPage />  
            </nav>
        </div>
    )
}