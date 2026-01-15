import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cigarette, FlaskConical, GlassWater, Wine, ShoppingBag, ExternalLink } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const deliveryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay: 1,
      },
    },
  };

  return (
    <section
      id="produtos"
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

      <motion.div 
        className="relative z-10 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4 tracking-wider"
            variants={headerVariants}
          >
            Nossos produtos
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Diversidade em tabacaria, head shop, bebidas e tereré. 
            Tudo selecionado com cuidado para sua experiência.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="group relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
                borderColor: 'rgba(212, 175, 55, 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${product.color}`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                whileHover={{ translateX: '200%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  variants={iconVariants}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <product.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="font-heading text-3xl text-foreground mb-2 tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {product.title}
                </motion.h3>

                {/* Subtitle */}
                <motion.p 
                  className="text-primary font-medium mb-4 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  &quot;{product.subtitle}&quot;
                </motion.p>

                {/* Description */}
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {product.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vitrine CTA Section */}
        <motion.div
          className="mt-16 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-primary/10 via-card/90 to-primary/5 backdrop-blur-sm border border-primary/40 rounded-3xl p-8 md:p-12 overflow-hidden"
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Icon */}
              <motion.div 
                className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <ShoppingBag className="w-12 h-12 text-primary" />
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading text-3xl md:text-4xl text-primary mb-3 tracking-wider">
                  Confira nossa Vitrine Online
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  Explore todos os nossos produtos em detalhes. Veja preços, descrições e faça seu pedido 
                  diretamente pela nossa vitrine digital. Praticidade e qualidade ao seu alcance!
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/vitrine"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading text-xl tracking-wider rounded-xl hover:bg-gold-light transition-all duration-300 shadow-lg shadow-primary/30 flex-shrink-0"
              >
                <span>Acessar Vitrine</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Delivery Notice */}
        <motion.div
          className="text-center"
          variants={deliveryVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-foreground">
              Fazemos <span className="text-primary font-semibold">entregas</span> na região
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
