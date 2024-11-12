import EyeWizCarousel from './EyeWizCarousel'
import Glassess from './Glassess'
import HeroSection from './HeroSection'
import Lenses from './Lenses'
import PopularBrands from './PopularBrands'
import Treatment from './Treatment'
import WeOffer from './WeOffer'

const HomeContainer = () => {
    return (
        <>
            <HeroSection />
            <EyeWizCarousel />
            <WeOffer />
            <Treatment />
            <Glassess />
            <Lenses />
            <PopularBrands />
        </>
    )
}

export default HomeContainer