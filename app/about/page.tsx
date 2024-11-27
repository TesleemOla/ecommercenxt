import Link from "next/link"
import { CurrentPage } from "../Components/ui"
import { HomeStory, Sale, Dollar, ActiveCustomer } from "../Components/icons"
import Image from "next/image"

export default function AboutPage() {
    const boxedArr =[
        {
            name: "Sellers active on our Site",
            total: "10.5k",
            icon:<HomeStory/>
        },
        {
            name: "Monthly Product Sale",
            total: "33k",
            icon: <Dollar/>
        },
        {
            name: "Customers active on our Site",
            total: "10.5k",
            icon: <ActiveCustomer/>
        },
        {
            name: "Annual Gross sale on our Site",
            total: "25k",
            icon:<Sale/>
        }
    ]
    return (
        <div className="mt-5">
            <nav className="flex">
                <Link href="/" className="opacity-50 font-extralight">Home</Link>
                <CurrentPage />
            </nav>
            <section className="my-5 lg:flex lg:justify-center lg:items-center gap-6">
                <div>
                    <h1 className="font-semibold text-2xl md:text-5xl my-4">Our Story </h1>
                    <p>
                        Launched in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <Image src="/images/ourStory.png" alt="shopper image" width={800} height={800} />
            </section>

            <section className="my-10 flex wrap gap-4 justify-center">
                {
                    boxedArr.map(({name, icon, total})=>{
                        return <div key={name} className="border-gray-400 border-2 p-2 rounded-md w-52 text-center flex flex-col hover:bg-hovred hover:text-white">
                            <span className="self-center">
                                {icon}
                            </span>
                            <p className="font-extrabold text-xl">{total}</p>
                            <p className="font-normal text-sm">{name}</p>
                        </div>
                    })
                }
            </section>
        </div>
    )
}