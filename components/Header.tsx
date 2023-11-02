import Link from "next/link";
import NavButton from "./NavButton";
import ToggleButton from "./ToggleButton";
import 'animate.css';

export default function Header() {
    
    return ( // old style: flex justify-between font-sans font-medium text-xl my-6
        <div className="sm:grid sm:grid-cols-1 sm:gap-2 md:flex md:justify-between font-sans font-medium text-xl mt-4 mb-7 px-7">
            {/* flex justify-center mt-6 whitespace-nowrap hover:text-teal-500 text-4xl font-semibold hover:italic */}
            <Link href='/'><span className="flex justify-center mt-6 whitespace-nowrap hover:text-teal-500 text-4xl font-semibold hover:italic animate__animated hover:animate-pulse">Haad Bhutta</span></Link>
            <div className="flex justify-center my-2">
                <NavButton route='/projects' name='Projects'/>
                <NavButton route='/blogs' name='Blogs'/>
                <NavButton route='/resume' name='Resume'/>
                <ToggleButton/>
            </div>
        </div>
    )
}   