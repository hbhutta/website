export default interface ProjectCardType {
    project_title: string,
    project_completion_date: string,
    project_desc: string,
    project_skills: string[],
    path_to_img: string  // Located in ../public,
    github_link: string
}
