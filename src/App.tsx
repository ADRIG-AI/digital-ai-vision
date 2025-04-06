
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

// AI Automation Subcategories
import PredictiveAnalytics from "./pages/services/ai-automation/PredictiveAnalytics";
import MachineLearning from "./pages/services/ai-automation/MachineLearning";
import AIIntegration from "./pages/services/ai-automation/AIIntegration";

// Data Analysis Subcategories
import BusinessIntelligence from "./pages/services/data-analysis/BusinessIntelligence";
import DataVisualization from "./pages/services/data-analysis/DataVisualization";
import BigData from "./pages/services/data-analysis/BigData";

// Chatbot Development Subcategories
import CustomerSupport from "./pages/services/chatbot-development/CustomerSupport";
import Ecommerce from "./pages/services/chatbot-development/Ecommerce";
import LeadGeneration from "./pages/services/chatbot-development/LeadGeneration";

// Workflow Automations Subcategories
import ProcessOptimization from "./pages/services/workflow-automations/ProcessOptimization";
import TaskAutomation from "./pages/services/workflow-automations/TaskAutomation";
import Integration from "./pages/services/workflow-automations/Integration";

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
            
            {/* AI Automation Subcategories */}
            <Route path="/services/ai-automation/predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="/services/ai-automation/machine-learning" element={<MachineLearning />} />
            <Route path="/services/ai-automation/ai-integration" element={<AIIntegration />} />
            
            {/* Data Analysis Subcategories */}
            <Route path="/services/data-analysis/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="/services/data-analysis/data-visualization" element={<DataVisualization />} />
            <Route path="/services/data-analysis/big-data" element={<BigData />} />
            
            {/* Chatbot Development Subcategories */}
            <Route path="/services/chatbot-development/customer-support" element={<CustomerSupport />} />
            <Route path="/services/chatbot-development/ecommerce" element={<Ecommerce />} />
            <Route path="/services/chatbot-development/lead-generation" element={<LeadGeneration />} />
            
            {/* Workflow Automations Subcategories */}
            <Route path="/services/workflow-automations/process-optimization" element={<ProcessOptimization />} />
            <Route path="/services/workflow-automations/task-automation" element={<TaskAutomation />} />
            <Route path="/services/workflow-automations/integration" element={<Integration />} />
            
            {/* In a full implementation, all other subcategory routes would be added here */}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
