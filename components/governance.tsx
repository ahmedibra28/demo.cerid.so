import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Governance() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
      <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 grid-rev'>
        <Image
          height={550}
          width={550}
          alt='CeRID Organizational Chart'
          className='mx-auto lg:aspect-square overflow-hidden rounded-xl object-cover sm:w-full'
          src='https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className=''>
          <div className=''>
            <h1 className='text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Governance
            </h1>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-400'>
              CeRID&apos;s governance structure consists of a two-level
              management system: the Board of Directors (BoD) and the Executive
              Management team.
            </p>
          </div>
          <div className='mt-8'>
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl font-bold tracking-tight'>
                  Board of Directors (BoD)
                </h2>
                <p className='mt-2 text-gray-500 dark:text-gray-400'>
                  The BoD is responsible for setting the strategic direction,
                  financial policies, and HR and administrative policies of
                  CeRID.
                </p>
                <ul className='mt-4 space-y-2 text-gray-500 dark:text-gray-400'>
                  <li className='flex items-start'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M5 13l4 4L19 7'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      />
                    </svg>
                    <span className='ml-3'>
                      Set strategic direction and long-term goals
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M5 13l4 4L19 7'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      />
                    </svg>
                    <span className='ml-3'>
                      Establish financial policies and oversee financial
                      performance
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M5 13l4 4L19 7'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      />
                    </svg>
                    <span className='ml-3'>
                      Develop and implement HR and administrative policies
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='text-2xl font-bold tracking-tight'>
                  Executive Management
                </h2>
                <p className='mt-2 text-gray-500 dark:text-gray-400'>
                  The Executive Management team is responsible for the
                  day-to-day operations, implementation of policies, and
                  reporting to the BoD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
