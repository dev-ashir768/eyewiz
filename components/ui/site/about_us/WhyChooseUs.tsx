import React from 'react'

const chooseUs = [
    {
        title: "Unmatched Service",
        imgHref: "service.jpg",
        description: "We believe in going the extra mile to ensure your complete satisfaction. From the moment you step into our store, you'll experience a level of care and attention that sets us apart."
    },
    {
        title: "Affordable Excellence ",
        imgHref: "service.jpg",
        description: "Quality eye care shouldn't break the bank. We offer competitive prices on all our products and services, making it easy to access the best without compromising on quality."
    },
    {
        title: "A World of Brands",
        imgHref: "service.jpg",
        description: "We stock a wide range of top-tier brands to cater to every style and preference. Whether you're looking for classic elegance or cutting-edge fashion, we've got you covered."
    },
    {
        title: "Expert Lens Solutions",
        imgHref: "service.jpg",
        description: "We partner with renowned lens manufacturers to provide you with the clearest, most comfortable vision possible. Our team will work with you to find the perfect lenses for your unique needs."
    },
    {
        title: "A Magical Experience",
        imgHref: "service.jpg",
        description: "We're committed to making your experience at Eyewiz truly magical. From your initial consultation to the moment you pick up your new eyewear, we'll guide you through every step of the process."
    },

]

const WhyChooseUs = () => {
    return (
        <section className='container sm:pb-16 pb-12'>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    why choose us
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:py-12 py-8 md:gap-10 gap-5'>
                {
                    chooseUs.map((item, index) => (
                        <div key={index} className='bg-[#9F9F9F] rounded-xl p-6'>
                            <h1 className=" text-[#0C0C0C] font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-lg tracking-wide uppercase line-clamp-2 mb-2">{item.title}</h1>
                            <p className=' text-[#0C0C0C] md:text-lg text-base'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChooseUs