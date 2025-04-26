import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

interface TestimonialsData {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialsSection = () => {
  const [data, setData] = useState<TestimonialsData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content/landingpage/TestimonialSection.json');
        const jsonData = await response.json();
        console.log("Fetched testimonials:", jsonData); // Debug log
        setData(jsonData);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      }
    };
    fetchData();
  }, []);

  const totalGroups = data ? Math.ceil(data.testimonials.length / 2) : 0;
  const maxSlide = totalGroups - 1;

  const nextSlide = () => {
    setCurrentSlide((current) => (current >= maxSlide ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? maxSlide : current - 1));
  };

  // Slide transition
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * (100 / totalGroups)}%)`;
    }
  }, [currentSlide, totalGroups]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, maxSlide]);

  if (!data || !data.testimonials || data.testimonials.length === 0) {
    return (
      <section className="py-20 bg-adrig-gray" id="testimonials">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-500 mt-4">No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-adrig-gray" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>

        <div className="relative overflow-hidden">
          <div
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalGroups * 100}%`
            }}
          >
            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex flex-col md:flex-row gap-6 px-2"
                style={{ flex: `0 0 ${100 / totalGroups}%` }}
              >
                {data.testimonials
                  .slice(groupIndex * 2, groupIndex * 2 + 2)
                  .map((testimonial, index) => (
                    <div key={index} className="testimonial-card flex-1 bg-white rounded-lg shadow-md p-6 relative">
                      <Quote className="text-adrig-blue/20 absolute top-4 left-4" size={40} />
                      <div className="relative z-10">
                        <p className="text-gray-700 mb-6 italic pt-8">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
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

        {/* Slide Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, index) => (
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
