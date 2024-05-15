import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function MissionVision() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
          <Card className='flex flex-col justify-center space-y-4 hover:scale-105 duration-700 hover:shadow-2xl'>
            <CardHeader>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Our Mission
              </h2>
            </CardHeader>
            <CardContent>
              <p className='max-w-[600px] text-gray-500 dark:text-gray-400'>
                To act as an agent of change for peaceful and self-reliant
                communities through the implementation of various programs on
                research and analysis, education and skills development, climate
                change mitigation and adaptation, environment and natural
                resource management, livelihoods and economic empowerment, WASH,
                peacebuilding and conflict transformation, equity, and women
                empowerment.
              </p>
            </CardContent>
          </Card>

          <Card className='flex flex-col justify-center space-y-4 hover:scale-105 duration-700 hover:shadow-2xl'>
            <CardHeader>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Our Vision
              </h2>
            </CardHeader>
            <CardContent>
              <p className='max-w-[600px] text-gray-500 dark:text-gray-400'>
                A peaceful and self-reliant communities in the Horn of Africa
                region and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
