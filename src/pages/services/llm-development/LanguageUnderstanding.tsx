
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const LanguageUnderstanding = () => {
  return (
    <SubcategoryTemplate
      title="Language Understanding"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Our advanced natural language understanding solutions enable systems to comprehend, analyze, and extract valuable insights from text and speech in multiple languages and domains."
      imageUrl="/lovable-uploads/ai-development.jpg"
      keyFeatures={[
        "Sentiment analysis with emotional nuance detection",
        "Entity recognition and relationship mapping",
        "Intent classification for conversational systems",
        "Topic modeling and content categorization",
        "Multilingual understanding capabilities",
        "Context-aware interpretation of language"
      ]}
      benefits={[
        "Deep understanding of customer feedback and sentiment",
        "Automated extraction of insights from unstructured text",
        "Enhanced search capabilities using semantic understanding",
        "Improved customer interactions through intent recognition",
        "Multilingual support without quality degradation",
        "Real-time analysis of large text volumes"
      ]}
      useCases={[
        "Voice of customer analysis from reviews and feedback",
        "Automated customer support ticket routing and prioritization",
        "Competitive intelligence from news and market reports",
        "Compliance monitoring in regulated communications",
        "Semantic search across document repositories",
        "Social media monitoring and brand sentiment tracking"
      ]}
    />
  );
};

export default LanguageUnderstanding;
