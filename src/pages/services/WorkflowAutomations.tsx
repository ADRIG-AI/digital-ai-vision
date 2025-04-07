
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
      caseStudies={[
        {
          title: "HR Onboarding Process Revolution",
          description: "Automated the entire employee onboarding process for a growing tech company, from document collection to system access provisioning.",
          results: "Reduced onboarding time from 5 days to less than 1 day and eliminated over 200 manual tasks monthly."
        },
        {
          title: "Financial Approval Workflow Transformation",
          description: "Implemented an intelligent approval system that routed financial requests based on amount, department, and business rules.",
          results: "Accelerated approval times by 78% while improving compliance and reducing approval errors by 92%."
        },
        {
          title: "Content Publication Workflow Automation",
          description: "Automated the content review, formatting, and publishing workflow for a digital media company producing over 100 articles daily.",
          results: "Increased publishing capacity by 35% without adding staff and reduced formatting errors by 96%."
        }
      ]}
      faqItems={[
        {
          question: "Can your automation solutions integrate with our legacy systems?",
          answer: "Yes, we specialize in connecting legacy systems with modern tools. Our platform includes over 200 pre-built connectors and custom API development capabilities to ensure seamless integration with your existing infrastructure."
        },
        {
          question: "How do you measure the success of workflow automation implementations?",
          answer: "We establish key performance indicators at the project outset, such as time saved, error reduction rates, and throughput improvements. Our analytics dashboard provides real-time visibility into these metrics to quantify ROI."
        },
        {
          question: "What happens if part of the automated workflow fails?",
          answer: "Our systems include comprehensive error handling, automatic retry mechanisms, and alert systems to notify relevant personnel. We also implement fallback procedures to ensure business continuity in case of system interruptions."
        }
      ]}
    />
  );
};

export default WorkflowAutomations;
