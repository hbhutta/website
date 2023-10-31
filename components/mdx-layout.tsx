import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return ( // mx-auto max-w-2xl min-h-screen
        <Layout><div className="grid grid-cols-1 sm:max-w-xl md:max-w-2xl justify-center mx-auto px-8">{children}</div></Layout>
    )
    
    

    // Optionally, to use Tailwind prose typography, write:
    // return <Layout><div className="prose">{children}</div></Layout> 
}