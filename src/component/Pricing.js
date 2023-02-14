import React, { useState } from 'react'
import { pricing } from '../global/Data'

function Pricing() {

    const [clickPlan, setClickPlan] = useState(pricing.isi.length - 1)
    return (
        <section
            className="p-10"

        >
            <div className='container mx-auto'
                data-aos='fade-right'
                data-aos-delay='400'
            >
                {/* Title */}
                <div className='font-bold text-center text-3xl mb-5'>
                    {pricing.title}
                </div>
                {/* subtitle */}
                <div className='flex items-center justify-center'>
                    <div className='text-center text-lg max-w-sm mb-20 text-gray-400'>
                        {pricing.subtitle}
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-row gap-x-20 justify-center items-center'>
                    {pricing.isi.map((item, idx) => {
                        return (
                            <button key={idx} className={`flex flex-col items-center justify-between h-[650px] ${clickPlan === idx ? "border-2 border-red-500" : "border border-gray-300"} rounded-lg mb-10 p-5`}
                                onClick = {()=>{
                                    setClickPlan(idx)
                                }}
                            >
                                {/* image */}
                                <img src={item.img} alt="" />
                                <div className='flex-1'>
                                    <div className='font-bold text-center mt-10 mb-5'>
                                        {item.title}
                                    </div>
                                    <div className='flex flex-col'>
                                        {item.content.map((val, indx) => {
                                            return (
                                                <div key={indx} className='flex flex-row mb-4'>
                                                    <img src={item.icon} alt="" className='mr-3' />
                                                    <div className='text-gray-700'>
                                                        {val}
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='font-bold mb-3'>
                                        {item.price}
                                    </div>
                                    <div>
                                        <button className={`${clickPlan === idx && "bg-red-500 text-white shadow-lg"} border border-red-500 px-10 py-2 rounded-full`}>
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
