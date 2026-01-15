import { useEffect, useRef, useState } from 'react';
import dividerSmoke from '@/assets/divider-smoke.jpg';
import dividerFire from '@/assets/divider-fire.jpg';

interface ImageDividerProps {
  variant?: 'smoke' | 'fire';
}

const ImageDivider = ({ variant = 'smoke' }: ImageDividerProps) => {
  const image = variant === 'smoke' ? dividerSmoke : dividerFire;
  const [parallaxX, setParallaxX] = useState(0);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (dividerRef.current) {
        const rect = dividerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate position relative to viewport center
        const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const parallaxValue = centerOffset * 50; // Horizontal movement
        
        setParallaxX(parallaxValue);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={dividerRef} className="relative w-full h-24 md:h-32 overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-[120%] h-full object-cover opacity-70 transition-transform duration-100"
        style={{ transform: `translateX(${parallaxX}px)` }}
        aria-hidden="true"
      />
      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  );
};

export default ImageDivider;
