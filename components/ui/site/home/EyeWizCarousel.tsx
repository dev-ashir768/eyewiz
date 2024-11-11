import Image from 'next/image'
import React from 'react'

const EyeWizCarousel = () => {
    return (
        <section className='container w-full h-full bg-[#10141B]'>
            <div className="relative flex overflow-x-hidden">
                <div className="sm:py-14 sm:pt-12 sm:pb-4 pt-4 pb-4 animate-marquee whitespace-nowrap flex items-center justify-center">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <Image key={index} src="/images/eyewiz.svg" alt="eye-wiz-logo" className='mx-3' width={140} height={140} />
                        ))}
                </div>
                <div className="absolute top-0 sm:pt-12 sm:pb-4 pt-4 pb-4 animate-marquee2 whitespace-nowrap flex items-center justify-center">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <Image key={index} src="/images/eyewiz.svg" alt="eye-wiz-logo" className='mx-3' width={140} height={140} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default EyeWizCarousel