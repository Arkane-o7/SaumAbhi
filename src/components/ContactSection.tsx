import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        // Sign up at https://www.emailjs.com/
        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create an Email Template -> Get Template ID
        // 3. Get your Public Key from Account Settings
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        if (form.current) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_KEY,
                })
                .then(
                    () => {
                        toast.success("Message sent successfully!", {
                            description: "We'll get back to you as soon as possible.",
                        });
                        form.current?.reset();
                    },
                    (error) => {
                        console.error("FAILED...", error.text);
                        toast.error("Failed to send message.", {
                            description: "Please try again later or contact us directly.",
                        });
                    }
                )
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Ready to transform your productivity? Contact us today to learn more about Navi
                            or discuss enterprise solutions.
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border"
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                            Send us a Message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                    <Input
                                        id="name"
                                        name="user_name"
                                        placeholder="John Doe"
                                        required
                                        className="rounded-xl bg-secondary border-0 h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                    <Input
                                        id="email"
                                        name="user_email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="rounded-xl bg-secondary border-0 h-12"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    required
                                    className="rounded-xl bg-secondary border-0 h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows={6}
                                    required
                                    className="rounded-xl bg-secondary border-0 resize-none p-4"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full rounded-full gap-2 h-12 text-base"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
