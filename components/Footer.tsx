export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <span className="font-extralight text-gray-400 text-center">{currentYear} &copy; Haad Bhutta</span>
    )
}