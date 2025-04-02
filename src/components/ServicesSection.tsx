
import { 
  Brain, 
  Database, 
  MessageCircle, 
  Workflow, 
  Code, 
  Lightbulb 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'AI Automation',
    description: 'Leverage our machine learning algorithms to assess results.',
    icon: Brain
  },
  {
    title: 'Data Analysis',
    description: 'Go beyond watchlists and obtain the most up-to-date, accurate data.',
    icon: Database
  },
  {
    title: 'Chatbot Development',
    description: 'We develop intelligent chatbots that enhance customer interactions.',
    icon: MessageCircle
  },
  {
    title: 'Workflow Automations',
    description: 'We streamline workflows to improve efficiency.',
    icon: Workflow
  },
  {
    title: 'LLM Development',
    description: 'We create powerful Large Language Models.',
    icon: Code
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance for AI-powered transformation.',
    icon: Lightbulb
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What We Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="cta-button">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
