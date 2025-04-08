
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const Implementation = () => {
  return (
    <SubcategoryTemplate
      title="Implementation Planning"
      parentService="AI Consulting"
      parentServicePath="/services/ai-consulting"
      description="Turn AI strategy into reality with expert implementation planning. Our consultants guide you through the entire process from proof of concept to full deployment, ensuring successful AI adoption."
      imageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Detailed implementation roadmaps with clear milestones",
        "Resource planning and team structure recommendations",
        "Data preparation and governance frameworks",
        "Pilot program design and success criteria",
        "Change management and internal communication strategies",
        "Training plans for technical and business stakeholders"
      ]}
      benefits={[
        "Minimize implementation risks through structured planning",
        "Ensure smooth deployment with minimal business disruption",
        "Build internal capabilities for long-term AI success",
        "Accelerate time-to-value through efficient implementation",
        "Create internal alignment and buy-in across departments",
        "Establish clear metrics to measure implementation success"
      ]}
      useCases={[
        "A healthcare network implemented an AI diagnostic system across 12 facilities with zero disruption to patient care, completing the rollout 2 months ahead of schedule",
        "A financial services firm deployed an AI risk assessment platform with our guidance, achieving 100% adoption among analysts within 6 weeks",
        "A retail chain implemented an AI inventory management system across 200+ locations with minimal stock disruption during the transition",
        "A manufacturing company rolled out predictive maintenance AI in a phased approach that maintained production goals while transitioning to the new system"
      ]}
    />
  );
};

export default Implementation;
