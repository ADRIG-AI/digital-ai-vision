
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const Ecommerce = () => {
  return (
    <SubcategoryTemplate
      title="E-commerce Assistants"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Boost your online sales with AI-powered shopping assistants that guide customers through their purchasing journey. Our e-commerce chatbots provide personalized product recommendations, answer questions, and facilitate transactions."
      imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Intelligent product recommendation engine based on user preferences and browsing history",
        "Real-time inventory and pricing information integration",
        "Order tracking and status update capabilities",
        "Product comparison functionality to help customers make decisions",
        "Abandoned cart recovery through timely follow-up messages",
        "Seamless checkout process integration"
      ]}
      benefits={[
        "Increase conversion rates through personalized shopping assistance",
        "Reduce cart abandonment with timely intervention and support",
        "Enhance customer experience with immediate answers to product questions",
        "Cross-sell and upsell effectively through intelligent recommendations",
        "Gather valuable insights about customer preferences and pain points",
        "Create a consistent shopping experience across all channels"
      ]}
      useCases={[
        "An online fashion retailer implemented our e-commerce assistant and saw a 32% increase in average order value through personalized product recommendations",
        "An electronics store used our chatbot to help customers compare technical specifications, resulting in a 24% reduction in return rates",
        "A beauty products company deployed our solution to provide personalized skincare recommendations, increasing conversion rates by 36%",
        "A home goods retailer reduced cart abandonment by 41% using our chatbot's timely interventions and personalized discount offers"
      ]}
    />
  );
};

export default Ecommerce;
