import React from 'react'
import { secondSection } from '../global/Data'

function About() {
    return (
        <section
            className='bg-white pt-[100px]'
        >
            <div className='container mx-auto px-20'
                data-aos='fade-left'
                data-aos-delay='400'
            >

                {/* Each About */}
                <div className='flex justify-center items-center rounded-lg shadow-lg'>
                    <div className='flex flex-col lg:grid lg:grid-cols-3 py-5'>
                        {secondSection.map((item, idx) => {
                            //console.log(idx)
                            return (
                                <div key={idx} className={`flex flex-row text-left py-5 px-20 lg:flex lg:flex-row space-x-6 lg:items-center lg:justify-center ${idx !== secondSection.length-1 && "lg:border-r lg:border-gray-200"}`}>
                                    <img src={item.icon} alt="" />
                                    <div>
                                        <div className='font-bold'>{item.title}</div>
                                        <div className="text-gray-500">{item.subtitle}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
