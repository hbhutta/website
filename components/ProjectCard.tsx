import ProjectCardType from "@/types/ProjectCardType";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({project_title, project_desc, project_skills, project_completion_date, path_to_img, github_link} : ProjectCardType) {
    
    const skills = project_skills.map((skill) => <span className="font-sans font-normal text-sm mr-2">{skill}</span>);
    const img_path = require('/public/project_photos/' + path_to_img);
    const github_icon = require('/public/contact_icons/github.svg');

    return (
        <div className="project-card min-w-fit w-auto h-auto px-1 py-1">
            <div className="">
                <Image src={img_path} width={500} height={500} alt='alt-text'></Image>
                <Link href='https://github.com/hbhutta/website'>
                    <Image src={github_icon}  width={25} height={25} alt="github-icon" className="opacity-5"/>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-1">
                <div id='project-title-and-links'>
                    <span className="text-2xl font-bold">{project_title}</span>
                </div>
                
                <span>{project_completion_date}</span>
                <div className="whitespace-pre-wrap bg-red-600 flex">
                    {skills}
                </div>
                
                <div className="whitespace-break-spaces bg-red-500">
                    <p className="font-normal text-base">{project_desc}</p>
                </div>
            </div>
        </div>
    )
}