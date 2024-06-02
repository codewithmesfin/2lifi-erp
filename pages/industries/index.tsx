/* eslint-disable @next/next/no-img-element */

import OnboardingSection from "@/components/onboardingSection";
import Manufacturing from "./components/manufacturing";
import Healthcare from "./components/Healthcare";
import Education from "./components/Education";




export default function Industries() {


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
                                Target Industries
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
                <div className="w-[90%] mx-auto py-5 md:py-10">
                    <Manufacturing />

                </div>
            </section>


            <section className="border-b-4 border-gray-100">
                <div className="w-[90%] mx-auto py-5 md:py-10">
                    <Healthcare />
                </div>
            </section>

            <section className="border-b-4 border-gray-100">
                <div className="w-[90%] mx-auto py-5 md:py-10">
                    <Education />

                </div>
            </section>


            <OnboardingSection />

        </div>
    );
}
