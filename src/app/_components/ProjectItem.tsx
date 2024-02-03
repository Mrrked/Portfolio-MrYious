export default function ProjectItem(props: { project: { title: string; image: any; description: string; techs: string[]; github: string; demo: string; }} ) {

    const handleOpenLink = (link: string) => {
        window.open(link, "_blank", "noreferrer")
    }

    return(<div className="flex flex-col w-1/4 border-black border-2 rounded text-center shadow-md shadow-black">
        <div className=" bg-black">
            <img src={props.project.image.src} alt={props.project.title} />
        </div>
        <div className="font-bold text-lg border-y-2 border-black p-1">
            {props.project.title}
        </div>
        <div className="italic text-sm p-2">
            {props.project.description}
        </div>
        <div className="flex flex-wrap gap-1 justify-center pb-2">
            {props.project.techs.map((tech) => <div className="px-2 border-2 border-black rounded-full">
                {tech}
            </div>)}
        </div>
        <div className=" flex justify-between border-black border-t-2 font-semibold">
            <button onClick={()=>{handleOpenLink(props.project.github)}} disabled={props.project.github === "N/A"} className={`w-1/2 p-2 ${props.project.github === "N/A"? 'bg-gray-300' : 'hover:bg-sky-300'}`}>
                GitHub
            </button>
            <div className="border-x-2 border-black"></div>
            <button onClick={()=>{handleOpenLink(props.project.demo)}} disabled={props.project.demo === "N/A"} className={`w-1/2 p-2 ${props.project.demo === "N/A"? 'bg-gray-300' : 'hover:bg-sky-300'}`}>
                Demo
            </button>
        </div>
    </div>)
}