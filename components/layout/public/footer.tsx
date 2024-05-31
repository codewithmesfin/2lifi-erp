import navbarItems from '@/data/navbarItems'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-900 z-10 mt-auto bottom-0">
    <div className="mx-auto md:w-[100%] py-4">
        <div className="md:flex md:justify-evenly">
            <div className="flex flex-wrap justify-center px-3">
                {
                    navbarItems.map((nav:any)=><div key={nav.title} className="py-1 text-white">
                    <Link
                        href={nav.href}
                        className="p-3 text-sm"
                    >
                        { nav.name }
                    </Link>
                </div>)
                }
            </div>
            <h1 className="text-sm text-center text-gray-200 p-3">
                Powered by
                <a
                    className="text-white font-extrabold px-1"
                    href="https://codewithmesfin.et"
                    target="_blank"
                    >Code With Mesfin</a
                >
                - 2023
            </h1>
        </div>
    </div>
</div>
  )
}
