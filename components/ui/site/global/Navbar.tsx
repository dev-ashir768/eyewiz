"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import NavbarResponsive from './NavbarResponsive'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const navlinks = [
    { label: "home", href: "/" },
    { label: "lenses", href: "/lenses" },
    { label: "eye glasses", href: "/eye-glasses" },
    { label: "treatment", href: "/treatment" },
    { label: "about us", href: "/about-us" },
    { label: "contact us", href: "/contact-us" },
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
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'}`}>
                        <Link href="#" className=''>
                            <Button size='lg' variant='primary'>
                                queries
                            </Button>
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