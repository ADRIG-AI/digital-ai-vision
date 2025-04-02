
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import AIAutomation from "./pages/services/AIAutomation";
import DataAnalysis from "./pages/services/DataAnalysis";
import ChatbotDevelopment from "./pages/services/ChatbotDevelopment";
import WorkflowAutomations from "./pages/services/WorkflowAutomations";
import LLMDevelopment from "./pages/services/LLMDevelopment";
import AIConsulting from "./pages/services/AIConsulting";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/data-analysis" element={<DataAnalysis />} />
            <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
            <Route path="/services/workflow-automations" element={<WorkflowAutomations />} />
            <Route path="/services/llm-development" element={<LLMDevelopment />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
