// import Profile from "../assets/profile.jpg";

import { BiLogoCPlusPlus, BiLogoFlask, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJava, FaLaravel, FaNodeJs, FaPhp, FaPizzaSlice, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiPostman, SiRedux, SiTailwindcss } from "react-icons/si";

import BloodLink from "../_assets/images/project_img/BloodLink.webp";
import Hangman from "../_assets/images/project_img/Hangman.webp";
import HateShield from "../_assets/images/project_img/HateShield.webp";
import MaryAlstonHotel from "../_assets/images/project_img/MaryAlstonHotel.webp";
import NightSpot from "../_assets/images/project_img/NightSpot.webp";
import TRP from "../_assets/images/project_img/TRP.webp";
import { TbFileTypeSql } from "react-icons/tb";
import ToDo from "../_assets/images/project_img/ToDo.webp";
import placeholder from "../_assets/images/project_img/placeholder.webp";

export const MyData = {
    intro: {
        name:   "Mark Edison Rosario",
        title:  "Aspiring Full Stack Developer",
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
            { name: "Redux",        icon: SiRedux,              category: "Frontend"},
            { name: "TailwindCSS",  icon: SiTailwindcss,        category: "Frontend"},
            { name: "SASS",         icon: FaSass,               category: "Frontend"},

            { name: "NodeJS",       icon: FaNodeJs ,            category: "Backend"},
            { name: "ExpressJS",    icon: FaPizzaSlice ,        category: "Backend"},
            { name: "REST Api",     icon: FaPizzaSlice ,        category: "Backend"},
            { name: "Python",       icon: FaPython,             category: "Backend"},
            { name: "PHP",          icon: FaPhp,                category: "Backend"},
            { name: "SQL",          icon: TbFileTypeSql,        category: "Backend"},
            { name: "MySQL",        icon: SiMysql,              category: "Backend"},
            { name: "MongoDB",      icon: BiLogoMongodb,        category: "Backend"},

            { name: "Git",          icon: FaGit,                category: "Other"},
            { name: "GitHub",       icon: FaGithub,             category: "Other"},
            { name: "Postman",      icon: SiPostman,            category: "Other"},
            { name: "Java",         icon: FaJava,               category: "Other"},
            { name: "C/C++",        icon: BiLogoCPlusPlus,      category: "Other"},
            { name: "VB.Net",       icon: FaPizzaSlice,         category: "Other"},
        ],
        note:   "I've been using and learning the MERN stack and its related libraries for around 2 years now as this is the stack that I am really interested to pursue. Nevertheless, I've learned various languages and technologies from our university which greatly helped build my fundamentals and I've included them to showcase my diverse understanding of languages and my ability to quickly learn if demanded. "
    },
    projects: [
        {
            title: "HateShield",
            image: HateShield,
            description: "A website application that identifies if a given statement is hate speech or non-hate speech. It uses a trained Logistic Regression model and an Ensemble Model. (Thesis) ",
            techs: ["React", "Next", "Flask", "NLP", "ML/AI"],
            github: "https://github.com/MrYious/HateShield-Frontend",
            demo: "https://hateshield.vercel.app/",
        },
        {
            title: "BloodLink",
            image: BloodLink,
            description: "A social application for donating blood and finding donors. Users have own timeline containing donation history and reviews where they can rate each other after every successful donation.",
            techs: ["ReactJs", "NodeJs", "MySQL", "Express"],
            github: "https://github.com/MrYious/BloodLink",
            demo: "https://bloodlink.vercel.app/"
        },
        {
            title: "Mary Alston Hotel",
            image: MaryAlstonHotel,
            description: "A hotel booking and reservation management system for a capstone project. It includes an admin interface in /admin which also includes payment system and sales report generation. ",
            techs: ["HTML", "CSS", "JS", "PHP", "MySQL"],
            github: "https://github.com/MrYious/MaryAlstonHotel",
            demo: "https://maryalstonhotel.000webhostapp.com/alston_main.html"
        },
        {
            title: "Travel Route Planner",
            image: TRP,
            description: "A website that calculates the most optimal route in the given multiple destination. It solves the Traveling Salesman Problem using Brute Force and Heuristic Algorithm. ",
            techs: ["HTML", "CSS", "JS", "React", "Maps API"],
            github: "https://github.com/MrYious/Automatic-Travel-Route-Planner",
            demo: "https://travel-route-planner-315906.web.app/"
        },
        {
            title: "NightSpot",
            image: NightSpot,
            description: "A desktop forum application that allows users to register for an account in order to create or join popular spots (channels) and post, comment and reply. Inspired by Reddit",
            techs: ["Java", "JavaFX", "MySQL"],
            github: "https://github.com/MrYious/NightSpot",
            demo: "N/A"
        },
        {
            title: "TODO App",
            image: ToDo,
            description: "A simple website for personal task management. It has a light/dark toggle for theme selection, has a mobile-friendly interface, and uses local storage. A challenged accepted from FrontendMentor.io",
            techs: ["React", "Typescript", "Next", "Tailwind"],
            github: "https://github.com/MrYious/TodoApp-NextJS",
            demo: "https://todoapp-mark.vercel.app/"
        },
        {
            title: "Hangman",
            image: Hangman,
            description: "A fun and interactive hangman game containing different categories. It includes customizable settings such as time limit, health and difficulty. More to come!",
            techs: ["React", "Vite", "Typescript", 'Redux'],
            github: "https://github.com/MrYious/Hangman-Game",
            demo: "https://hangman-mark.vercel.app/"
        },
        {
            title: "Style.css (Ongoing)",
            image: placeholder,
            description: "A simple website showcasing styled elements using SASS. It contains interactive and dynamic styles. I made this while learning SASS and Redux State Management.",
            techs: ["React", 'Vite', 'Redux', 'SASS'],
            github: "https://github.com/MrYious/Style.css",
            demo: "https://style-css-mark.vercel.app/"
        },
        {
            title: "SmartQ (Ongoing)",
            image: placeholder,
            description: "My ongoing project which is an interactive quiz application for teachers and students. It allows teachers to host quizzes for students synchronously and asynchronously. ",
            techs: ["React", "TS", "Node", "MongoDB", 'Redux'],
            github: "https://github.com/MrYious/SmartQ-Frontend",
            demo: "https://smartq.vercel.app/"
        },
        // {
        //     title: "Title",
        //     image: placeholder,
        //     description: "A website that calculates the most optimal route in the given multiple destination. It solves the Traveling Salesman Problem using Brute Force and Heuristic Algorithm. ",
        //     techs: ["HTML", "CSS", "JS", "ReactJS"],
        //     github: "N/A",
        //     demo: "N/A"
        // }
   ],
    contact: {
        email:      "rosariomark37@gmail",
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