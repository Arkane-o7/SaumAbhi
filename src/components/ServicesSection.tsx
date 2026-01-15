import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cloud, Database, Shield, Code, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "cloud",
    title: "Cloud Solutions",
    icon: Cloud,
    headline: "Transform Your Infrastructure with Cloud Excellence",
    description:
      "Leverage the power of cloud computing to scale your business operations. We provide comprehensive cloud migration, architecture design, and managed services across AWS, Azure, and Google Cloud platforms. Our expert team ensures seamless transitions with zero downtime.",
  },
  {
    id: "data",
    title: "Data Analytics",
    icon: BarChart,
    headline: "Turn Data into Actionable Business Insights",
    description:
      "Harness your data's full potential with advanced analytics solutions. From real-time dashboards to predictive modeling, we help you make data-driven decisions that accelerate growth and optimize operations across your organization.",
  },
  {
    id: "security",
    title: "Cybersecurity",
    icon: Shield,
    headline: "Protect Your Digital Assets with Enterprise Security",
    description:
      "Safeguard your business with comprehensive cybersecurity solutions. Our services include threat detection, vulnerability assessment, compliance management, and 24/7 security monitoring to keep your data and systems protected.",
  },
  {
    id: "development",
    title: "Software Development",
    icon: Code,
    headline: "Custom Software Solutions Built for Your Business",
    description:
      "From web applications to enterprise software, our development team creates tailored solutions that drive efficiency and innovation. We use modern technologies and agile methodologies to deliver high-quality software on time.",
  },
  {
    id: "database",
    title: "Database Management",
    icon: Database,
    headline: "Optimize Your Data Infrastructure for Peak Performance",
    description:
      "Ensure your databases are fast, reliable, and secure. Our database management services include optimization, migration, backup solutions, and real-time monitoring to keep your critical data accessible and protected.",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Excellence in service, driven by
            <br />
            innovation.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Tabs */}
          <div className="bg-primary rounded-3xl p-6 text-primary-foreground">
            <h3 className="text-xl font-semibold mb-6">
              Explore Our IT Solutions
            </h3>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                    activeService === service.id
                      ? "bg-primary-foreground text-primary"
                      : "hover:bg-primary-foreground/10"
                  }`}
                >
                  <service.icon className="h-5 w-5" />
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border"
            >
              <div className="h-12 w-12 rounded-2xl bg-blue/10 flex items-center justify-center mb-6">
                <currentService.icon className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {currentService.headline}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentService.description}
              </p>
              <Button variant="outline" className="rounded-full gap-2">
                Learn More
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
