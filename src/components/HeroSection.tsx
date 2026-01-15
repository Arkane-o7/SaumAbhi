import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 border-8 border-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empathy-Driven
              <br />
              <span className="text-foreground">IT Solutions for</span>
              <br />
              <span className="text-foreground">Your Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Unlock the power of cutting-edge technology, cloud solutions, and
              digital transformation to streamline operations and boost
              productivity with expert implementation and support.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Schedule Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a href="#services" className="text-foreground font-medium underline underline-offset-4 hover:text-accent transition-colors">
                Know More
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="flex flex-col gap-4">
              {/* Stats Row */}
              <div className="flex gap-4">
                {/* Stats Card */}
                <div className="bg-coral-light rounded-3xl p-6 flex-1 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-5xl md:text-6xl font-bold text-coral">
                      100+
                    </span>
                    <p className="text-sm text-foreground/80 mt-2 max-w-[150px]">
                      Large companies we collaborate with place a great deal of
                      trust in us.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral/50 rounded-full mx-4 mb-4" />
                </div>

                {/* Decorative Shape */}
                <div className="relative w-40 h-40 hidden md:block">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange rounded-full" />
                </div>
              </div>

              {/* Growth Card */}
              <div className="bg-blue rounded-3xl p-6 text-primary-foreground">
                <div className="flex items-center gap-2 text-sm opacity-80 mb-2">
                  <span className="w-8 h-0.5 bg-primary-foreground/50" />
                  SaumAbhi Info Tech
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Drive growth.
                  <br />
                  Boost impact.
                  <br />
                  Win with us.
                </h3>
                {/* Chart Bars */}
                <div className="flex items-end gap-2 mt-4 h-20">
                  {[40, 55, 70, 85, 95].map((height, i) => <motion.div key={i} initial={{
                  height: 0
                }} animate={{
                  height: `${height}%`
                }} transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1
                }} className="flex-1 bg-primary-foreground/30 rounded-t-lg" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}