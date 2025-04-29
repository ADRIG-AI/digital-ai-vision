import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Database,
  MessageCircle,
  Workflow,
  Code,
  Lightbulb,
  BarChart,
  LineChart,
  PieChart,
  Bot,
  ShoppingCart,
  Users,
  Cog,
  CheckCircle,
  Zap,
  BookOpen,
  Layers,
  Cpu,
  GitBranch,
  Server,
  ChevronDown,
} from "lucide-react";

// Define service categories with their icons and subcategories
export const services = [
  {
    title: "AI Automation",
    icon: Brain,
    href: "/services/ai-automation",
    subcategories: [
      {
        name: "Predictive Analytics",
        href: "/services/ai-automation/predictive-analytics",
        icon: BarChart,
        description: "Forecasting trends and identifying opportunities with AI",
      },
      {
        name: "Machine Learning Solutions",
        href: "/services/ai-automation/machine-learning",
        icon: Cpu,
        description: "Custom ML models for complex business problems",
      },
      {
        name: "AI Integration",
        href: "/services/ai-automation/ai-integration",
        icon: GitBranch,
        description: "Seamless AI integration with existing systems",
      },
    ],
  },
  {
    title: "Data Analysis",
    icon: Database,
    href: "/services/data-analysis",
    subcategories: [
      {
        name: "Business Intelligence",
        href: "/services/data-analysis/business-intelligence",
        icon: LineChart,
        description: "Transforming raw data into actionable insights",
      },
      {
        name: "Data Visualization",
        href: "/services/data-analysis/data-visualization",
        icon: PieChart,
        description: "Interactive dashboards and visual reporting",
      },
      {
        name: "Big Data Processing",
        href: "/services/data-analysis/big-data",
        icon: Server,
        description: "Handling and analyzing large-scale datasets",
      },
    ],
  },
  {
    title: "Chatbot Development",
    icon: MessageCircle,
    href: "/services/chatbot-development",
    subcategories: [
      {
        name: "Customer Support Bots",
        href: "/services/chatbot-development/customer-support",
        icon: Bot,
        description: "24/7 automated customer service solutions",
      },
      {
        name: "E-commerce Assistants",
        href: "/services/chatbot-development/ecommerce",
        icon: ShoppingCart,
        description: "Shopping assistants that boost conversion",
      },
      {
        name: "Lead Generation Bots",
        href: "/services/chatbot-development/lead-generation",
        icon: Users,
        description: "Intelligent bots that qualify and nurture leads",
      },
    ],
  },
  {
    title: "Workflow Automations",
    icon: Workflow,
    href: "/services/workflow-automations",
    subcategories: [
      {
        name: "Process Optimization",
        href: "/services/workflow-automations/process-optimization",
        icon: Cog,
        description: "Streamlining and enhancing business processes",
      },
      {
        name: "Task Automation",
        href: "/services/workflow-automations/task-automation",
        icon: CheckCircle,
        description: "Eliminating repetitive tasks with intelligent automation",
      },
      {
        name: "Integration Services",
        href: "/services/workflow-automations/integration",
        icon: Zap,
        description: "Connecting your business tools and systems seamlessly",
      },
    ],
  },
  {
    title: "LLM Development",
    icon: Code,
    href: "/services/llm-development",
    subcategories: [
      {
        name: "Custom LLM Training",
        href: "/services/llm-development/custom-training",
        icon: BookOpen,
        description:
          "Training language models for specific domains and use cases",
      },
      {
        name: "Language Understanding",
        href: "/services/llm-development/language-understanding",
        icon: Layers,
        description: "Advanced NLP solutions for complex language tasks",
      },
      {
        name: "Content Generation",
        href: "/services/llm-development/content-generation",
        icon: Code,
        description:
          "AI-powered content creation for marketing and communication",
      },
    ],
  },
  {
    title: "AI Consulting",
    icon: Lightbulb,
    href: "/services/ai-consulting",
    subcategories: [
      {
        name: "AI Strategy Development",
        href: "/services/ai-consulting/strategy",
        icon: Brain,
        description: "Crafting comprehensive AI roadmaps for businesses",
      },
      {
        name: "Technology Assessment",
        href: "/services/ai-consulting/assessment",
        icon: Cog,
        description: "Evaluating and recommending optimal AI technologies",
      },
      {
        name: "Implementation Planning",
        href: "/services/ai-consulting/implementation",
        icon: CheckCircle,
        description: "Planning and executing successful AI implementations",
      },
    ],
  },
];
export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Check if mouse is leaving to outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        setActiveCategory(null);
      }, 300);
    }
  };

  const handleCategoryClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setActiveCategory(title);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button className="text-gray-700 hover:text-gray-900 px-2 py-1 font-normal flex items-center gap-1">
        Services
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white z-50 shadow-xl rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex rounded-lg overflow-hidden">
            <div className="w-[250px] bg-gray-50 py-3">
              {services.map((service) => (
                <div key={service.href}>
                  <button
                    onClick={(e) => handleCategoryClick(e, service.title)}
                    onMouseEnter={() => setActiveCategory(service.title)}
                    className={`w-full text-left flex items-center gap-2 px-5 py-3 transition-colors hover:bg-gray-100 ${
                      activeCategory === service.title
                        ? "text-adrig-blue bg-gray-100"
                        : "text-gray-800"
                    }`}
                  >
                    <service.icon className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{service.title}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex-1 p-6">
              {activeCategory ? (
                services
                  .filter((service) => service.title === activeCategory)
                  .map((service) => (
                    <div key={service.title}>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-adrig-blue mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Explore our {service.title.toLowerCase()} services
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {service.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.href}
                            to={subcategory.href}
                            className="group block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="bg-gray-900 rounded-lg p-5 mb-3 flex items-center justify-center h-28 transition-transform group-hover:scale-[1.02]">
                              <subcategory.icon className="h-10 w-10 text-white" />
                            </div>
                            <h4 className="font-medium text-gray-900 group-hover:text-adrig-blue">
                              {subcategory.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {subcategory.description}
                            </p>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-end">
                        <Link
                          to={service.href}
                          className="text-adrig-blue hover:underline text-sm flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View all {service.title} services
                        </Link>
                      </div>
                    </div>
                  ))
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-adrig-blue mb-1">
                      All Services
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore our complete range of services
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    {services.flatMap((service) =>
                      service.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.href}
                          to={subcategory.href}
                          className="group flex flex-col items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-gray-900 rounded-lg p-4 mb-3 flex items-center justify-center h-20 w-20 transition-transform group-hover:scale-[1.05]">
                            <subcategory.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-medium text-gray-900 group-hover:text-adrig-blue text-sm text-center px-1">
                            {subcategory.name}
                          </h4>
                        </Link>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;