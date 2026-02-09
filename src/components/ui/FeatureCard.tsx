import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    description: string;
    delay?: number;
}

export const FeatureCard = ({ title, description, delay = 0 }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="p-8 rounded-2xl bg-secondary/40 border border-white/5 hover:border-white/15 transition-all duration-300 group"
        >
            <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-white transition-colors">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
    );
};
