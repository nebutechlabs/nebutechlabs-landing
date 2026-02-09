import { useLanguage } from '../../context/LanguageContext';
import { FeatureCard } from '../ui/FeatureCard';

export const WhatWeDoSection = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.whatWeDo.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.whatWeDo.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.whatWeDo.items.map((item, index) => (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
