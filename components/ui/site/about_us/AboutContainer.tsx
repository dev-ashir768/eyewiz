import React from 'react'
import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import AboutUs from './AboutUs'
import WeOffer from '../home/WeOffer'
import CTA from './CTA'

const AboutContainer = () => {
    return (
        <>
            <HeroSection />
            <AboutUs/>
            <WeOffer/>
            <WhyChooseUs/>
            <CTA/>
        </>
    )
}

export default AboutContainer