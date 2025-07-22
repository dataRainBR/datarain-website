import dataRainLogo from '@/assets/datarain-logo.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={dataRainLogo} 
        alt="DataRain Logo" 
        className="h-10 md:h-12"
      />
    </div>
  );
};

export default Logo;