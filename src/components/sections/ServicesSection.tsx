import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { CheckCircle2, FlaskConical } from 'lucide-react';

export const ServicesSection = () => {
    const { t } = useLanguage();

    const currentServices = t.services.items.filter(i => i.type === 'current');
    const futureServices = t.services.items.filter(i => i.type === 'future');

    return (
        <section className="py-24 bg-secondary/20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.services.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Current Services */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
                            <CheckCircle2 className="mr-3 h-6 w-6 text-white" />
                            {t.services.available}
                        </h3>
                        <div className="space-y-6">
                            {currentServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-background border border-white/5 p-6 rounded-xl hover:border-white/15 transition-colors h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold">{service.name}</h4>
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            {service.status}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Future Vision */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-accent">
                            {/* Fallback icon if Telescope is tricky, using FlaskConical for Research */}
                            <FlaskConical className="mr-3 h-6 w-6" />
                            {t.services.future}
                        </h3>
                        <div className="space-y-6">
                            {futureServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-background/50 border border-white/5 p-6 rounded-xl relative overflow-hidden h-full flex flex-col"
                                >
                                    {/* Subtle disabled overlay look */}
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-foreground/80">{service.name}</h4>
                                        <span className={cn(
                                            "text-xs font-medium px-2 py-1 rounded-full border",
                                            service.status.includes('Explor') || service.status.includes('Exploration')
                                                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                                : "bg-purple-500/10 text-purple-500 border-purple-500/20"
                                        )}>
                                            {service.status}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-muted/20 border border-muted/30 rounded-lg text-xs text-muted-foreground italic">
                            {t.services.disclaimer}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
