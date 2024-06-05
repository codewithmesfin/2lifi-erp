/* eslint-disable @next/next/no-img-element */

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";




export default function Home() {


    return (
        <div>
            <section
                className="bg-green-200 h-screen flex items-center">
                <div className="w-[90%] mx-auto pt-32">
                    <div className="">
                        <div className="w-full">
                            <div className="mx-auto w-32 mb-5">
                                <Image
                                    className="h-32 w-32 w-auto"
                                    src="/logo.png"
                                    alt=""
                                    height={50} width={50}
                                />
                            </div>
                            <h1
                                style={{ lineHeight: 1.2 }}
                                className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-600 to-green-600 text-center text-transparent bg-clip-text"
                            >
                                Coming soon
                            </h1>
                            <h2 className="py-6 text-gray-800 text-center text-lg md:text-2xl">
                                Our engineers are working hard to make <br /> this page fully functional.
                                Kindly, we requested you to wait a few days.
                            </h2>
                        </div>
                        <div className="flex justify-center pt-8 md:pt-16">
                            <Link
                                href="/"
                                className=" flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-600 hover:from-blue-500 hover:to-green-100 md:text-lg text-white px-4 py-3"
                            >
                                <span>Go to homepage</span>
                                <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                            </Link>

                        </div>
                    </div>
                </div>

            </section>



        </div>
    );
}
