"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const WeOffer = () => {
    return (
        <section id='about_us' className='container sm:py-16 py-12 bg-no-repeat bg-contain bg-bottom bg-fixed' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    what we offer
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='pt-12'>
                <h1 className=" text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase mb-6">NHS and private eye examinations</h1>
                <Swiper
                    keyboard={{ enabled: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    modules={[Keyboard, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        375: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                        1400: { slidesPerView: 4 },
                    }}
                >
                    <SwiperSlide>
                        <div className='relative h-[180px] rounded-3xl overflow-hidden mb-6'>
                            <Image src="/images/treatmentOne.jpg" alt="treatmentOne" fill className='object-cover' />
                        </div>
                        <div>
                            <h1 className="text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase">comprehensive eye examination </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[180px] rounded-3xl overflow-hidden mb-6'>
                            <Image src="/images/treatmentTwo.jpg" alt="treatmentTwo" fill className='object-cover' />
                        </div>
                        <div>
                            <h1 className="text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase">contact lens fittings</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[180px] rounded-3xl overflow-hidden mb-6'>
                            <Image src="/images/treatmentThree.jpg" alt="treatmentThree" fill className='object-cover' />
                        </div>
                        <div>
                            <h1 className="text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase">Dry Eye Management</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[180px] rounded-3xl overflow-hidden mb-6'>
                            <Image src="/images/treatmentFour.jpg" alt="treatmentFour" fill className='object-cover' />
                        </div>
                        <div>
                            <h1 className=" text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase">Minor Eye Conditions Services</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default WeOffer
