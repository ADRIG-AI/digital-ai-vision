
import { Database } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataAnalysis = () => {
  return (
    <ServicePageTemplate
      title="Data Analysis"
      subtitle="Make Smarter Decisions with Real-Time Insights"
      description="Data is the new currency, but raw data is useless without actionable insights. Our AI-powered data analytics transforms vast amounts of information into meaningful reports and predictions, enabling your business to make informed decisions faster."
      icon={Database}
      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
      howItWorks="Our system collects, processes, and visualizes data from multiple sources, helping businesses track trends, analyze risks, and improve decision-making. We implement sophisticated algorithms that identify patterns and correlations human analysts might miss, giving you a competitive edge."
      benefits={[
        { text: "Stay Ahead: Get real-time insights to predict market trends." },
        { text: "Accurate Data: Obtain the most up-to-date, precise analytics." },
        { text: "Data-Driven Growth: Make informed decisions backed by AI." },
        { text: "Custom Reports: Tailored dashboards that match your business needs." },
        { text: "Competitive Intelligence: Understand your market position with clarity." }
      ]}
      caseStudies={[
        {
          title: "Retail Chain Inventory Optimization",
          description: "A national retail chain used our data analysis platform to optimize their inventory across 200+ locations, reducing overstock and stockouts.",
          results: "Reduced inventory costs by 18% while maintaining a 99.2% in-stock rate for high-demand items."
        },
        {
          title: "Marketing Campaign Performance Analysis",
          description: "We helped a digital marketing agency implement advanced analytics to measure and optimize multi-channel campaign performance in real-time.",
          results: "Improved ROI by 32% across digital campaigns and identified underperforming channels within hours instead of weeks."
        },
        {
          title: "Supply Chain Risk Assessment",
          description: "Our predictive analytics helped a manufacturer identify potential supply chain disruptions before they impacted production.",
          results: "Prevented an estimated $2.3M in production delays through early risk detection and mitigation."
        }
      ]}
      faqItems={[
        {
          question: "How do you handle data security and compliance?",
          answer: "We maintain strict data security protocols compliant with GDPR, CCPA, and industry-specific regulations. All data is encrypted both in transit and at rest, with role-based access controls and comprehensive audit trails."
        },
        {
          question: "What types of data sources can you integrate with?",
          answer: "Our platform connects with virtually any data source including databases, APIs, IoT devices, social media, CRM systems, ERP software, and can ingest structured, semi-structured, and unstructured data formats."
        },
        {
          question: "How customizable are your analytics dashboards?",
          answer: "Completely customizable to your specific KPIs and business needs. We work with your team to design dashboards that highlight your most critical metrics and can be adjusted as your business priorities evolve."
        }
      ]}
    />
  );
};

export default DataAnalysis;
