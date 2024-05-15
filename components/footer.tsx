import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full mt-8 py-8'>
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>
        Get In Touch
      </h2>
      <p className='text-center md:text-lg'>
        Let Us Help You Overshoot Your Goals in the Right Ways.
      </p>

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='space-y-2'>
            <h3 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
              Contact Us
            </h3>
            <div className='flex items-center space-x-2'>
              <PhoneIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                123-456-7890
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <MailIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                info@company.com
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <LocateIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                123 Main St, Anytown USA
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='container'>
        <Image
          alt='Company Location'
          className='w-full h-80 rounded-md object-cover'
          height={100}
          src='https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={400}
        />
      </div>
    </footer>
  )
}
