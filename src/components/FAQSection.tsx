import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What IT services do you offer?",
    answer:
      "We specialize in cloud solutions (AWS, Azure, GCP), cybersecurity, data analytics, custom software development, and IT consulting—including implementation, customization, integration, support, and training.",
  },
  {
    question: "Can you customize solutions for our specific business needs?",
    answer:
      "Absolutely! Every business is unique, and we tailor our solutions to fit your specific requirements, industry standards, and growth objectives. Our team works closely with you to understand your challenges and deliver customized implementations.",
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Yes, we offer comprehensive post-implementation support including 24/7 monitoring, regular maintenance, updates, and dedicated technical assistance to ensure your systems run smoothly at all times.",
  },
  {
    question: "How long does a typical IT implementation take?",
    answer:
      "Implementation timelines vary based on project scope and complexity. Small projects may take 2-4 weeks, while enterprise-level implementations can span 3-6 months. We provide detailed timelines during our initial consultation.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              FAQs
            </h2>
            <p className="text-muted-foreground">
              Explore our most frequently asked questions to learn more about
              our IT services, solutions, and how we help businesses like yours
              thrive.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button variant="outline" className="rounded-full">
              More Questions
            </Button>
            <Button className="rounded-full">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
