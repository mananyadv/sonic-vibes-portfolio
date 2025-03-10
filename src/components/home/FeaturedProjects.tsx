
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const projects = [
  {
    title: 'High-End Studio Installation',
    description: 'Complete sound system design and installation for a professional recording studio in Bangalore.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Concert Hall Acoustics Design',
    description: 'Acoustic treatment and sound system optimization for a 1,200-seat concert hall.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Custom Loudspeaker System',
    description: 'Design and manufacturing of custom loudspeakers for an entertainment venue.',
    image: 'https://images.unsplash.com/photo-1585840422903-c87a57707a1a?q=80&w=2670&auto=format&fit=crop',
  },
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-karma-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="section-heading text-center mx-auto">Featured Projects</h2>
        </ScrollAnimation>

        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-out h-96 md:h-[500px]" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="absolute inset-0 bg-karma-900/60 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-karma-900/90 to-transparent">
                    <h3 className="text-2xl font-bold mb-2 text-karma-gold">{project.title}</h3>
                    <p className="text-karma-200">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 
                      bg-karma-800/80 hover:bg-karma-800 p-2 rounded-full 
                      text-karma-200 hover:text-karma-gold transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 
                      bg-karma-800/80 hover:bg-karma-800 p-2 rounded-full 
                      text-karma-200 hover:text-karma-gold transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-karma-gold' : 'bg-karma-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
