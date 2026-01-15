import { useEffect, useState, useRef } from 'react';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110"
          aria-hidden="true"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Babylon Burn"
            className="mx-auto h-40 md:h-56 lg:h-64 w-auto mb-8 drop-shadow-2xl"
          />

          {/* H1 - Nome da empresa */}
          <h1 className="sr-only">Babylon Burn</h1>

          {/* Headline */}
          <p className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-6 tracking-wider drop-shadow-lg">
            Onde o ritual começa.
          </p>

          {/* H2 - Subheadline */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed font-body drop-shadow-md">
            Tabacaria, head shop, tereré e bebidas com identidade, qualidade e atitude.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5518992043290"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading text-xl tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 glow-gold"
            >
              Fale conosco
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/60 text-primary font-heading text-xl tracking-wider rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Conheça nossos produtos
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
