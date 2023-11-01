import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects-data";
import Link from "next/link";

export default function Projects() {
    const projectCards = projects.map((project) => <ProjectCard
        project_title={project.project_title}
        project_completion_date={project.project_completion_date}
        project_desc={project.project_desc}
        project_skills={project.project_skills}
        path_to_img={project.path_to_img}
        github_link={project.github_link}
        ></ProjectCard>)

    return (
        <Layout>
                <div className="grid grid-cols-2 md:max-w-2xl mx-auto">
                    {projectCards}
                </div>
        </Layout>
    )
}