import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuemSomos from "./pages/QuemSomos";
import Solucoes from "./pages/Solucoes";
import Servicos from "./pages/Servicos";
import Cases from "./pages/Cases";
import Academy from "./pages/Academy";
import WordPressBlog from "./pages/WordPressBlog";
import WordPressPostView from "./components/wordpress/WordPressPostView";
import Cloud from "./pages/solucoes/Cloud";
import Dados from "./pages/solucoes/Dados";
import Cybersecurity from "./pages/solucoes/Cybersecurity";
import IAML from "./pages/solucoes/IAML";
import SquadAlocacao from "./pages/servicos/SquadAlocacao";
import Suporte from "./pages/servicos/Suporte";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/solucoes/cloud" element={<Cloud />} />
          <Route path="/solucoes/dados" element={<Dados />} />
          <Route path="/solucoes/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solucoes/ia-ml" element={<IAML />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/squad-alocacao" element={<SquadAlocacao />} />
          <Route path="/servicos/suporte" element={<Suporte />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blog" element={<WordPressBlog />} />
          <Route path="/blog/:id" element={<WordPressPostView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
