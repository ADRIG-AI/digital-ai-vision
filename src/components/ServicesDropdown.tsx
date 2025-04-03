
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

const services = [
  {
    title: "AI Automation",
    description: "Transforming Business Processes with Smart AI",
    icon: Brain,
    href: "/services/ai-automation"
  },
  {
    title: "Data Analysis",
    description: "Make Smarter Decisions with Real-Time Insights",
    icon: Database,
    href: "/services/data-analysis"
  },
  {
    title: "Chatbot Development",
    description: "Intelligent Chatbots That Engage & Convert",
    icon: MessageCircle,
    href: "/services/chatbot-development"
  },
  {
    title: "Workflow Automations",
    description: "Streamlining Business Operations",
    icon: Workflow,
    href: "/services/workflow-automations"
  },
  {
    title: "LLM Development",
    description: "Revolutionizing AI Language Understanding",
    icon: Code,
    href: "/services/llm-development"
  },
  {
    title: "AI Consulting",
    description: "Your AI Roadmap to Success",
    icon: Lightbulb,
    href: "/services/ai-consulting"
  }
];

export function ServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="bg-transparent hover:bg-adrig-blue/10 text-white hover:text-white"
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <li key={service.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={service.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="h-5 w-5 text-adrig-blue" />
                        <div className="text-sm font-medium leading-none">
                          {service.title}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ServicesDropdown;
