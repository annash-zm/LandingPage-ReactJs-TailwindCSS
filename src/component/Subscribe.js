import React from 'react'

function Subscribe() {
    return (
        <div className='bg-gray-100'>
            <div className=" relative">
                <div className="absolute left-0 right-0 bg-gray-50 h-1/2" />
                <div className=" container mx-auto relative max-w-5xl bg-white rounded-lg px-12 py-10 flex items-center justify-between flex-col lg:flex-row gap-y-6"
                data-aos = "fade-left"
                data-aos-delay = "400"
                >
                    <div>
                        <div className="text-3xl font-medium mb-4 lg:text-left text-center">
                            Subscribe Now for
                            <br /> Get Special Features!
                        </div>
                        <div className="font-normal text-xs text-gray-400 text-center lg:text-left">
                            Let's subscribe with us and find the fun.
                        </div>
                    </div>
                    <button className="bg-red-500 rounded-md shadow-lg text-white p-3 px-12">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
