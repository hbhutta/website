import Link from "next/link";

type NavButtonProps = {
    route: string,
    name: string
}

export default function NavButton({ route, name } : NavButtonProps) {
    return (
        <Link href={route}><button className="nav-button animated-color">{name}</button></Link>
    )
}