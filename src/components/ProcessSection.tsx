import { Search, Code, Cog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const ProcessSection = () => {
  const [processData, setProcessData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content/landingpage/ProcessSection.json');
        if (!response.ok) throw new Error('Failed to fetch process data');
        const data = await response.json();
        setProcessData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading process...</div>;
  if (error) return <div className="py-20 text-center text-red-500">Error: {error}</div>;

  const { title = "The process", highlight = "process", steps = [] } = processData || {};
  const iconComponents = { Search, Code, Cog };

  return (
    <section className="py-20 bg-white text-black" id="process">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-black">
          {title.replace(highlight, '').trim()}
          {highlight && <span className="text-adrig-blue">{highlight}</span>}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = iconComponents[step.icon] || Search;
            return (
              <div key={step.number} className="process-step">
                <Card className="bg-white border-gray-200 shadow-lg h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col h-full items-center text-center">
                    <div className="bg-gray-100 p-4 mb-6 w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                      <IconComponent size={36} className="text-adrig-blue" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-black flex items-center justify-center">
                      <span className="text-adrig-blue mr-2">{step.number}</span> {step.title}
                    </h3>
                    <p className="text-gray-600 mt-4">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;