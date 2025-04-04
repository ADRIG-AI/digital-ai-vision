
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  MessageCircle, 
  Workflow, 
  Code, 
  Lightbulb 
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Updated service structure with subcategories
const services = [
  {
    title: "AI Automation",
    description: "Transforming Business Processes with Smart AI",
    icon: Brain,
    href: "/services/ai-automation",
    subcategories: [
      { name: "Predictive Analytics", href: "/services/ai-automation/predictive-analytics" },
      { name: "Machine Learning Solutions", href: "/services/ai-automation/machine-learning" },
      { name: "AI Integration", href: "/services/ai-automation/ai-integration" }
    ]
  },
  {
    title: "Data Analysis",
    description: "Make Smarter Decisions with Real-Time Insights",
    icon: Database,
    href: "/services/data-analysis",
    subcategories: [
      { name: "Business Intelligence", href: "/services/data-analysis/business-intelligence" },
      { name: "Data Visualization", href: "/services/data-analysis/data-visualization" },
      { name: "Big Data Processing", href: "/services/data-analysis/big-data" }
    ]
  },
  {
    title: "Chatbot Development",
    description: "Intelligent Chatbots That Engage & Convert",
    icon: MessageCircle,
    href: "/services/chatbot-development",
    subcategories: [
      { name: "Customer Support Bots", href: "/services/chatbot-development/customer-support" },
      { name: "E-commerce Assistants", href: "/services/chatbot-development/ecommerce" },
      { name: "Lead Generation Bots", href: "/services/chatbot-development/lead-generation" }
    ]
  },
  {
    title: "Workflow Automations",
    description: "Streamlining Business Operations",
    icon: Workflow,
    href: "/services/workflow-automations",
    subcategories: [
      { name: "Process Optimization", href: "/services/workflow-automations/process-optimization" },
      { name: "Task Automation", href: "/services/workflow-automations/task-automation" },
      { name: "Integration Services", href: "/services/workflow-automations/integration" }
    ]
  },
  {
    title: "LLM Development",
    description: "Revolutionizing AI Language Understanding",
    icon: Code,
    href: "/services/llm-development",
    subcategories: [
      { name: "Custom LLM Training", href: "/services/llm-development/custom-training" },
      { name: "Language Understanding", href: "/services/llm-development/language-understanding" },
      { name: "Content Generation", href: "/services/llm-development/content-generation" }
    ]
  },
  {
    title: "AI Consulting",
    description: "Your AI Roadmap to Success",
    icon: Lightbulb,
    href: "/services/ai-consulting",
    subcategories: [
      { name: "AI Strategy Development", href: "/services/ai-consulting/strategy" },
      { name: "Technology Assessment", href: "/services/ai-consulting/assessment" },
      { name: "Implementation Planning", href: "/services/ai-consulting/implementation" }
    ]
  }
];

export function ServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="bg-transparent hover:bg-adrig-blue/10 text-adrig-black hover:text-adrig-blue"
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white max-w-screen-lg">
            <div className="grid grid-cols-2 gap-3 p-6 md:w-[600px] lg:w-[750px]">
              {services.map((service) => (
                <div key={service.href} className="mb-4">
                  <NavigationMenuLink asChild>
                    <Link
                      to={service.href}
                      className="flex items-center gap-2 rounded-md p-2 leading-none no-underline text-adrig-blue font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-base"
                    >
                      <service.icon className="h-5 w-5" />
                      {service.title}
                    </Link>
                  </NavigationMenuLink>
                  <p className="text-xs text-muted-foreground ml-7 mb-2">{service.description}</p>
                  <ul className="ml-7 space-y-1">
                    {service.subcategories.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          to={sub.href}
                          className="text-sm text-gray-600 hover:text-adrig-blue block px-2 py-1 rounded-md hover:bg-gray-50"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ServicesDropdown;
