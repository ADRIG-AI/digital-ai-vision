
import React from 'react';
import { Brain } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const Strategy = () => {
  return (
    <SubcategoryTemplate
      title="AI Strategy Development"
      parentService="AI Consulting"
      parentServicePath="/services/ai-consulting"
      description="Create a comprehensive roadmap for AI adoption in your organization. Our strategic consulting helps you identify opportunities, prioritize initiatives, and develop a clear path to AI-driven transformation."
      imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Comprehensive AI opportunity assessment across your organization",
        "Prioritization frameworks based on impact and feasibility",
        "ROI modeling for AI initiatives to support investment decisions",
        "Competitive analysis of AI adoption in your industry",
        "Risk assessment and mitigation planning",
        "Executive alignment workshops and change management guidance"
      ]}
      benefits={[
        "Create a clear, actionable plan for AI adoption rather than ad-hoc implementations",
        "Align AI investments with core business objectives and strategic priorities",
        "Avoid costly missteps by identifying the most valuable AI opportunities first",
        "Build executive consensus and support for AI transformation initiatives",
        "Develop realistic timelines and resource requirements for implementation",
        "Future-proof your business by staying ahead of AI-driven industry changes"
      ]}
      useCases={[
        "A retail corporation developed a 3-year AI roadmap that prioritized customer experience and supply chain optimization, resulting in a 24% profit margin increase",
        "A financial services firm created an AI strategy that focused on fraud detection and personalized recommendations, reducing fraud losses by 41% and increasing cross-selling success by 28%",
        "A manufacturing company developed a phased AI implementation plan focusing on predictive maintenance and quality control, reducing downtime by 37% and defect rates by 43%",
        "A healthcare provider created a patient-centered AI strategy that improved diagnostic accuracy, reduced administrative burden, and enhanced care coordination across facilities"
      ]}
    />
  );
};

export default Strategy;
