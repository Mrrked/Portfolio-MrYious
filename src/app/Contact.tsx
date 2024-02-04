import { BiLogoGmail, BiSolidPhone } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaReddit } from "react-icons/fa6";

export default function Contact(props: { contact: { email: string; address: string; phone: string; socials: { github: string; facebook: string; linkedin: string; instagram: string; reddit: string; }; }}){
    return(
        <section id='contact' className="flex flex-col items-center py-7 gap-10">
            <div className="text-xl font-bold border-4 border-black px-4 py-2 rounded">
                Contact Me
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-40">
                <div className="flex flex-col gap-3 font-bold text-sm">
                    <div className=" font-bold text-lg">Feel free to reach me out</div>
                    <div className="flex items-center gap-2">
                        <BiLogoGmail className="text-5xl border-[1px] border-black p-2 rounded text-red-700"/>
                        <div>{props.contact.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-5xl border-[1px] border-black p-2 rounded text-blue-700"/>
                        <div>{props.contact.address}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <BiSolidPhone className="text-5xl border-[1px] border-black p-2 rounded text-green-700"/>
                        <div>{props.contact.phone}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <div className=" font-bold text-lg">My Socials</div>
                    <div className="flex gap-3 text-3xl">
                        <a href={props.contact.socials.github} target="_blank" className=" cursor-pointer p-2 border-2 border-black rounded shadow-black shadow-sm hover:shadow-md hover:shadow-black">
                            <FaGithub />
                        </a>
                        <a href={props.contact.socials.linkedin} target="_blank" className=" cursor-pointer p-2 border-2 border-black rounded shadow-black shadow-sm hover:shadow-md hover:shadow-black">
                            <FaLinkedin />
                        </a>
                        <a href={props.contact.socials.facebook} target="_blank" className=" cursor-pointer p-2 border-2 border-black rounded shadow-black shadow-sm hover:shadow-md hover:shadow-black">
                            <FaFacebook />
                        </a>
                    </div>
                    <div className="flex gap-3 text-3xl">
                        <a href={props.contact.socials.instagram} target="_blank" className=" cursor-pointer p-2 border-2 border-black rounded shadow-black shadow-sm hover:shadow-md hover:shadow-black">
                            <FaInstagram />
                        </a>
                        <a href={props.contact.socials.reddit} target="_blank" className=" cursor-pointer p-2 border-2 border-black rounded shadow-black shadow-sm hover:shadow-md hover:shadow-black">
                            <FaReddit />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}