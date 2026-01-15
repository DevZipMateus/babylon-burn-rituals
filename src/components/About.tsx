import { useEffect, useRef, useState } from 'react';
import { Flame, Eye, Heart, Users, Award, Leaf } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Flame,
      title: 'Liberdade com responsabilidade',
      description: 'Respeitamos escolhas e incentivamos o consumo consciente.',
    },
    {
      icon: Heart,
      title: 'Autenticidade',
      description: 'Não seguimos padrões impostos. Criamos nossa própria identidade.',
    },
    {
      icon: Users,
      title: 'Respeito à diversidade',
      description: 'Aqui todas as tribos convivem. Sem preconceito, sem rótulos.',
    },
    {
      icon: Eye,
      title: 'Cultura e informação',
      description: 'Conhecimento faz parte da experiência Babylon Burn.',
    },
    {
      icon: Award,
      title: 'Qualidade e procedência',
      description: 'Trabalhamos apenas com produtos confiáveis e bem selecionados.',
    },
    {
      icon: Leaf,
      title: 'Atitude urbana',
      description: 'Nossa essência vem da rua, da música, da arte e da expressão livre.',
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4 tracking-wider">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-primary tracking-wider">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer produtos de qualidade, informação e experiência para quem vive a cultura alternativa, 
              promovendo liberdade de escolha, consumo consciente e um ambiente onde cada cliente se sinta 
              respeitado, representado e à vontade para ser quem é.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-primary tracking-wider">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência regional em tabacaria e head shop, reconhecida não apenas pelos produtos, 
              mas pela identidade, atitude e pela construção de uma comunidade que valoriza cultura, 
              estilo de vida e autenticidade.
            </p>
          </div>
        </div>

        {/* History */}
        <div
          className={`bg-card border border-border rounded-2xl p-8 md:p-12 mb-20 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-heading text-3xl text-primary mb-6 tracking-wider text-center">
            Como surgiu?
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Babylon Burn nasceu da união entre cultura urbana, liberdade de expressão e respeito ao ritual. 
              Surgiu da vontade de criar mais do que uma loja: um espaço onde cada escolha tivesse significado, 
              cada produto tivesse propósito e cada cliente se sentisse parte de algo maior.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Inspirada pela rua, pela música, pela arte e pelos encontros, a Babylon Burn foi criada para quem 
              valoriza qualidade, consciência e atitude. Um lugar pensado para quem entende que o ritual começa 
              na escolha — seja no tabaco, no acessório, no tereré ou na bebida.
            </p>
            <p className="text-primary font-medium text-lg text-center mt-8">
              Aqui, o fogo não é excesso. É cultura.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl text-primary mb-4 tracking-wider">
            Nossos valores
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2 tracking-wide">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
