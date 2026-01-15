import { Instagram, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Babylon Burn"
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/babylonburn_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </a>
            <a
              href="https://wa.me/5518992043290"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </a>
            <a
              href="https://share.google/OALpfXzJLo0k7AXDS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="Localização"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} Babylon Burn
            </p>
            <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">
              CNPJ: 32.890.004/0001-89
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
