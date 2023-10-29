import BlogMeta from "@/components/BlogMeta";
import Layout from "@/components/Layout";

export default function Resume() {
    return (
        <Layout>
            <object width="400" height="500" type="application/pdf" data='./public/resume.pdf'>
                <p>Insert your error message here, if the PDF cannot be displayed.</p>
            </object>
        </Layout>
    )
}