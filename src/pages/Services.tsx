
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Brain, Database, MessageCircle, Workflow, Code, Lightbulb, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Transforming Business Processes with Smart AI',
    description: 'In a world driven by speed and accuracy, AI automation helps businesses optimize workflows, reduce human errors, and scale operations effortlessly.',
    icon: Brain,
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
    icon: Database,
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
    icon: MessageCircle,
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
    icon: Workflow,
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
    icon: Code,
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
    icon: Lightbulb,
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
        
        {servicesData.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="inline-flex p-4 rounded-full bg-adrig-blue/10 text-adrig-blue mb-6">
                    <service.icon size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <h3 className="text-xl font-semibold text-adrig-blue mb-4">{service.subtitle}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">How It Works:</h4>
                    <p className="text-gray-700">{service.howItWorks}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button className="cta-button bg-adrig-blue hover:bg-blue-700 text-white">
                        Learn More About {service.title}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-adrig-blue/5 rounded-xl p-8 h-96 flex items-center justify-center">
                  <service.icon size={120} className="text-adrig-blue/30" />
                </div>
              </div>
            </div>
          </section>
        ))}
        
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
