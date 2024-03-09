'use client'

import { Link } from '@chakra-ui/react'

export default function Content() {
  return (
    <div>
      <section id='hero' className='w-full min-h-screen flex justify-center items-center bg-black text-white'>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates, quam veniam consequatur porro sequi, nesciunt illum consectetur ea dolorum, itaque enim non nam ducimus?</h1>
          <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
            About
          </Link>
        </div>
      </section>
      <section id='about' className='w-full min-h-screen flex justify-center items-center flex-col'>
        <h1>Projects</h1>
        <ul className='flex-row flex gap-11'>
          <li>
            <Link href='/projects/1' color='blue.400' _hover={{ color: 'blue.500' }}>
              Project 1
            </Link>
          </li>
          <li>
            <Link href='/projects/2' color='blue.400' _hover={{ color: 'blue.500' }}>
              Project 2
            </Link>
          </li>
        </ul>
      </section>
      <section id='certifications' className='w-full min-h-screen flex justify-center items-center flex-col'>
        <h1>Certifications</h1>
        <ul>
          <li>
            <Link href='/certifications/1' color='blue.400' _hover={{ color: 'blue.500' }}>
              Certification 1
            </Link>
          </li>
          <li>
            <Link href='/certifications/2' color='blue.400' _hover={{ color: 'blue.500' }}>
              Certification 2
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}