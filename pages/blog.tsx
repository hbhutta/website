import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs-data";

export default function Projects() {
    const blogList = blogs.map((blog) => <BlogCard blog_title={blog.blog_title} published_date={blog.published_date} tags={blog.tags}></BlogCard>)

    return (
        <Layout>{blogList}</Layout>
    )
}