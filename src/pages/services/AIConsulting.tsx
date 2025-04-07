
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Lightbulb } from 'lucide-react';

const AIConsulting = () => {
  return (
    <ServicePageTemplate
      title="AI Consulting"
      subtitle="Expert guidance for AI-powered business transformation"
      description="Our AI consulting services help businesses navigate the complex landscape of artificial intelligence technology. We work with you to identify the most promising AI opportunities, develop a strategic roadmap, and guide implementation for maximum business impact."
      icon={Lightbulb}
      imageUrl="/lovable-uploads/ai-consulting.jpg"
      howItWorks="Our experienced consultants begin with a comprehensive assessment of your business goals and challenges. We then identify AI opportunities that align with your strategic objectives. Our team creates a detailed implementation plan and provides ongoing guidance to ensure successful execution and long-term value."
      benefits={[
        { text: "Clearly defined AI strategy aligned with business objectives" },
        { text: "Prioritized AI initiatives based on impact and feasibility" },
        { text: "Expert guidance on technology selection and implementation" },
        { text: "Risk mitigation and ethical AI use frameworks" },
        { text: "Knowledge transfer to build internal AI capabilities" },
        { text: "Ongoing support to adapt to evolving AI technologies" }
      ]}
    />
  );
};

export default AIConsulting;
