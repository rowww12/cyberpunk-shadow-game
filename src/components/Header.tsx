
import { useState, useEffect } from "react";
import { Image, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-cyberpunk-darkpurple border-b border-cyberpunk-purple/30 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-cyberpunk-neon text-3xl font-bold ${glitchActive ? 'animate-pulse' : ''} flex items-center`}>
          <Image className="h-8 w-8 mr-2 text-cyberpunk-neon" />
          <span className="text-cyberpunk-purple">Cyber</span>
          <span className="text-cyberpunk-neon">Crack</span>
          <span className="text-cyberpunk-pink">77</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-cyberpunk-neon transition-colors">Accueil</Link>
          <Link to="/cracks" className="text-white hover:text-cyberpunk-neon transition-colors">Cracks</Link>
          <Link to="/tutorials" className="text-white hover:text-cyberpunk-neon transition-colors">Tutoriels</Link>
          <a href="#download" className="text-white hover:text-cyberpunk-orange transition-colors">Télécharger</a>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-cyberpunk-darkpurple/95 border-t border-cyberpunk-purple/30 py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-cyberpunk-neon transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/cracks" 
              className="text-white hover:text-cyberpunk-neon transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cracks
            </Link>
            <Link 
              to="/tutorials" 
              className="text-white hover:text-cyberpunk-neon transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutoriels
            </Link>
            <a 
              href="#download" 
              className="text-white hover:text-cyberpunk-orange transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Télécharger
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
