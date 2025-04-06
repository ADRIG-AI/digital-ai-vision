
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { MessageCircle, Clock, Globe, ShieldCheck, BarChart } from 'lucide-react';

const CustomerSupport = () => {
  const benefits = [
    {
      title: "24/7 Availability",
      description: "Support your customers around the clock without adding staff",
      icon: Clock
    },
    {
      title: "Multilingual Support",
      description: "Serve customers in multiple languages automatically",
      icon: Globe
    },
    {
      title: "Consistent Responses",
      description: "Ensure accurate and consistent information across all interactions",
      icon: ShieldCheck
    },
    {
      title: "Reduced Support Costs",
      description: "Lower customer service expenses while improving satisfaction",
      icon: BarChart
    }
  ];

  return (
    <SubcategoryTemplate
      title="Customer Support Bots"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Our AI-powered customer support chatbots provide instant, 24/7 assistance to your customers, handling common inquiries and freeing up your human agents to focus on complex issues."
      imageUrl="/lovable-uploads/customer-support.jpg"
      keyFeatures={[
        "Natural language processing for understanding customer inquiries",
        "Integration with your knowledge base and CRM systems",
        "Seamless handoff to human agents when needed",
        "Multi-channel deployment (website, mobile app, messaging platforms)",
        "Continuous learning from customer interactions",
        "Analytics dashboard for monitoring bot performance"
      ]}
      benefits={[
        "Immediate response to customer inquiries 24/7",
        "Reduction in support ticket volume by 40-60%",
        "Increased customer satisfaction through faster resolutions",
        "Lower operational costs for customer service",
        "Consistent customer experience across all interactions",
        "Valuable insights from customer interaction analytics"
      ]}
      useCases={[
        "FAQ and common question handling",
        "Order tracking and status updates",
        "Product information and recommendations",
        "Account management and basic troubleshooting",
        "Appointment scheduling and management",
        "Return and refund processing"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits of Customer Support Chatbots</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-6">
                  <div className="p-4 bg-adrig-blue/10 text-adrig-blue rounded-full">
                    <item.icon size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">How Our Customer Support Bots Work</h3>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-xl">1</div>
                    <h4 className="ml-4 text-xl font-semibold">Customer Inquiry</h4>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-600">The customer initiates a conversation through your website, app, or messaging platform. Our chatbot immediately responds with a personalized greeting.</p>
                </div>
              </div>
              
              <div className="w-full border-t border-gray-200"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-xl">2</div>
                    <h4 className="ml-4 text-xl font-semibold">Understanding Intent</h4>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-600">Our advanced NLP system analyzes the customer's message to understand their intent and identify the information or assistance they need.</p>
                </div>
              </div>
              
              <div className="w-full border-t border-gray-200"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-xl">3</div>
                    <h4 className="ml-4 text-xl font-semibold">Providing Solutions</h4>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-600">The bot retrieves relevant information from your knowledge base and presents clear, helpful solutions to the customer's query.</p>
                </div>
              </div>
              
              <div className="w-full border-t border-gray-200"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-xl">4</div>
                    <h4 className="ml-4 text-xl font-semibold">Human Handoff</h4>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-600">When a query is too complex, the chatbot smoothly transfers the conversation to a human agent along with the full context of the interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default CustomerSupport;
