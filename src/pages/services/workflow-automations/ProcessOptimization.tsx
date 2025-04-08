
import React from 'react';
import { Cog } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const ProcessOptimization = () => {
  return (
    <SubcategoryTemplate
      title="Process Optimization"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Streamline your business operations with our AI-powered process optimization solutions. We analyze your existing workflows, identify bottlenecks, and implement intelligent automation to enhance efficiency and productivity."
      imageUrl="https://images.unsplash.com/photo-1664575599736-c5197c684de6?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Comprehensive process analysis and mapping",
        "AI-driven bottleneck identification and resolution",
        "Automated decision-making based on predefined rules and machine learning",
        "Real-time process monitoring and performance analytics",
        "Exception handling workflows that adapt to unusual situations",
        "Continuous improvement frameworks that evolve with your business"
      ]}
      benefits={[
        "Reduce process completion time by eliminating inefficiencies",
        "Decrease operational costs through streamlined workflows",
        "Improve consistency and quality of outputs across all processes",
        "Free up valuable employee time for higher-value activities",
        "Gain visibility into process performance with detailed analytics",
        "Adapt quickly to changing business requirements with flexible automation"
      ]}
      useCases={[
        "A financial services firm optimized their loan approval process, reducing processing time from 5 days to less than 24 hours while improving accuracy by 34%",
        "A healthcare provider streamlined patient intake procedures, decreasing wait times by 62% and improving patient satisfaction scores",
        "A manufacturing company optimized their quality control process, reducing defect rates by 47% while increasing inspection throughput",
        "A logistics company revolutionized their dispatch system, improving on-time delivery rates by 28% and reducing fuel costs by 16%"
      ]}
    />
  );
};

export default ProcessOptimization;
