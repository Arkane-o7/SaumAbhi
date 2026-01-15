import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your business with cutting-edge technology?
              Contact us today to discuss your project requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">
                    contact@saumabhiinfotech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Tech Park, Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="rounded-xl bg-secondary border-0"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl bg-secondary border-0"
                />
              </div>
              <Input
                placeholder="Subject"
                className="rounded-xl bg-secondary border-0"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="rounded-xl bg-secondary border-0 resize-none"
              />
              <Button className="w-full rounded-full gap-2">
                Send Message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
