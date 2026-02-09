import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, ShieldCheck } from 'lucide-react';

export const WhyUsSection = () => {
    const { t } = useLanguage();

    const icons = [BrainCircuit, Code2, ShieldCheck];

    return (
        <section className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.whyUs.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.whyUs.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.whyUs.items.map((item, idx) => {
                        const Icon = icons[idx] || BrainCircuit;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center text-white">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
