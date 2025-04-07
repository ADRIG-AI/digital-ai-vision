
import React from 'react';
import { LucideIcon, Check, ArrowRight, Users, ShieldCheck, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

interface Benefit {
  text: string;
}

interface CaseStudy {
  title: string;
  description: string;
  results: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  howItWorksImage?: string;
  keyFeaturesImage?: string;
  howItWorks: string;
  benefits: Benefit[];
  caseStudies?: CaseStudy[];
  faqItems?: FAQItem[];
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  imageUrl,
  howItWorksImage,
  keyFeaturesImage,
  howItWorks,
  benefits,
  caseStudies,
  faqItems,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Compact hero section */}
        <section className="bg-adrig-blue text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-full bg-white/10 text-white mb-3">
              <Icon size={32} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">{title}</h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">{subtitle}</p>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700 mb-6">{description}</p>
                <Link to="/contact">
                  <Button className="bg-adrig-blue text-white hover:bg-blue-900 transition-colors">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{maxHeight: "350px"}}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 order-2 md:order-1">
                <img 
                  src={howItWorksImage || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1400"} 
                  alt="How it works" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{maxHeight: "350px"}}
                />
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-700 mb-6">{howItWorks}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-adrig-blue/10 p-2 rounded-full">
                      <ShieldCheck size={18} className="text-adrig-blue" />
                    </div>
                    <p className="text-gray-700">Secure implementation with enterprise-grade standards</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-adrig-blue/10 p-2 rounded-full">
                      <BarChart size={18} className="text-adrig-blue" />
                    </div>
                    <p className="text-gray-700">Measurable results with clear performance metrics</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-adrig-blue/10 p-2 rounded-full">
                      <Users size={18} className="text-adrig-blue" />
                    </div>
                    <p className="text-gray-700">Team-focused approach ensuring smooth integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={20} className="mr-3 mt-1 text-adrig-blue flex-shrink-0" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact">
                  <Button variant="outline" className="mt-6 border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src={keyFeaturesImage || "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1400"} 
                  alt="Key Benefits" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{maxHeight: "350px"}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        {caseStudies && caseStudies.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Success Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                      <div className="bg-adrig-blue/5 p-4 rounded-md border-l-4 border-adrig-blue">
                        <p className="text-sm font-medium text-gray-700">Results:</p>
                        <p className="text-adrig-blue font-medium">{study.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Our Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-adrig-blue">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                  <p className="text-gray-600">We begin with a thorough understanding of your business needs and objectives.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-adrig-blue">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-600">Our experts develop a tailored solution that aligns with your requirements.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-adrig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-adrig-blue">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-gray-600">We continuously refine and improve your solution based on results and feedback.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqItems && faqItems.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}
        
        <section className="py-12 bg-adrig-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
              Contact our team today to explore how our {title} services can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors px-6 py-2 text-base font-semibold">
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

export default ServicePageTemplate;
