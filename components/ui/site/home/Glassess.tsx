"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const glasses = [
    { brandName: "Screen Glasses", imgHref: "glassesOne.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesTwo.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesThree.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesFour.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesFive.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesSix.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesSeven.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesEight.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesNine.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesTen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesEleven.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesTwelve.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesThirteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesFourteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesFifteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesSixteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesSeventeen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesEighteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesNineteen.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesTwenty.jpg" },
    { brandName: "Screen Glasses", imgHref: "glassesTwentyOne.jpg" },
]

const Glassess = () => {
    return (
        <section id='eye-glasses' className='container sm:pb-16 pb-12' >
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    Eyewiz Approved Spectacles
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
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
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 3 },
                        1400: { slidesPerView: 3 },
                    }}
                >
                    {
                        glasses.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative h-[280px] rounded-2xl overflow-hidden mb-6' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                                    <Image src={`/images/${item.imgHref}`} alt={item.brandName} className='object-cover' fill />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default Glassess
