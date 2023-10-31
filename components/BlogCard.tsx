import BlogCardType from "@/types/BlogCardType";
import Link from "next/link";

/**
 * @param blog_title
 * @returns Returns the string converted to lowercase with whitespace replaced with '-'
 */
function blogRoute(blog_title: string) {
    return '/blogs/' + blog_title.toLowerCase().replace(/\s/g, '-');
}

export default function BlogCard({ blog_title, published_date, tags} : BlogCardType) { 
    const tagList = tags.map((tag) => <span className="blog-tag">{tag}</span>)

    return (
        <div id='blog-card' className="rounded-lg mx-2 my-4">
            <Link href={blogRoute(blog_title)} className="prose"><span id='blog-title' className="text-4xl font-semibold hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500">{blog_title}</span></Link>
            <div id='blog-info' className="flex justify-between my-3">
                <span id='published-date' className="text-base font-semibold">{published_date}</span>
                <div id='blog-tags'>{tagList}</div>
            </div>
            <hr/>   
        </div>
    )
}