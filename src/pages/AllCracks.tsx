
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
    { id: 11, name: "Prince of Persia: The Lost Crown", genre: "Action/Aventure", date: "05/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2234750/header.jpg" },
    { id: 12, name: "The Last of Us Part I", genre: "Action/Aventure", date: "04/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg" },
    { id: 13, name: "Elden Ring", genre: "Action/RPG", date: "03/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg" },
    { id: 14, name: "Resident Evil 4 Remake", genre: "Horreur/Action", date: "02/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg" },
    { id: 15, name: "Lies of P", genre: "Action/RPG", date: "01/04/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg" },
    { id: 16, name: "Street Fighter 6", genre: "Combat", date: "31/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg" },
    { id: 17, name: "Mortal Kombat 1", genre: "Combat", date: "30/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg" },
    { id: 18, name: "Forspoken", genre: "Action/RPG", date: "29/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1680880/header.jpg" },
    { id: 19, name: "Dead Space Remake", genre: "Horreur/Action", date: "28/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg" },
    { id: 20, name: "Starfield", genre: "RPG", date: "27/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg" },
    { id: 21, name: "Alan Wake 2", genre: "Horreur/Action", date: "26/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1419410/header.jpg" },
    { id: 22, name: "Assassin's Creed Mirage", genre: "Action/Aventure", date: "25/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1892130/header.jpg" },
    { id: 23, name: "Lords of the Fallen", genre: "Action/RPG", date: "24/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1501750/header.jpg" },
    { id: 24, name: "Marvel's Spider-Man 2", genre: "Action/Aventure", date: "23/03/2025", image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c9b38a9340f3fb54f30315b53963304637f0d21e4083c91.jpg" },
    { id: 25, name: "Sea of Stars", genre: "RPG", date: "22/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1244090/header.jpg" },
    { id: 26, name: "Armored Core VI", genre: "Action", date: "21/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1888160/header.jpg" },
    { id: 27, name: "Remnant II", genre: "Action/RPG", date: "20/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg" },
    { id: 28, name: "Diablo IV", genre: "Action/RPG", date: "19/03/2025", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d215d4df1f6750/d4-open-graph_001.jpg" },
    { id: 29, name: "The Texas Chain Saw Massacre", genre: "Horreur", date: "18/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1433140/header.jpg" },
    { id: 30, name: "Blasphemous 2", genre: "Action/Aventure", date: "17/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2114740/header.jpg" },
    // Suite des jeux...
    { id: 31, name: "Avatar: Frontiers of Pandora", genre: "Action/Aventure", date: "16/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2316690/header.jpg" },
    { id: 32, name: "Persona 3 Reload", genre: "RPG", date: "15/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2161700/header.jpg" },
    { id: 33, name: "Granblue Fantasy: Relink", genre: "Action/RPG", date: "14/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2187710/header.jpg" },
    { id: 34, name: "Pacific Drive", genre: "Survie", date: "13/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1458140/header.jpg" },
    { id: 35, name: "Skull and Bones", genre: "Action/Aventure", date: "12/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2324650/header.jpg" },
    { id: 36, name: "Enshrouded", genre: "Survie/RPG", date: "11/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1203620/header.jpg" },
    { id: 37, name: "The Last Faith", genre: "Action/RPG", date: "10/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1274600/header.jpg" },
    { id: 38, name: "RoboCop: Rogue City", genre: "Action", date: "09/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1681430/header.jpg" },
    { id: 39, name: "EA Sports FC 24", genre: "Sport", date: "08/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg" },
    { id: 40, name: "Cities: Skylines II", genre: "Simulation", date: "07/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg" },
    { id: 41, name: "Warhammer 40K: Space Marine 2", genre: "Action", date: "06/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1476590/header.jpg" },
    { id: 42, name: "Payday 3", genre: "Action", date: "05/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1272080/header.jpg" },
    { id: 43, name: "Mortal Kombat 1", genre: "Combat", date: "04/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg" },
    { id: 44, name: "Starfield", genre: "RPG", date: "03/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg" },
    { id: 45, name: "Lies of P", genre: "Action/RPG", date: "02/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg" },
    { id: 46, name: "Party Animals", genre: "Action", date: "01/03/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1260320/header.jpg" },
    { id: 47, name: "Cyberpunk 2077: Phantom Liberty", genre: "RPG", date: "28/02/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/2138330/header.jpg" },
    { id: 48, name: "Baldur's Gate 3", genre: "RPG", date: "27/02/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg" },
    { id: 49, name: "Remnant II", genre: "Action/RPG", date: "26/02/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg" },
    { id: 50, name: "Street Fighter 6", genre: "Combat", date: "25/02/2025", image: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg" }
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
