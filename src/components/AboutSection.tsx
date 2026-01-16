import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10k+", label: "Active Downloads" },
  { icon: Award, value: "4.9", label: "User Rating" },
  { icon: CheckCircle, value: "3+", label: "Major Platforms" },
  { icon: Clock, value: "24/7", label: "AI Availability" },
];

const features = [
  {
    title: "User-Centric Design",
    description:
      "We prioritize intuitive interfaces and seamless experiences. Our software is designed to be powerful yet accessible to everyone.",
  },
  {
    title: "Cutting-Edge AI Integration",
    description:
      "Leveraging the latest in Large Language Models (LLMs) like LLaMA 3.3 to provide intelligent, context-aware assistance directly on your desktop.",
  },
  {
    title: "Privacy & Performance",
    description:
      "We build native applications that are blazing fast and respect your privacy, ensuring secure authentication and local-first thinking.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-coral" />
              </div>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Crafting tools for the
              <br />
              modern digital age.
            </h2>
            <p className="text-muted-foreground mb-8">
              At Saumabhi Infotech, we believe software should be an extension of your thought process.
              We are dedicated to building robust, cross-platform applications that solve real-world problems.
              Our flagship product, <strong>Navi</strong>, redefines how you interact with AI on your computer.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
