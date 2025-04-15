
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [glitchText, setGlitchText] = useState(false);
  
  const handleMouseOver = () => {
    setGlitchText(true);
    setTimeout(() => setGlitchText(false), 500);
  };
  
  return (
    <div className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background with cyberpunk style */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-darkpurple via-black to-cyberpunk-darkpurple z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] opacity-20 mix-blend-overlay bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-8"></div>
      </div>
      
      {/* Glowing lines */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-purple to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-blue to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className={`text-5xl md:text-7xl font-extrabold mb-6 ${glitchText ? 'animate-pulse' : ''}`}
          onMouseOver={handleMouseOver}
        >
          <span className="text-white">Cyberpunk </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-blue">2077</span>
          <span className="text-cyberpunk-orange"> Crack</span>
        </h1>
        <p className="text-cyberpunk-neon text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Téléchargez le <span className="text-cyberpunk-pink">crack complet</span> avec tous les DLC et profitez de Night City sans limites!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink hover:from-cyberpunk-pink hover:to-cyberpunk-purple text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg shadow-cyberpunk-purple/20"
            onMouseOver={handleMouseOver}
          >
            ACCÉDER AU CRACK
          </Button>
          <Button 
            variant="outline" 
            className="border-cyberpunk-blue text-cyberpunk-blue hover:bg-cyberpunk-blue/10"
          >
            VOIR LES TUTORIELS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
