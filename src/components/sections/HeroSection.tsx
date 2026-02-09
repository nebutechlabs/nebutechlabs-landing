import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background: subtle radial glow matching logo dark tones */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-background to-background"></div>

            <div className="container mx-auto px-4 text-center z-10">
                {/* Logo mark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <img
                        src={logoImg}
                        alt="NebutechLabs"
                        className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-2xl shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                        {t.hero.title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-normal">
                        {t.hero.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 h-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] transition-shadow"
                        onClick={() => window.location.href = '#contact'}
                    >
                        {t.hero.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 py-6 h-auto border-white/20 hover:border-white/40"
                        onClick={() => window.location.href = '#services'}
                    >
                        {t.nav.services}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
