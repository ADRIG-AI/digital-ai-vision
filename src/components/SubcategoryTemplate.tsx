
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

interface SubcategoryTemplateProps {
  title: string;
  parentService: string;
  parentServicePath: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  imageUrl?: string;
  useCases?: string[];
}

const SubcategoryTemplate: React.FC<SubcategoryTemplateProps> = ({
  title,
  parentService,
  parentServicePath,
  description,
  keyFeatures,
  benefits,
  imageUrl,
  useCases = [],
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="bg-adrig-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12">
                <div className="mb-2">
                  <Link to={parentServicePath} className="text-white/80 hover:text-white text-sm">
                    {parentService}
                  </Link>
                  <span className="mx-2 text-white/50">/</span>
                  <span className="text-white text-sm">{title}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h1>
                <p className="text-lg text-white/90 mb-6">{description}</p>
                <Link to="/contact">
                  <Button className="bg-white text-adrig-blue hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src={imageUrl || "/lovable-uploads/corporate-dashboard.jpg"} 
                  alt={title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-adrig-blue/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-adrig-blue" />
                  </div>
                  <div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-adrig-blue font-bold text-xl mb-2">0{index + 1}</div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases (if available) */}
        {useCases.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="border border-gray-200 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="mr-4 bg-adrig-blue/10 p-2 rounded-full">
                        <ArrowRight className="h-5 w-5 text-adrig-blue" />
                      </div>
                      <p className="text-gray-700">{useCase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA */}
        <section className="py-16 bg-adrig-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today to learn more about our {title} solutions and how they can benefit your business.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-adrig-blue hover:bg-gray-100 text-lg px-8 py-3">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubcategoryTemplate;
