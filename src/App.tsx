import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuemSomos from "./pages/QuemSomos";
import Solucoes from "./pages/Solucoes";
import Servicos from "./pages/Servicos";
import Cases from "./pages/Cases";
import Academy from "./pages/Academy";
import WordPressBlog from "./pages/WordPressBlog";
import { MarkdownPostView } from "./components/markdown/MarkdownPostView";
import Cloud from "./pages/solucoes/Cloud";
import Dados from "./pages/solucoes/Dados";
import Cybersecurity from "./pages/solucoes/Cybersecurity";
import SquadAlocacao from "./pages/servicos/SquadAlocacao";
import Suporte from "./pages/servicos/Suporte";
import Desenvolvimento360 from "./pages/servicos/Desenvolvimento360";
import DataRainConsole from "./pages/DataRainConsole";
// Cloud Solutions
import Migracao from "./pages/solucoes/cloud/Migracao";
import FinOps from "./pages/solucoes/cloud/FinOps";
import DevOps from "./pages/solucoes/cloud/DevOps";
import ArquiteturaCloud from "./pages/solucoes/cloud/ArquiteturaCloud";
// Cybersecurity Solutions
import LandingZone from "./pages/solucoes/cybersecurity/LandingZone";
import GAAS from "./pages/solucoes/cybersecurity/GAAS";
import Assessment from "./pages/solucoes/cybersecurity/Assessment";
// Data & AI Solutions
import ArquiteturaDados from "./pages/solucoes/dados/ArquiteturaDados";
import PilotAI from "./pages/solucoes/dados/PilotAI";
import IAML from "./pages/solucoes/dados/IAML";
import FaleConosco from "./pages/FaleConosco";
import Privacidade from "./pages/Privacidade";
// Admin pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import BlogManagement from "./pages/admin/BlogManagement";
import CasesManagement from "./pages/admin/CasesManagement";
import UsersManagement from "./pages/admin/UsersManagement";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/solucoes/cloud" element={<Cloud />} />
          <Route path="/solucoes/cloud/migracao" element={<Migracao />} />
          <Route path="/solucoes/cloud/finops" element={<FinOps />} />
          <Route path="/solucoes/cloud/devops" element={<DevOps />} />
          <Route path="/solucoes/cloud/arquitetura" element={<ArquiteturaCloud />} />
          <Route path="/solucoes/dados" element={<Dados />} />
          <Route path="/solucoes/dados/arquitetura" element={<ArquiteturaDados />} />
          <Route path="/solucoes/dados/pilot-ai" element={<PilotAI />} />
          <Route path="/solucoes/dados/ia-ml" element={<IAML />} />
          <Route path="/solucoes/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solucoes/cybersecurity/landing-zone" element={<LandingZone />} />
          <Route path="/solucoes/cybersecurity/gaas" element={<GAAS />} />
          <Route path="/solucoes/cybersecurity/assessment" element={<Assessment />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/squad-alocacao" element={<SquadAlocacao />} />
          <Route path="/servicos/suporte" element={<Suporte />} />
          <Route path="/servicos/desenvolvimento-360" element={<Desenvolvimento360 />} />
          <Route path="/console" element={<DataRainConsole />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<MarkdownPostView type="cases" backRoute="/cases" />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/blog" element={<WordPressBlog />} />
          <Route path="/blog/:slug" element={<MarkdownPostView type="blog" backRoute="/blog" />} />
          <Route path="/sem-categoria/:slug" element={<MarkdownPostView type="cases" backRoute="/cases" />} />
          <Route path="/privacidade" element={<Privacidade />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/blog" element={<ProtectedRoute><BlogManagement /></ProtectedRoute>} />
          <Route path="/admin/cases" element={<ProtectedRoute><CasesManagement /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute><UsersManagement /></ProtectedRoute>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
  </QueryClientProvider>
);

export default App;
