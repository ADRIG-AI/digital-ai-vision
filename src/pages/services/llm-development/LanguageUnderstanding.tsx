
import React from 'react';
import { Layers } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const LanguageUnderstanding = () => {
  return (
    <SubcategoryTemplate
      title="Language Understanding"
      parentService="LLM Development"
      parentServicePath="/services/llm-development"
      description="Harness the power of advanced Natural Language Processing to extract meaning, sentiment, and intent from text. Our language understanding solutions go beyond keywords to truly comprehend the nuances of human communication."
      imageUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Intent recognition with high accuracy across multiple languages",
        "Entity extraction for identifying key information in unstructured text",
        "Sentiment analysis to gauge emotional tone and customer satisfaction",
        "Topic classification for automatic content categorization",
        "Contextual comprehension that understands meaning beyond literal text",
        "Multilingual capabilities across major global languages"
      ]}
      benefits={[
        "Understand customer needs and pain points from unstructured feedback",
        "Automatically route inquiries to appropriate departments based on content",
        "Analyze large volumes of text data for insights and trends",
        "Improve search functionality with semantic understanding",
        "Enhance customer experience through better comprehension of requests",
        "Create more natural, human-like interactions in your digital channels"
      ]}
      useCases={[
        "A customer experience team analyzed thousands of support tickets to identify common issues, resulting in proactive fixes that reduced complaint volume by 38%",
        "A market research firm implemented our language understanding to analyze social media mentions, providing clients with real-time brand sentiment metrics",
        "A content platform used our solution to automatically categorize and tag articles, improving content discovery by 42% and increasing user engagement",
        "A government agency employed our language understanding to analyze citizen feedback, identifying priority issues for policy development with unprecedented accuracy"
      ]}
    />
  );
};

export default LanguageUnderstanding;
