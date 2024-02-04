export default function ProjectItem(props: { project: { title: string; image: any; description: string; techs: string[]; github: string; demo: string; }} ) {

    const handleOpenLink = (link: string) => {
        window.open(link, "_blank", "noreferrer")
    }

    return(<div className="flex flex-col sm:w-1/4 border-black border-[1px] rounded text-center shadow-md shadow-black">
        <div className=" bg-black rounded">
            <img src={props.project.image.src} alt={props.project.title} className=" rounded-t" />
        </div>
        <div className="font-bold border-y-[1px] border-black p-1">
            {props.project.title}
        </div>
        <div className="italic text-xs p-2">
            {props.project.description}
        </div>
        <div className="flex flex-wrap gap-1 justify-center pb-2 text-sm">
            {props.project.techs.map((tech, i) => <div key={i} className="px-2 border-[1px] border-black rounded-full">
                {tech}
            </div>)}
        </div>
        <div className=" flex justify-between border-black border-t-[1px] font-semibold">
            <button onClick={()=>{handleOpenLink(props.project.github)}} disabled={props.project.github === "N/A"} className={`w-1/2 p-2 ${props.project.github === "N/A"? 'bg-gray-300' : 'hover:bg-sky-300'}`}>
                GitHub
            </button>
            <div className="border-x-[1px] border-black"></div>
            <button onClick={()=>{handleOpenLink(props.project.demo)}} disabled={props.project.demo === "N/A"} className={`w-1/2 p-2 ${props.project.demo === "N/A"? 'bg-gray-300' : 'hover:bg-sky-300'}`}>
                Demo
            </button>
        </div>
    </div>)
}