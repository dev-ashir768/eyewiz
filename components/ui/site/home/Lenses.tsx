"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const lenses = [
    { modelImg: "stellestModel.avif", brandLogo: "stellest.webp", title: "A game-changing innovation in myopia control" },
    { modelImg: "eyezenModel.avif", brandLogo: "eyezen.webp", title: "The new generation of single vision lenses" },
    { modelImg: "variluxModel.webp", brandLogo: "varilux.webp", title: "Mastering sharpness instantly" },
    { modelImg: "blueUVFilterSystemModel.avif", brandLogo: "blueUVFilterSystem.webp", title: "Advanced filtration technology" },
    { modelImg: "xperioModel.avif", brandLogo: "xperio.webp", title: "Goes beyond protection" },
    { modelImg: "transitionsModel.avif", brandLogo: "transitions.webp", title: "Light intelligent technology" },
    { modelImg: "crizalModel.avif", brandLogo: "crizal.webp", title: "Your lenses invisible shield" },
]

const Lenses = () => {
    return (
        <section id='lenses' className='container sm:py-16 py-8 bg-no-repeat bg-contain bg-bottom bg-fixed' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    Eyewiz Approved Lenses
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
                        1200: { slidesPerView: 4 },
                        1400: { slidesPerView: 4 },
                    }}
                >
                    {
                        lenses.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative h-[260px] rounded-2xl overflow-hidden mb-6' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                                    <Image src={`/images/${item.modelImg}`} alt={item.modelImg} className='object-cover' fill />
                                </div>
                                <div>
                                    <div className='relative h-[50px] w-[150px] mb-3'>
                                        <Image src={`/images/${item.brandLogo}`} alt={item.brandLogo} fill />
                                    </div>
                                    <div>
                                        <h1 className=" text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase line-clamp-3">{item.title}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Lenses
