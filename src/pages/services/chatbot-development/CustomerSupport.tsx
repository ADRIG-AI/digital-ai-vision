
import React from 'react';
import { Bot } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const CustomerSupport = () => {
  return (
    <SubcategoryTemplate
      title="Customer Support Bots"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Provide 24/7 customer support with our intelligent AI chatbots. Our custom solutions handle inquiries, resolve issues, and escalate complex problems to human agents, creating a seamless customer service experience."
      imageUrl="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Natural language processing that understands customer intent",
        "Contextual memory to maintain conversation history",
        "Seamless human agent handoff for complex issues",
        "Multi-channel deployment across web, mobile, and messaging platforms",
        "Integration with your existing CRM and knowledge base systems",
        "Continuous learning capabilities to improve over time"
      ]}
      benefits={[
        "Reduce support costs while improving customer satisfaction",
        "Handle multiple customer inquiries simultaneously with no wait times",
        "Provide consistent support quality across all interactions",
        "Free up human agents to focus on complex, high-value customer needs",
        "Collect valuable customer data and feedback automatically",
        "Scale your support operations without proportional cost increases"
      ]}
      useCases={[
        "An e-commerce retailer implemented our customer support bot and resolved 78% of inquiries without human intervention, reducing support costs by 42%",
        "A telecommunications provider deployed our chatbot solution and decreased average customer wait times from 15 minutes to under 30 seconds",
        "A SaaS company used our support bot to handle product inquiries and troubleshooting, increasing customer satisfaction scores by 28%",
        "A financial institution implemented our solution for account inquiries and simple transactions, handling 15,000+ interactions daily with 91% resolution rate"
      ]}
    />
  );
};

export default CustomerSupport;
