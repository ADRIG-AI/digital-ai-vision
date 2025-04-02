
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
    />
  );
};

export default DataAnalysis;
