
import { Code } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const LLMDevelopment = () => {
  return (
    <ServicePageTemplate
      title="LLM Development"
      subtitle="Revolutionizing AI Language Understanding"
      description="Large Language Models (LLMs) enhance customer experiences, automate content creation, and improve business intelligence. We develop tailor-made LLMs that align with your business needs, trained on relevant data to provide industry-specific insights and capabilities."
      icon={Code}
      imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1400"
      howItWorks="We train custom AI models that understand context, generate human-like responses, and provide accurate, intelligent communication for various applications. Our approach combines state-of-the-art language models with domain-specific training to create solutions that truly understand your business context."
      benefits={[
        { text: "Advanced AI Understanding: Process and interpret complex human language." },
        { text: "Improved Customer Experience: AI-powered interactions that feel human." },
        { text: "Automated Content Creation: Generate emails, reports, and insights instantly." },
        { text: "Industry-Specific Training: Tailored models for healthcare, finance, e-commerce, and more." },
        { text: "Continuous Learning: Models that improve with every interaction for better performance." }
      ]}
      caseStudies={[
        {
          title: "Legal Document Processing Automation",
          description: "We built a specialized LLM for a law firm that could analyze, summarize, and extract key information from thousands of legal documents.",
          results: "Reduced document review time by 73% and improved accuracy of information extraction to 96%."
        },
        {
          title: "Multilingual Customer Support System",
          description: "Developed a custom LLM that could handle customer queries in 14 languages with native-level comprehension and response capability.",
          results: "Expanded market reach by 40% and reduced translation costs by 92% while maintaining high customer satisfaction."
        },
        {
          title: "Medical Research Literature Analysis",
          description: "Created a specialized model for a pharmaceutical company to analyze medical research papers and identify potential drug interactions.",
          results: "Identified 3 previously unknown drug interactions and accelerated research process by approximately 8 months."
        }
      ]}
      faqItems={[
        {
          question: "How much data is needed to train a custom LLM for our business?",
          answer: "While more data generally yields better results, we can create effective custom models with as little as 5,000 relevant examples. For organizations with limited data, we utilize advanced techniques like transfer learning and data augmentation."
        },
        {
          question: "How do you ensure our proprietary data remains secure during model training?",
          answer: "We implement strict data isolation practices, on-premises training options for sensitive industries, and rigorous access controls. All training data is processed in compliance with relevant regulations and can be deleted post-training if required."
        },
        {
          question: "What ongoing maintenance do custom LLMs require?",
          answer: "To maintain peak performance, models typically benefit from quarterly retraining with new data. We offer maintenance packages that include performance monitoring, regular updates, and continuous improvements based on usage patterns."
        }
      ]}
    />
  );
};

export default LLMDevelopment;
