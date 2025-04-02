
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Starter package',
    price: '$99',
    period: '/month',
    features: [
      'Single AI Model Access',
      'Basic Data Analysis',
      'Email Support',
      '5 Users',
      'Basic Reporting'
    ],
    isFeatured: false
  },
  {
    name: 'Standard',
    description: 'Most popular plan',
    price: '$299',
    period: '/month',
    features: [
      'Multiple AI Models',
      'Advanced Data Analysis',
      'Priority Support',
      '15 Users',
      'Advanced Reporting',
      'API Access'
    ],
    isFeatured: true
  },
  {
    name: 'Pro',
    description: 'Advanced AI integration',
    price: '$599',
    period: '/month',
    features: [
      'Full AI Model Suite',
      'Comprehensive Analytics',
      '24/7 Support',
      'Unlimited Users',
      'Custom Reporting',
      'API Access',
      'Custom Integrations'
    ],
    isFeatured: false
  },
  {
    name: 'Custom',
    description: 'Tailored to business needs',
    price: 'Contact us',
    period: '',
    features: [
      'Custom AI Solutions',
      'Enterprise Data Analytics',
      'Dedicated Support Team',
      'Unlimited Everything',
      'Custom Development',
      'White-labeling Options',
      'On-premise Deployment'
    ],
    isFeatured: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Flexible Pricing Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.isFeatured ? 'pricing-card-featured' : ''}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${plan.isFeatured ? 'text-white' : 'text-adrig-black'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.isFeatured ? 'text-white/80' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-3xl font-bold ${plan.isFeatured ? 'text-white' : 'text-adrig-black'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.isFeatured ? 'text-white/80' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className={`flex items-start mb-2 ${plan.isFeatured ? 'text-white' : 'text-gray-700'}`}
                  >
                    <Check 
                      size={16} 
                      className={`mr-2 mt-1 flex-shrink-0 ${plan.isFeatured ? 'text-white' : 'text-adrig-blue'}`} 
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.isFeatured 
                    ? 'bg-white text-adrig-blue hover:bg-gray-100' 
                    : 'bg-adrig-blue text-white hover:bg-blue-700'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
