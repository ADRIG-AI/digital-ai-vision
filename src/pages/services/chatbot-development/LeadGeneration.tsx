
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Users, Target, Filter, BarChart4, MessageCircle } from 'lucide-react';

const LeadGeneration = () => {
  const features = [
    {
      icon: Target,
      title: "Prospect Qualification",
      description: "Automatically qualify leads based on customizable criteria and lead scoring"
    },
    {
      icon: Filter,
      title: "Data Enrichment",
      description: "Collect valuable prospect information through natural conversational flow"
    },
    {
      icon: BarChart4,
      title: "Lead Scoring",
      description: "Automatically rank leads based on engagement and qualification criteria"
    },
    {
      icon: MessageCircle,
      title: "Personalized Follow-up",
      description: "Schedule personalized follow-up messages to nurture qualified leads"
    }
  ];

  return (
    <SubcategoryTemplate
      title="Lead Generation Bots"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Our Lead Generation Chatbots engage website visitors, qualify prospects, and capture valuable customer information, helping your sales team focus on the most promising opportunities."
      imageUrl="/lovable-uploads/lead-generation.jpg"
      keyFeatures={[
        "24/7 lead capture without human intervention",
        "Conversational lead qualification based on your criteria",
        "Seamless integration with your CRM system",
        "Automated lead scoring and prioritization",
        "Natural language processing for engaging conversations",
        "Multi-channel deployment for maximum reach"
      ]}
      benefits={[
        "Increase lead capture by engaging visitors instantly",
        "Improve lead quality with intelligent qualification",
        "Reduce cost per lead through automation",
        "Accelerate sales cycle by pre-qualifying prospects",
        "Collect valuable market and customer insights",
        "Scale lead generation efforts without adding staff"
      ]}
      useCases={[
        "Website visitor engagement and qualification",
        "Event registration and attendee information capture",
        "Product interest assessment and recommendation",
        "Appointment scheduling for sales consultations",
        "Promotion and contest participation management",
        "Customer feedback collection and analysis"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How Our Lead Generation Bots Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mr-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Lead Generation Metrics</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Our chatbots typically deliver these improvements for our clients:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl font-bold text-adrig-blue mb-2">35%</div>
                <p className="text-lg font-medium">Increase in Lead Capture</p>
                <p className="text-sm text-gray-500 mt-2">Compared to traditional forms</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl font-bold text-adrig-blue mb-2">24/7</div>
                <p className="text-lg font-medium">Lead Capture</p>
                <p className="text-sm text-gray-500 mt-2">Even outside business hours</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl font-bold text-adrig-blue mb-2">40%</div>
                <p className="text-lg font-medium">Lower Cost Per Lead</p>
                <p className="text-sm text-gray-500 mt-2">Through automation and efficiency</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">The Lead Generation Process</h3>
            
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
              
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right">
                  <h4 className="text-xl font-semibold mb-2">Visitor Engagement</h4>
                  <p className="text-gray-600">Chatbot proactively engages website visitors with personalized greetings based on behavior and referral source.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-adrig-blue border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-adrig-blue border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h4 className="text-xl font-semibold mb-2">Information Collection</h4>
                  <p className="text-gray-600">Through natural conversation, the bot gathers contact information and qualifies prospects based on your criteria.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right">
                  <h4 className="text-xl font-semibold mb-2">Lead Qualification</h4>
                  <p className="text-gray-600">The bot scores leads based on responses, behavior, and engagement level to prioritize the most promising prospects.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-adrig-blue border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-adrig-blue border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-semibold mb-2">CRM Integration</h4>
                  <p className="text-gray-600">Qualified leads are automatically added to your CRM system with all relevant information and assigned to the appropriate sales representative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default LeadGeneration;
