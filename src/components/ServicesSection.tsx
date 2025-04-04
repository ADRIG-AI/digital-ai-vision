
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Chatbot Development',
    description: 'We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.',
    image: '/lovable-uploads/ffaa289b-1321-4123-ab4e-6099f47322cb.png',
    path: '/services/chatbot-development'
  },
  {
    title: 'Content Creation',
    description: 'Our content creation solutions effortlessly generate high-quality, engaging content according to your brand\'s guidelines to captivate your audience.',
    image: '/lovable-uploads/5e206a2d-fd76-449b-ab87-bba358fe8668.png',
    path: '/services/ai-automation'
  },
  {
    title: 'Workflow Automations',
    description: 'Over 100+ automations to streamline your operations, improve efficiency and reduce costs with our custom AI solutions.',
    imagePath: '/placeholder.svg',
    path: '/services/workflow-automations'
  },
  {
    title: 'Data Analysis',
    description: 'Powerful data analysis tools to help you make better decisions and gain insights from your data.',
    imagePath: '/placeholder.svg',
    path: '/services/data-analysis'
  },
  {
    title: 'LLM Development',
    description: 'We create powerful Large Language Models tailored to your specific business needs and industry.',
    imagePath: '/placeholder.svg',
    path: '/services/llm-development'
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance for AI-powered transformation to help you navigate the complex world of artificial intelligence.',
    imagePath: '/placeholder.svg',
    path: '/services/ai-consulting'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-black text-white" id="services">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">
          What <span className="text-blue-400">we do</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 2).map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden rounded-xl">
              <CardContent className="p-6">
                <div className="mb-6 bg-zinc-800 p-4 rounded-lg">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-64 object-cover rounded" 
                    />
                  ) : (
                    <div className="w-full h-64 bg-zinc-800 rounded flex items-center justify-center">
                      <span className="text-blue-400">Service Preview</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(2, 5).map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden rounded-xl h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
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
