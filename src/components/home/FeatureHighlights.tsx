
import React from 'react';
import { Award, Speaker, Zap, Layers, Shield, HeartPulse } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const FeatureHighlights = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-karma-gold" />,
      title: "Award-Winning Design",
      description: "Recognized globally for our innovative audio solutions and precision engineering."
    },
    {
      icon: <Speaker className="h-8 w-8 text-karma-gold" />,
      title: "Superior Sound Quality",
      description: "Industry-leading clarity and fidelity across our entire product range."
    },
    {
      icon: <Zap className="h-8 w-8 text-karma-gold" />,
      title: "Advanced Technology",
      description: "Cutting-edge components and proprietary acoustic innovations."
    },
    {
      icon: <Layers className="h-8 w-8 text-karma-gold" />,
      title: "Precision Manufacturing",
      description: "Meticulous craftsmanship and rigorous quality control standards."
    },
    {
      icon: <Shield className="h-8 w-8 text-karma-gold" />,
      title: "Lifetime Support",
      description: "Dedicated customer service and maintenance for all installations."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-karma-gold" />,
      title: "Acoustic Perfection",
      description: "Engineered for optimal sound performance in any environment."
    }
  ];

  return (
    <section className="section-padding bg-karma-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-karma-800 via-karma-800 to-karma-900/80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for Excellence</h2>
            <div className="w-24 h-0.5 bg-karma-gold mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 100} className="h-full">
              <div className="bg-karma-700/20 backdrop-blur-sm border border-karma-700/50 hover:border-karma-gold/30 rounded-lg p-6 h-full transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)]">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-karma-100">{feature.title}</h3>
                <p className="text-karma-300">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
