import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Vitrine = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // Header: 80px
      const height = window.innerHeight - 80;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Prevent scroll on body
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      document.body.style.overflow = '';
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Início', isRoute: true },
    { href: '/#sobre', label: 'Sobre', isRoute: false },
    { href: '/#produtos', label: 'Produtos', isRoute: false },
    { href: '/#contato', label: 'Contato', isRoute: false },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      {/* Header fixo - 80px */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/95 backdrop-blur-md shadow-lg shadow-gold/5">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Babylon Burn - Tabacaria & Head Shop" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="font-heading text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-heading text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 ${
              isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-border">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleLinkClick}
                    className="font-heading text-xl tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-heading text-xl tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Iframe - altura calculada dinamicamente */}
      <main 
        className="w-full"
        style={{ 
          marginTop: '80px',
          height: `${iframeHeight}px`
        }}
      >
        <iframe
          src="https://mrking.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
