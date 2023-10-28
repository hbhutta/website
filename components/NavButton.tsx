import Link from "next/link";

type NavButtonProps = {
    route: string,
    name: string
}

export default function NavButton({ route, name } : NavButtonProps) {
    return (
        <Link href={route}><button className="hover:text-teal-500 mx-5">{name}</button></Link>
    )
}