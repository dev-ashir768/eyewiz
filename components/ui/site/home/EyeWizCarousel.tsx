import Image from 'next/image'
import React from 'react'

const EyeWizCarousel = () => {
    return (
        <section className='container px-0 w-full h-full bg-[#10141B]'>
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
        </section>
    )
}

export default EyeWizCarousel