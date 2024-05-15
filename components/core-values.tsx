import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  BadgeIcon,
  CreativeCommonsIcon,
  EqualIcon,
  LinkIcon,
} from 'lucide-react'

export default function CoreValues() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-6'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Our Core Values
          </h2>
          <p className='text-gray-500 md:text-xl dark:text-gray-400'>
            The principles that guide our work and shape our culture.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2'>
          <Card className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'>
            <CardContent className='space-y-3 p-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                  <CreativeCommonsIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                </div>
                <h3 className='text-2xl font-semibold'>Creativity</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                We proactively and deliberately use research to inform our
                community engagements; we will continuously seek innovative and
                noble solutions to old and new problems; we will be at the
                cutting edge of finding new ways and methods of bringing change.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'>
            <CardContent className='space-y-3 p-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                  <EqualIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                </div>
                <h3 className='text-2xl font-semibold'>Equity</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                We endeavor to ensure equitable and fair treatment of women,
                men, boys, and girls regardless of their age, education level,
                gender, race, clan, religious affiliation, marginalization
                status; we believe all people should enjoy their inalienable
                human rights.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'>
            <CardContent className='space-y-3 p-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                  <LinkIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                </div>
                <h3 className='text-2xl font-semibold'>Relevance</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                We always ensure that our work is relevant to the context in
                which we work; our work meets the needs of our constituency in
                ways that bring lasting change; we endeavor to ensure that our
                social actions are benchmarked against national, regional, and
                international standards; we regularly monitor what we do to
                ensure appropriateness.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'>
            <CardContent className='space-y-3 p-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                  <BadgeIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                </div>
                <h3 className='text-2xl font-semibold'>Integrity</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                We are keen to ensure transparency and accountability in
                everything that we do; we assure highest level of compliance to
                our stakeholder requirements; we are open and honest in our
                dealings with communities and take our beneficiaries as key
                partners in our work. We espouse modesty, trust, and uprightness
                in everything we do.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'>
            <CardContent className='space-y-3 p-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                  <BadgeIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                </div>
                <h3 className='text-2xl font-semibold'>Dignity</h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                We stand for fair treatment of our staff and others; we check
                our work methods to ensure we do not bring harm to our
                beneficiaries and communities; we integrate conflict sensitive
                approaches while continually seeking to use indigenous and local
                knowledge. We are keen to ensure our staff and stakeholders
                espouse and follow international human rights values and
                instruments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
