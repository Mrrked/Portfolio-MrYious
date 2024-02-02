// Import the image file
"use client"

import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa"

import { MyData } from './_data/data'
import NavBar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'
import avatar from './_assets/images/avatar.png'

export default function Home() {
  return (<>
    <NavBar></NavBar>
    <main id='home' className="flex min-h-screen items-center bg-white text-black">
      <div className="flex border-black border-y-4 items-center justify-between w-full px-40 py-10">
        <div className="flex flex-col gap-5">
          <div className=" text-6xl font-bold">{MyData.intro.name}</div>
          <div className=" text-3xl font-bold">{MyData.intro.title}</div>
          <div className=" text-lg w-2/3 font-medium ">
            <Typewriter
              words={MyData.intro.desc}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={30}
              deleteSpeed={10}
              delaySpeed={2000}
            />
          </div>
          <div className="flex gap-5">
            <a href="/resume.pdf" download="Resume - Mark Edison Rosario">
              <button onClick={()=>{}} className="flex border-4 border-black px-2 py-2 rounded items-center gap-2 text-md font-medium hover:shadow-black shadow-md">
                <FaFileDownload />
                CV / Resume
              </button>
            </a>
            <button onClick={()=>{window.open(MyData.intro.links.github, "_blank", "noreferrer")}} className="flex border-4 border-black px-4 py-2 rounded items-center gap-2 text-md font-medium  hover:shadow-black shadow-md">
              <FaGithubSquare />
              GitHub
            </button>
            <button onClick={()=>{window.open(MyData.intro.links.linkedin, "_blank", "noreferrer")}} className="flex border-4 border-black px-4 py-2 rounded items-center gap-2 text-md font-medium  hover:shadow-black shadow-md">
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
        <img src={avatar.src} className=' h-[500px]' alt="avatar" />
      </div>
    </main>
    <section id='about' className="h-[500px]">
      About Me
    </section>
    <section id='skills' className="h-[500px]">
      Skills
    </section>
    <section id='projects' className="h-[500px]">
      Projects
    </section>
  </>);
}
