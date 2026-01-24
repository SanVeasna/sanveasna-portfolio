import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { aboutData } from "@/data/portfolio";

const About = () => {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&q=80"
                alt="About James"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl max-w-xs"
            >
              <Quote className="w-8 h-8 lime-text mb-3" />
              <p className="text-sm italic text-muted-foreground">
                "{aboutData.quote}"
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {aboutData.label}
              </span>
              <h2 className="section-title mb-6">{aboutData.title}</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              <p dangerouslySetInnerHTML={{ __html: aboutData.description }} />
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-display font-bold lime-text mb-1">
                    {highlight.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {highlight.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
