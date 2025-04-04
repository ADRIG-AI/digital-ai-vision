
import { Search, Code, Cog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-black text-white" id="process">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">
          The <span className="text-blue-400">process</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Analyze */}
          <div className="process-step">
            <Card className="bg-zinc-900 border-zinc-800 h-full rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-zinc-800 p-6 mb-8 w-full rounded-lg">
                    <div className="flex justify-center items-center">
                      <Search size={48} className="text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white flex items-center">
                    <span className="text-blue-400 mr-2">01</span> Analyze
                  </h3>
                  <p className="text-gray-400 mt-4">
                    We start with a thorough analysis of your current workflows to see how AI could improve your processes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 2: Build & Implement */}
          <div className="process-step">
            <Card className="bg-zinc-900 border-zinc-800 h-full rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-zinc-800 p-6 mb-8 w-full rounded-lg">
                    <div className="flex justify-center items-center">
                      <Code size={48} className="text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white flex items-center">
                    <span className="text-blue-400 mr-2">02</span> Build & Implement
                  </h3>
                  <p className="text-gray-400 mt-4">
                    Then, our developers will start crafting custom AI solutions for your company, continuously prioritizing quality and safety.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3: Maintain & Improve */}
          <div className="process-step">
            <Card className="bg-zinc-900 border-zinc-800 h-full rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-zinc-800 p-6 mb-8 w-full rounded-lg">
                    <div className="flex justify-center items-center">
                      <Cog size={48} className="text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white flex items-center">
                    <span className="text-blue-400 mr-2">03</span> Maintain & Improve
                  </h3>
                  <p className="text-gray-400 mt-4">
                    After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
