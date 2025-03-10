
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Volume2, Speaker, Music } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-karma-900">
          <div className="absolute inset-0 bg-gradient-to-b from-karma-900/90 via-karma-800/70 to-karma-800"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <ScrollAnimation>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
                <div className="w-24 h-0.5 bg-karma-gold mx-auto mb-8"></div>
                <p className="text-karma-300 max-w-3xl mx-auto text-lg">
                  With over three decades of experience, Karma Electric offers comprehensive audio solutions
                  that combine technical expertise with artistic vision.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Sound System Design Section */}
        <section id="sound-system-design" className="py-20 bg-karma-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation className="order-2 md:order-1">
                <div>
                  <div className="flex items-center mb-6">
                    <Volume2 size={36} className="text-karma-gold mr-4" />
                    <h2 className="text-3xl font-bold">Sound System Design & Optimization</h2>
                  </div>
                  <div className="w-24 h-0.5 bg-karma-gold mb-8"></div>
                  <p className="text-karma-300 mb-6">
                    With over 30 years of expertise, Karma Electric designs state-of-the-art sound systems
                    tailored for entertainment venues, corporate spaces, and studios. Our team ensures
                    every component works in perfect harmony to deliver exceptional audio quality.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Customizable system architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Advanced tuning and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Seamless integration with existing AV infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Cutting-edge technology for premium audio clarity</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
                    alt="Sound System Design" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Loudspeaker Design */}
        <section id="loudspeaker-design" className="py-20 bg-karma-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1585840422903-c87a57707a1a?q=80&w=2670&auto=format&fit=crop" 
                    alt="Loudspeaker Design" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div>
                  <div className="flex items-center mb-6">
                    <Speaker size={36} className="text-karma-gold mr-4" />
                    <h2 className="text-3xl font-bold">Loudspeaker Design</h2>
                  </div>
                  <div className="w-24 h-0.5 bg-karma-gold mb-8"></div>
                  <p className="text-karma-300 mb-6">
                    Karma Electric specializes in high-performance loudspeaker manufacturing, integrating
                    the latest technology and trends in the professional audio industry. Our speakers are 
                    engineered to deliver pristine sound reproduction across all frequencies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Precision-engineered speaker units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Acoustic optimization for premium sound fidelity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Durability and reliability for long-term use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Custom designs for specific acoustic environments</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Room Acoustics */}
        <section id="room-acoustics" className="py-20 bg-karma-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation className="order-2 md:order-1">
                <div>
                  <div className="flex items-center mb-6">
                    <Music size={36} className="text-karma-gold mr-4" />
                    <h2 className="text-3xl font-bold">Room Acoustics & Design</h2>
                  </div>
                  <div className="w-24 h-0.5 bg-karma-gold mb-8"></div>
                  <p className="text-karma-300 mb-6">
                    Our expert team designs acoustically perfect rooms for entertainment spaces, mastering studios,
                    and recording rooms, ensuring optimum sound performance. We consider every aspect of your space 
                    to create the ideal acoustic environment.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Acoustic modeling and simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Custom design based on room structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">High-quality materials for sound enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-karma-gold mr-2">•</span>
                      <span className="text-karma-200">Balanced frequency response across the entire space</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=2672&auto=format&fit=crop" 
                    alt="Room Acoustics & Design" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
