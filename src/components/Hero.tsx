import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';
import smokeImage from '@/assets/divider-smoke.jpg';

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

      {/* Animated smoke overlay for hookah */}
      <div className="absolute top-0 left-0 w-1/2 md:w-2/5 h-2/3 overflow-hidden pointer-events-none z-[1]">
        {/* Smoke layer 1 - rising effect */}
        <div className="absolute inset-0">
          <img
            src={smokeImage}
            alt=""
            className="w-[200%] h-full object-cover opacity-20 animate-smoke-rise-1 mix-blend-screen"
            aria-hidden="true"
          />
        </div>
        {/* Smoke layer 2 - drifting effect */}
        <div className="absolute inset-0">
          <img
            src={smokeImage}
            alt=""
            className="w-[200%] h-full object-cover opacity-15 animate-smoke-rise-2 scale-x-[-1] mix-blend-screen"
            aria-hidden="true"
          />
        </div>
        {/* Smoke layer 3 - subtle movement */}
        <div className="absolute inset-0">
          <img
            src={smokeImage}
            alt=""
            className="w-[200%] h-full object-cover opacity-10 animate-smoke-rise-3 mix-blend-screen"
            aria-hidden="true"
          />
        </div>
        {/* Gradient mask for natural fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
      </div>
      
      {/* Decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-30 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Babylon Burn"
            className="mx-auto h-28 sm:h-40 md:h-56 lg:h-64 w-auto mb-6 sm:mb-8 drop-shadow-2xl"
          />

          {/* H1 - Nome da empresa */}
          <h1 className="sr-only">Babylon Burn</h1>

          {/* Headline */}
          <p className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-primary mb-4 sm:mb-6 tracking-wider drop-shadow-lg">
            Onde o ritual começa.
          </p>

          {/* H2 - Subheadline */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-body drop-shadow-md px-2">
            Tabacaria, head shop, tereré e bebidas com identidade, qualidade e atitude.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap px-4">
            <a
              href="https://wa.me/5518992043290"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-heading text-lg sm:text-xl tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 glow-gold w-full sm:w-auto justify-center"
            >
              Fale conosco
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <Link
              to="/vitrine"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground font-heading text-lg sm:text-xl tracking-wider rounded-lg hover:from-primary hover:to-gold-light transition-all duration-300 shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
            >
              <ShoppingBag className="w-5 h-5" />
              Ver Vitrine
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
