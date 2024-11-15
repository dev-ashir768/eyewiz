import React from 'react'
import { Metadata } from "next";
import TreatmentContainer from '@/components/ui/site/treatment/TreatmentContainer';
export const metadata: Metadata = {
    title: "TREATMENT | EYE WIZ",
    description: "The optical wizards",
    metadataBase: new URL("https://localhost:3000/treatment"),

};

const page = () => {
    return (
        <>
            <TreatmentContainer />
        </>
    )
}

export default page