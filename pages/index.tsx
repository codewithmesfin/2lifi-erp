/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cards, modules, options, techStacks } from "@/data/homepage";
import OnboardingSection from "@/components/onboardingSection";
import ProductCard from "@/components/productCard";


export default function Home() {


  return (
    <div>
      <section style={{ backgroundRepeat: "round" }}
        className="md:bg-[url('/bg.png')] -mt-2 w-full bg-cover">
        <div className="w-[90%] mx-auto pt-32 md:pb-48">
          <div className="md:flex justify-evenly items-centser md:space-x-10">
            <div className="w-full md:w-3/5 md:max-w-[700px]">
              <h1
                style={{ lineHeight: 1.2 }}
                className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
              >
                Find the perfect <br />
                Software for you.
              </h1>
              <h2 className="py-6 text-[#333333] text-lg md:text-3xl">
                Automate your tasks, increase productivity, and work without
                stress.
              </h2>
              <div className="py-6 flex space-x-5 md:space-x-10">
                <Link
                  href="/login#login"
                  className=" flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 hover:from-gray-500 hover:to-green-500 md:text-lg text-white px-4 py-3"
                >
                  <span>Get started</span>
                  <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  target="_blank"
                  href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                  className="flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-green-300 to-green-300 hover:from-orange-500 hover:to-blue-500 md:text-lg text-white px-4 py-3"
                >
                  <span>Learn more</span>
                  <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
            <div className="hidden md:inline w-full md:w-2/5 md:max-w-[420px] py-10 md:py-1">
              <div className="shadow-md bg-white rounded-3xl p-10">
                <div className="pb-5">
                  <h1 className="text-gray-600">
                    If you believe you need <span className="font-semibold italic">all-in-one enterprise solutions </span> for your organization,
                    <span className="text-[#007aff] px-1">2lify</span> will be your choice.
                  </h1>
                </div>
                <form>
                  <div className="pb-2">
                    <p className="py-2 text-gray-500">Full Name</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required={true}
                      v-model="formData.fullname"
                      className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="py-3">
                    <p className="py-2 text-gray-500">Email</p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required={true}
                      v-model="formData.email"
                      className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="py-3">
                    <p className="py-2 text-gray-500">Phone Number</p>
                    <input
                      type="text"
                      pattern="^\+[1-9]\d{1,14}$"
                      placeholder="Enter your phone number"
                      required={true}
                      v-model="formData.phonenumber"
                      className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="flex items-center justify-evenly space-x-3 md:text-lg w-full bg-[#007aff] hover:bg-blue-600 py-3 rounded-full shadow text-white"
                    >
                      <span>Schedule for a demo</span>
                      <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>


            </div>
          </div>
        </div>

      </section>


      <section className="md:pt-10">
        <div className="w-[90%] mx-auto py-10">
          <div className="md:flex items-center md:space-x-10">
            <div className="w-full md:w-2/5 pb-10 md:pb-1">
              <h1
                style={{ lineHeight: 1.3 }}
                className="font-extrabold text-4xl md:text-5xl"
              >
                {"We're"} implementing <br />
                <span
                  className="bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
                >ERPNext & Frappe</span
                >
                <br />
                for your business.
              </h1>
            </div>
            <div
              className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10"
            >
              {
                cards.map((item) => <div v-for="item in cards" key={item.title}>
                  <Link href={item.href} data-aos='zoom-in'
                    data-aos-duration='2000'>
                    <div
                      className="bg-white rounded-[20px] p-5 border hover:border-4 hover:border-green-50 cursor-pointer bg-gradient-to-r hover:from-green-100 hover:to-green-400"

                    >
                      <div
                        className="flex items-center justify-between space-x-3 md:space-x-10"
                      >
                        <h1 className="text-xl py-3 font-semibold text-gray-900">
                          {item.title}
                        </h1>
                        <span>
                          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                        </span>
                      </div>
                      <p className="text-[#333333]">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                </div>)
              }
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="py-10 md:mt-24">
            <div className="pb-24">
              <h1
                style={{ lineHeight: 1.2 }}
                className="font-semibold text-center text-5xl md:text-7xl"
              >
                We make your <br />
                business a
                <span
                  className="border-b-4 text-[#007aff] border-gray-200 pb-2 font-extrabold"
                > different!</span
                >
              </h1>
            </div>
            <div
              className="md:flex md:justify-evenly md:items-center md:space-x-10"
            >
              {
                options.map((item, i) => <div
                  key={i} className="py-5"
                >
                  <img src={item.img} alt="" className="w-8 h-8" />
                  <h1 className="py-2 font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>)
              }
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-[90%] md:w-[95%] mx-auto py-16">
          <div className="pb-16 w-[90%] md:w-[75%] mx-auto">
            <h1
              className="py-4 text-center text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-500 inline-block text-transparent bg-clip-text"
            >
              Get started with <br />
              all-in-one Enterprise Software
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {
             modules.filter((f,i)=>i<=5).map((item, i) => <div
                key={item.title}
              >
               <ProductCard item={item} index={i} />
              </div>)
            }
          </div>
          <div className="pb-3 pt-10 flex justify-center">
            <Link
              href="/marketplace"
              className="flex justify-center items-center space-x-3 md:w-[250px] rounded-full hover:bg-blue-600 bg-[#007aff] md:text-lg text-white px-4 py-3"
            >
              <span>See all modules</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      <section
        style={{
          background: `linear-gradient(rgba(228, 230, 255, 0.29) 0%, rgba(216, 255, 250, 0.29) 100%)`,
        }}
      >
        <div className="w-[90%] md:w-[70%] mx-auto py-8">
          <div className="pt-6">
            <h1
              className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-[#007aff] to-green-500 inline-block text-transparent bg-clip-text"
            >
              Simple . Affordable . Powerful
            </h1>
            <div
              style={{ lineHeight: 1.3 }}
              className="mt-4 rounded-br-[100px] rounded-tl-[100px] w-[100px] md:mx-auto h-1 bg-[#007aff]"
            ></div>
            <p className="py-10 text-center text-sm md:text-lg text-gray-900">
              Customers are the main valuable assets for every business of any
              size. Unlock your business opportunities by making interactive
              relationship within your hunted customers. 2lify is CRM tool for
              managing your customers relationship within your business.
              <Link className="text-[#007aff]" href="/features"
              >Learn more</Link
              >
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-[90%] mx-auto py-16">
          <div
            className="py-4 md:flex md:justify-center md:items-center md:space-x-20"
          >
            <div className="w-full md:w-1/2" data-aos="fade-up"
              data-aos-duration="2000">
              <div className="flex items-center space-x-3 md:space-x-5">
                <img
                  src="https://tesfacoffee.com/img/t1.5f985145.jpg"
                  alt=""
                  className="rounded-full w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-gray-900 text-lg">Tesfa Mergia</h2>
                  <p className="text-gray-500 text-sm">
                    CEO - Tesfa Coffee Trade plc
                  </p>
                </div>
              </div>
              <h1
                className="py-6 font-extrabold text-gray-900 text-3xl md:text-5xl"
              >
                {'"I’ve'} never seen anything like this in my 10 years in this
                industry”
              </h1>
              <p className="text-gray-700 text-md">
                My journey is about absolute efficiency, so that you can
                represent the best version of you and your business. This is the
                glue that allows you to interface with the hotel, seating,
                guestlist, all in one place without having to hire someone just
                to do that. I was so impressed I personally invested in 2lify!
              </p>
            </div>
            <div
              className="w-full md:w-1/2 max-h-[400px] max-w-[350px] py-10 md:py-1"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="600"
                src="https://tesfacoffee.com/img/t1.5f985145.jpg"
                alt="calendly"
                className="h-full w-full rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-100">
        <div className="w-[90%] mx-auto py-16">
          <div className="pb-3">
            <h1
              className="py-4 text-center text-3xl md:text-6xl font-extrabold text-gray-900"
            >
              Technologies behind 2lify
            </h1>
          </div>
          <div
            className="flex flex-wrap items-center justify-center space-x-2 md:space-x-10 py-10"
          >
            {
              techStacks.map((item) => <div
                key={item.title}
                className="py-3 md:py-2"
              >
                <div className="h-full rounded">
                  <div className="h-full flex items-center space-x-3">
                    <img src={item.img} alt="" className="w-8 h-8 rounded-xl" />
                    <div>
                      <h1 className="text-gray-800">
                        {item.title}
                      </h1>
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
