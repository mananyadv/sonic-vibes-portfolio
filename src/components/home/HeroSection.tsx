
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-karma-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-karma-900/90 via-karma-800/70 to-karma-800"></div>
        
        {/* Abstract animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in">
            <span className="text-purple-400">KARMA</span>
            <span className="text-karma-100">ELECTRIC</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-purple-400 mb-8 opacity-0 animate-fade-in-delay-1"></div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-10 max-w-3xl opacity-0 animate-fade-in-delay-2">
            Innovating Sound & Vision for Over Three Decades
          </h2>
          
          <Link to="/about" className="opacity-0 animate-fade-in-delay-3">
            <button className="cta-button group">
              Discover More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
