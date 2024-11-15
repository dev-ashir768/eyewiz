import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='container min-h-screen flex flex-col justify-evenly bg-[#0C0C0C] pt-[143px] lg:pb-0 pb-10 w-full h-full gap-8'>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-10'>
                <div className='lg:w-[51%] w-full'>
                    <h1 className='text-[#9F9F9F] xxl:text-4xl lg:text-3xl md:text-4xl text-3xl tracking-wide font-[family-name:var(--font-playfair)] uppercase mb-5 sm:text-start text-center'>Welcome to Eye Wiz Opticians</h1>
                    <h1 className='md:max-w-[520px] max-w-[480px] text-[#DBB42C] lg:text-3xl md:text-4xl text-3xl tracking-wide uppercase mb-3 sm:text-start text-center'>
                        ✨ Our Expert Treatments Include ✨
                    </h1>
                    <p className='text-[#9F9F9F] xxl:text-lg text-base sm:text-start text-center'>🔮 Vision Correction & Care</p>
                    <p className='text-[#9F9F9F] xxl:text-lg text-base sm:text-start text-center'>🧐 Comprehensive Eye </p>
                    <p className='text-[#9F9F9F] xxl:text-lg text-base sm:text-start text-center'>👓 Prescription Eyewear</p>
                </div>
                <div className='lg:w-[49%] w-full'>
                    <div className='flex lg:justify-end justify-center items-center w-full'>
                        <Image src='/images/heroIMG.svg' alt='heroIMG' width={550} height={550} />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='overflow-hidden py-2'>
                    <div className='flex flex-nowrap min-w-full'>
                        {Array(3)
                            .fill(0)
                            .map((_, index) => (
                                <div key={index} className='flex flex-shrink-0 items-center p-1' style={{ animation: "slide-left-carousel 20s linear infinite" }}>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, index) => (
                                            <Image key={index} src="/images/eyewiz.svg" alt="eye-wiz-logo" className='mx-3' width={140} height={140} />
                                        ))}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection