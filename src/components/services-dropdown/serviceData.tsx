
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
  GitBranch,
  Server
} from 'lucide-react';
import { ServiceType } from './types';

// Define service categories with their icons and subcategories
export const services: ServiceType[] = [
  {
    title: "AI Automation",
    icon: Brain,
    href: "/services/ai-automation",
    subcategories: [
      { 
        name: "Predictive Analytics", 
        href: "/services/ai-automation/predictive-analytics",
        icon: BarChart,
        description: "Forecasting trends and identifying opportunities with AI"
      },
      { 
        name: "Machine Learning Solutions", 
        href: "/services/ai-automation/machine-learning",
        icon: Cpu,
        description: "Custom ML models for complex business problems"
      },
      { 
        name: "AI Integration", 
        href: "/services/ai-automation/ai-integration",
        icon: GitBranch,
        description: "Seamless AI integration with existing systems" 
      }
    ]
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
        description: "Transforming raw data into actionable insights"
      },
      { 
        name: "Data Visualization", 
        href: "/services/data-analysis/data-visualization",
        icon: PieChart,
        description: "Interactive dashboards and visual reporting"
      },
      { 
        name: "Big Data Processing", 
        href: "/services/data-analysis/big-data",
        icon: Server,
        description: "Handling and analyzing large-scale datasets" 
      }
    ]
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
        description: "24/7 automated customer service solutions"
      },
      { 
        name: "E-commerce Assistants", 
        href: "/services/chatbot-development/ecommerce",
        icon: ShoppingCart,
        description: "Shopping assistants that boost conversion"
      },
      { 
        name: "Lead Generation Bots", 
        href: "/services/chatbot-development/lead-generation",
        icon: Users,
        description: "Intelligent bots that qualify and nurture leads" 
      }
    ]
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
        description: "Streamlining and enhancing business processes"
      },
      { 
        name: "Task Automation", 
        href: "/services/workflow-automations/task-automation",
        icon: CheckCircle,
        description: "Eliminating repetitive tasks with intelligent automation"
      },
      { 
        name: "Integration Services", 
        href: "/services/workflow-automations/integration",
        icon: Zap,
        description: "Connecting your business tools and systems seamlessly" 
      }
    ]
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
        description: "Training language models for specific domains and use cases"
      },
      { 
        name: "Language Understanding", 
        href: "/services/llm-development/language-understanding",
        icon: Layers,
        description: "Advanced NLP solutions for complex language tasks"
      },
      { 
        name: "Content Generation", 
        href: "/services/llm-development/content-generation",
        icon: Code,
        description: "AI-powered content creation for marketing and communication" 
      }
    ]
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
        description: "Crafting comprehensive AI roadmaps for businesses"
      },
      { 
        name: "Technology Assessment", 
        href: "/services/ai-consulting/assessment",
        icon: Cog,
        description: "Evaluating and recommending optimal AI technologies"
      },
      { 
        name: "Implementation Planning", 
        href: "/services/ai-consulting/implementation",
        icon: CheckCircle,
        description: "Planning and executing successful AI implementations" 
      }
    ]
  }
];

// This line fixes the error from the previous build
import { Cpu } from 'lucide-react';
