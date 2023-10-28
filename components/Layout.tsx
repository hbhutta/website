import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children } : any) {
    return (
        <div className="mx-auto max-w-6xl flex flex-col min-h-screen px-4 py-6">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}