
import { Search, Code, Cog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white text-black" id="process">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-black">
          The <span className="text-adrig-blue">process</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Analyze */}
          <div className="process-step">
            <Card className="bg-white border-gray-200 shadow-lg h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col h-full items-center text-center">
                <div className="bg-gray-100 p-4 mb-6 w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                  <Search size={36} className="text-adrig-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black flex items-center justify-center">
                  <span className="text-adrig-blue mr-2">01</span> Analyze
                </h3>
                <p className="text-gray-600 mt-4">
                  We start with a thorough analysis of your current workflows to see how AI could improve your processes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Step 2: Build & Implement */}
          <div className="process-step">
            <Card className="bg-white border-gray-200 shadow-lg h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col h-full items-center text-center">
                <div className="bg-gray-100 p-4 mb-6 w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                  <Code size={36} className="text-adrig-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black flex items-center justify-center">
                  <span className="text-adrig-blue mr-2">02</span> Build & Implement
                </h3>
                <p className="text-gray-600 mt-4">
                  Then, our developers will start crafting custom AI solutions for your company, continuously prioritizing quality and safety.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Step 3: Maintain & Improve */}
          <div className="process-step">
            <Card className="bg-white border-gray-200 shadow-lg h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col h-full items-center text-center">
                <div className="bg-gray-100 p-4 mb-6 w-24 h-24 flex justify-center items-center rounded-full shadow-md">
                  <Cog size={36} className="text-adrig-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black flex items-center justify-center">
                  <span className="text-adrig-blue mr-2">03</span> Maintain & Improve
                </h3>
                <p className="text-gray-600 mt-4">
                  After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
