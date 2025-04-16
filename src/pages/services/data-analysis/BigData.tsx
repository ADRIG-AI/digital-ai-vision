
import React from 'react';
import { Server } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const BigData = () => {
  return (
    <SubcategoryTemplate
      title="Big Data Processing"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Handle massive datasets with our powerful big data processing solutions. We help organizations extract valuable insights from high-volume, high-velocity data streams using cutting-edge technology and advanced algorithms."
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Scalable architecture that grows with your data volume needs",
        "Stream processing capabilities for real-time data analysis",
        "Distributed computing frameworks for handling massive datasets efficiently",
        "Advanced ETL processes to clean and transform raw data",
        "Machine learning integration for predictive analytics on large datasets",
        "Comprehensive data governance and security protocols"
      ]}
      benefits={[
        "Process billions of data points efficiently without performance degradation",
        "Gain insights from previously inaccessible or unmanageable data volumes",
        "Reduce time-to-insight from days to minutes with optimized processing",
        "Uncover hidden patterns and correlations only visible in large datasets",
        "Make data-driven decisions with confidence using comprehensive analytics",
        "Maintain compliance with data regulations while maximizing data utility"
      ]}
      useCases={[
        "A telecommunications company processed petabytes of network data to identify service optimization opportunities, resulting in 17% improved network reliability",
        "An IoT manufacturer implemented our big data solution to analyze device telemetry data across millions of connected devices, enabling predictive maintenance that reduced failures by 42%",
        "A financial institution used our platform to process transaction data in real-time, identifying fraudulent activities 200% faster than their previous system",
        "A research organization leveraged our big data processing to analyze genomic sequences, accelerating discovery processes by an order of magnitude"
      ]}
    />
  );
};

export default BigData;
