import { motion } from "framer-motion";
import { Heart, Lock, Lightbulb, PenTool } from "lucide-react";

const values = [
  {
    name: "Consumer First",
    description: "We don't just build software; we build experiences that solve real problems for everyday people.",
    icon: Heart,
    color: "text-coral",
    bg: "bg-coral/10",
  },
  {
    name: "Privacy Central",
    description: "Your digital life belongs to you. We architect our solutions to prioritize user privacy and data security above all.",
    icon: Lock,
    color: "text-blue",
    bg: "bg-blue/10",
  },
  {
    name: "Future Ready",
    description: "We stay ahead of the curve, integrating emerging technologies like AI to create tools that feel like magic.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    name: "Craftsmanship",
    description: "We obsess over details. From the first pixel to the final line of code, quality is our non-negotiable standard.",
    icon: PenTool,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The SaumAbhi Standard.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our philosophy drives everything we create. We are dedicated to building a digital future that is human-centric, private, and beautiful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={val.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card hover:bg-card/50 transition-colors p-8 rounded-2xl border border-border flex flex-col items-center text-center group cursor-default"
            >
              <div className={`h-16 w-16 rounded-2xl ${val.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <val.icon className={`h-8 w-8 ${val.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{val.name}</h3>
              <p className="text-sm text-muted-foreground">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
