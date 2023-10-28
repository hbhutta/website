import Link from "next/link";
import NavButton from "./NavButton";

export default function Header() {
    return (
        <div className="flex justify-between font-sans font-light text-xl">
            <Link href='/'><span className="text-3xl hover:text-teal-500 hover:italic">Haad Bhutta</span></Link>
            <div className="flex justify-evenly">
                <NavButton route='/projects' name='Projects'/>
                <NavButton route='/blog' name='Blog'/>
                <NavButton route='/resume' name='Resume'/>
            </div>
        </div>
    )
}