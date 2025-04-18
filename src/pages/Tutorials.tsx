
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main>
        <div className="relative py-16 bg-gradient-to-b from-cyberpunk-darkpurple to-black">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyberpunk-orange">Tutoriels </span>
              <span className="text-white">d'Installation</span>
            </h1>
            
            <p className="text-gray-300 max-w-2xl mb-12">
              Suivez ces tutoriels pour installer votre launcher sans risque. Nos guides sont conçus pour vous aider à télécharger et installer facilement.
            </p>
            
            <div className="flex flex-col space-y-6">
              {/* Tutoriel Launcher */}
              <Link to="/tutorial-launcher" className="block">
                <div className="bg-gradient-to-r from-black to-cyberpunk-darkpurple border border-cyberpunk-purple/30 rounded-lg p-6 hover:border-cyberpunk-purple transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <BookOpen className="text-cyberpunk-neon mr-3 h-8 w-8" />
                      <div>
                        <h3 className="text-xl font-bold">Comment utiliser CrackYourGames</h3>
                        <p className="text-gray-400 text-sm">Installation simple et rapide du launcher</p>
                      </div>
                    </div>
                    <Button className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80">
                      <ExternalLink size={16} className="mr-2" /> Voir le tutoriel
                    </Button>
                  </div>
                </div>
              </Link>
              
              {/* Tutoriel Antivirus */}
              <Link to="/tutorial-antivirus" className="block">
                <div className="bg-gradient-to-r from-black to-cyberpunk-darkpurple border border-cyberpunk-purple/30 rounded-lg p-6 hover:border-cyberpunk-purple transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <Shield className="text-cyberpunk-pink mr-3 h-8 w-8" />
                      <div>
                        <h3 className="text-xl font-bold">Comment désactiver l'antivirus pour l'installation</h3>
                        <p className="text-gray-400 text-sm">Guide pour éviter les faux positifs pendant l'installation</p>
                      </div>
                    </div>
                    <Button className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80">
                      <ExternalLink size={16} className="mr-2" /> Voir le tutoriel
                    </Button>
                  </div>
                </div>
              </Link>
              
              {/* Tutoriel Erreurs */}
              <Link to="/tutorial-troubleshooting" className="block">
                <div className="bg-gradient-to-r from-black to-cyberpunk-darkpurple border border-cyberpunk-purple/30 rounded-lg p-6 hover:border-cyberpunk-purple transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <BookOpen className="text-cyberpunk-blue mr-3 h-8 w-8" />
                      <div>
                        <h3 className="text-xl font-bold">Résoudre les erreurs courantes d'installation</h3>
                        <p className="text-gray-400 text-sm">Solutions pour les problèmes les plus fréquents</p>
                      </div>
                    </div>
                    <Button className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80">
                      <ExternalLink size={16} className="mr-2" /> Voir le tutoriel
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-12 text-center p-6 bg-gradient-to-r from-cyberpunk-darkpurple/50 to-black/50 border border-cyberpunk-purple/20 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Prêt à commencer?</h2>
              <p className="text-gray-300 mb-6">
                Téléchargez notre launcher maintenant et commencez à jouer!
              </p>
              <Link to="/#download">
                <Button className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-purple hover:brightness-110">
                  Télécharger le Launcher
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
