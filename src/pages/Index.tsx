
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ClientLogos from '@/components/ClientLogos';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Digital AI Vision - AI Solutions for Business Transformation</title>
        <meta name="description" content="Empowering businesses with cutting-edge AI solutions, automation, and scalable SaaS products." />
        <meta name="keywords" content="AI solutions, chatbot development, workflow automation, data analysis, AI consulting" />
        <meta property="og:title" content="Digital AI Vision - AI Solutions for Business Transformation" />
        <meta property="og:description" content="Empowering businesses with cutting-edge AI solutions, automation, and scalable SaaS products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digital-ai-vision.com" />
        <meta property="og:image" content="/lovable-uploads/ai-development.jpg" />
        <link rel="canonical" href="https://digital-ai-vision.com" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <ClientLogos />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
