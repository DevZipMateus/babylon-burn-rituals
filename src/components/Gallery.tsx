import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import lojaInterior from '@/assets/loja-interior.jpg';
import graffiti from '@/assets/graffiti.jpg';
import produtosVitrine from '@/assets/produtos-vitrine.jpg';
import fachada from '@/assets/fachada.jpg';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);
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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
    <>
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-20 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4 tracking-wider">
              Conheça nosso espaço
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Video Section */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl max-w-xs sm:max-w-sm mx-auto">
              <video
                src="/midia_5.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
              />
              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg sm:rounded-xl pointer-events-none" />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={image.title}
                className={`group relative overflow-hidden rounded-lg sm:rounded-xl aspect-[3/4] transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                {/* Title - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-heading text-sm sm:text-lg text-primary tracking-wider">
                    {image.title}
                  </p>
                </div>
                {/* Border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg sm:rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-primary hover:text-primary/80 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent rounded-b-lg">
              <p className="font-heading text-xl sm:text-2xl text-primary tracking-wider text-center">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
