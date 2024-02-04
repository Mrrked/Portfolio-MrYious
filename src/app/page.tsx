"use client"

import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa"

import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import { MyData } from './_data/data'
import NavBar from './Navbar'
import Project from "./Project"
import Skill from "./Skill"
import { Typewriter } from 'react-simple-typewriter'
import avatar from './_assets/images/avatar.png'
import vector1 from './_assets/images/vector_img/1.png'
import vector2 from './_assets/images/vector_img/2.png'
import vector3 from './_assets/images/vector_img/3.png'
import vector4 from './_assets/images/vector_img/4.png'
import vector5 from './_assets/images/vector_img/5.png'

export default function Home() {
  return (<div  className=" ">
    <NavBar></NavBar>
    <img src={vector3.src} alt="vector3" className="absolute -top-64 -left-28 sm:-top-44 sm:-left-32 "/>
    <main id='home' className="flex sm:min-h-screen sm:items-center">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-5 py-20 sm:px-40 sm:py-10  ">
        <div className="flex flex-col gap-3 sm:gap-5 w-full sm:w-auto ">
          <div className=" text-3xl sm:text-5xl font-bold">{MyData.intro.name}</div>
          <div className=" text-xl sm:text-2xl font-bold">{MyData.intro.title}</div>
          <div className=" text-sm sm:text-base font-medium ">
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
          <div className="flex gap-2 sm:gap-5">
            <a href="/Resume - Mark Edison Rosario.pdf" download="Resume - Mark Edison Rosario">
              <button onClick={()=>{}} className="flex border-[3px] border-black px-2 py-2 text-sm rounded items-center gap-2 font-medium hover:shadow-black shadow-md">
                <FaFileDownload />
                CV / Resume
              </button>
            </a>
            <button onClick={()=>{window.open(MyData.intro.links.github, "_blank", "noreferrer")}} className="flex border-[3px] border-black p-2 rounded items-center text-sm gap-2 font-medium  hover:shadow-black shadow-md">
              <FaGithubSquare />
              GitHub
            </button>
            <button onClick={()=>{window.open(MyData.intro.links.linkedin, "_blank", "noreferrer")}} className="flex border-[3px] border-black p-2 rounded items-center text-sm gap-2  font-medium  hover:shadow-black shadow-md">
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
        <img src={avatar.src} className=' h-[450px] hidden sm:block' alt="avatar" />
      </div>
    </main>
    <img src={vector1.src} alt="vector1" className="absolute hidden sm:block  right-0 "/>
    <About about={MyData.about}/>
    <img src={vector2.src} alt="vector2" className="absolute hidden sm:block -left-32"/>
    <Skill skills={MyData.skills}/>
    <img src={vector4.src} alt="vector4" className="absolute right-0 -z-10"/>
    <Project projects={MyData.projects}/>
    <img src={vector5.src} alt="vector5" className="absolute hidden sm:block -left-32"/>
    <Contact contact={MyData.contact}/>
    <Footer/>
  </div>);
}
