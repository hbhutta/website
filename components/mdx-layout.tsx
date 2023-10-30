import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="max-w-2xl m-auto">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
    
    

    // Optionally, to use Tailwind prose typography, write:
    // return <Layout><div className="prose">{children}</div></Layout> 
}