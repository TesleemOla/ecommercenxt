import Image from "next/image";
import Regform from "./component/Regform";

export default function Register() {
    return (
        <main className="md:flex md:mr-4">
            <Image src="/images/ecom-cart.jpg" alt="ecommerce" width={500} height={400} className="w-auto h-auto" />
            <Regform />
        </main>
    )
}