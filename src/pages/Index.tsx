
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
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
