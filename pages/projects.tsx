import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects-data";

export default function Projects() {
    const projectCards = projects.map((project) => <ProjectCard
        project_title={project.project_title}
        project_completion_date={project.project_completion_date}
        project_desc={project.project_desc}
        project_skills={project.project_skills}></ProjectCard>)

    return (
        <Layout>
            <div className="grid grid-cols-2">
                {projectCards}
            </div>
        </Layout>
    )
}