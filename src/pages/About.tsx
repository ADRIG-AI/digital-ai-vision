import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Lightbulb, Scale, Shield, Users } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    description: 'Pushing the boundaries of AI technology to create solutions that drive real business value.',
    icon: Lightbulb
  },
  {
    title: 'Scalability',
    description: 'Building solutions that grow with your business, from startup to enterprise.',
    icon: Scale
  },
  {
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards in all our AI developments and client relationships.',
    icon: Shield
  },
  {
    title: 'Client-Centric',
    description: 'Focusing on your unique business needs to deliver tailored AI solutions that exceed expectations.',
    icon: Users
  }
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'With 15+ years in AI research and development, Alex leads our vision for the future of AI technologies.'
  },
  {
    name: 'Maria Chen',
    role: 'CTO',
    bio: 'Former lead AI researcher at Tech Giant, Maria oversees all technical aspects of our AI solutions.'
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Data Science',
    bio: 'PhD in Machine Learning, David brings academic rigor to our data analysis methodologies.'
  },
  {
    name: 'Sarah Williams',
    role: 'Client Success Director',
    bio: 'Ensuring our clients achieve their goals through effective implementation of our AI solutions.'
  }
];

const timeline = [
  {
    year: '2017',
    title: 'Company Founded',
    description: 'Adrig AI Technologies was established with a vision to democratize AI for businesses of all sizes.'
  },
  {
    year: '2018',
    title: 'First Enterprise Client',
    description: 'Partnered with our first Fortune 500 client to implement AI automation solutions.'
  },
  {
    year: '2019',
    title: 'AI Research Lab',
    description: "Established our dedicated AI research laboratory to push the boundaries of what's possible."
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia to better serve our growing international client base.'
  },
  {
    year: '2022',
    title: 'Innovation Award',
    description: 'Recognized with the Global AI Innovation Award for our work in LLM development.'
  },
  {
    year: '2023',
    title: 'Launch of AI Platform',
    description: 'Released our flagship AI platform, enabling businesses to integrate AI solutions seamlessly.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="bg-adrig-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Vision for a Smarter Future</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              At Adrig AI Technologies, we're committed to making advanced AI solutions accessible and impactful for businesses of all sizes. Our mission is to drive innovation through intelligent automation and data-driven insights.
            </p>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-md text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-adrig-blue/10 text-adrig-blue mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Meet the Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md text-center group hover:shadow-lg transition-shadow"
                >
                  <div className="w-32 h-32 rounded-full bg-adrig-blue/10 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl text-adrig-blue font-bold">
                      {member.name.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-adrig-blue mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Company Timeline</h2>
            
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-adrig-blue/20"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    <div className="md:w-1/2 text-center md:text-right mb-4 md:mb-0">
                      <div className={`inline-block ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-2xl font-bold text-adrig-blue">{item.year}</span>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-adrig-blue flex items-center justify-center z-10">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-adrig-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Partner with us as we continue to push the boundaries of AI innovation and create the future of intelligent business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors">
                Join Our Team
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors">
                Partner With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
