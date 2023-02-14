import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import { testimonials } from '../global/Data'

function Testimonials() {
    const [indexSlick, setIndexSlick] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        afterChange: (index) => setIndexSlick(index),
    };

    const slickRef = useRef();

    function fnNext() {
        slickRef?.current?.slickNext();
    }

    function fnPrev() {
        slickRef?.current?.slickPrev();
    }

    return (
        <section className='my-[30px] xl:mt-[100px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='font-bold text-3xl max-w-sm text-center mb-8'
                        data-aos = "fade-right"
                        data-aos-delay = "400"
                    >
                        {testimonials.title}
                    </div>
                    <div className='max-w-md text-center text-gray-400'
                        data-aos = "fade-left"
                        data-aos-delay = "400"
                    >
                        {testimonials.subtitle}
                    </div>
                </div>
                <div className='mt-10'
                    data-aos = "fade-up"
                    data-aos-delay = "400"
                >
                    <Slider {...settings} arrows={false} ref={slickRef}>
                        {testimonials.content.map((val, index) => {
                            return (
                                <div key={index} className={index === 0 ? "xl:ml-24" : ""}>
                                    <div className={`${indexSlick === index ? "border-2 border-red-300" : "border border-gray-200"} rounded-lg p-5 ml-6 xl:w-96 xl:h-52 w-[300px] h-52`}>
                                        <div className='flex flex-row items-center justify-between'>
                                            <img src={val.img} alt="" className='mr-4' />
                                            <div className='flex-1'>
                                                <div className='flex flex-col'>
                                                    <div>{val.nama}</div>
                                                    <div className='text-gray-300 text-sm'>{val.loc}</div>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-center'>
                                                <div className='mr-2'>{val.rating}</div>
                                                <img src={testimonials.star} alt="" className='w-5 h-5' />
                                            </div>
                                        </div>
                                        <div className='mt-5 text-sm text-gray-600'>
                                            {val.word}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="container mx-auto max-w-5xl flex flex-row justify-between items-center mt-12 ">
                    <div className="flex space-x-2 xl:px-0 px-6">
                        {testimonials.content.map((_, index) => (
                            <div
                                className={`${indexSlick === index
                                    ? "w-8 bg-red-500 transition-all duration-200 ease-in-out"
                                    : "w-4 bg-gray-300 transition-all duration-200 ease-in-out"
                                    } h-4 rounded-full`}
                            />
                        ))}
                    </div>
                    <div className="flex flex-row space-x-5 xl:px-0 px-6">
                        <div
                            className="flex self-center border border-red-500 rounded-full p-5 cursor-pointer"
                            onClick={() => fnPrev()}
                        >
                            <img src={testimonials.left} alt="arrow-left" className="w-5 h-5" />
                        </div>
                        <div
                            className="flex self-center bg-red-500 rounded-full p-5 cursor-pointer"
                            onClick={() => fnNext()}
                        >
                            <img src={testimonials.right} alt="arrow-right" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
