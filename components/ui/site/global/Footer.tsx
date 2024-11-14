import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container py-20 bg-[#0C0C0C] bg-no-repeat bg-contain bg-bottom bg-fixed' style={{ backgroundImage: "url('/images/footerBG.svg')" }}>
                    <div className='flex lg:flex-row flex-col justify-between items-start lg:gap-20 gap-14'>
                        <div className='xl:max-w-[260px] lg:max-w-[215px] max-w-[300px]'>
                            <div className='md:mb-8 mb-4'>
                                <Link href="/">
                                    <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority />
                                </Link>
                            </div>
                            <div className='mb-5'>
                                <h6 className='font-semibold text-[#DBB42C] text-xl tracking-wide uppercase'>
                                    Experience the magic of perfect vision
                                </h6>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <Link href="#">
                                    <div className='w-7 h-7 bg-[#DBB42C] rounded-md flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className='w-7 h-7 bg-[#DBB42C] rounded-md flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className='w-7 h-7 bg-[#DBB42C] rounded-md flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='w-full flex md:flex-row flex-col xxl:gap-24 justify-between gap-10'>
                            <div className='max-w-[300px]'>
                                <div className='md:mb-8 mb-4'>
                                    <h6 className='text-[#9F9F9F] text-lg font-semibold uppercase'>
                                        menu
                                    </h6>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <Link href="/" className='text-[#9F9F9F] hover:text-[#fff] uppercase text-sm font-semibold'>home</Link>
                                    <Link href="/#treatment" className='text-[#9F9F9F] hover:text-[#fff] uppercase text-sm font-semibold'>treatment</Link>
                                    <Link href="/#about_us" className='text-[#9F9F9F] hover:text-[#fff] uppercase text-sm font-semibold'>about us</Link>
                                    <Link href="/contact_us" className='text-[#9F9F9F] hover:text-[#fff] uppercase text-sm font-semibold'>contact us</Link>
                                </div>
                            </div>
                            <div className='lg:max-w-[300px] max-w-[240px]'>
                                <div className="md:mb-8 mb-4">
                                    <h6 className='text-[#9F9F9F] text-lg font-semibold uppercase'>
                                        information
                                    </h6>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h6 className='text-[#9F9F9F] text-sm font-semibold uppercase'>info@eyewiz.co.uk</h6>
                                    <h6 className='text-[#9F9F9F] text-sm font-semibold uppercase'>94 woodgrange road london, e7 oen</h6>
                                    <h6 className='text-[#9F9F9F] text-sm font-semibold uppercase'>020 8534 5170</h6>
                                </div>
                            </div>
                            <div className='xl:max-w-[300px] lg:max-w-[250px] max-w-[240px]'>
                                <div className='md:mb-8 mb-4'>
                                    <h6 className='text-[#9F9F9F] text-lg font-semibold uppercase'>
                                        newsletter
                                    </h6>
                                </div>
                                <div className='mb-6'>
                                    <p className='text-[#9F9F9F] text-sm font-semibold uppercase'>
                                        Join our newsletter community to receive regular updates on the topics that
                                    </p>
                                </div>
                                <div className='flex flex-row justify-between items-center gap-3 border-b border-[#5E5E5E] pb-[6px]'>
                                    <input type="email" placeholder='enter your email' className='w-full h-10 bg-transparent focus:outline-none text-[#fff]/80 text-sm font-semibold pr-4 py-1 uppercase placeholder:uppercase placeholder:text-[#fff]/80 placeholder:text-sm placeholder:font-semibold' />
                                    <button type='button' className='cursor-pointer w-6 h-6 relative'>
                                        <Image src="/images/arrow.svg" alt="arrow" fill loading='lazy' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container bg-[#0C0C0C] w-full '>
                    <div className='flex flex-row justify-center items-center py-5 border-t border-[#5E5E5E]'>
                        <h6 className='text-[#F4EBEB] text-sm font-light'>
                            Copyright © {new Date().getFullYear()} EyeWiz. All rights reserved
                        </h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer