
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(37, 99, 235, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(canvas.width * canvas.height / 9000, 100);
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connect();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      <div className="hero-gradient absolute inset-0 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Future of Digital Transformation Starts Here!
            </h1>
            
            <p className="text-xl md:text-2xl mb-8">
              Empowering businesses with cutting-edge AI solutions, automation, and scalable SaaS products.
            </p>
            
            <Link to="/contact">
              <Button className="cta-button text-lg bg-adrig-blue hover:bg-blue-700 text-white px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/ai-development.jpg" 
              alt="AI Development" 
              className="rounded-xl shadow-lg max-w-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
