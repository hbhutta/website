import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Layout>
      <div className='mx-auto px-4 md:max-w-2xl'>
        <Image id='about-image' src={require('../public/haad.jpg')} width={300} height={100} alt='cotinga' className='m-auto rounded-2xl hover:shadow-gray-900 hover:shadow-xl hover:rotate-3'></Image>
        <div id='about' className=''>
          <h1 className='text-2xl font-semibold font-sans text-center my-8'>Hi, I'm Haad Bhutta!</h1>
          <p className='about-para'>
            Welcome to my website. I am a UBC student majoring in mathematics, with a concentration in computer science. I am passionate about test-driven software development, designing scalable systems and 
            writing secure APIs with the latest technologies. I also enjoy writing functional and attractive user experiences using modern web development practices.
          </p>

          <p className='about-para'>Some tools and technologies I have experience working with:</p>
          <div className='md:mx-5 grid grid-cols-3'>
              <ul className='m-auto'>
                <li className='skill'>React.js</li>
                <li className='skill'>Next.js</li>
                <li className='skill'>TypeScript</li>
                <li className='skill'>HTML</li>
                <li className='skill'>CSS</li>
                <li className='skill'>Tailwind</li>
              </ul>
              <ul className='m-auto my-0'>
                <li className='skill'>Java</li>
                <li className='skill'>C++</li>
                <li className='skill'>Python</li>
                <li className='skill'>RStudio</li>
                <li className='skill'>MongoDB</li>
                <li className='skill'>Mongoose</li>
              </ul>
              <ul className='m-auto my-0'>
                <li className='skill'>Git/GitHub</li>
                <li className='skill'>Vercel</li>
                <li className='skill'>Chrome DevTools</li>
                <li className='skill'>Postman</li>
                <li className='skill'>Powershell</li>
              </ul>
          </div>

          <p className='about-para'> 
            I have extensive experience using <code>GitHub</code> for version controlling &#8212; I also use <code>Git Bash</code> for file navigation 
            and local commits as I find it convenient. I am also a big fan of <code>Vim</code> &#8212; I use the <code>VSCode</code> extension to code faster.
          </p>

          <p className='about-para'>
            <em>I am currently seeking internship and co-op opportunities in full-stack software development.</em>
          </p>
        </div>
      </div>
    </Layout>
  )
}
