import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
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
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Ready to transform your productivity? Click below to send us an email directly,
                            and we'll get back to you as soon as possible.
                        </p>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                size="lg"
                                className="rounded-full gap-3 h-14 px-8 text-lg"
                                onClick={() => window.location.href = "mailto:saumabhiinfotech@gmail.com"}
                            >
                                <Mail className="h-5 w-5" />
                                Email Us Directly
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
