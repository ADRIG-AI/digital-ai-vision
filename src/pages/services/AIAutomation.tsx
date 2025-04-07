
import { Brain } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AIAutomation = () => {
  return (
    <ServicePageTemplate
      title="AI Automation"
      subtitle="Transforming Business Processes with Smart AI"
      description="In a world driven by speed and accuracy, AI automation helps businesses optimize workflows, reduce human errors, and scale operations effortlessly. Our AI solutions are designed to handle repetitive tasks, make intelligent decisions, and adapt to your business needs."
      icon={Brain}
      imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400"
      howItWorksImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400"
      keyFeaturesImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400"
      howItWorks="Our machine learning algorithms analyze repetitive tasks, identify optimization opportunities, and create smart automation systems that enhance efficiency. We customize each solution to fit your unique business processes, ensuring seamless integration and maximum impact."
      benefits={[
        { text: "Eliminate Manual Effort: Automate repetitive tasks to free up valuable resources." },
        { text: "Increase Accuracy: Reduce human errors with AI-driven decision-making." },
        { text: "Scalability: Grow your business without increasing workforce dependency." },
        { text: "Cost-Effective: Save operational costs by reducing labor-intensive tasks." },
        { text: "Adaptable Solutions: Our AI systems learn and improve over time, adapting to changing needs." }
      ]}
      caseStudies={[
        {
          title: "Manufacturing Quality Control Transformation",
          description: "Implemented an AI vision system that automatically inspects products on the assembly line, detecting defects with greater accuracy than human inspectors.",
          results: "Reduced defect escape rate by 94% and increased inspection throughput by 300%."
        },
        {
          title: "Customer Service Email Automation",
          description: "Deployed an AI system that categorizes, prioritizes, and routes customer emails to the appropriate department, with automated responses for common queries.",
          results: "Decreased response time by 76% and enabled staff to handle 3x the previous volume of inquiries."
        },
        {
          title: "Sales Lead Qualification Automation",
          description: "Created an AI system that analyzes incoming leads, scores them based on likelihood to convert, and routes them to appropriate sales representatives.",
          results: "Increased conversion rate by 42% and reduced sales team time spent on unqualified leads by 68%."
        }
      ]}
      faqItems={[
        {
          question: "How does AI automation differ from traditional automation?",
          answer: "Traditional automation follows fixed rules and can only handle structured data and predictable scenarios. AI automation uses machine learning to adapt to new situations, handle unstructured data, make decisions based on patterns, and improve over time through experience."
        },
        {
          question: "How quickly can we expect to see ROI from implementing AI automation?",
          answer: "Most of our clients see positive ROI within 3-6 months of implementation. Simple processes may show returns even faster, while more complex transformations might take longer but typically deliver greater long-term value."
        },
        {
          question: "Will AI automation replace our employees?",
          answer: "Our goal is to augment human capabilities, not replace them. AI automation handles repetitive, time-consuming tasks, allowing your team to focus on creative, strategic work that requires human judgment and empathy. Most clients find their teams become more productive and satisfied when freed from mundane tasks."
        }
      ]}
    />
  );
};

export default AIAutomation;
