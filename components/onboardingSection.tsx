/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function OnboardingSection() {
  return (
    <section className="bg-white">
    <div className="w-[90%] mx-auto py-16">
      <div className="py-4 md:flex md:justify-center md:items-center md:space-x-10">
        <div 
        data-aos="fade-up"
                data-aos-duration="2000"
                 className="w-full md:w-1/3 py-10 md:py-1">
          <img
            src="https://framerusercontent.com/images/LK7ZsZaxzvr3h6LVN45Zz7Ydjc.png?scale-down-to=512"
            alt="calendly"
            className="h-full w-full"
          />
        </div>
        <div data-aos="fade-down"
                data-aos-duration="1000" className="w-full md:w-1/3">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Don’t be late
          </h1>
          <p className="py-4 text-center text-gray-800 text-sm md:text-md">
            Ready to meet with 2lifi team? Click the button below to access
            {"2lifi's"} Calendly and choose a time that works best for you. Once
            {"you've"} selected a date and time, {"you'll"} be all set for your meeting.
          </p>
          <div className="md:flex md:justify-center">
            <Link
              href="https://calendly.com/mesfin-tsegaye/bizenforce"
              rel="noopener noreferrer"
              target="_blank"
              className="py-3 px-3 bg-[#007aff] text-sm text-white rounded-md hover:bg-blue-600 flex justify-center items-center space-x-2"
            >
              <span>Get started today</span>
              <ChevronRightIcon className='w-4 h-4'  />
            </Link>
          </div>
        </div>
        <div data-aos="fade-up"
                data-aos-duration="2000" className="w-full md:w-1/3 py-10 md:py-1">
          <img
            src="https://framerusercontent.com/images/KVIl358mWR8bRB7uBojfiFI.png?scale-down-to=512"
            alt="calendly"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  </section>
  
  )
}
