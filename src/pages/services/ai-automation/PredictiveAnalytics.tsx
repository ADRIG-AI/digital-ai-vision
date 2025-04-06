
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BarChart, LineChart, PieChart, TrendingUp, Activity, BarChart2 } from 'lucide-react';

const PredictiveAnalytics = () => {
  const faqs = [
    {
      question: "How quickly can we see results from implementing predictive analytics?",
      answer: "Most clients begin seeing initial insights within 4-6 weeks of implementation. However, the full value of predictive analytics develops over time as the system collects more data and refines its models. Our approach includes regular check-ins and model refinements to ensure you're getting actionable insights as quickly as possible."
    },
    {
      question: "Do we need to have a data science team to use your predictive analytics solutions?",
      answer: "No, you don't need an in-house data science team. Our solutions are designed to be accessible to business users through intuitive dashboards and reports. We provide comprehensive training for your team and ongoing support. For clients who want to develop internal capabilities, we also offer knowledge transfer and training programs."
    },
    {
      question: "What kind of data do we need to have available for predictive analytics?",
      answer: "The specific data requirements depend on your goals, but generally, we can work with transaction data, customer behavior data, operational metrics, and external market data. Our team will conduct a data assessment during the initial phase to identify what data you already have that can be leveraged and what additional data might be valuable to collect."
    },
    {
      question: "How accurate are the predictions from your analytics models?",
      answer: "Our models typically achieve 80-95% accuracy depending on the use case and data quality. We continuously monitor model performance and provide transparency about confidence levels for all predictions. As more data is collected and the models are refined, accuracy tends to improve over time."
    }
  ];

  const methodologies = [
    {
      name: "Time Series Forecasting",
      description: "Analyzing historical data points to predict future values for sales, demand, and market trends",
      icon: TrendingUp
    },
    {
      name: "Regression Analysis",
      description: "Identifying relationships between variables to understand factors influencing business outcomes",
      icon: LineChart
    },
    {
      name: "Classification Models",
      description: "Categorizing data points to predict customer behaviors and segment markets effectively",
      icon: PieChart
    },
    {
      name: "Anomaly Detection",
      description: "Identifying unusual patterns that could indicate opportunities or risks requiring attention",
      icon: Activity
    },
    {
      name: "Ensemble Methods",
      description: "Combining multiple predictive models to improve accuracy and reliability of forecasts",
      icon: BarChart2
    }
  ];

  return (
    <SubcategoryTemplate
      title="Predictive Analytics"
      parentService="AI Automation"
      parentServicePath="/services/ai-automation"
      description="Our predictive analytics solutions leverage machine learning to forecast trends, identify opportunities, and mitigate risks before they occur, giving your business a competitive edge."
      imageUrl="/lovable-uploads/data-analytics.jpg"
      keyFeatures={[
        "Advanced forecasting models using machine learning algorithms",
        "Real-time data processing and analysis capabilities",
        "Custom dashboards for easy visualization and interpretation",
        "Seamless integration with your existing business intelligence systems",
        "Automated alerts and recommendations based on predictive insights",
        "Continuous learning and model improvement over time"
      ]}
      benefits={[
        "Anticipate market changes and stay ahead of competitors",
        "Optimize inventory management and reduce operational costs",
        "Identify potential risks before they impact your business",
        "Make data-driven decisions with confidence",
        "Improve customer retention through predictive customer behavior analysis",
        "Maximize ROI on marketing and sales initiatives"
      ]}
      useCases={[
        "Sales forecasting and pipeline optimization",
        "Customer churn prediction and prevention",
        "Inventory management and demand forecasting",
        "Predictive maintenance for industrial equipment",
        "Risk assessment and management in financial services",
        "Healthcare outcome predictions and resource allocation"
      ]}
    >
      {/* Additional content specific to Predictive Analytics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Predictive Analytics Methodology</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methodologies.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <method.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
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
    </SubcategoryTemplate>
  );
};

export default PredictiveAnalytics;
