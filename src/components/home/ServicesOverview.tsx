
import React from 'react';
import { Volume2, Speaker, Music } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Volume2 size={48} className="text-karma-gold mb-6" />,
      emoji: '🔊',
      title: 'Sound System Design & Optimization',
      description: 'Expertise in designing high-end sound systems for entertainment venues and recording studios.',
      link: '/services#sound-system-design',
      bgImage: 'https://images.unsplash.com/photo-1621619856624-94189611d8d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      icon: <Speaker size={48} className="text-karma-gold mb-6" />,
      emoji: '🎛️',
      title: 'Loudspeaker Design',
      description: 'Custom-built high-performance loudspeakers and associated equipment for the professional audio industry.',
      link: '/services#loudspeaker-design',
      bgImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      icon: <Music size={48} className="text-karma-gold mb-6" />,
      emoji: '🎵',
      title: 'Room Acoustics & Design',
      description: 'Advanced solutions for perfect acoustic environments in listening rooms, mastering studios, and entertainment spaces.',
      link: '/services#room-acoustics',
      bgImage: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="section-padding bg-karma-900" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="section-heading text-center mx-auto">Core Services</h2>
            <p className="text-karma-300 mt-6 max-w-2xl mx-auto">
              With over three decades of experience, we deliver exceptional audio solutions tailored to your specific needs.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index} 
              className="h-full" 
              delay={index * 200}
            >
              <Link to={service.link} className="block h-full no-underline">
                <div className="relative service-card h-full flex flex-col items-center text-center group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-karma-800/90 group-hover:bg-karma-800/70 transition-colors duration-500"></div>
                    <img 
                      src={service.bgImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  
                  <div className="relative z-10 p-8">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-karma-gold transition-colors">
                      {service.emoji} {service.title}
                    </h3>
                    <p className="text-karma-300">{service.description}</p>
                    
                    <div className="mt-6 pt-6 border-t border-karma-700/30">
                      <span className="text-karma-gold text-sm font-medium">Learn More</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
