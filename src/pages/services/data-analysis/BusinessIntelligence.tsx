
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BarChart, Code, LineChart, PieChart } from 'lucide-react';

const BusinessIntelligence = () => {
  const tools = [
    {
      name: "Tableau Integration",
      description: "Connect your data sources directly to Tableau for interactive visualizations",
      icon: PieChart
    },
    {
      name: "Power BI Solutions",
      description: "Custom dashboards and reports with Microsoft's powerful BI suite",
      icon: BarChart
    },
    {
      name: "Custom Analytics",
      description: "Tailored analytics solutions built specifically for your business needs",
      icon: LineChart
    },
    {
      name: "Embedded Analytics",
      description: "Integrate powerful analytics directly into your existing applications",
      icon: Code
    }
  ];

  return (
    <SubcategoryTemplate
      title="Business Intelligence"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Our Business Intelligence solutions transform your raw data into actionable insights, helping you understand your business better and make smarter decisions faster."
      imageUrl="/lovable-uploads/data-analytics.jpg"
      keyFeatures={[
        "Interactive dashboards for real-time monitoring of KPIs",
        "Automated reporting to save time and reduce manual errors",
        "Multi-source data integration for a complete business view",
        "Customized analytics for specific business questions",
        "Self-service BI tools for team empowerment",
        "Scalable solutions that grow with your business"
      ]}
      benefits={[
        "Identify trends and patterns that would otherwise remain hidden",
        "Improve decision-making with data-backed insights",
        "Anticipate market changes and adapt strategies proactively",
        "Optimize operations based on performance analytics",
        "Increase revenue through data-driven opportunities",
        "Reduce costs by identifying inefficiencies"
      ]}
      useCases={[
        "Sales performance analysis and forecasting",
        "Customer segmentation and behavior tracking",
        "Supply chain optimization and inventory management",
        "Marketing campaign effectiveness measurement",
        "Financial planning and budgeting",
        "Operational efficiency monitoring"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Business Intelligence Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <tool.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">
                  How quickly can we implement a BI solution?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Implementation timelines vary based on complexity, but most of our BI solutions can be deployed within 4-8 weeks. We follow an agile approach, delivering value incrementally so you can start seeing benefits early in the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">
                  What data sources can you integrate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our solutions can integrate data from virtually any source including SQL databases, ERP systems, CRM platforms, spreadsheets, cloud storage, social media, and IoT devices. We have pre-built connectors for popular platforms and can develop custom connectors for proprietary systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">
                  Do we need specialized staff to maintain the BI system?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No, our BI solutions are designed with user-friendliness in mind. We provide comprehensive training and documentation, and our interfaces are intuitive enough for business users. For more complex maintenance needs, we offer ongoing support packages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default BusinessIntelligence;
