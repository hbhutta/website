import ProjectCardType from "@/types/ProjectCardType"

export default function ProjectCard({project_title, project_desc, project_skills, project_completion_date} : ProjectCardType) {
    const skills = project_skills.map((skill) => <span className="font-sans font-semibold text-lg mx-2">{skill}</span>);

    return (
        <div className="rounded-lg shadow-xl mx-4 my-4 px-2 py-2 dark:bg-zinc-300 bg-zinc-400">
            <div className="text-2xl">{project_title}</div>
            <div className="">
                {skills}
            </div>
        </div>
    )
}