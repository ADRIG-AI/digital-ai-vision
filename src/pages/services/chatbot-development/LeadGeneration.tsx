
import React from 'react';
import { Users } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const LeadGeneration = () => {
  return (
    <SubcategoryTemplate
      title="Lead Generation Bots"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Transform your website visitors into qualified leads with our AI-powered lead generation chatbots. Our solutions engage visitors, qualify prospects, and capture valuable information to fuel your sales pipeline."
      imageUrl="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Proactive engagement strategies based on user behavior",
        "Intelligent qualification algorithms to identify high-potential leads",
        "Progressive data collection that doesn't overwhelm prospects",
        "Seamless CRM integration for immediate lead processing",
        "A/B testing capabilities to optimize conversion rates",
        "Personalized follow-up scheduling based on prospect interest"
      ]}
      benefits={[
        "Increase lead conversion rates through timely, personalized engagement",
        "Qualify leads automatically before human follow-up to maximize sales efficiency",
        "Collect valuable prospect information 24/7 without expanding staff",
        "Reduce cost per lead acquisition through automated processes",
        "Scale lead generation efforts across multiple channels simultaneously",
        "Gain insights into prospect interests and pain points for sales optimization"
      ]}
      useCases={[
        "A B2B software company implemented our lead generation bot and increased qualified leads by 67% while reducing cost per acquisition by 42%",
        "A real estate agency used our chatbot to qualify property inquiries, resulting in a 53% increase in showing appointments",
        "A higher education institution deployed our solution for prospective student inquiries, increasing application completion rates by 38%",
        "A financial advisory firm used our lead generation bot to screen potential clients, improving advisor time efficiency by 71%"
      ]}
    />
  );
};

export default LeadGeneration;
