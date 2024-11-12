import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const links = [
    {
        id: 1,
        question: "The Importance of Regular Eye Tests",
        answer:
            "No matter who we are or where we come from, one fear that we all have in common is the fear of losing our sight. Our vision is among the most precious assets we have, and yet, eye tests are often an afterthought. Testing isn’t only useful for identifying your prescription if you are long-sighted, short-sighted or astigmatic. It can also be useful for diagnosing a wide range of health conditions.",
    },
    {
        id: 2,
        question: "How often should I get my eyes tested?",
        answer:
            "Many people fail to get regular eye tests simply because they are unaware of how often they should actually have them. The NHS recommends that most people have their eyes tested every 2 years. In some cases, your ophthalmic practitioner or optometrist may even advise you to have a sight test more frequently. But why should you have your eyes tested so frequently?\n\nUnlike other parts of our bodies, our eyes often don’t give us much warning when something is wrong. Eye tests can offer great insight into not only the health of your eyes but also your overall health. They can be extremely important for diagnosing conditions such as glaucoma, diabetes, and macular degeneration.",
    },
    {
        id: 3,
        question: "The Benefits Of Regular Testing",
        answer:
            "It is currently estimated that around 80% of all blindness is preventable or treatable. In light of this, having a simple eye test on a regular basis really can make all the difference. Putting off eye tests (or even avoiding them altogether) could mean that early signs of various conditions go unnoticed and unexplored.\n\nThis means that you and your healthcare provider could miss a vital opportunity for early intervention – an opportunity that could have given you a better chance of a full recovery and helped to protect your vision.",
    },
    {
        id: 4,
        question: "What will I be tested for?",
        answer:
            "When you go for an eye examination, it’s not only your vision that will be assessed. Of course, your optician will assess any refractive error (your glasses prescription), but this is also an opportunity to look for things like amblyopia (lazy eye), eye alignment problems, and potentially sight-threatening diseases and disorders.\n\nOften, your optician will pick up on abnormalities far sooner than your GP or a specialist because they can detect possible problems by looking through your eyes at your blood vessels and other working parts. So perhaps eyes are not only the window to your soul but also to your body.",
    },
    {
        id: 5,
        question: "What health conditions can be detected during an eye exam?",
        answer:
            "Eye tests can help detect a number of surprising health problems, including:\n\n• **Diabetes**: Uncontrolled diabetes can lead to complications such as diabetic retinopathy and diabetic macular oedema. Eye tests can help opticians identify blood vessel leaks or swelling in the macula, which are early signs of diabetes.\n\n• **Glaucoma and Macular Degeneration**: Eye exams can detect early signs of these conditions, which could be critical in preventing or managing vision loss.",
    }
];


const Treatment = () => {
    return (
        <section id='treatment' className='container pb-16'>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase text-center">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    Your Vision, Our Priority
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='max-w-[950px] mx-auto pt-16'>
                <Accordion type="single" collapsible className="w-full space-y-5">
                    {links.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${item.id}`}
                            className="bg-[#10141B] border border-[#10141B] shadow-lg rounded-xl"
                        >
                            <AccordionTrigger className="text-[#9F9F9F] hover:no-underline sm:text-lg text-sm font-semibold sm:px-5 px-3 py-5 text-start">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#9F9F9F] sm:text-base text-sm font-normal sm:px-5 px-3">
                                <div className="max-w-5xl">{item.answer}</div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Treatment