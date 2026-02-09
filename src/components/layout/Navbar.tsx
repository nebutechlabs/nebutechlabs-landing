import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

export const Navbar = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setProductsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: t.nav.services, href: '#services' },
        { name: t.nav.process, href: '#process' },
        { name: t.nav.about, href: '#about' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src={logoImg} alt="NebutechLabs" className="h-9 w-9 rounded-md" />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Nebutech<span className="text-accent">Labs</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Products Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setProductsOpen(!productsOpen)}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {t.nav.products}
                            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {productsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full right-0 mt-3 w-72 rounded-xl bg-secondary/95 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                                >
                                    <div className="p-2">
                                        {t.products.map((product) => (
                                            <a
                                                key={product.name}
                                                href={product.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setProductsOpen(false)}
                                                className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                                                            {product.name}
                                                        </span>
                                                        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <LanguageSwitcher />
                    <Button onClick={() => window.location.href = '#contact'}>
                        {t.hero.cta}
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center space-x-4">
                    <LanguageSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-foreground text-muted-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Mobile Products */}
                            <div className="border-t border-white/5 pt-4">
                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    {t.nav.products}
                                </span>
                                <div className="mt-3 space-y-2">
                                    {t.products.map((product) => (
                                        <a
                                            key={product.name}
                                            href={product.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <div>
                                                <div className="text-sm font-semibold text-foreground">{product.name}</div>
                                                <p className="text-xs text-muted-foreground mt-0.5">{product.description}</p>
                                            </div>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-3" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <Button onClick={() => { setIsOpen(false); window.location.href = '#contact'; }} className="w-full">
                                {t.hero.cta}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
