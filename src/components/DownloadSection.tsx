
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const DownloadSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleDownload = () => {
    setIsLoading(true);
    
    // Simulate download progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          alert("Ceci est une démonstration éducative.");
        }, 1000);
      }
      setProgress(currentProgress);
    }, 500);
  };

  return (
    <section id="download" className="py-16 relative bg-cyberpunk-darkpurple/80">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] opacity-10 mix-blend-overlay bg-center bg-cover"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="bg-black/80 border border-cyberpunk-purple/50 shadow-lg shadow-cyberpunk-purple/20">
            <CardHeader>
              <CardTitle className="text-cyberpunk-neon">
                {isLoading ? "Téléchargement en cours" : "Télécharger notre Launcher"}
              </CardTitle>
              <CardDescription>
                {isLoading ? "Veuillez patienter pendant le téléchargement" : "Cliquez pour commencer le téléchargement"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {isLoading && (
                <div className="space-y-4">
                  <Progress value={progress} className="h-2 bg-gray-700">
                    <div 
                      className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink"
                      style={{ width: `${progress}%` }}
                    />
                  </Progress>
                  <p className="text-sm text-gray-400">{Math.round(progress)}% terminé</p>
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={handleDownload}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-purple hover:brightness-110"
              >
                {isLoading ? "Téléchargement en cours..." : "Télécharger maintenant"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
