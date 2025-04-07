
import { Lightbulb } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AIConsulting = () => {
  return (
    <ServicePageTemplate
      title="AI Consulting"
      subtitle="Your AI Roadmap to Success"
      description="Not sure how AI can benefit your business? Our AI consulting services help you identify opportunities, implement strategies, and maximize AI adoption. We provide expert guidance at every step, from initial assessment to full implementation of AI solutions."
      icon={Lightbulb}
      imageUrl="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1400"
      howItWorks="Our experts assess your business, recommend AI solutions, and guide you through implementation, ensuring a seamless transition. We analyze your operations, identify high-impact areas for AI integration, and create a strategic roadmap that aligns with your business goals and technical capabilities."
      benefits={[
        { text: "Custom AI Strategy: Tailored AI solutions based on your business needs." },
        { text: "Industry Expertise: Insights from AI specialists with real-world experience." },
        { text: "Cost-Efficient Implementation: Optimize AI adoption without unnecessary expenses." },
        { text: "Future-Proof Your Business: Stay ahead with AI-driven innovation." },
        { text: "Comprehensive Training: Empower your team with the skills to leverage AI effectively." }
      ]}
    />
  );
};

export default AIConsulting;
