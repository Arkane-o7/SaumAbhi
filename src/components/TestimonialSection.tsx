import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="h-16 w-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-8">
            <Quote className="h-8 w-8 text-coral" />
          </div>
          <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            "Their deep understanding of modern technologies, paired with a
            tailored approach to our business needs, has transformed how we
            operate. From streamlining our cloud infrastructure to building
            insightful analytics dashboards, their expertise has driven real,
            measurable impact across our organization."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-primary-foreground font-bold">
              RK
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Rajesh Kumar</div>
              <div className="text-sm text-muted-foreground">
                CTO - TechCorp Solutions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
