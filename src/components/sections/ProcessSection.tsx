import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Search, PenTool, Braces, Rocket } from 'lucide-react';

export const ProcessSection = () => {
    const { t } = useLanguage();

    const icons = [Search, PenTool, Braces, Rocket];

    return (
        <section id="process" className="py-24 bg-secondary/20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.process.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.process.subtitle}</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {t.process.steps.map((step, idx) => {
                            const Icon = icons[idx] || Search;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative z-10 text-center"
                                >
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-background border border-white/10 flex items-center justify-center text-white shadow-lg shadow-white/5">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
