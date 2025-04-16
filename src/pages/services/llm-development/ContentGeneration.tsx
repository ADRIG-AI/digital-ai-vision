
import React from 'react';
import { Code } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const ContentGeneration = () => {
  return (
    <SubcategoryTemplate
      title="Content Generation"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Automate content creation with AI that writes like a human. Our content generation solutions produce high-quality, engaging text for marketing, communications, documentation, and more."
      imageUrl="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Brand voice customization to match your unique tone and style",
        "Multi-format content generation (articles, emails, social media, reports)",
        "SEO optimization capabilities built into generated content",
        "Factual accuracy verification and citation integration",
        "Multilingual content creation across major languages",
        "Human review workflows for quality assurance"
      ]}
      benefits={[
        "Scale content production without expanding your writing team",
        "Maintain consistent messaging across all channels and materials",
        "Rapidly generate content for time-sensitive opportunities",
        "Overcome writer's block with AI-generated starting points",
        "Create personalized content for different audience segments",
        "Repurpose existing content into new formats efficiently"
      ]}
      useCases={[
        "A digital marketing agency used our content generation to produce personalized email campaigns for clients, improving open rates by 37% and click-through rates by 42%",
        "An e-commerce company automated product descriptions for their catalog of 15,000+ items, completing in days what would have taken months manually",
        "A software company generated comprehensive documentation for their API, improving developer adoption rates by 63% through better accessibility",
        "A financial services firm automated personalized investment reports for clients, increasing engagement and retention while saving 120+ hours of analyst time monthly"
      ]}
    />
  );
};

export default ContentGeneration;
