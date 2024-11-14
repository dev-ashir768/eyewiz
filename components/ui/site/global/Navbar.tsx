"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import NavbarResponsive from './NavbarResponsive'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'


export const navlinks = [
    { label: "home", href: "/" },
    { label: "lenses", href: "/#lenses" },
    { label: "eye glasses", href: "/#eye-glasses" },
    { label: "treatment", href: "/#treatment" },
    { label: "about us", href: "/about_us" },
    { label: "contact us", href: "/contact_us" },
]

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='w-full fixed top-0 inset-x-0 z-20'>
                <div className='container bg-[#10141B]  py-3 flex lg:flex-row flex-col lg:justify-between lg:items-center'>
                    <div className={`justify-between flex items-center  lg:w-max w-full`}>
                        <Link href="/">
                            <Image src="/images/logo.svg" alt="logo" width={150} height={150} priority />
                        </Link>
                        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} gap-3`}>
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
                <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} shadow-lg container bg-[#212034] py-3 flex lg:flex-row flex-col lg:justify-between lg:items-center`}>
                    {
                        navlinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`text-[#9F9F9F] hover:text-[#fff] text-center font-semibold text-lg uppercase tracking-wider transition-colors duration-300 ${pathname === item.href && '!text-[#fff]'}`}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0' }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-10 bg-white ${isOpen ? 'flex lg:hidden' : 'hidden'}`}>

                        <NavbarResponsive setIsOpen={setIsOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar