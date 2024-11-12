"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import axios from "axios";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ContactFormSchema } from "@/app/schema/ContactFormSchema"

const ContactForm = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            contact_number: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/sendQuote', data)
            if (response.status == 200) {
                form.reset()
                toast.success("Thank you for your inquiry! Our team will get in touch with you shortly.")
            }

            else {
                toast.error('Something went wrong, please try again later.');
            }

        } catch (error) {
            console.error(error)
            toast.error('Failed to send the quote request. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <section className='container bg-[#10141B] py-16 bg-no-repeat bg-contain bg-bottom bg-fixed' style={{ backgroundImage: "url('/images/midNight.png')" }}>
            <div className="flex items-center justify-center">
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
                <div className="flex items-center text-[#DBB42C] xxl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-[family-name:var(--font-playfair)] tracking-wide uppercase">
                    <span className="mr-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                    Get in touch
                    <span className="ml-4 w-2 h-2 bg-[#DBB42C] rounded-full"></span>
                </div>
                <div className="lg:flex hidden flex-1 border-t border-[#DBB42C]"></div>
            </div>
            <div className='xl:w-[60%] lg:w-[55%] w-full mx-auto'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-16">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input autoComplete="off" placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input autoComplete="off" placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="contact_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input autoComplete="off" placeholder="Contact Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input autoComplete="off" placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="sm:col-span-2">
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea className="resize-none" rows={7} placeholder="Message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button type="submit" variant="primary" size="lg" disabled={loading}>
                            {loading ? "Please wait..." : " Send Message"}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default ContactForm