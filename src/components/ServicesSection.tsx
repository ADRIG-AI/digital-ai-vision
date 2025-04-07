
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Chatbot Development',
    description: 'AI-powered chatbots that deliver exceptional customer experiences',
    image: '/lovable-uploads/ai-development.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    path: '/services/chatbot-development'
  },
  {
    title: 'Content Creation',
    description: 'Automated content generation that adheres to your brand guidelines',
    image: '/lovable-uploads/corporate-meeting.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    path: '/services/ai-automation'
  },
  {
    title: 'Workflow Automations',
    description: 'Over 100+ automations to streamline operations and reduce costs',
    image: '/lovable-uploads/workflow-automation.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    path: '/services/workflow-automations'
  },
  {
    title: 'Data Analysis',
    description: 'Gain valuable insights through our advanced data analysis tools',
    image: '/lovable-uploads/data-analytics.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    path: '/services/data-analysis'
  },
  {
    title: 'LLM Development',
    description: 'Custom Large Language Models built for your specific industry needs',
    image: '/lovable-uploads/ai-development.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    path: '/services/llm-development'
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance to navigate the complex world of AI implementation',
    image: '/lovable-uploads/ai-consulting.jpg',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.path} 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="p-8 flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="bg-white p-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <span className="text-adrig-blue font-medium inline-flex items-center">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
