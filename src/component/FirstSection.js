import React from 'react'

import Header from "./Header"
import { firstSection } from '../global/Data'

function FirstSection() {
    return (
        <section className="xl:h-[600px] py-12 bg-white">
            <Header />
            <div className='container mx-auto h-full relative md:py-20'>
                <div className='flex flex-col xl:flex-row h-full items-center mt-0'>
                    <div className="text-center xl:left-20 xl:text-left xl:absolute">
                        <h1 className=" from-neutral-800 text-5xl font font-semibold xl:max-w-lg"
                            data-aos='fade-down'
                            data-aos-delay='700'
                        >
                            {firstSection.title}
                        </h1>
                        <p className='xl:max-w-[380px] text-gray-500 mt-10 xl:mb-12 mb-10'
                            data-aos='fade-down'
                            data-aos-delay='500'
                        >
                            {firstSection.subtitle}
                        </p>

                        <button
                            className=" bg-red-500 text-white text-lg px-20 py-3 rounded-lg mb-10 shadow-lg"
                            data-aos='fade-down'
                            data-aos-delay='600'
                        >
                            Get Started
                        </button>
                    </div>
                    {/* image */}
                    <div
                        className='xl:absolute xl: right-20'
                        data-aos='fade-up'
                        data-aos-delay='700'
                    >
                        <img src={firstSection.img} alt='' className="w-5/7" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FirstSection
