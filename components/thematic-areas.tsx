import React from 'react'
import { getThematicAreas } from '@/app/appwrite'
import ItemCard from './item-card'

export default async function ThematicAreas() {
  const item = await getThematicAreas()
  const itemData = item?.documents

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
          {itemData?.map((item) => (
            <ItemCard
              key={item?.$id}
              item={{ ...item, slug: `/thematic-areas/${item?.slug}` }}
            />
          ))}
        </div>

        {/* <div className='text-end'>
          <Link href='/thematic-areas' passHref>
            <Button variant='outline' className='w-48 mr-auto mt-8'>
              View All Thematic Areas
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
