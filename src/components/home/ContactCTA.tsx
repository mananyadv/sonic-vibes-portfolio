
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-karma-800 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Audio Experience?</h2>
            <p className="text-karma-300 text-lg mb-8">
              Let's discuss how Karma Electric can create the perfect audio solution for your needs.
            </p>
            <Link to="/contact">
              <button className="cta-button group">
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactCTA;
