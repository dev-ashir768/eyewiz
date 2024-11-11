import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

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
                        <Link href="#" className=''>
                            <Button size='lg' variant='primary'>
                                queries
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarResponsive
