
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content/landingpage/ServiceSection.json');
        if (!response.ok) {
          throw new Error('Failed to fetch services data');
        }
        const data = await response.json();
        setServicesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white text-black" id="services">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center py-16">Loading services...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white text-black" id="services">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center py-16 text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  const { title = "What we do", highlight = "we do", services = [] } = servicesData || {};

  return (
    <section className="py-20 bg-white text-black" id="services">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-black">
          {title.replace(highlight, '').trim()}
          {highlight && <span className="text-adrig-blue">{highlight}</span>}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 2).map((service, index) => (
            <Card key={`large-${index}`} className="bg-white border-gray-200 shadow-lg overflow-hidden rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-6 rounded-lg overflow-hidden h-64">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(2).map((service, index) => (
            <Card key={`small-${index}`} className="bg-white border-gray-200 shadow-lg overflow-hidden rounded-xl h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4 rounded-lg overflow-hidden h-40">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" className="border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;