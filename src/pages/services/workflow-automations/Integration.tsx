
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Zap, Link, GitBranch, Server } from 'lucide-react';

const Integration = () => {
  const integrationTypes = [
    {
      title: "API Integrations",
      description: "Connect applications through their APIs for seamless data exchange and functionality sharing",
      icon: GitBranch
    },
    {
      title: "Middleware Solutions",
      description: "Deploy middleware to facilitate communication between disparate systems",
      icon: Link
    },
    {
      title: "Data Pipeline Integration",
      description: "Create automated data flows between systems for real-time information sharing",
      icon: Server
    },
    {
      title: "Webhook Implementations",
      description: "Set up webhook listeners and triggers to automate cross-application workflows",
      icon: Zap
    }
  ];

  const commonIntegrations = [
    "CRM & Marketing Automation",
    "ERP & Accounting Systems",
    "E-commerce & Inventory Management",
    "Project Management & Communication Tools",
    "Customer Support & Ticketing Systems",
    "HR & Payroll Applications",
    "Custom & Legacy Software"
  ];

  return (
    <SubcategoryTemplate
      title="Integration Services"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Our Integration Services connect your disparate business systems, applications, and data sources to create a unified ecosystem that eliminates silos and automates cross-platform workflows."
      imageUrl="/lovable-uploads/system-integration.jpg"
      keyFeatures={[
        "API integration development and management",
        "Custom middleware solutions for legacy systems",
        "Data transformation and normalization",
        "Webhook implementation and management",
        "Integration monitoring and error handling",
        "Single sign-on (SSO) implementation"
      ]}
      benefits={[
        "Eliminate manual data transfers between systems",
        "Create seamless workflows across multiple applications",
        "Ensure data consistency across your business ecosystem",
        "Reduce operational inefficiencies and human error",
        "Gain a complete view of your business operations",
        "Enable real-time data sharing for faster decision making"
      ]}
      useCases={[
        "CRM and marketing automation integration",
        "E-commerce and inventory management connection",
        "Financial system and accounting software integration",
        "HR and payroll systems synchronization",
        "Customer support and ticketing system integration",
        "Custom and legacy system integration"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Types of Integrations We Provide</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {integrationTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <type.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 bg-adrig-blue text-white">
              <h3 className="text-2xl font-bold mb-4">Common Integration Combinations</h3>
              <p>We've helped businesses across industries connect these systems to streamline their operations:</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {commonIntegrations.map((integration, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Link className="text-adrig-blue mr-3" size={20} />
                    <span className="font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Integration Process</h3>
            
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                <h4 className="font-semibold mb-2">Discovery</h4>
                <p className="text-sm text-gray-600">Assess systems, requirements, and integration points</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                <h4 className="font-semibold mb-2">Design</h4>
                <p className="text-sm text-gray-600">Plan integration architecture and data flows</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-gray-600">Build and test integration connections</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                <h4 className="font-semibold mb-2">Deployment</h4>
                <p className="text-sm text-gray-600">Implement integration in production environment</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">5</div>
                <h4 className="font-semibold mb-2">Monitoring</h4>
                <p className="text-sm text-gray-600">Ensure ongoing performance and maintenance</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Integration Success Metrics</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg border-adrig-blue/20">
                  <div className="text-3xl font-bold text-adrig-blue mb-2">98%</div>
                  <p className="text-gray-600">Data synchronization accuracy</p>
                </div>
                
                <div className="p-4 border rounded-lg border-adrig-blue/20">
                  <div className="text-3xl font-bold text-adrig-blue mb-2">85%</div>
                  <p className="text-gray-600">Reduction in manual data entry</p>
                </div>
                
                <div className="p-4 border rounded-lg border-adrig-blue/20">
                  <div className="text-3xl font-bold text-adrig-blue mb-2">99.9%</div>
                  <p className="text-gray-600">Integration uptime reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default Integration;
