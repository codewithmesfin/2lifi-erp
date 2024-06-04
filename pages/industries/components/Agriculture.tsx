/* eslint-disable @next/next/no-img-element */
import StartOrlearnButton from '@/components/StartOrlearnButton'
import { agricultureItems, educationItems } from '@/data/industryItems'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Agriculture() {

    return (
        <div>
            <div className="md:flex items-center md:space-x-10">

            <div data-aos='zoom-in'
                    data-aos-duration='2000'
                    className="w-full w-1/2 h-full">
                    <img src="https://img.freepik.com/free-photo/strawberry-field_1203-7581.jpg?t=st=1717413810~exp=1717417410~hmac=cc8cb679257d06d0ae4dd7ccf5469bad5fd4c405bdfbd11413a468f5261936c8&w=1800"
                        alt="" className='w-full h-full object-cover rounded-xl' />
                </div>

                <div
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    className="w-full w-1/2 h-full py-10 md:py-1">
                    <h1
                        style={{ lineHeight: 1.2 }}
                        className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
                    >
                        4. Agriculture Sectors
                    </h1>
                    <p className="text-lg md:text-xl py-3 text-gray-600">
                        The Agriculture Domain of ERPNext comes with features to record
                        crops and land, track plant, soil, water, weather analytics,
                        and even track diseases and fertilizers. 
                    </p>
                    <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                        {
                            agricultureItems.map((item, i) => <div key={item}
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

            </div>
        </div>
    )
}
