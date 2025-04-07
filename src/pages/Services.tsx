
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Transforming Business Processes with Smart AI',
    description: 'In a world driven by speed and accuracy, AI automation helps businesses optimize workflows, reduce human errors, and scale operations effortlessly.',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'Our machine learning algorithms analyze repetitive tasks, identify optimization opportunities, and create smart automation systems that enhance efficiency.',
    benefits: [
      'Eliminate Manual Effort: Automate repetitive tasks to free up valuable resources.',
      'Increase Accuracy: Reduce human errors with AI-driven decision-making.',
      'Scalability: Grow your business without increasing workforce dependency.',
      'Cost-Effective: Save operational costs by reducing labor-intensive tasks.'
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    subtitle: 'Make Smarter Decisions with Real-Time Insights',
    description: 'Data is the new currency, but raw data is useless without actionable insights. Our AI-powered data analytics transforms vast amounts of information into meaningful reports and predictions.',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'Our system collects, processes, and visualizes data from multiple sources, helping businesses track trends, analyze risks, and improve decision-making.',
    benefits: [
      'Stay Ahead: Get real-time insights to predict market trends.',
      'Accurate Data: Obtain the most up-to-date, precise analytics.',
      'Data-Driven Growth: Make informed decisions backed by AI.',
      'Custom Reports: Tailored dashboards that match your business needs.'
    ]
  },
  {
    id: 'chatbot-development',
    title: 'Chatbot Development',
    subtitle: 'Intelligent Chatbots That Engage & Convert',
    description: "In today's digital-first world, customer experience is everything. Our chatbots don't just answer queries—they understand, respond, and learn from interactions.",
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'We build AI-powered chatbots that provide instant support, automate responses, and handle multiple customer interactions simultaneously.',
    benefits: [
      'Availability: Never miss a customer query, even outside business hours.',
      'Personalized Responses: AI learns from conversations to improve interactions.',
      'Lead Generation: Capture leads through automated engagement.',
      'Cost Savings: Reduce the need for large support teams.'
    ]
  },
  {
    id: 'workflow-automations',
    title: 'Workflow Automations',
    subtitle: 'Streamlining Business Operations',
    description: 'Manual workflows slow down businesses. Our AI-powered workflow automation eliminates inefficiencies, allowing teams to focus on high-value tasks.',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'We integrate automated triggers and AI decision-making into your workflow, ensuring seamless execution without human intervention.',
    benefits: [
      'Faster Turnaround: Speed up processes with minimal delays.',
      'Error Reduction: Automate repetitive tasks to minimize mistakes.',
      'Increased Productivity: Free up your team to focus on strategic work.',
      'Seamless Integration: Works with your existing tools and systems.'
    ]
  },
  {
    id: 'llm-development',
    title: 'LLM Development',
    subtitle: 'Revolutionizing AI Language Understanding',
    description: 'Large Language Models (LLMs) enhance customer experiences, automate content creation, and improve business intelligence. We develop tailor-made LLMs that align with your business needs.',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'We train custom AI models that understand context, generate human-like responses, and provide accurate, intelligent communication for various applications.',
    benefits: [
      'Advanced AI Understanding: Process and interpret complex human language.',
      'Improved Customer Experience: AI-powered interactions that feel human.',
      'Automated Content Creation: Generate emails, reports, and insights instantly.',
      'Industry-Specific Training: Tailored models for healthcare, finance, e-commerce, and more.'
    ]
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    subtitle: 'Your AI Roadmap to Success',
    description: 'Not sure how AI can benefit your business? Our AI consulting services help you identify opportunities, implement strategies, and maximize AI adoption.',
    icon: '/lovable-uploads/a15df3d0-709c-4fc5-bfe4-46ddcdd3b35f.png',
    howItWorks: 'Our experts assess your business, recommend AI solutions, and guide you through implementation, ensuring a seamless transition.',
    benefits: [
      'Custom AI Strategy: Tailored AI solutions based on your business needs.',
      'Industry Expertise: Insights from AI specialists with real-world experience.',
      'Cost-Efficient Implementation: Optimize AI adoption without unnecessary expenses.',
      'Future-Proof Your Business: Stay ahead with AI-driven innovation.'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our AI Services - Digital AI Vision</title>
        <meta name="description" content="Explore our cutting-edge AI services designed to transform your business operations and drive growth." />
        <meta name="keywords" content="AI automation, data analysis, chatbot development, workflow automation, LLM development, AI consulting" />
        <meta property="og:title" content="Our AI Services - Digital AI Vision" />
        <meta property="og:description" content="Explore our cutting-edge AI services designed to transform your business operations and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digital-ai-vision.com/services" />
        <link rel="canonical" href="https://digital-ai-vision.com/services" />
      </Helmet>
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="bg-adrig-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Cutting-edge AI solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.id}`}
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
                    <p className="text-gray-600 mb-2">{service.subtitle}</p>
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
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our AI Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Our team consists of AI specialists with deep knowledge across multiple industries, ensuring you get solutions tailored to your specific sector.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Specialized knowledge in healthcare, finance, retail, and manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Industry-specific AI models and automation workflows</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-700 mb-4">
                  We leverage the latest advancements in AI and machine learning to deliver solutions that put you ahead of the competition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Advanced neural networks and deep learning</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>State-of-the-art NLP and computer vision technologies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our AI services are designed to grow with your business, from startup to enterprise-level operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Modular architecture that expands with your needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Cloud-native design for unlimited growth potential</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
                <p className="text-gray-700 mb-4">
                  We partner with you long-term to ensure your AI systems continue to deliver value as your business evolves.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Ongoing performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                    <span>Regular updates to incorporate the latest AI advancements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-adrig-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Contact our team today to explore how our AI services can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors px-8 py-6 text-lg font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
