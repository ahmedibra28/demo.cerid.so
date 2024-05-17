import React from 'react'
import { Button } from '@/components/ui/button'
import BlurImage from '@/components/blur-image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getShorts } from '@/app/appwrite'
import Markdown from 'react-markdown'

export default async function HeroSection() {
  const hero = await getShorts('hero')
  const heroData = hero?.documents?.[0]

  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-brand text-white'
      id='home'
    >
      <div className='container px-4 md:px-6 w-[95%]'>
        <div className='grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Centre for Research and Integrated Development
              </h1>
              <Markdown className='prose mt-8 max-w-[600px] text-gray-300 dark:text-gray-400 md:text-xl'>
                {heroData?.content}
              </Markdown>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/#contact-us' passHref>
                <Button size='lg'> Contact Now </Button>
              </Link>
              <Link href='/about-us' passHref>
                <Button size='lg' variant='outline' className='bg-transparent'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
              duration: 50,
            }}
            className='mx-auto aspect-video rounded-xl object-cover sm:w-full lg:order-last lg:lg:aspect-square shadow-2xl'
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <BlurImage
                    height={550}
                    width={550}
                    alt='Hero'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:lg:aspect-square'
                    src='https://plus.unsplash.com/premium_photo-1678837556129-d8cdd80cbe25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='text-brand hidden lg:flex' />
            <CarouselNext className='text-brand hidden lg:flex' />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
