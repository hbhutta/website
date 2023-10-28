import BlogCardType from "@/types/BlogCardType";
import Link from "next/link";

/**
 * 
 * @param blog_title 
 * @returns Returns the string converted to lowercase with whitespace replaced with '-'
 */
function blogRoute(blog_title: string) {
    return '/blogs/' + blog_title.toLowerCase().replace(/\s/g, '-');
}

export default function BlogCard({ blog_title, published_date, tags} : BlogCardType) { 
    const tagList = tags.map((tag) => <span id='blog-tag' className="text-lg font-sans font-extralight rounded-lg bg-white text-slate-400 mx-2 px-1.5 py-0.5 border-solid border-2 border-slate-400">{tag}</span>)

    return (
        <div id='blog-card' className="rounded-lg mx-2 my-2">
            <Link href={blogRoute(blog_title)}><span id='blog-title' className="text-4xl font-semibold hover:text-teal-500">{blog_title}</span></Link>
            <div id='blog-info' className="flex justify-between my-3">
                <span id='published-date' className="text-base font-semibold text-gray-400">{published_date}</span>
                <div id='blog-tags'>{tagList}</div>
            </div>
            <hr/>   
        </div>
    )
}