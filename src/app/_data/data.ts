// import Profile from "../assets/profile.jpg";
// import ProjectIMG1 from "../assets/Projects/TRP.png";
// import ProjectIMG2 from "../assets/Projects/NightSpot.png";
// import ProjectIMG3 from "../assets/Projects/TodoApp.png";
// import ProjectIMG4 from "../assets/Projects/OrderForm.png";
// import ProjectIMG5 from "../assets/Projects/SurveyForm.png";

import { BiLogoCPlusPlus, BiLogoFlask, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJava, FaLaravel, FaNodeJs, FaPhp, FaPizzaSlice, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiPostman, SiTailwindcss } from "react-icons/si";

import { TbFileTypeSql } from "react-icons/tb";

export const MyData = {
    intro: {
        name:   "Mark Edison Rosario",
        title:  "Full Stack Developer",
        desc: ["Hi, you can call me Mark!", "I code ideas into existence, one line at a time."],
        links: {
            github:     "https://github.com/MrYious",
            linkedin:   "https://www.linkedin.com/in/rosariomark/",
        }
    },
    about: {
        header: "My name's Mark. I'm an aspiring developer and I'm actively looking for opportunities to kickstart my career.",
        body:   "I'm a graduating Computer Science student at the Polytechnic University of the Philippines - Manila. I'm an enthusiastic developer with a strong love for technology and a passion for crafting engaging digital experiences. With a keen eye for detail and a knack for problem-solving, I thrive in dynamic environments where innovation is valued. ",
        footer: "Excited to contribute my skills and enthusiasm to projects that both inspire and challenge, I'm committed to ongoing learning and development in the dynamic field of software development. Right now, I'm continuously exploring the MERN stack for full stack development.",
    },
    skills: {
        list: [
            { name: "HTML",         icon: FaHtml5,              category: "Frontend"},
            { name: "CSS",          icon: FaCss3Alt,            category: "Frontend"},
            { name: "Javascript",   icon: BiLogoJavascript,     category: "Frontend"},
            { name: "ReactJS",      icon: FaReact,              category: "Frontend"},
            { name: "Typescript",   icon: BiLogoTypescript,     category: "Frontend"},
            { name: "NextJS",       icon: SiNextdotjs,          category: "Frontend"},
            { name: "TailwindCSS",  icon: SiTailwindcss,        category: "Frontend"},

            { name: "NodeJS",       icon: FaNodeJs ,     category: "Backend"},
            { name: "ExpressJS",    icon: FaPizzaSlice ,     category: "Backend"},
            { name: "REST Api",     icon: FaPizzaSlice ,     category: "Backend"},
            { name: "Flask",        icon: BiLogoFlask,     category: "Backend"},
            { name: "Python",       icon: FaPython,     category: "Backend"},
            { name: "Laravel",      icon: FaLaravel,     category: "Backend"},
            { name: "PHP",          icon: FaPhp,     category: "Backend"},
            { name: "SQL",          icon: TbFileTypeSql,     category: "Backend"},
            { name: "MySQL",        icon: SiMysql,     category: "Backend"},
            { name: "MongoDB",      icon: BiLogoMongodb,     category: "Backend"},

            { name: "Git",          icon: FaGit,     category: "Other"},
            { name: "GitHub",       icon: FaGithub,     category: "Other"},
            { name: "Postman",      icon: SiPostman,     category: "Other"},
            { name: "Java",         icon: FaJava,     category: "Other"},
            { name: "C/C++",        icon: BiLogoCPlusPlus,     category: "Other"},
            { name: "VB.Net",       icon: FaPizzaSlice,     category: "Other"},
        ],
        note:   "I've been using and learning the MERN stack and its related libraries for around 2 years now as this is the stack that I am really interested to pursue. Nevertheless, I've learned various languages and technologies from our university which greatly helped build my fundamentals and I've included them to showcase my diverse understanding of languages and my ability to quickly learn if demanded. "
    },
    projects: [
        {
            title: "Travel Route Planner",
            // image: ProjectIMG1,
            description: "A web application that calculates the most optimal route in the given multiple destination. It solves the Traveling Salesman Problem using Brute Force and Heuristic Algorithm. ",
            techs: ["HTML", "CSS", "JS", "ReactJS", "Maps API"],
            link: "https://github.com/MrYious/Automatic-Travel-Route-Planner"
        },
        {
            title: "NightSpot",
            // image: ProjectIMG2,
            description: "A forum application that allows users to register for an account in order to create or join popular spots (channels) and post, comment and reply. Inspired by Reddit",
            techs: ["Java", "JavaFX", "MySQL"],
            link: "https://github.com/MrYious/NightSpot"
        },
        {
            title: "ToDo Application",
            // image: ProjectIMG3,
            description: "A simple todo application made while learning and practicing ReactJS",
            techs: ["HTML", "CSS", "JS", "ReactJS"],
            link: "https://github.com/MrYious/TodoApp"
        },
        {
            title: "Order Form",
            // image: ProjectIMG4,
            description: "A simple application required by Website Development course subject to highlight database connection and query language.",
            techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "SQL"],
            link: "https://github.com/MrYious/WebDevelopment/tree/master/Group%20Activities/OrderForm"
        },
        {
            title: "Survey Form",
            // image: ProjectIMG5,
            description: "A simple application required by Website Development course subject to highlight PHP Session",
            techs: ["HTML", "CSS", "JS", "PHP"],
            link: "https://github.com/MrYious/WebDevelopment/tree/master/Group%20Activities/SurveyForm"
        },
   ],
    contact: {
        email:      "rosariomark37@gmail.com",
        address:    "City of San Pedro, Laguna",
        phone:      "(+63) 932 283 1860",
        socials: {
            github:     "https://github.com/MrYious",
            facebook:   "https://www.facebook.com/MrYious0143/",
            linkedin:   "https://www.linkedin.com/in/rosariomark/",
            instagram:  "https://www.instagram.com/m_rked/",
            reddit:     "https://www.reddit.com/user/MrYious43",
        }
    }
}