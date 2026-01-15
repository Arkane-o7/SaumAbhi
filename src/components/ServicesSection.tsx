import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Bot, Zap, Monitor, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "navi",
    title: "Navi AI Assistant",
    icon: Bot,
    headline: "Your Intelligent Desktop Companion",
    description:
      "Navi is a spotlight-style AI assistant powered by LLaMA 3.3. It offers instant access to intelligence, real-time web search, and seamless conversation history across all your devices (macOS, Windows, Linux).",
  },
  {
    id: "productivity",
    title: "Productivity Tools",
    icon: Zap,
    headline: "Streamline Your Workflow",
    description:
      "We build tools designed to eliminate friction. From quick actions to global shortcuts, our software is engineered to keep you in the flow and help you achieve more in less time.",
  },
  {
    id: "crossplatform",
    title: "Cross-Platform",
    icon: Monitor,
    headline: "Native Experience, Everywhere",
    description:
      "Whether you are on a Mac, specific Windows setup, or Linux distro, our applications are built to perform natively. We ensure a consistent, high-performance experience across all ecosystems.",
  },
  {
    id: "security",
    title: "Privacy & Security",
    icon: Shield,
    headline: "Enterprise-Grade Protection for Consumers",
    description:
      "Security isn't just for big business. We implement enterprise-grade authentication (WorkOS), secure token storage, and privacy-first practices in all our consumer applications.",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService)!;

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Empowering you with
            <br />
            smart tools.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Tabs */}
          <div className="bg-primary rounded-3xl p-6 text-primary-foreground">
            <h3 className="text-xl font-semibold mb-6">
              Our Ecosystem
            </h3>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${activeService === service.id
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
