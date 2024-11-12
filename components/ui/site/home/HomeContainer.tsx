import EyeWizCarousel from './EyeWizCarousel'
import Glassess from './Glassess'
import HeroSection from './HeroSection'
import Lenses from './Lenses'
import PopularBrands from './PopularBrands'
import Treatment from './Treatment'

const HomeContainer = () => {
    return (
        <>
            <HeroSection />
            <EyeWizCarousel />
            <Treatment />
            <Glassess />
            <Lenses />
            <PopularBrands />
        </>
    )
}

export default HomeContainer