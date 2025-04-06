
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Database, Server, Cloud, Workflow } from 'lucide-react';

const BigData = () => {
  const technologies = [
    {
      name: "Hadoop Ecosystem",
      description: "Distributed storage and processing of large data sets across clusters of computers",
      icon: Database
    },
    {
      name: "Apache Spark",
      description: "Unified analytics engine for large-scale data processing with speed and efficiency",
      icon: Server
    },
    {
      name: "Cloud Data Lakes",
      description: "Scalable storage repositories that hold vast amounts of raw data in native format",
      icon: Cloud
    },
    {
      name: "Streaming Analytics",
      description: "Real-time processing of data streams for immediate insights and actions",
      icon: Workflow
    }
  ];

  return (
    <SubcategoryTemplate
      title="Big Data Processing"
      parentService="Data Analysis"
      parentServicePath="/services/data-analysis"
      description="Our Big Data Processing solutions handle massive volumes of structured and unstructured data, enabling you to extract valuable insights from complex datasets at scale."
      imageUrl="/lovable-uploads/big-data.jpg"
      keyFeatures={[
        "Scalable data processing architectures for petabyte-level datasets",
        "Real-time and batch processing capabilities",
        "Data lake implementation and management",
        "ETL (Extract, Transform, Load) pipeline development",
        "Data quality and governance frameworks",
        "High-performance distributed computing"
      ]}
      benefits={[
        "Process data volumes beyond traditional database capabilities",
        "Uncover hidden patterns in complex, multi-source datasets",
        "Reduce processing time from days to minutes",
        "Scale seamlessly as your data grows",
        "Enable advanced analytics on complete datasets, not samples",
        "Future-proof your data infrastructure"
      ]}
      useCases={[
        "Customer 360° view creation across disparate data sources",
        "IoT data processing and analysis at scale",
        "Real-time fraud detection in financial transactions",
        "Predictive maintenance for industrial equipment",
        "Recommendation engines for e-commerce and content platforms",
        "Supply chain optimization through comprehensive data analysis"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Big Data Technologies We Utilize</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mr-4">
                  <tech.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Big Data Process</h3>
            
            <div className="relative">
              {/* Process timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-adrig-blue/20 transform -translate-x-1/2"></div>
              
              <div className="mb-12 md:mb-0 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Data Assessment</h4>
                      <p className="text-gray-600">We audit your existing data sources, volumes, velocity, and variety to determine the right big data architecture for your needs.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="hidden md:block w-4 h-4 rounded-full bg-adrig-blue absolute left-1/2 top-5 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 md:mb-0 relative md:mt-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:order-2">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Architecture Design</h4>
                      <p className="text-gray-600">We design a tailored big data solution that addresses your specific needs, including storage, processing, and analytics components.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:order-1">
                    <div className="hidden md:block w-4 h-4 rounded-full bg-adrig-blue absolute left-1/2 top-5 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 md:mb-0 relative md:mt-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Implementation</h4>
                      <p className="text-gray-600">We build and deploy your big data infrastructure, set up data pipelines, and integrate with existing systems.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="hidden md:block w-4 h-4 rounded-full bg-adrig-blue absolute left-1/2 top-5 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative md:mt-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:order-2">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Analytics Integration</h4>
                      <p className="text-gray-600">We connect analytics tools to your big data platform, enabling you to derive insights and create value from your data at scale.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:order-1">
                    <div className="hidden md:block w-4 h-4 rounded-full bg-adrig-blue absolute left-1/2 top-5 transform -translate-x-1/2"></div>
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

export default BigData;
