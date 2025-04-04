
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const AIIntegration = () => {
  return (
    <SubcategoryTemplate
      title="AI Integration"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our AI integration services seamlessly incorporate artificial intelligence capabilities into your existing systems and workflows, minimizing disruption while maximizing the transformative power of AI."
      imageUrl="/lovable-uploads/workflow-automation.jpg"
      keyFeatures={[
        "Seamless integration with existing business systems and software",
        "API development for AI model deployment and access",
        "Custom middleware solutions for legacy system compatibility",
        "Scalable architecture design for future AI expansion",
        "Cross-platform AI capabilities for web, mobile, and desktop applications",
        "Comprehensive testing and validation frameworks"
      ]}
      benefits={[
        "Transform existing systems without complete rebuilds",
        "Preserve investments in legacy technology while adding AI capabilities",
        "Gradual implementation approach to minimize business disruption",
        "Unified data ecosystem connecting all business applications",
        "Improved efficiency through elimination of manual data transfers",
        "Future-proof architecture ready for emerging AI technologies"
      ]}
      useCases={[
        "CRM enhancement with customer insights and predictive analytics",
        "ERP systems augmented with intelligent automation capabilities",
        "Supply chain optimization through integrated AI decision-making",
        "Customer service platforms with integrated chatbots and AI assistants",
        "HR systems with AI-powered recruitment and employee analytics",
        "Marketing platforms with automated content generation and optimization"
      ]}
    />
  );
};

export default AIIntegration;
