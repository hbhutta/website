import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div>
      <Layout>
        <div className='m-auto max-w-lg'>
          <h1 className='text-2xl font-semibold font-sans text-center py-2'>Hi, I'm Haad Bhutta!</h1>
          <p className='font-sans font-light text-left pb-4 text-lg'>
            Welcome to my website. I am a UBC student majoring in mathematics with a concentration in statistics 
            and computer science courses. I am passionate about software development &#8212; especially about scalable software,
            system design and writing APIs.
          </p>
          <p className='font-sans font-light text-left pb-4 text-lg'>
            I enjoy writing attractive user-experiences. I am experienced in front-end development with the <code>Next.js</code> framework, <code>Tailwind</code>,
            and using <code>TypeScript</code> to follow best practices. 

          </p>
          <p className='font-sans font-light text-left pb-4 text-lg'>
            <em>I am currently seeking internship and co-op opportunities in full-stack software development.</em>
          </p>
        </div>
      </Layout>
    </div>
  )
}
