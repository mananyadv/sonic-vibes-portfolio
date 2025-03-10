
import React from 'react';
import ScrollAnimation from '../ScrollAnimation';

const clients = [
  {
    name: "Bangalore Symphony Orchestra",
    logo: "https://images.unsplash.com/photo-1576248004793-2c21b24b7bcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Performance Venue"
  },
  {
    name: "Spectra Studios",
    logo: "https://images.unsplash.com/photo-1651950799270-aaeaed542733?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Recording Studio"
  },
  {
    name: "Horizon Media Group",
    logo: "https://images.unsplash.com/photo-1651950537015-5c6fe0aac3a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Media Production"
  },
  {
    name: "Crystal Acoustics",
    logo: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Audio Equipment"
  },
  {
    name: "Pinnacle Entertainment",
    logo: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Event Management"
  },
  {
    name: "Global Soundscapes",
    logo: "https://images.unsplash.com/photo-1651950551337-3a6eaa724055?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "Audio Systems"
  }
];

const ClientShowcase = () => {
  return (
    <section className="section-padding bg-karma-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="section-heading text-center mx-auto mb-16">Trusted by Industry Leaders</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <ScrollAnimation key={index} delay={index * 70} className="flex justify-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-karma-800 border border-karma-700 p-1 mb-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-sm font-medium text-karma-100">{client.name}</h3>
                <p className="text-xs text-karma-400 mt-1">{client.type}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
