
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Chatbot Development',
    description: 'We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=1400',
    path: '/services/chatbot-development'
  },
  {
    title: 'Workflow Automations',
    description: 'Over 100+ automations to streamline your operations, improve efficiency and reduce costs with our custom AI solutions.',
    image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=1400',
    path: '/services/workflow-automations'
  },
  {
    title: 'Data Analysis',
    description: 'Powerful data analysis tools to help you make better decisions and gain insights from your data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400',
    path: '/services/data-analysis'
  },
  {
    title: 'LLM Development',
    description: 'We create powerful Large Language Models tailored to your specific business needs and industry.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400',
    path: '/services/llm-development'
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance for AI-powered transformation to help you navigate the complex world of artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 2).map((service, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-lg overflow-hidden rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-6 rounded-lg overflow-hidden h-64">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(2).map((service, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-lg overflow-hidden rounded-xl h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4 rounded-lg overflow-hidden h-40">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white">
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
