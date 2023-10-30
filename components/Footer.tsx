export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <span className="font-extralight text-gray-400 text-center mt-auto mb-10">{currentYear} &copy; Haad Bhutta</span>
    )
}