/* eslint-disable @next/next/no-img-element */

import { modules } from "@/data/homepage";
import OnboardingSection from "@/components/onboardingSection";
import { useRouter } from "next/router";
import ProductCard from "@/components/productCard";



export default function Home() {


    return (
        <div>
            <section
                className="">
                <div className="w-[90%] mx-auto pt-32">
                    <div className="md:flex justify-evenly items-centser md:space-x-10">
                        <div className="w-full">
                            <h1
                                style={{ lineHeight: 1.2 }}
                                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
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
                              <ProductCard item={item} index={i} />
                            </div>)
                        }
                    </div>
                </div>
            </section>



            <OnboardingSection />

        </div>
    );
}
