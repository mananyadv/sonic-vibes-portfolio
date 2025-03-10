
import React, { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';

const testimonials = [
  {
    text: "Karma Electric's sound system design transformed our venue. The clarity and depth of sound is unmatched.",
    name: "Rajiv Menon",
    position: "Studio Owner"
  },
  {
    text: "Their acoustic solutions completely changed how our recording studio performs. Professional service from start to finish.",
    name: "Anjali Sharma",
    position: "Music Producer"
  },
  {
    text: "The custom loudspeakers Karma designed for our concert hall deliver exceptional sound quality. A true mark of excellence.",
    name: "Vikram Singh",
    position: "Event Manager"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-karma-900 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-karma-gold/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-karma-gold/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation>
          <h2 className="section-heading text-center mx-auto">Client Testimonials</h2>
        </ScrollAnimation>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-1000 ${
                  index === current 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="text-center">
                  <div className="text-karma-gold text-5xl mb-6">"</div>
                  <p className="text-xl text-karma-100 italic mb-6">{testimonial.text}</p>
                  <div className="mb-2">
                    <span className="text-karma-gold font-semibold">{testimonial.name}</span>
                  </div>
                  <div className="text-karma-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === current ? 'bg-karma-gold' : 'bg-karma-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
