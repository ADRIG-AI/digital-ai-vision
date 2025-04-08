
import React from 'react';
import { BookOpen } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const CustomTraining = () => {
  return (
    <SubcategoryTemplate
      title="Custom LLM Training"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Develop specialized language models tailored to your industry and use cases. Our custom LLM training services create AI solutions that truly understand your business context, terminology, and specific requirements."
      imageUrl="https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Domain-specific training data preparation and curation",
        "Fine-tuning of foundation models for specialized applications",
        "Proprietary data incorporation with strict privacy controls",
        "Model evaluation and benchmarking against industry standards",
        "Iterative refinement based on performance metrics",
        "Deployment strategies optimized for your infrastructure"
      ]}
      benefits={[
        "Create AI models that truly understand your industry's unique language and context",
        "Improve accuracy and relevance for specialized tasks compared to general-purpose models",
        "Maintain control over proprietary knowledge embedded in your AI",
        "Reduce costs associated with using generic commercial AI services",
        "Gain competitive advantage through AI customized to your specific needs",
        "Ensure ethical alignment with your organization's values and guidelines"
      ]}
      useCases={[
        "A legal services provider developed a custom LLM that understood complex legal terminology, improving document analysis accuracy by 47% over generic models",
        "A pharmaceutical company trained a specialized model for research literature analysis, accelerating drug discovery processes by identifying relevant compounds 6x faster",
        "A financial institution created a custom LLM for regulatory compliance documentation, reducing review time by 73% while improving accuracy",
        "An aerospace manufacturer developed a specialized technical documentation model, improving knowledge retrieval and troubleshooting for maintenance crews by 58%"
      ]}
    />
  );
};

export default CustomTraining;
