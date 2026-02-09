import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export const ContactSection = () => {
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSuccess(true);
    };

    return (
        <section id="contact" className="py-24 bg-secondary/20 relative">
            <div className="container px-4 max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.contact.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
                </div>

                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-xl text-center"
                    >
                        <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                        <p className="text-muted-foreground">{t.contact.form.success}</p>
                        <Button variant="outline" className="mt-6" onClick={() => setIsSuccess(false)}>
                            Send another
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-secondary/30 p-8 rounded-xl border border-white/5 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t.contact.form.name}</label>
                                <Input required placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t.contact.form.email}</label>
                                <Input required type="email" placeholder="jane@company.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t.contact.form.company}</label>
                                <Input placeholder="Acme Inc." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t.contact.form.role}</label>
                                <Input placeholder="CTO / Founder" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t.contact.form.message}</label>
                            <Textarea required className="min-h-[120px]" placeholder="Tell us about your project..." />
                        </div>

                        <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                            {t.contact.form.submit}
                        </Button>
                    </motion.form>
                )}
            </div>
        </section>
    );
};
