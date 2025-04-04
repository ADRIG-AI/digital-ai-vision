
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const PredictiveAnalytics = () => {
  return (
    <SubcategoryTemplate
      title="Predictive Analytics"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our predictive analytics solutions leverage machine learning to forecast trends, identify opportunities, and mitigate risks before they occur, giving your business a competitive edge."
      imageUrl="/lovable-uploads/data-analytics.jpg"
      keyFeatures={[
        "Advanced forecasting models using machine learning algorithms",
        "Real-time data processing and analysis capabilities",
        "Custom dashboards for easy visualization and interpretation",
        "Seamless integration with your existing business intelligence systems",
        "Automated alerts and recommendations based on predictive insights",
        "Continuous learning and model improvement over time"
      ]}
      benefits={[
        "Anticipate market changes and stay ahead of competitors",
        "Optimize inventory management and reduce operational costs",
        "Identify potential risks before they impact your business",
        "Make data-driven decisions with confidence",
        "Improve customer retention through predictive customer behavior analysis",
        "Maximize ROI on marketing and sales initiatives"
      ]}
      useCases={[
        "Sales forecasting and pipeline optimization",
        "Customer churn prediction and prevention",
        "Inventory management and demand forecasting",
        "Predictive maintenance for industrial equipment",
        "Risk assessment and management in financial services",
        "Healthcare outcome predictions and resource allocation"
      ]}
    />
  );
};

export default PredictiveAnalytics;
