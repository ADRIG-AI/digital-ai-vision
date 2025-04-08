
import React from 'react';
import { Zap } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const Integration = () => {
  return (
    <SubcategoryTemplate
      title="Integration Services"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Connect your disparate systems and applications with our seamless integration solutions. We eliminate data silos and create cohesive workflows that span your entire technology ecosystem."
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "API development and management for system connectivity",
        "Data transformation and mapping between different formats",
        "Real-time synchronization across multiple platforms",
        "Error handling and failover mechanisms",
        "Custom middleware development for complex integrations",
        "Comprehensive integration monitoring and health checks"
      ]}
      benefits={[
        "Eliminate manual data transfer between systems",
        "Create end-to-end workflows that span multiple applications",
        "Ensure data consistency across your entire organization",
        "Accelerate business processes through seamless information flow",
        "Maximize the value of your existing software investments",
        "Adapt quickly to new systems and technologies as your business evolves"
      ]}
      useCases={[
        "A retailer integrated their e-commerce platform with inventory, accounting, and shipping systems, reducing order fulfillment time by 68%",
        "A healthcare network connected patient records across multiple facilities, improving care coordination and reducing treatment delays",
        "A manufacturing company integrated production systems with supply chain management, reducing inventory costs by 23% through just-in-time ordering",
        "A financial services firm connected CRM, compliance, and transaction processing systems, accelerating client onboarding by 74% while maintaining regulatory compliance"
      ]}
    />
  );
};

export default Integration;
