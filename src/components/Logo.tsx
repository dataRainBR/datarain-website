interface LogoProps {
  className?: string;
  variant?: 'original' | 'black' | 'white';
}

const Logo = ({ className = "", variant = 'original' }: LogoProps) => {
  const logoSrc = {
    original: 'https://s3.sa-east-1.amazonaws.com/datarain.marketing/Site/DR_LOGO_ORIGINAL.png',
    black: 'https://s3.sa-east-1.amazonaws.com/datarain.marketing/Site/DR_LOGO_BLACK+(1).png',
    white: 'https://s3.sa-east-1.amazonaws.com/datarain.marketing/Site/DR_LOGO_WHITE.png'
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