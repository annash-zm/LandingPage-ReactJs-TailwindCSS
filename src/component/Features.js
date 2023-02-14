import React from 'react'
import { featuresSection } from '../global/Data'

function Features() {
    return (
        <section className=' bg-white pt-[100px] pb-14'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex lg:flex-row lg:space-x-44 lg:px-32'>
                    <div className='self-center lg:self-start'
                        data-aos='fade-down'
                        data-aos-delay='400'
                    >
                        <img src={featuresSection.img} alt="" />
                    </div>
                    <div className="flex flex-col"
                        data-aos='fade-up'
                        data-aos-delay='400'
                    >
                        <div className="font-medium text-center lg:text-left text-[35px] mb-5 mt-10">
                            {featuresSection.title}
                        </div>
                        <div className=" text-gray-500 lg:text-left text-center mb-3">
                            {featuresSection.subtitle}
                        </div>
                        <div className='flex items-center justify-center lg:items-start lg:justify-start'>
                            <div className='flex flex-col'>
                                {featuresSection.content.map((item, idx) => {
                                    return (
                                        <div key={idx} className='flex flex-row space-x-3 py-2'>
                                            <div><img src={featuresSection.icon} alt="" /></div>
                                            <div>{item}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features