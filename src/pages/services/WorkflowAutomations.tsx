
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Workflow } from 'lucide-react';

const WorkflowAutomations = () => {
  return (
    <ServicePageTemplate
      title="Workflow Automations"
      subtitle="Streamline operations and boost efficiency with AI-powered workflows"
      description="Our workflow automation solutions eliminate repetitive tasks, reduce errors, and allow your team to focus on strategic work. We identify bottlenecks in your current processes and implement intelligent automation systems that learn and improve over time."
      icon={Workflow}
      imageUrl="/lovable-uploads/workflow-automation.jpg"
      howItWorks="We analyze your existing workflows to identify inefficiencies and automation opportunities. Our solutions use AI to handle routine tasks, make intelligent routing decisions, and integrate disparate systems into a seamless process flow. The result is faster execution, fewer errors, and significant cost savings."
      benefits={[
        { text: "Reduce processing time by up to 80% for routine tasks" },
        { text: "Eliminate human errors in repetitive processes" },
        { text: "Free your team to focus on high-value work" },
        { text: "Create consistent, predictable outcomes for business processes" },
        { text: "Scale operations without proportionally increasing headcount" },
        { text: "Gain analytics-driven insights into operational efficiency" }
      ]}
    />
  );
};

export default WorkflowAutomations;
