import Image from 'next/image'
import React from 'react'

const brandLogos = [
    { brandName: "gucci", logoHref: "gucci.avif" },
    { brandName: "armani", logoHref: "armani.avif" },
    { brandName: "jimmy", logoHref: "jimmy.avif" },
    { brandName: "michale", logoHref: "michale.avif" },
    { brandName: "tomford", logoHref: "tomford.png" },  
    { brandName: "prada", logoHref: "prada.avif" },
    { brandName: "persol", logoHref: "persol.avif" },
    { brandName: "polo", logoHref: "polo.webp" },
    { brandName: "oliverPeoples", logoHref: "oliverPeoples.avif" },
    { brandName: "okaley", logoHref: "okaley.webp" },
    { brandName: "rayBan", logoHref: "rayBan.avif" },
    { brandName: "tiffany&Co", logoHref: "tiffany&Co.webp" },
    { brandName: "versace", logoHref: "versace.avif" },
    { brandName: "dolic&Gabban", logoHref: "dolic&Gabban.webp" },
    { brandName: "chanel", logoHref: "chanel.avif" },
    { brandName: "burberry", logoHref: "burberry.avif" },
]


const PopularBrands = () => {
    return (
        <section className='container pb-16'>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    popular brands
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 pt-12 gap-4'>
                {
                    brandLogos.map((item, index) => (
                        <div key={index} className='relative h-[120PX] bg-[#9F9F9F] rounded-xl'>
                            <Image src={`/images/${item.logoHref}`} alt={item.brandName} className='object-contain p-5' fill />
                        </div>
                    ))
                }
            </div>
            {/* <div className='space-y-12'>
                    <div className='bg-[#342D21] rounded-2xl sm:pl-8 pl-4 lg:pr-0 sm:pr-8 pr-4 sm:py-8 py-4 lg:h-[350px] flex lg:flex-row flex-col items-center lg:gap-0 sm:gap-12 gap-8' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                        <div className='xl:w-[65%] lg:w-[60%] w-full lg:h-full h-[200px] relative rounded-xl overflow-hidden'>
                            <Image src="/images/glassesOne.svg" className='object-cover' alt="glassesOne" fill />
                        </div>
                        <div className='xl:w-[35%] lg:w-[40%] w-full relative flex flex-col justify-center items-center lg:px-8'>
                            <div className='relative w-[80px] h-[75px] flex-shrink-0 mb-3'>
                                <Image src="/images/mk.svg" alt="mk" fill />
                            </div>
                            <h1 className='text-[#DBB42C] text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase mb-3'>michael kors</h1>
                            <h1 className="md:max-w-[520px] max-w-[480px] text-[#9F9F9F] text-base text-center uppercase mb-3">Silhouette is one of the very few major European prescription glasses frame makers that makes</h1>
                        </div>
                    </div>

                    <div className='bg-[#342D21] rounded-2xl sm:pl-8 pl-4 lg:pr-0 sm:pr-8 pr-4 sm:py-8 py-4 lg:h-[350px] flex lg:flex-row flex-col items-center lg:gap-0 sm:gap-12 gap-8' style={{ boxShadow: 'rgba(219, 180, 44, 0.19) 0px 10px 20px, rgba(219, 180, 44, 0.23) 0px 6px 6px' }}>
                        <div className='xl:w-[65%] lg:w-[60%] w-full lg:h-full h-[200px] relative rounded-xl overflow-hidden'>
                            <Image src="/images/glassesTwo.svg" className='object-cover' alt="glassesTwo" fill />
                        </div>
                        <div className='xl:w-[35%] lg:w-[40%] w-full relative flex flex-col justify-center items-center lg:px-8'>
                            <div className='relative w-[80px] h-[75px] flex-shrink-0 mb-3'>
                                <Image src="/images/versace.svg" alt="versace" fill />
                            </div>
                            <h1 className='text-[#DBB42C] text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase mb-3'>Versace</h1>
                            <h1 className="md:max-w-[520px] max-w-[480px] text-[#9F9F9F] text-base text-center uppercase mb-3">versace frames represent a signature series of prescription glasses, created by a heritage brand</h1>
                        </div>
                    </div>
                </div> */}
        </section>
    )
}

export default PopularBrands
