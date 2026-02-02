import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { contactData, footerData } from '@/data/portfolio';
import { SiLinkedin, SiTelegram } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sorry for the inconvenience, the contact form is currently not functional.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="relative">
      <div className="section-container ">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {contactData.label}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title mb-4">
              {contactData.title}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-muted-foreground mb-8">
              {contactData.subtitle}
            </motion.p>
            <motion.a href={`mailto:${contactData.email}`} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 text-2xl font-display font-bold lime-text hover:opacity-80 transition-opacity mb-8">
              <Mail className="w-6 h-6" />
              {contactData.email}
            </motion.a>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="flex gap-4">
              <a href="https://t.me/VeasnaPH" className="p-4 glass-card rounded-xl hover:bg-primary/10 transition-colors" target='blank'><SiTelegram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/veasna-san-098b3b22a" className="p-4 glass-card rounded-xl hover:bg-primary/10 transition-colors" target='blank'><SiLinkedin className="w-5 h-5" /></a>
            </motion.div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl space-y-6 before:relative">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition-all resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full btn-primary">Send Message <Send className="w-4 h-4" /></button>
          </motion.form>
        </div>

        <motion.footer initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">{footerData.copyright}</p>
          <p className="text-muted-foreground/60 text-xs mt-2">{footerData.tagline}</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
