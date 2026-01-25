import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AutomationSalon from "./pages/AutomationSalon";
import AutomationMedical from "./pages/AutomationMedical";
import AutomationRestaurant from "./pages/AutomationRestaurant";
import AutomationAI from "./pages/AutomationAI";
import AutomationPublic from "./pages/AutomationPublic";
import AutomationRetail from "./pages/AutomationRetail";
import AutomationHotel from "./pages/AutomationHotel";
import AutomationChatbot from "./pages/AutomationChatbot";
import AutomationSocialMedia from "./pages/AutomationSocialMedia";
import AutomationRealEstate from "./pages/AutomationRealEstate";
import AutomationSMB from "./pages/AutomationSMB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/salon-infrumusetare" element={<AutomationSalon />} />
          <Route path="/cabinet-medical" element={<AutomationMedical />} />
          <Route path="/restaurant" element={<AutomationRestaurant />} />
          <Route path="/inteligenta-artificiala" element={<AutomationAI />} />
          <Route path="/sector-public" element={<AutomationPublic />} />
          <Route path="/magazine-retail" element={<AutomationRetail />} />
          <Route path="/hotel-pensiune" element={<AutomationHotel />} />
          <Route path="/chatboti-whatsapp-telegram" element={<AutomationChatbot />} />
          <Route path="/social-media-ai" element={<AutomationSocialMedia />} />
          <Route path="/agentii-imobiliare" element={<AutomationRealEstate />} />
          <Route path="/afaceri-mici-mijlocii" element={<AutomationSMB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
