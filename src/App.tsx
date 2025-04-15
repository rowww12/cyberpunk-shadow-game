
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

// Fonction pour déterminer si nous sommes sur GitHub Pages
const isGitHubPages = () => {
  return window.location.hostname.includes('github.io');
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Log pour le débogage
    console.log("Environnement:", {
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      isGitHubPages: isGitHubPages(),
    });
    setIsLoaded(true);
  }, []);

  // Utiliser HashRouter pour GitHub Pages, sinon BrowserRouter
  const basename = isGitHubPages() ? '/cyberpunk-shadow-game' : '/';
  
  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Chargement...</div>;
  }

  // Utiliser HashRouter pour GitHub Pages pour éviter les problèmes de routes
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isGitHubPages() ? (
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        ) : (
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
