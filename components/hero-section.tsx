import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-brand text-white'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Centre for Research and Integrated Development
              </h1>
              <p className='max-w-[600px] text-gray-300 dark:text-gray-400 md:text-xl'>
                Is a non-governmental, non-profit organization founded and
                became operational in 2005 and a fully-fledged institution in
                2010. CeRID is governed by the Board of Directors, who are
                responsible for policy level, and the Executive team, who are
                responsible for the program and operational management of the
                organization.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Button size='lg'> Donate Now </Button>
              <Button size='lg' variant='outline' className='bg-transparent'>
                Learn More
              </Button>
            </div>
          </div>
          <Image
            height={550}
            width={550}
            alt='Hero'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:lg:aspect-square'
            src='https://plus.unsplash.com/premium_photo-1678837556129-d8cdd80cbe25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
      </div>
    </section>
  )
}
