import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Layout>
      <div className='mx-auto px-4 md:max-w-xl'>
        <Image id='about-image' src={require('../public/cotinga.jpg')} width={500} height={300} alt='cotinga' className='m-auto rounded-2xl hover:shadow-gray-900 hover:shadow-xl'></Image>
        <div id='about' className=''>
          <h1 className='text-2xl font-semibold font-sans text-center my-8'>Hi, I'm Haad Bhutta!</h1>
          <p className='about-para'>
            Welcome to my website. I am a UBC student majoring in mathematics. I am passionate about software development &#8212; especially about scalable software,
            system design and writing APIs.
          </p>
          <p className='about-para'>
            My experience with <code>Next.js</code>, <code>Tailwind</code>, and <code>TypeScript</code> allows me to write 
            functional and attractive user experiences using modern web development practices.

          </p>
          <p className='about-para'>
            <em>I am currently seeking internship and co-op opportunities in full-stack software development.</em>
          </p>
        </div>
      </div>
    </Layout>
  )
}
