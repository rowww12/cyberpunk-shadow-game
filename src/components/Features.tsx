
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const features = [
    {
      icon: "💾",
      title: "Version complète",
      description: "Inclut le jeu de base et tous les DLC jusqu'à Phantom Liberty."
    },
    {
      icon: "🔒",
      title: "Crack sécurisé",
      description: "Crack testé et approuvé par notre communauté. Sans malware."
    },
    {
      icon: "🚀",
      title: "Performances optimisées",
      description: "Performances améliorées par rapport à la version officielle."
    },
    {
      icon: "🎮",
      title: "Mods inclus",
      description: "Les meilleurs mods préinstallés pour une expérience optimale."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-cyberpunk-darkpurple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Pourquoi choisir notre </span>
          <span className="text-cyberpunk-neon">crack</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-black/60 border border-cyberpunk-purple/30 transition-all duration-300 hover:shadow-lg ${
                hoveredCard === index ? 'shadow-cyberpunk-purple/30 scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-cyberpunk-neon">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
