
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const ContentGeneration = () => {
  return (
    <SubcategoryTemplate
      title="Content Generation"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Our AI-powered content generation systems create high-quality, engaging content at scale while maintaining your brand voice and meeting your specific requirements."
      imageUrl="/lovable-uploads/ai-development.jpg"
      keyFeatures={[
        "Custom language models trained on your brand voice and industry content",
        "Multi-format content creation (articles, emails, social posts, product descriptions)",
        "Factual accuracy verification and plagiarism prevention",
        "Content templating for consistent structure and messaging",
        "Multilingual content generation capabilities",
        "Integration with content management systems"
      ]}
      benefits={[
        "Produce 10x more content with the same resources",
        "Maintain consistent brand voice across all communication channels",
        "Scale content production for multiple markets and languages",
        "Free creative teams to focus on high-value strategic content",
        "Respond quickly to market trends with rapid content creation",
        "Personalize content at scale for different audience segments"
      ]}
      useCases={[
        "Marketing campaigns requiring extensive content creation",
        "E-commerce product descriptions for large inventories",
        "Knowledge base and documentation generation",
        "Personalized email marketing campaigns",
        "Multi-platform social media content creation",
        "Regular content updates for blogs and websites"
      ]}
    />
  );
};

export default ContentGeneration;
