
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Adrig AI has completely transformed how we handle customer data. Their AI solutions are cutting-edge and delivered exceptional ROI.",
    name: "Sarah Johnson",
    company: "TechFirst Solutions",
    position: "CTO"
  },
  {
    quote: "We implemented Adrig's chatbot system and saw customer satisfaction increase by 40% within the first month. Truly impressive results.",
    name: "Michael Chen",
    company: "Retail Innovations",
    position: "Head of Customer Experience"
  },
  {
    quote: "Their data analysis platform gave us insights we never knew existed. It's like having a crystal ball for our business decisions.",
    name: "Elena Rodriguez",
    company: "Global Analytics",
    position: "CEO"
  },
  {
    quote: "The team at Adrig AI understood our specific needs and developed a custom solution that exceeded our expectations.",
    name: "David Thompson",
    company: "Enterprise Solutions",
    position: "COO"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = Math.ceil(testimonials.length / 2) - 1;
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide(current => (current === maxSlide ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? maxSlide : current - 1));
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-20 bg-adrig-gray" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="relative overflow-hidden">
          <div 
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${Math.ceil(testimonials.length / 2) * 100}%` }}
          >
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, groupIndex) => (
              <div 
                key={groupIndex} 
                className="w-full flex flex-col md:flex-row gap-6"
                style={{ flex: `0 0 ${100 / Math.ceil(testimonials.length / 2)}%` }}
              >
                {testimonials.slice(groupIndex * 2, groupIndex * 2 + 2).map((testimonial, index) => (
                  <div key={index} className="testimonial-card flex-1 relative">
                    <Quote className="text-adrig-blue/20 absolute top-4 left-4" size={40} />
                    <div className="relative z-10">
                      <p className="text-gray-700 mb-6 italic pt-8">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} className="text-adrig-blue" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} className="text-adrig-blue" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-6 bg-adrig-blue' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
