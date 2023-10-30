import Image from "next/image";
import BlogMetaType from "@/types/BlogMetaType";
import '../styles/BlogMeta.module.css';

const authorIconStyle = { width: '50px', height: '50px', borderRadius: '50%'}

export default function BlogMeta({date} : BlogMetaType) {
    return (
        <div className="flex mb-10">
            <div id='author-info' className="flex justify-start">
                <a href="https://github.com/hbhutta"><Image src={require('../public/chick.jpg')} alt='chick' style={authorIconStyle} className="border-2 border-teal-500"/></a>
                <div className="grid grid-cols-1">
                    <span className="blog-meta-span dark:text-zinc-300">Haad Bhutta</span>
                    <span className="blog-meta-span dark:text-zinc-300">{date}</span>
                </div> 
            </div>
        </div>
    )
}