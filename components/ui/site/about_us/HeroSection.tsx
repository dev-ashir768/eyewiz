import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='container min-h-screen bg-[#0C0C0C] pt-[143px] lg:pb-0 pb-10 w-full h-full flex lg:flex-row flex-col lg:justify-between lg:items-center gap-10'>
            <div className='lg:w-[51%] w-full'>
                <h1 className='text-[#9F9F9F] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide font-[family-name:var(--font-playfair)] uppercase sm:mb-5 mb-3'>A Magical Vision Experience</h1>
                <h1 className='md:max-w-[520px] max-w-[480px] text-[#DBB42C] lg:text-3xl md:text-4xl sm:text-3xl text-2xl tracking-wide uppercase mb-3'>
                    Eyewiz – Your Vision, Our Passion 👓✨
                </h1>
                <p className='text-[#9F9F9F] xxl:text-lg sm:text-base text-sm'>💸 Affordable Excellence</p>
                <p className='text-[#9F9F9F] xxl:text-lg sm:text-base text-sm'>🛍️ Wide Selection of Top Brands</p>
                <p className='text-[#9F9F9F] xxl:text-lg sm:text-base text-sm'>🔍 Expert Lens Solutions</p>
            </div>
            <div className='lg:w-[49%] w-full'>
                <div className='flex lg:justify-end justify-center items-center w-full'>
                    <Image src='/images/heroIMG.svg' alt='heroIMG' width={550} height={550} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection