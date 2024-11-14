import React from 'react'
import { Metadata } from "next";
import AboutContainer from '@/components/ui/site/about_us/AboutContainer';
export const metadata: Metadata = {
    title: "ABOUT US | EYE WIZ",
    description: "The optical wizards",
    metadataBase: new URL("https://localhost:3000/about_us"),

};

const page = () => {
    return (
        <>
            <AboutContainer />
        </>
    )
}

export default page