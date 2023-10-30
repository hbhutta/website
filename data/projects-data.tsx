import ProjectCardType from "@/types/ProjectCardType";

const projects: ProjectCardType[] = [
    {
        project_title: 'My Personal Website',
        project_completion_date: 'November, 2023',
        project_desc: 'My personal website made with Next.js and styled with Tailwind',
        project_skills: ['Next.js', 'TypeScript', 'HTML', 'CSS (Tailwind)']
    },
    {
        project_title: 'Quran Audio-Classifying ConvNet',
        project_completion_date: 'TBD',
        project_desc: 'A ConvNet that classifies verses read from the Holy Quran',
        project_skills: ['Python', 'PyTorch', 'TensorFlow', 'numpy', 'matplotlib', 'scikit', 'XGBoost']
    }
]

export default projects;