import dividerSmoke from '@/assets/divider-smoke.jpg';
import dividerFire from '@/assets/divider-fire.jpg';

interface ImageDividerProps {
  variant?: 'smoke' | 'fire';
}

const ImageDivider = ({ variant = 'smoke' }: ImageDividerProps) => {
  const image = variant === 'smoke' ? dividerSmoke : dividerFire;

  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover opacity-60"
        aria-hidden="true"
      />
      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  );
};

export default ImageDivider;
