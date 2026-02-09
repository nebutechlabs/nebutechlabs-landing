import logoImg from '../../assets/logo.png';

export const Footer = () => {
    return (
        <footer className="bg-secondary/30 border-t border-white/5 py-12 mt-20">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                <img src={logoImg} alt="NebutechLabs" className="h-8 w-8 rounded-md opacity-60" />
                <p className="text-muted-foreground text-sm">
                    Copyright © {new Date().getFullYear()} Todos los derechos reservados Nebutechlabs SpA.
                </p>
            </div>
        </footer>
    );
};
