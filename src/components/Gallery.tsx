import { useEffect, useRef, useState } from 'react';
import lojaInterior from '@/assets/loja-interior.jpg';
import graffiti from '@/assets/graffiti.jpg';
import produtosVitrine from '@/assets/produtos-vitrine.jpg';
import fachada from '@/assets/fachada.jpg';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: fachada,
      alt: 'Fachada da Babylon Burn - Tabacaria e Head Shop',
      title: 'Nossa fachada',
    },
    {
      src: lojaInterior,
      alt: 'Interior da loja Babylon Burn com produtos expostos',
      title: 'Ambiente interno',
    },
    {
      src: graffiti,
      alt: 'Arte de grafite na parede da Babylon Burn',
      title: 'Nossa identidade',
    },
    {
      src: produtosVitrine,
      alt: 'Vitrine com produtos da Babylon Burn',
      title: 'Nossos produtos',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wider">
            Conheça nosso espaço
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.title}
              className={`group relative overflow-hidden rounded-xl aspect-[3/4] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-lg text-primary tracking-wider">
                  {image.title}
                </p>
              </div>
              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
