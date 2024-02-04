import { FaElementor, FaHome, FaRegAddressBook, FaRegAddressCard, FaTools } from "react-icons/fa";

import { Link } from 'react-scroll';

export default function NavBar(){

    return(
        <div className='fixed top-1/4 right-0 text-sm flex flex-col items-center justify-center rounded gap-4 mr-5 py-3 px-2 border-2 border-black bg-white'>
            <Link
                className='flex flex-col items-center cursor-pointer'
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FaHome className='text-3xl'/>
                Home
            </Link>
            <Link
                className='flex flex-col items-center cursor-pointer'
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FaRegAddressCard className='text-3xl'/>
                About
            </Link>
            <Link
                className='flex flex-col items-center cursor-pointer'
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FaTools className='text-3xl'/>
                Skills
            </Link>
            <Link
                className='flex flex-col items-center cursor-pointer'
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FaElementor className='text-3xl'/>
                Projects
            </Link>
            <Link
                className='flex flex-col items-center cursor-pointer'
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <FaRegAddressBook className='text-3xl'/>
                Contact
            </Link>
        </div>
    )
}