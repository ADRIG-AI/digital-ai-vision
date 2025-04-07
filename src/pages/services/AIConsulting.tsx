
import { Lightbulb } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AIConsulting = () => {
  return (
    <ServicePageTemplate
      title="AI Consulting"
      subtitle="Your AI Roadmap to Success"
      description="Not sure how AI can benefit your business? Our AI consulting services help you identify opportunities, implement strategies, and maximize AI adoption. We provide expert guidance at every step, from initial assessment to full implementation of AI solutions."
      icon={Lightbulb}
      imageUrl="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1400"
      howItWorks="Our experts assess your business, recommend AI solutions, and guide you through implementation, ensuring a seamless transition. We analyze your operations, identify high-impact areas for AI integration, and create a strategic roadmap that aligns with your business goals and technical capabilities."
      benefits={[
        { text: "Custom AI Strategy: Tailored AI solutions based on your business needs." },
        { text: "Industry Expertise: Insights from AI specialists with real-world experience." },
        { text: "Cost-Efficient Implementation: Optimize AI adoption without unnecessary expenses." },
        { text: "Future-Proof Your Business: Stay ahead with AI-driven innovation." },
        { text: "Comprehensive Training: Empower your team with the skills to leverage AI effectively." }
      ]}
      caseStudies={[
        {
          title: "Manufacturing Efficiency Transformation",
          description: "A leading manufacturer reduced operational costs by 27% through strategic AI implementation guided by our consulting team.",
          results: "27% cost reduction and 35% increase in production efficiency within 6 months."
        },
        {
          title: "Retail Customer Experience Overhaul",
          description: "We helped a retail chain develop an AI roadmap that transformed their customer experience and personalization capabilities.",
          results: "42% improvement in customer satisfaction scores and 18% increase in repeat purchases."
        },
        {
          title: "Healthcare Process Optimization",
          description: "Our consultants guided a healthcare provider through implementing AI for patient scheduling and resource allocation.",
          results: "Reduced wait times by 65% and improved resource utilization by 40%."
        }
      ]}
      faqItems={[
        {
          question: "What industries do your AI consultants specialize in?",
          answer: "Our team includes specialists in healthcare, finance, retail, manufacturing, logistics, and technology sectors, each with a minimum of 8 years experience in their respective fields."
        },
        {
          question: "How long does a typical AI consulting engagement last?",
          answer: "Initial assessments typically take 2-4 weeks, while complete roadmap development and implementation guidance can range from 3-6 months depending on the scope and complexity of your business needs."
        },
        {
          question: "Will your consultants help with AI vendor selection?",
          answer: "Yes, we provide vendor-neutral recommendations based on your specific requirements and help manage the vendor selection process to ensure you get the best solution for your unique needs."
        }
      ]}
    />
  );
};

export default AIConsulting;
