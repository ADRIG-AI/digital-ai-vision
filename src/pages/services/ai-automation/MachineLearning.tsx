
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Code, BrainCircuit, Cpu, Database, BarChart4, Network } from 'lucide-react';

const MachineLearning = () => {
  const technologies = [
    {
      name: "Deep Learning",
      description: "Advanced neural networks that can process complex patterns and relationships in data",
      icon: BrainCircuit
    },
    {
      name: "Natural Language Processing",
      description: "Algorithms that understand, interpret, and generate human language from text and speech",
      icon: Code
    },
    {
      name: "Computer Vision",
      description: "Systems that can analyze, interpret and make decisions based on visual data",
      icon: Cpu
    },
    {
      name: "Big Data Processing",
      description: "Frameworks for handling and analyzing massive datasets efficiently",
      icon: Database
    },
    {
      name: "Reinforcement Learning",
      description: "Models that learn optimal behaviors through trial-and-error interactions",
      icon: Network
    },
    {
      name: "Time Series Analysis",
      description: "Specialized techniques for analyzing time-ordered data points",
      icon: BarChart4
    }
  ];

  return (
    <SubcategoryTemplate
      title="Machine Learning Solutions"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our custom machine learning solutions transform your raw data into actionable intelligence, automating complex decision-making processes and uncovering hidden patterns in your business data."
      imageUrl="/lovable-uploads/ai-development.jpg"
      keyFeatures={[
        "Custom ML model development tailored to your specific business needs",
        "Deep learning algorithms for complex pattern recognition",
        "Natural language processing for text and speech analysis",
        "Computer vision solutions for image and video processing",
        "Reinforcement learning for autonomous decision-making systems",
        "MLOps infrastructure for continuous deployment and monitoring"
      ]}
      benefits={[
        "Automate complex decision-making processes with high accuracy",
        "Discover hidden patterns and opportunities in your data",
        "Scale your operations without proportionally increasing staff",
        "Enhance customer experiences through personalization",
        "Reduce human error in critical business processes",
        "Gain competitive advantage through AI-driven innovation"
      ]}
      useCases={[
        "Customer segmentation and personalized marketing",
        "Fraud detection and prevention in financial transactions",
        "Quality control in manufacturing through computer vision",
        "Document processing and information extraction",
        "Recommendation systems for e-commerce and content platforms",
        "Sentiment analysis for brand monitoring and customer feedback"
      ]}
    >
      {/* Additional content specific to Machine Learning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Machine Learning Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-adrig-blue/10 flex items-center justify-center mb-6">
                    <tech.icon className="h-6 w-6 text-adrig-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-adrig-blue/5">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Machine Learning Development Process</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-adrig-blue/10 items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Assessment</h3>
                <p className="text-gray-600">We evaluate your existing data sources and identify additional data needs for optimal model performance.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-adrig-blue/10 items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Model Development</h3>
                <p className="text-gray-600">Our data scientists build and train custom models tailored to your specific business objectives.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-adrig-blue/10 items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-gray-600">We integrate the machine learning solution with your existing systems and workflows.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-adrig-blue/10 items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                <p className="text-gray-600">We monitor performance and continuously refine the models as new data becomes available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default MachineLearning;
