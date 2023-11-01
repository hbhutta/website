import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Link from "next/link";
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

{/* <Link href='/resume.pdf'><p>Download the resume:</p></Link> */}
export default function Resume() {
    return (
        <Layout>
            <div className="flex justify-center mt-10 my-auto mx-auto min-w-fit">
                <object data="/resume.pdf" type="application/pdf" width="90%" height="950px"/>
            </div>
        </Layout>
    )
}

