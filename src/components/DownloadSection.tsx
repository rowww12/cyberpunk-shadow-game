
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DownloadSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLogin, setShowLogin] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    setShowLogin(false);
    
    // Simulate download progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          // In a real phishing site, the credentials would be collected at this point
          alert("Ceci est une démonstration éducative. Dans un vrai site de phishing, vos identifiants auraient été volés.");
        }, 1000);
      }
      setProgress(currentProgress);
    }, 500);
  };

  return (
    <section id="download" className="py-16 relative bg-cyberpunk-darkpurple/80">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] opacity-10 mix-blend-overlay bg-center bg-cover"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyberpunk-neon">Téléchargez</span> dès maintenant
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Accédez à la version complète de Cyberpunk 2077 avec tous les derniers DLC, sans aucune restriction. Créez un compte ou connectez-vous pour commencer le téléchargement.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-black/80 border border-cyberpunk-purple/50 shadow-lg shadow-cyberpunk-purple/20">
            <CardHeader>
              <CardTitle className="text-cyberpunk-neon">
                {showLogin ? "Connexion requise" : "Téléchargement en cours"}
              </CardTitle>
              <CardDescription>
                {showLogin ? "Connectez-vous ou créez un compte pour accéder au crack" : "Veuillez patienter pendant le téléchargement"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {showLogin ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-cyberpunk-darkpurple border-cyberpunk-purple/50 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-cyberpunk-darkpurple border-cyberpunk-purple/50 text-white"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                    >
                      Se souvenir de moi
                    </label>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <p className="text-cyberpunk-neon mb-2">Téléchargement de Cyberpunk2077_CRACK_FULL.exe</p>
                  <Progress value={progress} className="h-2 bg-gray-700">
                    <div 
                      className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink"
                      style={{ width: `${progress}%` }}
                    />
                  </Progress>
                  <p className="text-sm text-gray-400">{Math.round(progress)}% terminé • {(120 * (100 - progress) / 100).toFixed(0)} secondes restantes</p>
                  
                  <div className="bg-cyberpunk-darkpurple/50 p-3 rounded border border-cyberpunk-purple/20 mt-4">
                    <p className="text-xs text-gray-400">
                      INFO: Assurez-vous de désactiver votre antivirus avant d'exécuter le fichier, car il peut être détecté comme un faux positif.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              {showLogin ? (
                <Button 
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink hover:brightness-110"
                >
                  Télécharger maintenant
                </Button>
              ) : (
                <Button disabled className="w-full bg-cyberpunk-darkpurple text-gray-400 cursor-not-allowed">
                  Téléchargement en cours...
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
