
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const CustomTraining = () => {
  return (
    <SubcategoryTemplate
      title="Custom LLM Training"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Our custom LLM training services create specialized language models that understand your industry terminology, company knowledge, and specific use cases for maximum business value."
      imageUrl="/lovable-uploads/ai-development.jpg"
      keyFeatures={[
        "Domain-specific model training using proprietary data",
        "Fine-tuning of foundation models for specialized applications",
        "Knowledge integration from company documents and databases",
        "Secure handling of sensitive training data",
        "Ethical bias detection and mitigation",
        "Continuous model improvement through feedback loops"
      ]}
      benefits={[
        "Higher accuracy for industry-specific language processing",
        "Incorporation of proprietary knowledge unavailable in public models",
        "Reduced hallucinations and incorrect information",
        "Models that understand company terminology and concepts",
        "Enhanced performance for specialized business tasks",
        "Complete data privacy with on-premises deployment options"
      ]}
      useCases={[
        "Legal document analysis and contract review",
        "Medical diagnosis assistance and healthcare documentation",
        "Financial compliance and risk assessment",
        "Technical support and troubleshooting systems",
        "Industry-specific research and knowledge synthesis",
        "Custom chatbots with specialized domain knowledge"
      ]}
    />
  );
};

export default CustomTraining;
