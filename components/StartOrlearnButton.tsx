import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function StartOrlearnButton() {
  return (
    <div className='flex justify-start items-center space-x-3 md:space-x-10'>
         <Link
                  href="/contact-us"
                  className=" flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-blue-500  to-blue-600 hover:from-blue-500 hover:to-green-600 md:text-lg text-white px-4 py-3"
                >
                  <span>Get started now</span>
                  <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/docs/manufacturing"
                  className="flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-blue-500 hover:to-green-500 md:text-lg text-white px-4 py-3"
                >
                  <span>Learn more</span>
                  <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                </Link>
    </div>
  )
}
