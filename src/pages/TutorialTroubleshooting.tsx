
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const TutorialTroubleshooting = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main>
        <div className="relative py-16 bg-gradient-to-b from-cyberpunk-darkpurple to-black">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyberpunk-purple">Résolution des </span>
              <span className="text-cyberpunk-neon">Problèmes</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-8 space-y-8">
              <div className="bg-black/50 border border-cyberpunk-purple/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-cyberpunk-neon">Problèmes courants et solutions</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-cyberpunk-purple/30 pb-4">
                    <h3 className="text-xl font-semibold text-cyberpunk-pink mb-2">Erreur 0x80070057</h3>
                    <p className="text-gray-300">Cette erreur apparaît lorsque Windows bloque l'installation. Solution:</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      <li>Exécutez le launcher en tant qu'administrateur</li>
                      <li>Désactivez temporairement l'antivirus</li>
                    </ul>
                  </div>

                  <div className="border-b border-cyberpunk-purple/30 pb-4">
                    <h3 className="text-xl font-semibold text-cyberpunk-pink mb-2">Erreur de DLL manquante</h3>
                    <p className="text-gray-300">Si vous voyez une erreur concernant une DLL manquante:</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      <li>Installez Visual C++ Redistributable</li>
                      <li>Redémarrez votre PC</li>
                    </ul>
                  </div>

                  <div className="border-b border-cyberpunk-purple/30 pb-4">
                    <h3 className="text-xl font-semibold text-cyberpunk-pink mb-2">Téléchargement bloqué</h3>
                    <p className="text-gray-300">Si le téléchargement ne démarre pas:</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      <li>Vérifiez votre connexion internet</li>
                      <li>Désactivez votre VPN si vous en utilisez un</li>
                      <li>Essayez un autre navigateur</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button 
                    onClick={scrollToDownload}
                    className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink hover:from-cyberpunk-pink hover:to-cyberpunk-purple"
                  >
                    <Download className="mr-2" />
                    Télécharger le Launcher
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialTroubleshooting;
