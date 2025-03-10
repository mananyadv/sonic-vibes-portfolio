
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-karma-900/90 via-karma-800/70 to-karma-800"></div>
        
        {/* Abstract animated elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <div className="inline-block p-1.5 px-3 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-medium">Premium Audio Solutions Since 1992</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in tracking-tight">
            <span className="text-purple-400">KARMA</span>
            <span className="text-karma-100">ELECTRIC</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-purple-400 mb-8 opacity-0 animate-fade-in-delay-1"></div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-10 max-w-3xl opacity-0 animate-fade-in-delay-2">
            Innovating Sound & Vision for Over Three Decades
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fade-in-delay-3">
            <Link to="/about">
              <button className="cta-button group">
                Discover More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-3 rounded-md text-karma-100 font-medium border border-purple-400/30 hover:border-purple-400/60 bg-purple-400/5 hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-[1.02]">
                Our Services
              </button>
            </Link>
          </div>
          
          <div className="mt-32 flex items-center gap-12 opacity-0 animate-fade-in-delay-3">
            <img src="https://images.unsplash.com/photo-1622037022788-6234d0a3339e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Award" className="h-12 opacity-50" />
            <img src="https://images.unsplash.com/photo-1648220809172-8978e060f9f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Award" className="h-10 opacity-50" /> 
            <img src="https://images.unsplash.com/photo-1647964586273-61869956bf0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Award" className="h-12 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
