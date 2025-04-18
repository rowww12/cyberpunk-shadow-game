
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    },
    {
      name: "GameMaster42",
      date: "01/04/2023",
      content: "Installation hyper simple, tout fonctionne du premier coup. Le launcher est vraiment bien fait.",
      rating: 5
    },
    {
      name: "ProGamer777",
      date: "12/04/2023",
      content: "Meilleur site de crack que j'ai pu tester ! Support réactif et mises à jour régulières.",
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
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-cyberpunk-darkpurple border border-cyberpunk-purple/20">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 bg-cyberpunk-purple/20 hover:bg-cyberpunk-purple/40 border-cyberpunk-purple" />
          <CarouselNext className="absolute -right-4 bg-cyberpunk-purple/20 hover:bg-cyberpunk-purple/40 border-cyberpunk-purple" />
        </Carousel>
      </div>
    </section>
  );
};

export default FakeReviews;
