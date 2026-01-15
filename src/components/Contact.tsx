import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import fachada from '@/assets/fachada.jpg';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Manoel Parada de Carvalho, 163',
      link: 'https://share.google/OALpfXzJLo0k7AXDS',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(18) 99204-3290',
      link: 'https://wa.me/5518992043290',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'alencar.jrr@outlook.com',
      link: 'mailto:alencar.jrr@outlook.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@babylonburn_',
      link: 'https://www.instagram.com/babylonburn_/',
    },
  ];

  const hours = [
    { days: 'Segunda a Quinta', time: '10:00 às 22:00' },
    { days: 'Sexta e Sábado', time: '10:00 às 23:00' },
    { days: 'Domingo', time: '13:00 às 21:00' },
  ];

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 tracking-wider">
            Contato
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Venha nos visitar ou entre em contato. Estamos prontos para te atender.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Fachada Image */}
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img
                src={fachada}
                alt="Fachada da Babylon Burn - Tabacaria e Head Shop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-heading text-2xl text-primary tracking-wider">Visite-nos</p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base sm:text-lg text-foreground tracking-wide mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm group-hover:text-primary transition-colors break-words">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground tracking-wide">
                  Horário de funcionamento
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground">{schedule.days}</span>
                    <span className="text-primary font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.5!2d-51.41!3d-22.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzEyLjAiUyA1McKwMjQnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Babylon Burn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
