
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Award } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    {
      year: '1992',
      title: 'Foundation',
      description: 'Karma Electric was established with a vision to revolutionize audio technology in India.'
    },
    {
      year: '2000',
      title: 'Expansion',
      description: 'Expanded operations to include custom loudspeaker design and manufacturing.'
    },
    {
      year: '2008',
      title: 'Innovation',
      description: 'Launched our first premium sub-brand, RIVAL ACOUSTIC, focusing on high-fidelity solutions.'
    },
    {
      year: '2015',
      title: 'Growth',
      description: 'Opened a state-of-the-art manufacturing facility and R&D center in Bangalore.'
    },
    {
      year: '2023',
      title: 'Excellence',
      description: 'Celebrating over three decades of innovation and leadership in audio technology.'
    }
  ];

  const awards = [
    {
      year: '2018',
      title: 'Sound & Vision Excellence Award',
      category: 'Best Audio Installation'
    },
    {
      year: '2020',
      title: 'ProSound Innovation Award',
      category: 'Speaker Design Excellence'
    },
    {
      year: '2022',
      title: 'India Audio Technology Award',
      category: 'Industry Leadership'
    },
    {
      year: '2023',
      title: 'Acoustic Design Excellence',
      category: 'Commercial Installation'
    }
  ];

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
                <div className="w-24 h-0.5 bg-karma-gold mx-auto mb-8"></div>
                <p className="text-karma-300 max-w-3xl mx-auto text-lg">
                  For over three decades, Karma Electric has been at the forefront of audio technology,
                  combining technical expertise with a passion for perfect sound.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-karma-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation>
                <div className="bg-karma-700/30 border border-karma-700 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6 text-karma-gold">Our Mission</h2>
                  <p className="text-karma-200">
                    To pioneer innovative audio solutions that transform how people experience sound, 
                    delivering excellence in every aspect of our work from design to implementation.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <div className="bg-karma-700/30 border border-karma-700 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6 text-karma-gold">Our Vision</h2>
                  <p className="text-karma-200">
                    To be the leading name in audio technology across South Asia, setting new standards
                    in sound quality, innovation, and customer satisfaction.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-karma-900">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <h2 className="section-heading text-center mx-auto">Our Journey</h2>
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto mt-16 relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-karma-600 z-0"></div>

              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <ScrollAnimation key={index} delay={index * 150} className="mb-12 relative z-10">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="z-10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-karma-800 border-2 border-karma-gold flex items-center justify-center">
                        <span className="text-karma-gold font-bold">{event.year}</span>
                      </div>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2 text-karma-gold">{event.title}</h3>
                      <p className="text-karma-300">{event.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-karma-800">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="flex items-center justify-center mb-12">
                <Award size={36} className="text-karma-gold mr-4" />
                <h2 className="text-3xl font-bold">Industry Recognition & Awards</h2>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="bg-karma-700/30 border border-karma-700 p-6 rounded-lg">
                    <div className="text-karma-gold font-bold mb-2">{award.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                    <p className="text-karma-400">Category: {award.category}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
