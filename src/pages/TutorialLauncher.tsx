
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { Link } from "react-router-dom";

const TutorialLauncher = () => {
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
              <span className="text-cyberpunk-purple">Installation du </span>
              <span className="text-cyberpunk-neon">Launcher</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-8 space-y-8">
              <div className="bg-black/50 border border-cyberpunk-purple/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-cyberpunk-neon">Étapes simples d'installation</h2>
                <ol className="list-decimal list-inside space-y-4 text-gray-300">
                  <li className="p-2">Téléchargez notre launcher en cliquant sur le bouton ci-dessous</li>
                  <li className="p-2">Désactivez temporairement votre antivirus</li>
                  <li className="p-2">Exécutez le fichier d'installation</li>
                  <li className="p-2">Suivez les instructions à l'écran</li>
                  <li className="p-2">C'est tout! Vous pouvez maintenant télécharger vos jeux</li>
                </ol>

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

export default TutorialLauncher;
