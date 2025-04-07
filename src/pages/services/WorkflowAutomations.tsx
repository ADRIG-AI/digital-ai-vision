
import { Workflow } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const WorkflowAutomations = () => {
  return (
    <ServicePageTemplate
      title="Workflow Automations"
      subtitle="Streamlining Business Operations"
      description="Manual workflows slow down businesses. Our AI-powered workflow automation eliminates inefficiencies, allowing teams to focus on high-value tasks. From document processing to approval systems, we create seamless workflows that accelerate your business processes."
      icon={Workflow}
      imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1400"
      howItWorks="We integrate automated triggers and AI decision-making into your workflow, ensuring seamless execution without human intervention. Our systems connect disparate applications, automate data transfer, and create intelligent process flows that adapt to changing business conditions."
      benefits={[
        { text: "Faster Turnaround: Speed up processes with minimal delays." },
        { text: "Error Reduction: Automate repetitive tasks to minimize mistakes." },
        { text: "Increased Productivity: Free up your team to focus on strategic work." },
        { text: "Seamless Integration: Works with your existing tools and systems." },
        { text: "Process Visibility: Gain insights into workflow performance and bottlenecks." }
      ]}
    />
  );
};

export default WorkflowAutomations;
