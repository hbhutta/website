import Link from "next/link";
import NavButton from "./NavButton";
import ToggleButton from "./ToggleButton";

export default function Header() {
    return (
        <div className="flex justify-between font-sans font-medium text-xl my-6">
            <Link href='/'><span className="text-3xl hover:text-blue-500 hover:italic text">Haad Bhutta</span></Link>
            <div className="flex justify-evenly">
                <ToggleButton/>
                <NavButton route='/projects' name='Projects'/>
                <NavButton route='/blogs' name='Blogs'/>
                <NavButton route='/resume' name='Resume'/>
            </div>
        </div>
    )
}   