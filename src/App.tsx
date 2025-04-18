
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Cracks from "./pages/Cracks";
import AllCracks from "./pages/AllCracks";
import Tutorials from "./pages/Tutorials";
import TutorialLauncher from "./pages/TutorialLauncher";
import TutorialAntivirus from "./pages/TutorialAntivirus";
import TutorialTroubleshooting from "./pages/TutorialTroubleshooting";
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

  // Utiliser le nouveau nom de base pour GitHub Pages
  const basename = isGitHubPages() ? '/crackyourgames' : '/';
  
  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Chargement...</div>;
  }

  const routes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cracks" element={<Cracks />} />
      <Route path="/all-cracks" element={<AllCracks />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/tutorial-launcher" element={<TutorialLauncher />} />
      <Route path="/tutorial-antivirus" element={<TutorialAntivirus />} />
      <Route path="/tutorial-troubleshooting" element={<TutorialTroubleshooting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  // Utiliser HashRouter pour GitHub Pages pour éviter les problèmes de routes
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isGitHubPages() ? (
          <HashRouter>{routes}</HashRouter>
        ) : (
          <BrowserRouter basename={basename}>{routes}</BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
