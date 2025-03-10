
import React from 'react';
import ScrollAnimation from '../ScrollAnimation';

const brands = [
  {
    name: 'RIVAL ACOUSTIC',
    emoji: '🎶',
    description: 'High-fidelity speaker solutions for critical listening environments.',
  },
  {
    name: 'ATOMIC AUDIO',
    emoji: '⚡',
    description: 'Precision-engineered sound technology for professional studios.',
  },
  {
    name: 'ANCILLARY DEVICES',
    emoji: '🔗',
    description: 'Premium audio accessories and supporting equipment for complete setups.',
  },
  {
    name: 'AUDIO LOTUS',
    emoji: '🎼',
    description: 'Advanced acoustic and audio solutions for optimal sound performance.',
  },
  {
    name: 'BRUTAL AUDIO',
    emoji: '🔥',
    description: 'Powerful and immersive sound systems for large venues and events.',
  },
  {
    name: 'FAT FUNK',
    emoji: '🎚️',
    description: 'Cutting-edge music production tools for creators and artists.',
  },
];

const SubBrands = () => {
  return (
    <section className="section-padding bg-karma-800" id="brands">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="section-heading text-center mx-auto">Our Premium Sub-Brands</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {brands.map((brand, index) => (
            <ScrollAnimation 
              key={index} 
              className="h-full" 
              delay={index * 100}
            >
              <div className="brand-card h-full flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-karma-gold flex items-center">
                  <span className="mr-2">{brand.emoji}</span>
                  {brand.name}
                </h3>
                <div className="w-12 h-0.5 bg-karma-gold/50 mb-4"></div>
                <p className="text-karma-300 text-sm">{brand.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubBrands;
