
import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Benefit {
  text: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  howItWorks: string;
  benefits: Benefit[];
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  imageUrl,
  howItWorks,
  benefits,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="bg-adrig-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-6 rounded-full bg-white/10 text-white mb-6">
              <Icon size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">{subtitle}</p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
                <p className="text-gray-700 mb-8 text-lg">{description}</p>
                <Button className="cta-button">
                  Request a Consultation
                </Button>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-adrig-blue/5 rounded-xl p-8 h-full flex items-center justify-center">
                  <Icon size={200} className="text-adrig-blue/30" />
                </div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <p className="text-gray-700 mb-6 text-lg">{howItWorks}</p>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="mr-2 mt-1 text-adrig-blue flex-shrink-0" />
                        <span className="text-gray-700">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">We begin with a thorough understanding of your business needs and objectives.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Our experts develop a tailored solution that aligns with your requirements.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-adrig-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                <p className="text-gray-600">We continuously refine and improve your solution based on results and feedback.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-adrig-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Contact our team today to explore how our {title} services can help you achieve your business goals.
            </p>
            <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors px-8 py-6 text-lg font-semibold">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
