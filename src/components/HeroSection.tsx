import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-slate-900 py-20 md:py-28 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <Star className="h-4 w-4 text-coral fill-coral" />
              <span className="text-sm text-white/90 font-medium">Trusted by 100+ Companies</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
              Empathy-Driven
              <br />
              <span className="bg-gradient-to-r from-coral via-orange to-coral bg-clip-text text-transparent">
                IT Solutions
              </span>
              <br />
              <span className="text-white/90">for Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Unlock the power of cutting-edge technology, cloud solutions, and
              digital transformation to streamline operations and boost
              productivity with expert implementation and support.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg gap-2 shadow-lg shadow-coral/25 transition-all hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
              >
                Schedule a Call
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-green border-2 border-navy flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/70 text-sm">
                <span className="text-white font-semibold">500+</span> Happy clients worldwide
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Stats Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-gradient-to-br from-coral to-orange rounded-3xl p-8 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white/80 font-medium">Trusted Partners</span>
                  </div>
                  <span className="text-6xl md:text-7xl font-bold text-white">
                    100+
                  </span>
                  <p className="text-white/80 mt-3 max-w-[200px]">
                    Large companies trust us with their digital transformation journey.
                  </p>
                </div>
              </motion.div>

              {/* Blue Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue to-blue/80 rounded-3xl p-6 relative overflow-hidden shadow-xl"
              >
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <Award className="h-8 w-8 text-white/80 mb-3" />
                  <span className="text-3xl md:text-4xl font-bold text-white block">15+</span>
                  <p className="text-white/70 text-sm mt-1">Years of Excellence</p>
                </div>
              </motion.div>

              {/* Green Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green to-green/80 rounded-3xl p-6 relative overflow-hidden shadow-xl"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-white fill-white" />
                    ))}
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-white block">4.9</span>
                  <p className="text-white/70 text-sm mt-1">Client Rating</p>
                </div>
              </motion.div>

              {/* Bottom tagline card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-coral to-orange rounded-full" />
                  <div>
                    <p className="text-white/60 text-sm">SaumAbhi Info Tech</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Drive growth. Boost impact. Win with us.
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
