import AboutUs from './AboutUs'
import CTA from './CTA'
// import EyeWizCarousel from './EyeWizCarousel'
import Glassess from './Glassess'
import HeroSection from './HeroSection'
import Lenses from './Lenses'
import PopularBrands from './PopularBrands'
import WeOffer from './WeOffer'
import WhyChooseUs from './WhyChooseUs'

const HomeContainer = () => {
    return (
        <>
            <HeroSection />
            {/* <EyeWizCarousel /> */}
            <AboutUs />
            <WhyChooseUs />
            <CTA />
            <WeOffer />
            <Glassess />
            <Lenses />
            <PopularBrands />
        </>
    )
}

export default HomeContainer