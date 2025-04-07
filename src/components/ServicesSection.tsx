
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Chatbot Development',
    description: 'We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.',
    image: '/lovable-uploads/corporate-dashboard.jpg',
    path: '/services/chatbot-development'
  },
  {
    title: 'Content Creation',
    description: 'Our content creation solutions effortlessly generate high-quality, engaging content according to your brand\'s guidelines to captivate your audience.',
    image: '/lovable-uploads/corporate-meeting.jpg',
    path: '/services/ai-automation'
  },
  {
    title: 'Workflow Automations',
    description: 'Over 100+ automations to streamline your operations, improve efficiency and reduce costs with our custom AI solutions.',
    image: '/lovable-uploads/workflow-automation.jpg',
    path: '/services/workflow-automations'
  },
  {
    title: 'Data Analysis',
    description: 'Powerful data analysis tools to help you make better decisions and gain insights from your data.',
    image: '/lovable-uploads/data-analytics.jpg',
    path: '/services/data-analysis'
  },
  {
    title: 'LLM Development',
    description: 'We create powerful Large Language Models tailored to your specific business needs and industry.',
    image: '/lovable-uploads/ai-development.jpg',
    path: '/services/llm-development'
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance for AI-powered transformation to help you navigate the complex world of artificial intelligence.',
    image: '/lovable-uploads/ai-consulting.jpg',
    path: '/services/ai-consulting'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white text-black" id="services">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-black">
          What <span className="text-adrig-blue">we do</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-0 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-800 overflow-hidden">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-adrig-blue">Service Preview</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link to={service.path}>
                  <Button className="bg-adrig-blue text-white hover:bg-blue-700">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
