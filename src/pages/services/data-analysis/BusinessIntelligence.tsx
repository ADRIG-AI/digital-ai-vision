
import React from 'react';
import { LineChart } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const BusinessIntelligence = () => {
  return (
    <SubcategoryTemplate
      title="Business Intelligence"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Transform raw data into actionable insights with our advanced Business Intelligence solutions. We help organizations make data-driven decisions through comprehensive analytics and visualization tools."
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Interactive dashboards that visualize complex data in intuitive formats",
        "Real-time reporting that keeps you updated on key business metrics",
        "Custom KPI tracking aligned with your specific business objectives",
        "Cross-platform compatibility for access from any device",
        "Integration with your existing data sources and business systems",
        "Automated data refresh schedules to ensure information is current"
      ]}
      benefits={[
        "Make faster, more confident business decisions backed by reliable data",
        "Identify emerging trends and opportunities before your competitors",
        "Improve operational efficiency by identifying and addressing bottlenecks",
        "Increase revenue by spotting untapped market segments and optimizing pricing strategies",
        "Enhance customer satisfaction through data-driven product and service improvements",
        "Reduce costs by identifying inefficient processes and resource allocation"
      ]}
      useCases={[
        "A retail chain used our BI solutions to analyze sales patterns across 200+ locations, resulting in a 12% increase in revenue through optimized inventory management",
        "A healthcare provider implemented our analytics platform to track patient outcomes, reducing readmission rates by 23% through data-driven care improvements",
        "A financial services firm leveraged our BI tools to monitor market trends, enabling them to adjust investment strategies that outperformed benchmarks by 18%",
        "A manufacturing company used our dashboards to track production metrics, identifying inefficiencies that led to a 15% increase in output with no additional resources"
      ]}
    />
  );
};

export default BusinessIntelligence;
