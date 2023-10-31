import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children } : any) {
    return (
        <div className="grid grid-cols-1 justify-center md:max-w-3xl min-w-fit mx-auto">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}