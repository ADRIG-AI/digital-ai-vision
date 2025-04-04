
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const MachineLearning = () => {
  return (
    <SubcategoryTemplate
      title="Machine Learning Solutions"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our custom machine learning solutions transform your raw data into actionable intelligence, automating complex decision-making processes and uncovering hidden patterns in your business data."
      imageUrl="/lovable-uploads/ai-development.jpg"
      keyFeatures={[
        "Custom ML model development tailored to your specific business needs",
        "Deep learning algorithms for complex pattern recognition",
        "Natural language processing for text and speech analysis",
        "Computer vision solutions for image and video processing",
        "Reinforcement learning for autonomous decision-making systems",
        "MLOps infrastructure for continuous deployment and monitoring"
      ]}
      benefits={[
        "Automate complex decision-making processes with high accuracy",
        "Discover hidden patterns and opportunities in your data",
        "Scale your operations without proportionally increasing staff",
        "Enhance customer experiences through personalization",
        "Reduce human error in critical business processes",
        "Gain competitive advantage through AI-driven innovation"
      ]}
      useCases={[
        "Customer segmentation and personalized marketing",
        "Fraud detection and prevention in financial transactions",
        "Quality control in manufacturing through computer vision",
        "Document processing and information extraction",
        "Recommendation systems for e-commerce and content platforms",
        "Sentiment analysis for brand monitoring and customer feedback"
      ]}
    />
  );
};

export default MachineLearning;
