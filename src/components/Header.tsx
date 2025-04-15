
import { useState, useEffect } from "react";

const Header = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <header className="w-full bg-cyberpunk-darkpurple border-b border-cyberpunk-purple/30 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-cyberpunk-neon text-3xl font-bold ${glitchActive ? 'animate-pulse' : ''}`}>
          <span className="text-cyberpunk-purple">Cyber</span>
          <span className="text-cyberpunk-neon">Crack</span>
          <span className="text-cyberpunk-pink">77</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-cyberpunk-neon transition-colors">Accueil</a>
          <a href="#" className="text-white hover:text-cyberpunk-neon transition-colors">Cracks</a>
          <a href="#" className="text-white hover:text-cyberpunk-neon transition-colors">Tutoriels</a>
          <a href="#download" className="text-white hover:text-cyberpunk-orange transition-colors">Télécharger</a>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
