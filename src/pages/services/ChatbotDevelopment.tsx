
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { MessageCircle } from 'lucide-react';

const ChatbotDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Chatbot Development"
      subtitle="Intelligent conversational AI for exceptional customer experiences"
      description="Our chatbot development services create intelligent virtual assistants that understand natural language, learn from interactions, and provide helpful responses to customer inquiries. We build chatbots that represent your brand voice while efficiently handling customer support, sales assistance, and information requests."
      icon={MessageCircle}
      imageUrl="/lovable-uploads/corporate-meeting.jpg"
      howItWorks="We design conversational flows based on your customers' needs and your business processes. Our AI engineers then develop and train natural language understanding models that can interpret customer intent and deliver appropriate responses. We integrate with your existing systems and provide ongoing optimization."
      benefits={[
        { text: "Provide 24/7 customer support without staffing constraints" },
        { text: "Reduce support costs while improving response times" },
        { text: "Handle multiple customer inquiries simultaneously" },
        { text: "Collect valuable customer insights from conversations" },
        { text: "Ensure consistent communication with standardized responses" },
        { text: "Seamlessly escalate to human agents when needed" }
      ]}
    />
  );
};

export default ChatbotDevelopment;
