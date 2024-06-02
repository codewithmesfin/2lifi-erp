/* eslint-disable @next/next/no-img-element */
import StartOrlearnButton from '@/components/StartOrlearnButton'
import { manufacturingItems } from '@/data/industryItems'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Manufacturing() {

    return (
        <div>
            <div className="md:flex items-center md:space-x-10">

                <div
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    className="w-full w-1/2 h-full py-10 md:py-1">
                    <h1
                        style={{ lineHeight: 1.2 }}
                        className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
                    >
                        1. Manufacturing Industries
                    </h1>
                    <p className="text-lg md:text-xl py-3 text-gray-600">
                        Improve Manufacturing, Automate operations and workflows, & Boost
                        Business Efficiency with ERPNext Manufacturing Software.
                    </p>
                    <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                        {
                            manufacturingItems.map((item, i) => <div key={item}
                                className="flex items-center space-x-2 py-1"
                            >
                                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                <span>{item}</span>
                            </div>)
                        }
                    </div>
                    <div className="py-4">
                        <StartOrlearnButton />
                    </div>
                </div>

                <div data-aos='zoom-in'
                    data-aos-duration='2000'
                    className="w-full w-1/2 h-full">
                    <img src="https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1717315522~exp=1717319122~hmac=2f7c92402e655471137e4e0668226b2da8ce2c5ad8235721b271fdec9cbd42e7&w=1800"
                        alt="" className='w-full h-full object-cover rounded-xl' />
                </div>

            </div>
        </div>
    )
}
