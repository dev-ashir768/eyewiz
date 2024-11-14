import Link from 'next/link'
import React from 'react'
import { Button } from '../../button'

const CTA = () => {
    return (
        <div className='container sm:py-16 py-12 bg-fixed' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className='bg-[#342D21] rounded-xl sm:pl-8 pl-4 lg:pr-0 sm:pr-8 pr-4 sm:py-8 py-4 lg:h-[350px] flex lg:flex-row flex-col items-center' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px', backgroundImage: 'url(/images/footerBG.svg)' }} >
                <div className='max-w-[624px] mx-auto text-center'>
                    <h1 className='text-[#9F9F9F] font-semibold xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wide uppercase mb-5 text-center'>Join the Eyewiz Family Today</h1>
                    <p className=" text-[#9F9F9F] xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase text-center mb-5">Experience the difference at Eyewiz. Book your appointment now and let us help you see the world in a whole new light.</p>
                    <Link href="/contact_us">
                        <Button variant="primary">
                            Contact us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CTA