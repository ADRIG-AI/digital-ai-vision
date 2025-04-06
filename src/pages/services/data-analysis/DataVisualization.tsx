
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { BarChart2, PieChart, LineChart } from 'lucide-react';

const DataVisualization = () => {
  const visualizationTypes = [
    {
      title: "Interactive Dashboards",
      description: "Dynamic, real-time dashboards that allow users to drill down into data and discover insights",
      icon: BarChart2
    },
    {
      title: "Custom Reports",
      description: "Beautifully designed reports tailored to your specific business needs and branding",
      icon: PieChart
    },
    {
      title: "Data Storytelling",
      description: "Narrative visualizations that help communicate complex data insights in an accessible way",
      icon: LineChart
    }
  ];

  return (
    <SubcategoryTemplate
      title="Data Visualization"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Transform complex data into clear, actionable visual insights with our advanced data visualization solutions, designed to make your data more accessible and meaningful."
      imageUrl="/lovable-uploads/data-visualization.jpg"
      keyFeatures={[
        "Interactive data dashboards for real-time monitoring",
        "Custom visual reports tailored to your brand",
        "Mobile-responsive visualizations for on-the-go insights",
        "Advanced chart types and innovative visualizations",
        "Auto-updating reports connected to live data sources",
        "User-friendly interfaces requiring minimal training"
      ]}
      benefits={[
        "Identify patterns and relationships invisible in raw data",
        "Make faster, more confident decisions with visual clarity",
        "Improve stakeholder communication with compelling visuals",
        "Increase data adoption across your organization",
        "Spot outliers and anomalies instantly",
        "Monitor KPIs more effectively with visual indicators"
      ]}
      useCases={[
        "Executive dashboards for leadership decision-making",
        "Sales performance visualization and forecasting",
        "Marketing campaign effectiveness tracking",
        "Financial reporting and budget visualization",
        "Operations and supply chain monitoring",
        "Customer behavior and interaction analysis"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Visualization Types</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {visualizationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <type.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Visualization Process</h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold mb-3">1</div>
                <h4 className="text-lg font-semibold mb-2">Discovery</h4>
                <p className="text-gray-600">We analyze your data sources, business goals, and user needs</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold mb-3">2</div>
                <h4 className="text-lg font-semibold mb-2">Design</h4>
                <p className="text-gray-600">We create visualization mockups aligned with your brand and objectives</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold mb-3">3</div>
                <h4 className="text-lg font-semibold mb-2">Development</h4>
                <p className="text-gray-600">We build interactive visualizations connected to your data sources</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold mb-3">4</div>
                <h4 className="text-lg font-semibold mb-2">Deployment</h4>
                <p className="text-gray-600">We integrate visualizations into your systems and train your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default DataVisualization;
