export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <span className="flex justify-center font-extralight text-gray-400 mt-auto pt-10 mb-10">{currentYear} &copy; Haad Bhutta</span>
    )
}