"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const Glassess = () => {
    return (
        <section id='eye-glasses' className='container pb-16' >
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
                <h1 className="md:max-w-[520px] max-w-[480px] text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase mb-6">Mens Categories</h1>
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
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menFour.jpg" alt="menFour" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">metal glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menOne.jpg" alt="menOne" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menTwo.jpg" alt="menTwo" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">metal glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menThree.jpg" alt="menThree" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menOne.jpg" alt="menOne" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='pt-12'>
                <h1 className="md:max-w-[520px] max-w-[480px] text-[#9F9F9F] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase mb-6">Ladies Categories</h1>
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
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/ladiesFour.jpg" alt="ladiesFour" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">metal glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/ladiesOne.jpg" alt="ladiesOne" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/ladiesTwo.jpg" alt="ladiesTwo" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">metal glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/menThree.jpg" alt="menThree" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[230px] mb-6 rounded-3xl overflow-hidden' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                            <div className='absolute inset-0'>
                                <Image src="/images/ladiesThree.jpg" alt="ladiesThree" fill className='object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-[#9F9F9F] text-2xl tracking-wide uppercase">premium glasses</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Glassess
