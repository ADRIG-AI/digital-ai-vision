
import { MessageCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ChatbotDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Chatbot Development"
      subtitle="Intelligent Chatbots That Engage & Convert"
      description="In today's digital-first world, customer experience is everything. Our chatbots don't just answer queries—they understand, respond, and learn from interactions, creating natural conversations that enhance customer satisfaction and drive conversions."
      icon={MessageCircle}
      imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1400" 
      howItWorks="We build AI-powered chatbots that provide instant support, automate responses, and handle multiple customer interactions simultaneously. Our chatbots integrate with your existing systems and can be deployed across websites, mobile apps, and messaging platforms for a unified customer experience."
      benefits={[
        { text: "24/7 Availability: Never miss a customer query, even outside business hours." },
        { text: "Personalized Responses: AI learns from conversations to improve interactions." },
        { text: "Lead Generation: Capture leads through automated engagement." },
        { text: "Cost Savings: Reduce the need for large support teams." },
        { text: "Omni-Channel Experience: Consistent customer service across all platforms." }
      ]}
    />
  );
};

export default ChatbotDevelopment;
