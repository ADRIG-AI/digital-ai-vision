
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Brain } from 'lucide-react';

const AIAutomation = () => {
  return (
    <ServicePageTemplate
      title="AI Automation"
      subtitle="Transforming business processes with intelligent automation"
      description="Our AI automation solutions combine artificial intelligence with robotic process automation to create intelligent systems that can handle complex tasks, learn from experience, and deliver consistent results with minimal human intervention."
      icon={Brain}
      imageUrl="/lovable-uploads/corporate-dashboard.jpg"
      howItWorks="We analyze your business processes to identify automation candidates, then design AI systems that can understand context, make decisions, and execute actions. Our solutions include intelligent document processing, predictive maintenance, quality control automation, and customer service automation."
      benefits={[
        { text: "Increase operational efficiency by automating complex tasks" },
        { text: "Improve accuracy and consistency in business processes" },
        { text: "Scale operations without proportionally increasing costs" },
        { text: "Free human workers from repetitive tasks for higher-value work" },
        { text: "Create 24/7 operational capability for critical functions" },
        { text: "Continuously improve processes through machine learning" }
      ]}
    />
  );
};

export default AIAutomation;
