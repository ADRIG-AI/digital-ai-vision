
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Workflow, ArrowUpRight, TrendingUp, Clock } from 'lucide-react';

const ProcessOptimization = () => {
  const optimizationAreas = [
    {
      title: "Identify Bottlenecks",
      description: "We use AI to analyze your workflows and identify inefficiencies that slow down operations",
      icon: Clock
    },
    {
      title: "Streamline Operations",
      description: "Redesign processes to eliminate redundancy and maximize resource utilization",
      icon: Workflow
    },
    {
      title: "Automation Implementation",
      description: "Replace manual steps with intelligent automation to speed up execution",
      icon: ArrowUpRight
    },
    {
      title: "Continuous Improvement",
      description: "Monitor and refine processes over time based on performance metrics",
      icon: TrendingUp
    }
  ];

  return (
    <SubcategoryTemplate
      title="Process Optimization"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Our Process Optimization solutions identify inefficiencies in your operations and implement intelligent workflows that save time, reduce costs, and improve quality."
      imageUrl="/lovable-uploads/workflow-automation.jpg"
      keyFeatures={[
        "End-to-end process mapping and analysis",
        "AI-powered bottleneck identification",
        "Workflow redesign and optimization",
        "Intelligent automation implementation",
        "Process performance monitoring and analytics",
        "Continuous improvement frameworks"
      ]}
      benefits={[
        "Reduce operational costs by eliminating inefficiencies",
        "Speed up turnaround times through streamlined workflows",
        "Improve quality by reducing human error",
        "Enhance scalability with optimized processes",
        "Increase customer satisfaction through faster service delivery",
        "Free up staff for higher-value activities"
      ]}
      useCases={[
        "Customer onboarding process optimization",
        "Supply chain and logistics workflow improvement",
        "Financial processes optimization (AP/AR, reporting)",
        "HR processes streamlining (recruiting, onboarding)",
        "Document management workflow optimization",
        "Service delivery process enhancement"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process Optimization Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">The Process Optimization Journey</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-adrig-blue/20 ml-6"></div>
              
              <div className="mb-12 relative">
                <div className="flex">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg z-10">1</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold mb-2">Assessment & Discovery</h4>
                    <p className="text-gray-600 mb-3">We analyze your current processes, interview stakeholders, and collect data to understand your operations in depth.</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Outcomes:</h5>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Comprehensive process maps</li>
                        <li>Bottleneck identification</li>
                        <li>Efficiency metrics baseline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 relative">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg z-10">2</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold mb-2">Strategic Design</h4>
                    <p className="text-gray-600 mb-3">We redesign workflows to eliminate inefficiencies, incorporate automation opportunities, and align with business goals.</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Outcomes:</h5>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Optimized process designs</li>
                        <li>Automation blueprint</li>
                        <li>Implementation roadmap</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 relative">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg z-10">3</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold mb-2">Implementation</h4>
                    <p className="text-gray-600 mb-3">We deploy the new processes, integrate automation tools, and train your team on the optimized workflows.</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Outcomes:</h5>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Deployed workflow solutions</li>
                        <li>Integrated automation tools</li>
                        <li>Comprehensive team training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-adrig-blue text-white flex items-center justify-center font-bold text-lg z-10">4</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold mb-2">Monitoring & Refinement</h4>
                    <p className="text-gray-600 mb-3">We continuously monitor performance metrics, gather feedback, and make iterative improvements to achieve optimal results.</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Outcomes:</h5>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Performance dashboards</li>
                        <li>Continuous improvement cycles</li>
                        <li>Ongoing optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default ProcessOptimization;
