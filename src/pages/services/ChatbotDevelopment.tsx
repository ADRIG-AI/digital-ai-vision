
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
      caseStudies={[
        {
          title: "E-commerce Customer Service Revolution",
          description: "An online retailer implemented our AI chatbot and saw immediate improvements in customer satisfaction and sales conversion rates.",
          results: "85% of customer queries resolved without human intervention, 24% increase in conversion rates."
        },
        {
          title: "Banking Services Automation",
          description: "A financial institution deployed our chatbot to handle routine inquiries and basic transactions, freeing up staff for complex customer needs.",
          results: "Reduced wait times by 78%, increased customer satisfaction by 32%, and handled over 10,000 transactions daily."
        },
        {
          title: "Healthcare Appointment Management",
          description: "Our chatbot helped a medical practice streamline appointment scheduling, reminders, and basic patient intake.",
          results: "Reduced appointment no-shows by 48% and decreased staff workload by 35%."
        }
      ]}
      faqItems={[
        {
          question: "How long does it take to build and deploy a custom chatbot?",
          answer: "Most custom chatbots can be designed, developed, and deployed within 4-8 weeks, depending on complexity and integration requirements."
        },
        {
          question: "Can your chatbots integrate with our existing CRM and customer service platforms?",
          answer: "Yes, our chatbots are designed to integrate seamlessly with major CRMs, customer service platforms, and messaging services including Salesforce, Zendesk, WhatsApp, Facebook Messenger, and more."
        },
        {
          question: "How do you ensure the chatbot provides accurate information?",
          answer: "We use a combination of supervised learning, continuous training with your company knowledge base, and human oversight during the initial deployment phase to ensure accuracy and relevance."
        }
      ]}
    />
  );
};

export default ChatbotDevelopment;
