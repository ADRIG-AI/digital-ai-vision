
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, XCircle } from 'lucide-react';

const AIIntegration = () => {
  const integrationPlatforms = [
    { 
      platform: "CRM Systems",
      integrations: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Zoho CRM"],
      capabilities: ["Customer behavior prediction", "Lead scoring automation", "Sales forecasting", "Conversation analysis"]
    },
    {
      platform: "ERP Systems",
      integrations: ["SAP", "Oracle", "Microsoft Business Central", "Odoo"],
      capabilities: ["Demand forecasting", "Inventory optimization", "Process automation", "Anomaly detection"]
    },
    {
      platform: "Marketing Platforms",
      integrations: ["Adobe Marketing Cloud", "Marketo", "Mailchimp", "HubSpot Marketing"],
      capabilities: ["Campaign optimization", "Content personalization", "Customer segmentation", "Attribution modeling"]
    },
    {
      platform: "Business Intelligence",
      integrations: ["Tableau", "Power BI", "Looker", "Qlik"],
      capabilities: ["Predictive analytics", "Natural language querying", "Automated insights", "Anomaly detection"]
    }
  ];

  const comparisonData = [
    {
      feature: "Legacy System Compatibility",
      traditional: false,
      ourApproach: true,
      details: "Our specialized middleware enables AI integration with systems dating back to the 1990s."
    },
    {
      feature: "Implementation Timeframe",
      traditional: false,
      ourApproach: true,
      details: "Average implementation in 6-8 weeks vs. industry standard of 3-6 months."
    },
    {
      feature: "Customized Algorithms",
      traditional: false,
      ourApproach: true,
      details: "Custom-built algorithms tailored to your specific business processes and industry."
    },
    {
      feature: "Continuous Improvement",
      traditional: false,
      ourApproach: true,
      details: "AI models that learn and improve over time based on your business data and feedback."
    },
    {
      feature: "Cross-Platform Integration",
      traditional: false,
      ourApproach: true,
      details: "Seamless integration across multiple platforms and departments for unified intelligence."
    }
  ];

  return (
    <SubcategoryTemplate
      title="AI Integration"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our AI integration services seamlessly incorporate artificial intelligence capabilities into your existing systems and workflows, minimizing disruption while maximizing the transformative power of AI."
      imageUrl="/lovable-uploads/workflow-automation.jpg"
      keyFeatures={[
        "Seamless integration with existing business systems and software",
        "API development for AI model deployment and access",
        "Custom middleware solutions for legacy system compatibility",
        "Scalable architecture design for future AI expansion",
        "Cross-platform AI capabilities for web, mobile, and desktop applications",
        "Comprehensive testing and validation frameworks"
      ]}
      benefits={[
        "Transform existing systems without complete rebuilds",
        "Preserve investments in legacy technology while adding AI capabilities",
        "Gradual implementation approach to minimize business disruption",
        "Unified data ecosystem connecting all business applications",
        "Improved efficiency through elimination of manual data transfers",
        "Future-proof architecture ready for emerging AI technologies"
      ]}
      useCases={[
        "CRM enhancement with customer insights and predictive analytics",
        "ERP systems augmented with intelligent automation capabilities",
        "Supply chain optimization through integrated AI decision-making",
        "Customer service platforms with integrated chatbots and AI assistants",
        "HR systems with AI-powered recruitment and employee analytics",
        "Marketing platforms with automated content generation and optimization"
      ]}
    >
      {/* Additional content for AI Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Integration Capabilities</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-lg">Platform</TableHead>
                    <TableHead className="font-bold text-lg">Key Integrations</TableHead>
                    <TableHead className="font-bold text-lg">AI Capabilities</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {integrationPlatforms.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.platform}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside">
                          {item.integrations.map((integration, i) => (
                            <li key={i}>{integration}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside">
                          {item.capabilities.map((capability, i) => (
                            <li key={i}>{capability}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach vs. Traditional Integration</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            We've reimagined how AI can be integrated into existing systems, creating a more efficient and effective approach than traditional methods.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Feature</TableHead>
                  <TableHead className="font-bold text-center">Traditional Approach</TableHead>
                  <TableHead className="font-bold text-center">Our Approach</TableHead>
                  <TableHead className="font-bold">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      {item.traditional ? 
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline" /> : 
                        <XCircle className="h-5 w-5 text-red-500 inline" />
                      }
                    </TableCell>
                    <TableCell className="text-center">
                      {item.ourApproach ? 
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline" /> : 
                        <XCircle className="h-5 w-5 text-red-500 inline" />
                      }
                    </TableCell>
                    <TableCell>{item.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default AIIntegration;
