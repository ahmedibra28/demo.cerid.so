import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ThematicAreas() {
  return (
    <section
      className='bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-12'
      id='thematic-areas'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>
          Thematic Areas
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <Image
              alt='Thematic Areas 2'
              className='w-full h-48 object-cover'
              height={300}
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/300',
                objectFit: 'cover',
              }}
              width={500}
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2'>
                Sustainable Gardening Tips for Urban Dwellers
              </h3>
              <p className='text-gray-700 mb-4'>
                Learn how to create a thriving garden in your small urban space
                and contribute to a greener environment.
              </p>
              <Link
                className='inline-flex items-center text-brand hover:text-green-800 font-medium transition-colors'
                href='#'
              >
                Read More
                <ArrowRightIcon className='h-5 w-5 ml-2' />
              </Link>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <Image
              alt='Thematic Areas 2'
              className='w-full h-48 object-cover'
              height={300}
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/300',
                objectFit: 'cover',
              }}
              width={500}
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2'>
                The Importance of Protecting Endangered Species
              </h3>
              <p className='text-gray-700 mb-4'>
                Explore the critical role of biodiversity conservation and how
                you can contribute to preserving threatened species.
              </p>
              <Link
                className='inline-flex items-center text-brand hover:text-green-800 font-medium transition-colors'
                href='#'
              >
                Read More
                <ArrowRightIcon className='h-5 w-5 ml-2' />
              </Link>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <Image
              alt='Thematic Areas 3'
              className='w-full h-48 object-cover'
              height={300}
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/300',
                objectFit: 'cover',
              }}
              width={500}
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2'>
                Recycling 101: A Guide to Reducing Waste
              </h3>
              <p className='text-gray-700 mb-4'>
                Discover simple and effective ways to reduce your environmental
                footprint through proper waste management.
              </p>
              <Link
                className='inline-flex items-center text-brand hover:text-green-800 font-medium transition-colors'
                href='#'
              >
                Read More
                <ArrowRightIcon className='h-5 w-5 ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
