
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
      link: '/services#sound-system-design'
    },
    {
      icon: <Speaker size={48} className="text-karma-gold mb-6" />,
      emoji: '🎛️',
      title: 'Loudspeaker Design',
      description: 'Custom-built high-performance loudspeakers and associated equipment for the professional audio industry.',
      link: '/services#loudspeaker-design'
    },
    {
      icon: <Music size={48} className="text-karma-gold mb-6" />,
      emoji: '🎵',
      title: 'Room Acoustics & Design',
      description: 'Advanced solutions for perfect acoustic environments in listening rooms, mastering studios, and entertainment spaces.',
      link: '/services#room-acoustics'
    }
  ];

  return (
    <section className="section-padding bg-karma-800" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="section-heading text-center mx-auto">Core Services</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index} 
              className="h-full" 
              delay={index * 200}
            >
              <Link to={service.link} className="block h-full no-underline">
                <div className="service-card h-full flex flex-col items-center text-center group">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-karma-gold transition-colors">
                    {service.emoji} {service.title}
                  </h3>
                  <p className="text-karma-300">{service.description}</p>
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
