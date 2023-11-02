import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const iconWidth: number = 25;
    const iconHeight: number = 25;
    return (
        <div className="flex justify-around">
            <span id='copyright' className="flex justify-center font-extralight text-gray-400 mt-auto pt-10 mb-10">{currentYear} &copy; Haad Bhutta</span>
            <div id='contact-links' className="flex gap-8">
                <Link href='https://github.com/hbhutta'>
                    <Image src={require('../public/contact_icons/github.svg')} width={iconWidth} height={iconHeight} alt="github" className="mt-10 opacity-25 hover:opacity-70 hover:animate-pulse"/>
                </Link>
                <Link href='https://www.linkedin.com/in/haad-bhutta/'>
                    <Image src={require('../public/contact_icons/linkedin.svg')} width={iconWidth} height={iconHeight} alt="github" className="mt-10 opacity-25 hover:opacity-70 hover:animate-pulse"/>
                </Link>
                <Link href='https://stackoverflow.com/users/13244782/hbhutta'>
                    <Image src={require('../public/contact_icons/stackoverflow.svg')} width={iconWidth} height={iconHeight} alt="github" className="mt-10 opacity-25 hover:opacity-70 hover:animate-pulse"/>
                </Link>
                <Link href='https://stackoverflow.com/users/13244782/hbhutta'>
                    <Image src={require('../public/contact_icons/stackoverflow.svg')} width={iconWidth} height={iconHeight} alt="github" className="mt-10 opacity-25 hover:opacity-70 hover:animate-pulse"/>
                </Link>
            </div>
        </div>
        
    )
}

