
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AllCracks = () => {
  const games = [
    { id: 1, name: "CrackYourGames", genre: "RPG", date: "15/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg" },
    { id: 2, name: "Star Wars Outlaws", genre: "Action/Aventure", date: "17/04/2025", image: "https://cdn.windowsreport.com/wp-content/uploads/2023/06/star-wars-outlaws-game.jpg" },
    { id: 3, name: "Dragon's Dogma 2", genre: "RPG", date: "16/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2640190/header.jpg" },
    { id: 4, name: "Helldivers 2", genre: "Action", date: "14/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg" },
    { id: 5, name: "Rise of the Ronin", genre: "Action/RPG", date: "12/04/2025", image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1619/fRHx3YPIjFmdLJpZl9UHBJcv.jpg" },
    { id: 6, name: "Final Fantasy 7 Rebirth", genre: "RPG", date: "10/04/2025", image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/0714/37bee75d83572c48190704b4dfed57d82e0ddf214789cc87.jpg" },
    { id: 7, name: "Suicide Squad: KTJL", genre: "Action", date: "09/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/315210/header.jpg" },
    { id: 8, name: "Tekken 8", genre: "Combat", date: "08/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg" },
    { id: 9, name: "Like a Dragon: Infinite Wealth", genre: "RPG", date: "07/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1899131/header.jpg" },
    { id: 10, name: "Palworld", genre: "Survie/RPG", date: "06/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg" },
    // ... ajout de 40 autres jeux similaires
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main>
        <div className="relative py-16 bg-gradient-to-b from-cyberpunk-darkpurple to-black">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyberpunk-neon">Tous nos </span>
              <span className="text-cyberpunk-pink">Cracks</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {games.map((game) => (
                <div key={game.id} className="bg-gradient-to-br from-cyberpunk-darkpurple to-black border border-cyberpunk-purple/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyberpunk-purple/20 transition-all duration-300">
                  <div className="h-48 relative">
                    <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-cyberpunk-purple px-2 py-1 text-xs rounded-md">{game.genre}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-cyberpunk-neon text-sm">Mise à jour: {game.date}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-cyberpunk-purple/20 hover:bg-cyberpunk-purple/40 border-cyberpunk-purple text-white"
                      >
                        <Download size={16} className="mr-1" /> Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllCracks;
