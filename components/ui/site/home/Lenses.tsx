"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const Lenses = () => {
    return (
        <section id='lenses' className='container py-16 bg-no-repeat bg-contain bg-bottom bg-fixed' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className="flex items-center">
                <div className="flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    wizard-approved lenses
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='pt-12'>
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
                        <div className='relative h-[200px]'>
                            <Image src="/images/xcel.svg" alt="xcel" fill />
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase">X-Cel</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[200px]'>
                            <Image src="/images/xcel.svg" alt="xcel" fill />
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase">X-Cel</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[200px]'>
                            <Image src="/images/seiko.svg" alt="xcel" fill />
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase">seiko</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[200px]'>
                            <Image src="/images/kodak.svg" alt="kodak" fill />
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase">kodak</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[200px]'>
                            <Image src="/images/seiko.svg" alt="xcel" fill />
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase">seiko</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Lenses
