import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { toolsData } from "@/data/portfolio";

const TechStack = () => {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="tech" ref={ref} className="relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            {toolsData.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            {toolsData.title}
          </motion.h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
          {toolsData.items.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="tech-item group"
              >
                <div className="flex flex-col items-center gap-4">
                  <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground mb-1">
                      {tool.name}
                    </p>
                    {/* <div className="progress-bar">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tool.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div> */}
                  </div>
                </div>
                {/* <p className="text-right text-sm lime-text font-medium">{tool.proficiency}%</p> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
