
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Database } from 'lucide-react';

const DataAnalysis = () => {
  return (
    <ServicePageTemplate
      title="Data Analysis"
      subtitle="Transform raw data into actionable business intelligence"
      description="Our data analysis services help businesses extract valuable insights from their data assets. We combine advanced analytics, machine learning, and visualization techniques to identify patterns, predict trends, and support data-driven decision making across your organization."
      icon={Database}
      imageUrl="/lovable-uploads/data-analytics.jpg"
      howItWorks="We begin by assessing your data sources and business questions. Our team then applies statistical analysis, machine learning, and AI techniques to extract meaningful insights. We deliver these insights through intuitive dashboards and reports designed for decision-makers at all levels of your organization."
      benefits={[
        { text: "Discover hidden patterns and opportunities in your business data" },
        { text: "Make confident decisions backed by empirical evidence" },
        { text: "Predict future trends and prepare for market changes" },
        { text: "Identify the root causes of business problems" },
        { text: "Optimize resource allocation based on data-driven insights" },
        { text: "Track KPIs and performance metrics in real-time" }
      ]}
    />
  );
};

export default DataAnalysis;
