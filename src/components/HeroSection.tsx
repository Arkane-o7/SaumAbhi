import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[85vh] flex items-center">
      {/* Floating dots decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-blue/60" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-coral/60" />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 rounded-full bg-green/60" />
        <div className="absolute top-2/3 right-[45%] w-1 h-1 rounded-full bg-blue/80" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Your Business,
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-blue via-coral to-green bg-clip-text text-transparent">
                Tech Ready.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Start scaling your enterprise with cutting-edge IT solutions.
              Implement cloud infrastructure, security, and digital transformation
              in weeks instead of months.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Button size="lg" className="rounded-full px-8 h-12 text-base">
                Get started
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-blue transition-colors group"
              >
                Talk to an expert
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Optional bottom banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 hover:border-border hover:bg-muted/50 transition-all text-muted-foreground hover:text-foreground"
              >
                <span>Explore our enterprise solutions</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Abstract geometric shapes */}
            <div className="relative w-full h-[500px]">
              {/* Main rotating shape group */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Outer diamond */}
                <div className="absolute w-72 h-72 border-[3px] border-blue/30 rounded-3xl rotate-45 bg-gradient-to-br from-blue/5 to-transparent" />
                <div className="absolute w-64 h-64 border-[2px] border-coral/20 rounded-3xl rotate-[55deg] bg-gradient-to-br from-coral/5 to-transparent" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Inner shapes */}
                <div className="absolute w-56 h-56 border-[3px] border-green/30 rounded-3xl rotate-[30deg] bg-gradient-to-tr from-green/5 to-transparent" />
                <div className="absolute w-48 h-48 border-[2px] border-blue/40 rounded-3xl rotate-[70deg] bg-gradient-to-bl from-blue/10 to-transparent" />
              </motion.div>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue/20 via-coral/20 to-green/20 blur-3xl" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-6 h-6 rounded-lg bg-gradient-to-br from-coral to-orange rotate-45"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 left-16 w-4 h-4 rounded-full bg-gradient-to-br from-blue to-green"
              />
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-gradient-to-br from-green to-blue"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
