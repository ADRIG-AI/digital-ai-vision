
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title = "Digital AI Vision - AI Solutions for Business Growth",
  description = "Empowering businesses with cutting-edge AI solutions, automation, and scalable SaaS products. Transform your operations with our intelligent technologies.",
  canonicalUrl = "https://digital-ai-vision.com",
  keywords = "AI solutions, business automation, digital transformation, chatbots, machine learning, workflow automation",
  ogImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1400",
  ogType = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
