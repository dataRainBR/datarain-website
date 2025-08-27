import dataRainLogoOriginal from '@/assets/datarain-logo-original.png';
import dataRainLogoBlack from '@/assets/datarain-logo-black.png';
import dataRainLogoWhite from '@/assets/datarain-logo-white.png';

interface LogoProps {
  className?: string;
  variant?: 'original' | 'black' | 'white';
}

const Logo = ({ className = "", variant = 'original' }: LogoProps) => {
  const logoSrc = {
    original: dataRainLogoOriginal,
    black: dataRainLogoBlack,
    white: dataRainLogoWhite
  }[variant];

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="DataRain Logo" 
        className="h-10 md:h-12"
      />
    </div>
  );
};

export default Logo;