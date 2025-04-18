import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DownloadSection from "@/components/DownloadSection";
import { Button } from "@/components/ui/button";
import { Download, Key } from "lucide-react";

const Cracks = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main>
        <div className="relative py-16 bg-gradient-to-b from-cyberpunk-darkpurple to-black">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyberpunk-purple">Nos </span>
              <span className="text-cyberpunk-neon">Cracks </span>
              <span className="text-cyberpunk-pink">Disponibles</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* CrackYourGames */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-pink px-2 py-1 text-xs rounded-md">RPG</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">CrackYourGames</h3>
                  <p className="text-gray-400 text-sm mb-4">Crack complet + DLC Phantom Liberty</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 15/04/2025</span>
                    <Button size="sm" variant="outline" className="border-cyberpunk-blue text-cyberpunk-blue">
                      <Download size={16} className="mr-1" /> Obtenir
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* GTA VI */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-orange px-2 py-1 text-xs rounded-md">Action</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">GTA VI</h3>
                  <p className="text-gray-400 text-sm mb-4">Précommande - Crack day one garanti</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-pink text-sm">Bientôt disponible</span>
                    <Button size="sm" variant="outline" className="border-cyberpunk-purple text-cyberpunk-purple">
                      <Key size={16} className="mr-1" /> Réserver
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Assassin's Creed */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487fc2f')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-blue px-2 py-1 text-xs rounded-md">Aventure</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Assassin's Creed Shadows</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète avec tous les DLC</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 10/04/2025</span>
                    <Button size="sm" variant="outline" className="border-cyberpunk-blue text-cyberpunk-blue">
                      <Download size={16} className="mr-1" /> Obtenir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button 
                className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink hover:from-cyberpunk-pink hover:to-cyberpunk-purple text-white font-bold py-3 px-8 rounded-md"
                onClick={() => window.location.href = "#download"}
              >
                VOIR TOUS LES CRACKS
              </Button>
            </div>
          </div>
        </div>
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cracks;
