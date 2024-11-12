import ContactContainer from "@/components/ui/site/contact_us/ContactContainer"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "CONTACT US | EYE WIZ",
    description: "The optical wizards",
    metadataBase: new URL("https://localhost:3000/contact_us"),

};

const page = () => {
    return (
        <ContactContainer />
    )
}

export default page