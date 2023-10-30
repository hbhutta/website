import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <Layout>
            <div className="mx-auto max-w-2xl min-h-screen">{children}</div>
        </Layout>
    )
    
    

    // Optionally, to use Tailwind prose typography, write:
    // return <Layout><div className="prose">{children}</div></Layout> 
}