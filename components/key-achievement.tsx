import { AwardIcon, ScalingIcon, SmartphoneIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function KeyAchievement() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 grid-rev'>
        <div className='space-y-4 order-last lg:order-first'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Key Achievements
            </h2>
            <p className='max-w-[600px] text-gray-500 dark:text-gray-400'>
              From its inception, CeRID has been well positioned in research,
              implementing development and humanitarian programs and supporting
              community capacity building, peace and dialogue, and gender
              equity.
            </p>
            <p className='max-w-[600px] text-gray-500 dark:text-gray-400'>
              Despite CeRID’s dominant food security, livelihoods, resilience
              and climate smart agriculture, education and skill training, and
              emergency response.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <AwardIcon className='h-6 w-6 text-primary' />
                <h3 className='text-lg font-semibold'>Industry Leader</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                Recognized as a leading innovator in our field.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <ScalingIcon className='h-6 w-6 text-primary' />
                <h3 className='text-lg font-semibold'>Rapid Expansion</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                Experienced exponential growth over the past 5 years.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <UsersIcon className='h-6 w-6 text-primary' />
                <h3 className='text-lg font-semibold'>Trusted by Millions</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                Serving a global customer base of over 5 million.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <SmartphoneIcon className='h-6 w-6 text-primary' />
                <h3 className='text-lg font-semibold'>Innovative Solutions</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                Pioneering cutting-edge technologies to transform the industry.
              </p>
            </div>
          </div>
        </div>
        <Image
          height={550}
          width={550}
          alt='Key Achievements'
          className='mx-auto lg:aspect-square overflow-hidden rounded-xl object-cover sm:w-full'
          src='https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          objectFit='contain'
        />
      </div>
    </section>
  )
}
