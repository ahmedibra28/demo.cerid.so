import { GiftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Navigation() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center bg-brand text-white border-b'>
      <Link className='flex items-center justify-center' href='#'>
        <Avatar>
          <AvatarImage src='/logo.webp' />
          <AvatarFallback>CeRID</AvatarFallback>
        </Avatar>

        <span className='sr-only'>Acme NGO</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#'
        >
          About
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#'
        >
          Programs
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#'
        >
          Impact
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#'
        >
          Donate
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#'
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
