
import { Settings, Link2, TrendingUp, Award } from 'lucide-react';

const benefits = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored to business needs.',
    icon: Settings
  },
  {
    title: 'Seamless Integration',
    description: 'Works with existing workflows.',
    icon: Link2
  },
  {
    title: 'Scalable Growth',
    description: 'Technology that grows with you.',
    icon: TrendingUp
  },
  {
    title: 'Expert Guidance',
    description: 'Industry-leading AI expertise.',
    icon: Award
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-adrig-gray" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card group"
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-white shadow-md text-adrig-blue transition-all duration-300 group-hover:animate-bounce-light">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
