
import React from 'react';
import { PieChart } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const DataVisualization = () => {
  return (
    <SubcategoryTemplate
      title="Data Visualization"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Convert complex datasets into clear, compelling visual stories that drive understanding and action. Our data visualization solutions help you communicate insights effectively to stakeholders at all levels."
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Custom interactive charts and graphs tailored to your specific data needs",
        "Real-time visualization updates that reflect the latest information",
        "Drill-down capabilities to explore data at multiple levels of detail",
        "User-friendly interfaces accessible to technical and non-technical users",
        "Cross-platform compatibility for seamless sharing across your organization",
        "Brand-aligned design elements that maintain your corporate identity"
      ]}
      benefits={[
        "Transform complex data into intuitive visual formats that anyone can understand",
        "Identify patterns and outliers quickly through visual representation",
        "Communicate insights more effectively to diverse stakeholders",
        "Speed up decision-making processes with clear, accessible information",
        "Increase engagement with data across all departments and management levels",
        "Build compelling data stories that drive action and change"
      ]}
      useCases={[
        "A marketing team used our visualization tools to track campaign performance across channels, leading to a 28% improvement in ROI through tactical adjustments",
        "An e-commerce company implemented our interactive dashboards to monitor customer journey metrics, resulting in UX improvements that increased conversion rates by 15%",
        "A logistics firm employed our data visualization solutions to track fleet movements and deliveries, optimizing routes to reduce fuel costs by 18%",
        "A public sector organization used our visualization platform to communicate complex budget allocations to citizens, increasing transparency and public engagement"
      ]}
    />
  );
};

export default DataVisualization;
