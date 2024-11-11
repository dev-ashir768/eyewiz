import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HamburgerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarResponsive: React.FC<HamburgerProps> = ({ setIsOpen }) => {
    const pathname = usePathname()
    return (
        <>
            <div className='bg-[#212034] w-full h-full'>
                <div className='container w-full h-full pb-4 flex flex-col justify-start items-start pt-[115px]'>
                    {
                        navlinks.map((item, index) => (
                            <Link
                                onClick={() => setIsOpen(false)}
                                key={index}
                                href={item.href}
                                className={`w-full text-center text-[#9F9F9F] hover:text-[#fff] font-semibold text-lg uppercase tracking-wider border-b border-[#9F9F9F] py-3 transition-colors duration-300 ${pathname === item.href && '!text-[#fff]'}`}>

                                {item.label}
                            </Link>
                        ))
                    }

                    <div className='flex gap-3 py-8 w-full justify-center'>
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
            </div>
        </>
    )
}

export default NavbarResponsive
