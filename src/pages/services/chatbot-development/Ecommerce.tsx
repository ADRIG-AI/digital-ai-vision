
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { ShoppingCart, Search, Tag, ThumbsUp, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const features = [
    {
      title: "Product Discovery Assistant",
      description: "Help customers find exactly what they're looking for with AI-powered product recommendations",
      icon: Search
    },
    {
      title: "Personalized Suggestions",
      description: "Recommend products based on browsing history, preferences, and purchase behavior",
      icon: ThumbsUp
    },
    {
      title: "Special Offers Bot",
      description: "Deliver timely promotions and discounts to increase conversion rates",
      icon: Percent
    },
    {
      title: "Post-Purchase Support",
      description: "Provide order tracking, delivery updates, and handle return requests automatically",
      icon: ShoppingCart
    }
  ];

  return (
    <SubcategoryTemplate
      title="E-commerce Assistants"
      parentService="Chatbot Development"
      parentServicePath="/services/chatbot-development"
      description="Our E-commerce Assistant chatbots help online retailers increase sales, improve customer experience, and streamline shopping processes through intelligent, conversational interactions."
      imageUrl="/lovable-uploads/ecommerce.jpg"
      keyFeatures={[
        "AI-powered product recommendations based on customer preferences",
        "Natural language search functionality for product discovery",
        "Abandoned cart recovery through timely reminders",
        "Personalized shopping experiences for each customer",
        "Seamless order placement and payment processing",
        "Post-purchase support for tracking and customer satisfaction"
      ]}
      benefits={[
        "Increase conversion rates by 25-35% with personalized assistance",
        "Reduce cart abandonment through timely engagement",
        "Boost average order value with intelligent cross-selling",
        "Enhance customer loyalty through personalized experiences",
        "Collect valuable customer insights and preferences",
        "Scale customer support without increasing headcount"
      ]}
      useCases={[
        "Guided product discovery and recommendations",
        "Automated answers to product questions",
        "Inventory and availability checks",
        "Personalized promotions and discounts",
        "Order tracking and delivery updates",
        "Streamlined returns and exchanges"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">E-commerce Chatbot Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mr-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-adrig-blue text-white rounded-lg shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Conversion Rate Case Study</h3>
                <p className="mb-6">One of our e-commerce clients experienced a 32% increase in conversion rates after implementing our AI shopping assistant. The bot helped customers find products faster, provided personalized recommendations, and recovered abandoned carts through timely engagement.</p>
                <div className="flex justify-center md:justify-start">
                  <Link to="/contact">
                    <Button className="bg-white text-adrig-blue hover:bg-gray-100">
                      Request Case Study
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold">+32%</div>
                <div className="text-xl font-semibold mt-2">Conversion Rate</div>
                <div className="mt-4 flex items-center">
                  <div className="h-4 w-4 rounded-full bg-white mr-2"></div>
                  <div className="text-sm">Before Implementation</div>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full my-2">
                  <div className="h-full bg-white rounded-full w-[68%]"></div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="h-4 w-4 rounded-full bg-white mr-2"></div>
                  <div className="text-sm">After Implementation</div>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full my-2">
                  <div className="h-full bg-white rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Our E-commerce Chatbot Implementation Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-adrig-blue/10 text-adrig-blue flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Analysis & Strategy</h4>
                <p className="text-gray-600">We analyze your product catalog, customer journey, and business goals to create a tailored chatbot strategy.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-adrig-blue/10 text-adrig-blue flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Design & Development</h4>
                <p className="text-gray-600">We design conversation flows, integrate with your e-commerce platform, and train the AI on your products.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-adrig-blue/10 text-adrig-blue flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Launch & Optimization</h4>
                <p className="text-gray-600">We deploy your chatbot, monitor performance, and continuously improve based on customer interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default Ecommerce;
