import { useEffect, useRef, useState } from 'react';
import { Cigarette, FlaskConical, GlassWater, Wine } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
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

  const products = [
    {
      icon: Cigarette,
      title: 'Tabacaria',
      subtitle: 'Qualidade se sente no primeiro trago.',
      description: 'Seleção premium de tabacos nacionais e importados, com variedade para todos os gostos e rituais.',
      color: 'from-amber-600/20 to-amber-800/20',
    },
    {
      icon: FlaskConical,
      title: 'Head shop',
      subtitle: 'A ferramenta define o ritual.',
      description: 'Bongs, sedas, dichavadores, piteiras e acessórios de alta qualidade para uma experiência completa.',
      color: 'from-orange-600/20 to-red-800/20',
    },
    {
      icon: GlassWater,
      title: 'Tereré',
      subtitle: 'Tereré também é ritual.',
      description: 'Ervas selecionadas, copos térmicos, bombas e gelos artesanais para o melhor tereré da região.',
      color: 'from-green-600/20 to-teal-800/20',
    },
    {
      icon: Wine,
      title: 'Bebidas',
      subtitle: 'Sabor com identidade.',
      description: 'Drinks especiais e bebidas selecionadas para complementar sua experiência na Babylon Burn.',
      color: 'from-purple-600/20 to-pink-800/20',
    },
  ];

  return (
    <section
      id="produtos"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={productsBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4 tracking-wider">
            Nossos produtos
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diversidade em tabacaria, head shop, bebidas e tereré. 
            Tudo selecionado com cuidado para sua experiência.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-3xl text-foreground mb-2 tracking-wider">
                  {product.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary font-medium mb-4 italic">
                  &quot;{product.subtitle}&quot;
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Notice */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-foreground">
              Fazemos <span className="text-primary font-semibold">entregas</span> na região
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
