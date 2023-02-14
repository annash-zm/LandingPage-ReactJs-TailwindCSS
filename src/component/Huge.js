import React from 'react'
import { huge } from '../global/Data'

function Huge() {
    return (
        <section className='pt-14'>
            <div className='container mx-auto '>
                <div className='flex flex-col items-center justify-center'>
                    <div className='h1 font-bold text-center text-3xl mb-5' 
                        data-aos = "fade-left"
                        data-aos-delay = "300"
                    >
                        {huge.title}
                    </div>
                    <div className='flex items-center justify-center mb-8'
                        data-aos = "fade-right"
                        data-aos-delay = "300"
                    >
                        <div className='text-center max-w-lg text-gray-400'>{huge.subtitle}</div>
                    </div>
                    <div 
                        data-aos = "fade-up"
                        data-aos-delay = "300"
                    >
                        <img src={huge.img} alt="" />
                    </div>
                </div>

                <div className='flex flex-wrap space-x-10 justify-center items-center lg:flex-row mt-10'>
                    <div >
                        <img src={huge.netflix} alt="" />
                    </div>
                    <div >
                        <img src={huge.reddit} alt="" />
                    </div>
                    <div >
                        <img src={huge.discord} alt="" />
                    </div>
                    <div >
                        <img src={huge.spotify} alt="" />
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default Huge
