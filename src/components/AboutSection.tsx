import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: CheckCircle, value: "1000+", label: "Projects Delivered" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const features = [
  {
    title: "Expert Guidance and Proven Results",
    description:
      "Get expert advice and best practices to succeed at every step. We have a strong history of successful IT implementations.",
  },
  {
    title: "Cost-Effective and Tailored Solutions",
    description:
      "Our customized approach saves time and reduces costs, seamlessly integrating technology solutions to fit your business needs.",
  },
  {
    title: "Constant Improvement Driven by Industry Expertise",
    description:
      "We stay ahead of technology trends to provide innovative solutions that give your business a competitive edge.",
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
              Expert solutions. Reliable support.
              <br />
              Proven results.
            </h2>
            <p className="text-muted-foreground mb-8">
              We're committed to driving your business success through tailored
              technology solutions that streamline operations, boost efficiency,
              and support growth. Our expert team ensures every implementation
              is aligned with your unique goals and challenges.
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
