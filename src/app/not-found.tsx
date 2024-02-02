import Link from "next/link"

export default function NotFound(){
    return(
        <div className=" min-h-screen flex flex-col justify-center items-center text-center gap-5">
            <div className="text-7xl">404 Not Found</div>
            <div className="text-4xl font-semibold">Ackkkktually..... 🤓</div>
            <div className="flex flex-col w-1/3 gap-3">
                <div className="">The page you're trying to find seems to have gone on an unexpected adventure and gotten lost in the digital wilderness.</div>
                <div className="">Want me to take you to the right place, Princess?</div>
            </div>
            <Link href="/" className="px-4 py-2 border-black border-2 rounded shadow-sm hover:shadow-black" >Take me Home</Link>
        </div>
    )
}