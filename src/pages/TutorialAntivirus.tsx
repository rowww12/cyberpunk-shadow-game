
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldOff, Download } from "lucide-react";
import { Link } from "react-router-dom";

const TutorialAntivirus = () => {
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
              <span className="text-cyberpunk-purple">Désactivation de </span>
              <span className="text-cyberpunk-neon">l'Antivirus</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-8 space-y-8">
              <div className="bg-black/50 border border-cyberpunk-purple/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-cyberpunk-neon">Comment désactiver votre antivirus</h2>
                <div className="space-y-6 text-gray-300">
                  <p>Pour installer correctement notre launcher, vous devez temporairement désactiver votre antivirus. Voici les étapes:</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyberpunk-pink">Windows Defender</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Ouvrez les paramètres Windows</li>
                      <li>Cliquez sur "Mise à jour et sécurité"</li>
                      <li>Sélectionnez "Protection contre les virus et menaces"</li>
                      <li>Désactivez la "Protection en temps réel"</li>
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyberpunk-pink">Autres Antivirus</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Localisez l'icône de votre antivirus dans la barre des tâches</li>
                      <li>Clic droit sur l'icône</li>
                      <li>Cherchez l'option "Désactiver" ou "Mettre en pause"</li>
                      <li>Sélectionnez une durée de 10 minutes</li>
                    </ol>
                  </div>

                  <div className="mt-8">
                    <p className="text-cyberpunk-neon font-semibold">Important:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Réactivez votre antivirus après l'installation</li>
                      <li>Cette désactivation est temporaire et nécessaire</li>
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

export default TutorialAntivirus;
