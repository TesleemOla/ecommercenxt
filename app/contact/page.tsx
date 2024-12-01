import Link from "next/link";
import {CurrentPage} from "../Components/ui";



export default function ContactPage() {

    return (
        <div>
            <nav className="flex">
                <Link href="/" className="opacity-50 font-extralight">Home</Link>
                <CurrentPage />  
            </nav>
            <section className="flex gap-20 my-10">
                <aside className="h-screen w-1/4 rounded-md shadow-2xl shadow-grey-300 ">

                </aside>
                <div className="shadow-2xl p-4">
                    <form>
         
                        <input type="text" placeholder="Your Name" name="name" className="border-1 border-black p-2 "/>
                        <input type="text" placeholder="Your Phone" name="phone" className="border-1 border-black p-2 "/>
                        <input type="email" placeholder="Your Email" name="email" className="border-1 border-black p-2 "/>
                        <div>
                            <textarea className="h-40 w-full p-4 my-4">

                            </textarea>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}