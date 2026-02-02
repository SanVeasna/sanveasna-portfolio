import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Star,
  Download,
  Contact,
  PhoneCall,
} from "lucide-react";
import { heroData, marqueeItems } from "@/data/portfolio";
import handleDownload from "@/utils/download";

const Hero = () => {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10 pt-[2rem]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4"
            >
              {heroData.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2 leading-tight"
            >
              {heroData.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold lime-text mb-6"
            >
              {heroData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              {heroData.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={() => handleScroll("#contact")}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="w-5 h-5" />
                {heroData.cta.primary}
              </motion.button>
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
              >
                <Download className="w-5 h-5" />
                {heroData.cta.secondary}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8"
            >
              {heroData.stats.map((stat, index) => (
                <div key={index} className="glass-card px-6 py-4 rounded-2xl">
                  <p className="text-3xl font-display font-bold lime-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[26px] blur-3xl" />

              {/* Image */}
              <div className="relative w-72 h-[22rem] md:w-96 md:h-[26rem] lg:w-[420px] lg:h-[450px]">
                <div className="absolute inset-0 rounded-[26px] overflow-hidden border-2 border-primary/30">
                  <img
                    src="profile.png?w=500&q=80"
                    alt="San Veasna"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                {/* <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 top-1/4 glass-card px-4 py-3 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-muted border-2 border-card"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">150+ Clients</span>
                  </div>
                </motion.div> */}

                {/* Years badge */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -left-4 bottom-1/4 glass-card px-4 py-3 rounded-xl"
                >
                  <p className="text-4xl font-display font-bold lime-text">
                    6+
                  </p>
                  <p className="text-lg text-muted-foreground">Years Exp.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground whitespace-nowrap">
                  {item}
                </span>
                {/* <Star className="w-6 h-6 lime-text fill-current" /> */}
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground whitespace-nowrap">
                  {item}
                </span>
                <Star className="w-6 h-6 lime-text fill-current" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
