import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <section id="about_us" className='container sm:py-16 py-12 bg-fixed bg-bottom bg-no-repeat' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    about us
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-center sm:pt-16 pt-8 gap-10'>
                <div className='lg:w-1/2 w-full'>
                    <h1 className='text-[#9F9F9F] font-semibold xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wide uppercase mb-5'>Your Vision, Our Passion</h1>
                    <div className='max-w-[500px]'>
                        <p className=" text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide">At Eyewiz, we&apos;re not just opticians; we&apos;re a team of young, passionate individuals dedicated to providing exceptional eye care. With a combined experience of over 50 years, we&apos;ve honed our skills to deliver unparalleled service that goes beyond your expectations.</p>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <Image src="/images/aboutImg.jpg" alt="aboutImg" className='mx-auto rounded-xl overflow-hidden' width={300} height={300} />
                </div>
            </div>
        </section>
    )
}

export default AboutUs