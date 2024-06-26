/* eslint-disable @next/next/no-img-element */
import StartOrlearnButton from '@/components/StartOrlearnButton'
import { educationItems } from '@/data/industryItems'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Education() {

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
                        3. Education Sectors
                    </h1>
                    <p className="text-lg md:text-xl py-3 text-gray-600">
                        Whether you are running a B-School, an Academy or even a Primary School,
                        the ERPNext Education Module helps you in organizing your entire set-up.
                        You can have your entire Student Database, Fee Structure, Staffing
                        Information, Courses, Curriculum, all defined in ERPNext.
                    </p>
                    <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                        {
                            educationItems.map((item, i) => <div key={item}
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
                    <img src="https://img.freepik.com/free-vector/telecommuting-concept_52683-37089.jpg?t=st=1717413401~exp=1717417001~hmac=937ac24a315cbffa7fec36b5727bdabe9a84b1d0b23eeebf69fd9a6384bf87c6&w=1800"
                        alt="" className='w-full h-full object-cover rounded-xl' />
                </div>

            </div>
        </div>
    )
}
