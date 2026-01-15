import dividerSmoke from '@/assets/divider-smoke.jpg';
import dividerFire from '@/assets/divider-fire.jpg';

interface ImageDividerProps {
  variant?: 'smoke' | 'fire';
}

const ImageDivider = ({ variant = 'smoke' }: ImageDividerProps) => {
  const image = variant === 'smoke' ? dividerSmoke : dividerFire;

  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden">
      {/* Animated smoke/fire layers */}
      <div className="absolute inset-0 w-[150%] h-full -left-[25%]">
        <img
          src={image}
          alt=""
          className="absolute w-full h-full object-cover opacity-40 animate-smoke-flow-1"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 w-[150%] h-full -left-[25%]">
        <img
          src={image}
          alt=""
          className="absolute w-full h-full object-cover opacity-35 animate-smoke-flow-2 scale-x-[-1]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 w-[150%] h-full -left-[25%]">
        <img
          src={image}
          alt=""
          className="absolute w-full h-full object-cover opacity-30 animate-smoke-flow-3"
          aria-hidden="true"
        />
      </div>
      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  );
};

export default ImageDivider;
