/* eslint-disable @next/next/no-img-element */
import StartOrlearnButton from '@/components/StartOrlearnButton'
import { educationItems, importExports } from '@/data/industryItems'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ImportExport() {

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
                        4. Import/Export company
                    </h1>
                    <p className="text-lg md:text-xl py-3 text-gray-600">
                        ERPNext can be a valuable tool for import and export companies by
                        streamlining various aspects of their operations.
                    </p>
                    <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                        {
                            importExports.map((item, i) => <div key={item}
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
                    <img src="https://img.freepik.com/free-photo/huge-cargo-crane-harbor-loading-yellow-container-ai-generative_123827-23697.jpg?t=st=1717414301~exp=1717417901~hmac=07e42e241a4a5748a221bf45cbcea2389990eca975ec2af8a1b8967303b1e7f8&w=1800"
                        alt="" className='w-full h-full object-cover rounded-xl' />
                </div>

            </div>
        </div>
    )
}
