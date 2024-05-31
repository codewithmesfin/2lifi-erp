/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {ChevronRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { modules } from "@/data/homepage";
import OnboardingSection from "@/components/onboardingSection";
import { useRouter } from "next/router";



export default function Home() {
    const navigator = useRouter()

    return (
        <div>
            <section
                className="">
                <div className="w-[90%] mx-auto pt-32">
                    <div className="md:flex justify-evenly items-centser md:space-x-10">
                        <div className="w-full">
                            <h1
                                style={{ lineHeight: 1.2 }}
                                className="text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
                            >
                                All-in-one Enterprise Software
                            </h1>
                            <h2 className="py-6 text-gray-800 text-lg md:text-2xl">
                                Explore and choose a Module. Don’t worry, you can always switch it later.
                            </h2>
                        </div>
                        <div>


                        </div>
                    </div>
                </div>

            </section>

            <section className="border-b-4 border-gray-100">
                <div className="w-[90%] mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {
                            modules.map((item, i) => <div
                                key={item.title}
                            >
                                <div
                                    data-aos={i % 2 == 0 ? 'fade-down' : 'fade-up'}
                                    data-aos-duration={2000 + i * 10}
                                    style={{ backgroundColor: item.bg }}
                                    className="border border-gray-100 cursor-pointer h-full rounded-xl hover:border-4"
                                    onClick={() => navigator.push(`${item.href}`)}
                                >
                                    <div>
                                        <div>
                                            <div className="text-sm text-white rounded-tr-xl rounded-bl-lg absolute flex justify-center items-center w-16 h-10 right-0 p-4 bg-gradient-to-r from-blue-400  to-green-400">
                                                FREE
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
                            </div>)
                        }
                    </div>
                </div>
            </section>



            <OnboardingSection />

        </div>
    );
}
