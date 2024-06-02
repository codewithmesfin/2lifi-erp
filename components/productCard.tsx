/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductCard({item,index}:any) {
    const navigator = useRouter()
  return (
    <div
    data-aos={index % 2 == 0 ? 'fade-down' : 'fade-up'}
    data-aos-duration={2000 + index * 10}
    style={{ backgroundColor: item.bg }}
    className="border border-gray-100 cursor-pointer h-full rounded-xl hover:border-4"
    onClick={() => navigator.push(`${item.href}`)}
  >
    <div>
      <div>
        <div className={`${item.free?'bg-gradient-to-r from-blue-400  to-green-400':'bg-gradient-to-r from-blue-400 to-red-400'} text-sm text-white rounded-tr-xl rounded-bl-lg absolute flex justify-center items-center w-16 h-10 right-0 p-4`}>
         {item.free?'FREE':"PRO"}
        </div>
        <div className="h-full md:h-[300px] w-full">
          <img src={item.banner} alt="" className="object-cover rounded-t-xl w-full h-full" />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-lg md:text-xl py-2 text-gray-900 font-bold">
          {item.title}
        </h1>
        <p className="line-clamp-3 text-[#333333]">
          {item.description}
        </p>
        <div className="mt-5 flex justify-between items-center space-x-3 md:space-x-10">

          <div className="w-full md:w-1/2 flex items-center space-x-2">
            <CodeBracketIcon className="h-6 w-6" />
            <h1 className="text-gray-900 font-bold">
              {item.developer}
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <Link href={`${item.href}`}
              className="rounded-full text-sm text-white flex items-center justify-evenly space-x-2 bg-gray-900 py-3 px-3"
            >
              <span>Browse module</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
