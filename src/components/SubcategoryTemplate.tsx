
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, CheckCircle, UserCheck, LineChart, Lightbulb } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface SubcategoryTemplateProps {
  title: string;
  parentService: string;
  parentServicePath: string;
  description: string;
  imageUrl: string;
  keyFeatures: string[];
  benefits: string[];
  useCases: string[];
  children?: React.ReactNode; // Added to allow additional content
}

const SubcategoryTemplate: React.FC<SubcategoryTemplateProps> = ({
  title,
  parentService,
  parentServicePath,
  description,
  imageUrl,
  keyFeatures,
  benefits,
  useCases,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-adrig-blue">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to="/services" className="hover:text-adrig-blue">Services</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to={parentServicePath} className="hover:text-adrig-blue">{parentService}</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-adrig-blue font-medium">{title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-700 mb-8">{description}</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-adrig-blue hover:bg-blue-800">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="rounded-lg shadow-lg w-full max-h-[400px] object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-adrig-blue/10 rounded-full">
                      <Check className="h-6 w-6 text-adrig-blue" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">How Your Business Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 p-2 bg-adrig-blue/10 rounded-full shrink-0">
                    <span className="flex items-center justify-center h-6 w-6 text-adrig-blue font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases - Redesigned Section */}
        <section className="bg-adrig-blue py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      {index % 3 === 0 && (
                        <div className="mr-4 p-2 bg-white/10 rounded-full">
                          <UserCheck className="h-6 w-6 text-white" />
                        </div>
                      )}
                      {index % 3 === 1 && (
                        <div className="mr-4 p-2 bg-white/10 rounded-full">
                          <LineChart className="h-6 w-6 text-white" />
                        </div>
                      )}
                      {index % 3 === 2 && (
                        <div className="mr-4 p-2 bg-white/10 rounded-full">
                          <Lightbulb className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Case Study {index + 1}</h3>
                        <p className="text-white/90 leading-relaxed">{useCase}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                        <span className="text-white font-medium">Verified Results</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-adrig-blue">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Render additional custom content if provided */}
        {children}

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's discuss how our {title.toLowerCase()} solutions can help your business 
              gain a competitive edge and drive growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-adrig-blue hover:bg-blue-800">
                Contact Our Team
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
