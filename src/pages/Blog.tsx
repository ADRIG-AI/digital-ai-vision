
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AI from "../assets/AI.jpg"
// Sample blog posts data
// In a real application, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Applications",
    excerpt: "Explore how generative AI is transforming business operations and creating new opportunities for innovation across industries.",
    date: "April 2, 2025",
    readTime: "5 min read",
    imageUrl: AI,
    slug: "future-of-generative-ai"
  },
  {
    id: 2,
    title: "Building Effective AI Implementation Strategies",
    excerpt: "Learn the key components of successful AI implementation strategies and how to avoid common pitfalls when integrating AI into your business.",
    date: "March 28, 2025",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?auto=format&fit=crop&q=80&w=1400",
    slug: "ai-implementation-strategies"
  },
  {
    id: 3,
    title: "The Role of AI in Data-Driven Decision Making",
    excerpt: "Discover how AI-powered analytics can transform raw data into actionable insights that drive better business decisions.",
    date: "March 21, 2025",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1400",
    slug: "ai-data-driven-decision-making"
  },
  {
    id: 4,
    title: "Ethical Considerations in AI Development",
    excerpt: "Exploring the ethical implications of AI development and deployment, and how companies can ensure responsible AI use.",
    date: "March 15, 2025",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400",
    slug: "ethical-ai-considerations"
  },
  {
    id: 5,
    title: "Leveraging ChatGPT for Enhanced Customer Support",
    excerpt: "How businesses are using ChatGPT and similar LLMs to revolutionize customer service while maintaining a personal touch.",
    date: "March 10, 2025",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1400",
    slug: "chatgpt-for-customer-support"
  },
  {
    id: 6,
    title: "The Business Case for AI Automation: ROI Analysis",
    excerpt: "Breaking down the numbers: understand the real return on investment when implementing AI automation solutions in your business.",
    date: "March 5, 2025",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
    slug: "ai-automation-roi-analysis"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-adrig-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">AI Insights Blog</h1>
            <p className="text-lg max-w-2xl mx-auto text-white/90">
              Stay updated with the latest trends, insights, and innovations in AI, 
              machine learning, and emerging technologies.
            </p>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src={blogPosts[0].imageUrl} 
                    alt={blogPosts[0].title} 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  </div>
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <Button className="inline-flex items-center bg-adrig-blue hover:bg-blue-800">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-adrig-blue font-medium inline-flex items-center hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-adrig-blue/5 border border-adrig-blue/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights on AI and emerging technologies delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-adrig-blue/50"
                  required
                />
                <Button type="submit" className="bg-adrig-blue hover:bg-blue-800">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
