
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

const FakeReviews = () => {
  const reviews = [
    {
      name: "PlayerX2077",
      date: "22/03/2023",
      content: "Ce crack fonctionne parfaitement ! J'ai pu jouer à tous les DLC sans problème et les performances sont excellentes sur mon PC. Merci !",
      rating: 5
    },
    {
      name: "NightCityRider",
      date: "15/04/2023",
      content: "Très bon crack, facile à installer. J'ai eu quelques bugs au début mais après avoir suivi le tutoriel tout s'est arrangé. Je recommande.",
      rating: 4
    },
    {
      name: "CyberGamer99",
      date: "08/05/2023",
      content: "Incroyable ! Le jeu tourne même mieux qu'en version officielle sur ma config. Les mods préinstallés sont super utiles.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-cyberpunk-orange">Avis de la </span>
          <span className="text-white">communauté</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-cyberpunk-darkpurple border border-cyberpunk-purple/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-cyberpunk-neon">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.date}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-cyberpunk-orange" : "text-gray-600"}>★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{review.content}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FakeReviews;
