import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs-data";

export default function Projects() {
    const blogCardList = blogs.map((blogCard) => <BlogCard blog_title={blogCard.blog_title} published_date={blogCard.published_date} tags={blogCard.tags}></BlogCard>)

    return (
        <Layout>
            <div className="grid grid-cols-1 mx-4">
                {blogCardList}
            </div>
        </Layout>
    )
}