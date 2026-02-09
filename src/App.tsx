import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { WhatWeDoSection } from './components/sections/WhatWeDoSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/20 selection:text-white">
      <Navbar />

      <main className="flex flex-col">
        <HeroSection />

        <WhatWeDoSection />

        <ServicesSection />

        <WhyUsSection />

        <ProcessSection />

        <AboutSection />

        <ContactSection />

      </main>

      <Footer />
    </div>
  )
}

export default App
