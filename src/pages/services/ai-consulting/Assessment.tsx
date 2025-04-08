
import React from 'react';
import { Cog } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const Assessment = () => {
  return (
    <SubcategoryTemplate
      title="Technology Assessment"
      parentService="AI Consulting"
      parentServicePath="/services/ai-consulting"
      description="Evaluate and select the optimal AI technologies for your unique business needs. Our technology assessment services help you navigate the complex landscape of AI solutions to find the perfect fit."
      imageUrl="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Vendor-neutral evaluation of AI technologies and platforms",
        "Technical compatibility assessment with existing systems",
        "Scalability and performance testing for proposed solutions",
        "Total cost of ownership analysis including hidden costs",
        "Security and compliance evaluation for sensitive applications",
        "Build vs. buy analysis for custom and off-the-shelf options"
      ]}
      benefits={[
        "Make technology decisions based on evidence rather than vendor claims",
        "Avoid costly integration issues by ensuring compatibility upfront",
        "Select solutions that will grow with your business needs",
        "Identify potential security or compliance risks before implementation",
        "Optimize your technology investment with clear ROI projections",
        "Save time in the selection process with expert guidance"
      ]}
      useCases={[
        "A multinational corporation evaluated NLP platforms for global customer service, selecting a solution that supported 27 languages and reduced implementation time by 4 months",
        "A mid-sized manufacturer assessed predictive maintenance technologies, choosing an option that integrated with their legacy equipment while staying within budget constraints",
        "A financial institution evaluated fraud detection systems, identifying a solution that reduced false positives by 67% compared to alternatives",
        "A retail chain assessed computer vision technologies for inventory management, selecting a platform that required 40% less computing infrastructure than competitors"
      ]}
    />
  );
};

export default Assessment;
