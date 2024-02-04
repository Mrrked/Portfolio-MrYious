import { IconType } from "react-icons";

export default function SkillItem(props: {skill: { name: string, icon: IconType, category: string }}) {


    return(<div className="flex flex-col border-2 border-black w-24 h-24 items-center justify-center gap-1">
        <props.skill.icon className="text-5xl"/>
        <div className=" text-xs font-bold">{props.skill.name}</div>
    </div>)
}