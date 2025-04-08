
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// This is a placeholder component for individual blog posts
// In a real application, you would fetch blog post data based on the slug

const BlogPost = () => {
  const { slug } = useParams();
  
  // This is sample data - in a real app this would come from an API or CMS
  const post = {
    title: "The Future of Generative AI in Enterprise Applications",
    date: "April 2, 2025",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813460df?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p class="text-lg mb-4">Generative AI is rapidly transforming how businesses operate, creating unprecedented opportunities for innovation and efficiency. From content creation to product design, this technology is opening new horizons for creativity and problem-solving.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Current Landscape</h2>
      <p class="mb-4">The adoption of generative AI tools like GPT-4, DALL-E, and Midjourney is accelerating across industries. Companies are leveraging these technologies to automate content creation, enhance customer interactions, and streamline design processes. The market for generative AI is expected to grow from $10.8 billion in 2022 to $118.6 billion by 2032, representing a compound annual growth rate of 27.02%.</p>
      
      <p class="mb-4">What makes generative AI particularly valuable is its ability to learn from vast datasets and then produce new outputs that reflect patterns in that data. This capability allows businesses to:</p>
      
      <ul class="list-disc ml-6 mb-6">
        <li class="mb-2">Generate high-quality content at scale</li>
        <li class="mb-2">Personalize customer experiences based on individual preferences</li>
        <li class="mb-2">Accelerate product development through rapid prototyping</li>
        <li class="mb-2">Enhance decision-making with AI-generated insights</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Applications in Enterprise Settings</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Marketing and Content Creation</h3>
      <p class="mb-4">Marketing departments are using generative AI to create blog posts, social media content, email campaigns, and even video scripts. These tools enable marketers to produce high-quality content faster and more consistently than ever before, allowing teams to focus on strategy and creativity rather than execution.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Customer Service and Support</h3>
      <p class="mb-4">AI-powered chatbots and virtual assistants are becoming increasingly sophisticated, handling complex customer queries with human-like understanding. These systems can generate contextually appropriate responses, understand nuanced questions, and even detect emotion, providing timely and personalized support around the clock.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Product Design and Development</h3>
      <p class="mb-4">Designers and engineers are using generative AI to explore new possibilities in product design. By inputting parameters and constraints, teams can rapidly generate multiple design variations, test concepts, and iterate more quickly than traditional methods allow.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Challenges</h2>
      <p class="mb-4">Despite its potential, implementing generative AI in enterprise environments comes with several challenges:</p>
      
      <ul class="list-disc ml-6 mb-6">
        <li class="mb-2"><strong>Data quality and bias</strong> - AI models can perpetuate or amplify biases present in training data</li>
        <li class="mb-2"><strong>Integration with existing systems</strong> - Connecting AI tools with legacy infrastructure can be complex</li>
        <li class="mb-2"><strong>Governance and compliance</strong> - Ensuring AI-generated content meets regulatory requirements</li>
        <li class="mb-2"><strong>Talent acquisition</strong> - Finding professionals with both AI and domain expertise</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead: The Next Phase of Enterprise AI</h2>
      <p class="mb-4">As generative AI continues to evolve, we're seeing several emerging trends that will shape its future in enterprise applications:</p>
      
      <ul class="list-disc ml-6 mb-6">
        <li class="mb-2"><strong>Multi-modal AI</strong> - Systems that can work across text, images, audio, and video simultaneously</li>
        <li class="mb-2"><strong>Domain-specific AI</strong> - Models fine-tuned for particular industries or use cases</li>
        <li class="mb-2"><strong>Explainable AI</strong> - Solutions that provide transparency into how they generate their outputs</li>
        <li class="mb-2"><strong>Collaborative AI</strong> - Systems designed to work alongside humans rather than replace them</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Generative AI represents a paradigm shift in how enterprises approach problem-solving, creativity, and efficiency. Organizations that successfully integrate these technologies will gain significant competitive advantages through enhanced productivity, improved customer experiences, and accelerated innovation.</p>
      
      <p>As with any transformative technology, the key to success lies in thoughtful implementation, ongoing refinement, and a clear focus on business objectives. By addressing challenges like data quality, integration, and governance, businesses can unlock the full potential of generative AI and position themselves at the forefront of the next wave of digital transformation.</p>
    `
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Back to Blog Link */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="text-adrig-blue inline-flex items-center hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="border-t border-b border-gray-200 py-4 mb-8 flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Published by</span>
                  <span className="ml-1 font-medium">ADRIG AI</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 mr-2">Share:</span>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <Twitter className="h-4 w-4 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <Facebook className="h-4 w-4 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            
            <div className="max-w-3xl mx-auto prose prose-lg" 
              dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
          </div>
        </section>
        
        {/* Related Posts (Placeholder) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Building Effective AI Implementation Strategies</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Learn the key components of successful AI implementation strategies and how to avoid common pitfalls.
                  </p>
                  <Link 
                    to="/blog/ai-implementation-strategies"
                    className="text-adrig-blue font-medium inline-flex items-center hover:underline"
                  >
                    Read More
                    <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2">The Role of AI in Data-Driven Decision Making</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Discover how AI-powered analytics can transform raw data into actionable insights.
                  </p>
                  <Link 
                    to="/blog/ai-data-driven-decision-making"
                    className="text-adrig-blue font-medium inline-flex items-center hover:underline"
                  >
                    Read More
                    <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
