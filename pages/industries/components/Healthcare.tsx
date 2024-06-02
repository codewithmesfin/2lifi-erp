/* eslint-disable @next/next/no-img-element */
import StartOrlearnButton from '@/components/StartOrlearnButton'
import { healthcareItems } from '@/data/industryItems'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Healthcare() {

    return (
        <div>
            <div className="md:flex items-center md:space-x-10">

                <div data-aos='zoom-in'
                    data-aos-duration='2000'
                    className="w-full w-1/2 h-full">
                    <img src="https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1717331291~exp=1717334891~hmac=6ba6051e20f91db3d388e091f9a0370b1c2692c2c5914aef1e8c7d50abcb4380&w=1800"
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
                        2. Healthcare
                    </h1>
                    <p className="text-lg md:text-xl py-3 text-gray-600">
                        Frappe Health is an open source & easy-to-use hospital information system(HIS) for all healthcare organisations.
                    </p>
                    <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                        {
                            healthcareItems.map((item, i) => <div key={item.title}
                            >
                                <h1 className='text-lg font-semibold bg-gradient-to-r from-green-600 to-[#007aff] inline-block text-transparent bg-clip-text'>{item.title} </h1>
                                {
                                    item.children.map((child)=><div key={child}
                                    className="flex  space-x-2 py-1">
                                    <CheckCircleIcon className="mt-1 w-4 h-4 text-green-400" />
                                    <span>{child}</span>
                                </div>)
                                }
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
