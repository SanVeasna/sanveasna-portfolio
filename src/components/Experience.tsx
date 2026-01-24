import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { experienceData } from '@/data/portfolio';

const Experience = () => {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="relative">
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
            {experienceData.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            {experienceData.title}
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 lime-text" />
              </div>
              <h3 className="text-xl font-display font-semibold">Work Experience</h3>
            </motion.div>

            <div className="space-y-0">
              {experienceData.experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1 
                  }}
                  className="timeline-item"
                >
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-display font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="lime-text font-medium text-sm mb-3">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-0">
              {experienceData.education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1 
                  }}
                  className="timeline-item"
                >
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-display font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-secondary font-medium text-sm mb-3">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
