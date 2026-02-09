import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';

export const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={logoImg}
                        alt="NebutechLabs"
                        className="w-16 h-16 mx-auto mb-6 rounded-xl opacity-80"
                    />
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">{t.about.title}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                        {t.about.subtitle}
                    </h3>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        {t.about.text}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
