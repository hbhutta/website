import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import createMDX from '@next/mdx';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => { // For rendering resume PDF using react-pdf
    
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm], // GitHub flavoured markdown
    rehypePlugins: [rehypeHighlight], // Syntax highlighting
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)