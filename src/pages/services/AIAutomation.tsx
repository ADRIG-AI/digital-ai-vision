
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
    />
  );
};

export default AIAutomation;
