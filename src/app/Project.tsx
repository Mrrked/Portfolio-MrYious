import ProjectItem from "./_components/ProjectItem";

export default function Project(props: { projects: { title: string; image: any; description: string; techs: string[]; github: string; demo:string; }[]; }){
    return(
        <section id='projects' className="flex flex-col items-center py-7 gap-10">
            <div className="text-xl font-bold border-4 border-black px-4 py-2 rounded">
                My Projects
            </div>
            <div className="flex flex-wrap justify-center items-center px-10 gap-4 ">
                {props.projects.map((project, i) => <ProjectItem key={i} project={project}/>)}
            </div>
        </section>
    )
}