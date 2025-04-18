
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
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg')" }}>
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
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Star Wars Outlaws */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.windowsreport.com/wp-content/uploads/2023/06/star-wars-outlaws-game.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-orange px-2 py-1 text-xs rounded-md">Action/Aventure</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Star Wars Outlaws</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète - Day One</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 17/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dragon's Dogma 2 */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/2640190/header.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-pink px-2 py-1 text-xs rounded-md">RPG</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Dragon's Dogma 2</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + Patch 1.3</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 16/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Helldivers 2 */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-orange px-2 py-1 text-xs rounded-md">Action</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Helldivers 2</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + Mise à jour Warbond</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 14/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Rise of the Ronin */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://image.api.playstation.com/vulcan/ap/rnd/202211/1619/fRHx3YPIjFmdLJpZl9UHBJcv.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-purple px-2 py-1 text-xs rounded-md">Action/RPG</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Rise of the Ronin</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + DLC</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 12/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Final Fantasy 7 Rebirth */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://image.api.playstation.com/vulcan/ap/rnd/202306/0714/37bee75d83572c48190704b4dfed57d82e0ddf214789cc87.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-purple px-2 py-1 text-xs rounded-md">RPG</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Final Fantasy 7 Rebirth</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + DLC</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 10/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Suicide Squad: KTJL */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/315210/header.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-orange px-2 py-1 text-xs rounded-md">Action</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Suicide Squad: KTJL</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + Update</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 09/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tekken 8 */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-pink px-2 py-1 text-xs rounded-md">Combat</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Tekken 8</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + DLC</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 08/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              {/* Like a Dragon: Infinite Wealth */}
              <div className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.akamai.steamstatic.com/steam/apps/1899131/header.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-cyberpunk-purple px-2 py-1 text-xs rounded-md">RPG</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Like a Dragon: Infinite Wealth</h3>
                  <p className="text-gray-400 text-sm mb-4">Version complète + Tous les DLC</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyberpunk-neon text-sm">Mise à jour: 07/04/2025</span>
                    <Button size="sm" variant="outline" className="bg-cyberpunk-purple hover:bg-cyberpunk-purple/80 text-white">
                      <Download size={16} className="mr-1" /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button 
                className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink hover:from-cyberpunk-pink hover:to-cyberpunk-purple text-white font-bold py-3 px-8 rounded-md"
                onClick={() => window.location.href = "/all-cracks"}
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
