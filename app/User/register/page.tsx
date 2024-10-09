import Image from "next/image";
import Regform from "./component/Regform";

export default function Register() {
    return (
        <main className="sm:flex sm:mr-4">
            <Image src="/images/ecom-cart.jpg" alt="ecommerce" width={500} height={500} />
            <Regform />
        </main>
    )
}