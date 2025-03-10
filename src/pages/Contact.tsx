
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
                <div className="w-24 h-0.5 bg-karma-gold mx-auto mb-8"></div>
                <p className="text-karma-300 max-w-3xl mx-auto text-lg">
                  Have a question or ready to start your project? Get in touch with our team.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-karma-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation>
                <div className="glassmorphism p-8 rounded-lg flex flex-col items-center text-center">
                  <div className="bg-karma-gold/10 p-4 rounded-full mb-6">
                    <MapPin size={32} className="text-karma-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <p className="text-karma-300">
                    No 33, Katha no 270/1, Kanakagiri Main Road, 
                    Hormavu Agra, Bangalore - 560043, India
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={150}>
                <div className="glassmorphism p-8 rounded-lg flex flex-col items-center text-center">
                  <div className="bg-karma-gold/10 p-4 rounded-full mb-6">
                    <Mail size={32} className="text-karma-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                  <p className="text-karma-300">vasikhan@karmaelectric.in</p>
                  <p className="text-karma-300 mt-2">www.karmaelectric.in</p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <div className="glassmorphism p-8 rounded-lg flex flex-col items-center text-center">
                  <div className="bg-karma-gold/10 p-4 rounded-full mb-6">
                    <Phone size={32} className="text-karma-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                  <p className="text-karma-300">+91 9845220453</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="https://facebook.com" className="text-karma-400 hover:text-karma-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://instagram.com" className="text-karma-400 hover:text-karma-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Map and Contact Form */}
        <section className="py-20 bg-karma-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollAnimation>
                <div className="h-full">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-karma-300 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-karma-700/30 border border-karma-600 rounded-md px-4 py-2 text-karma-100 focus:outline-none focus:ring-2 focus:ring-karma-gold/50 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-karma-300 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-karma-700/30 border border-karma-600 rounded-md px-4 py-2 text-karma-100 focus:outline-none focus:ring-2 focus:ring-karma-gold/50 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-karma-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-karma-700/30 border border-karma-600 rounded-md px-4 py-2 text-karma-100 focus:outline-none focus:ring-2 focus:ring-karma-gold/50 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-karma-300 mb-2">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-karma-700/30 border border-karma-600 rounded-md px-4 py-2 text-karma-100 focus:outline-none focus:ring-2 focus:ring-karma-gold/50 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="Sound System Design">Sound System Design</option>
                          <option value="Loudspeaker Design">Loudspeaker Design</option>
                          <option value="Room Acoustics">Room Acoustics</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-karma-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-karma-700/30 border border-karma-600 rounded-md px-4 py-2 text-karma-100 focus:outline-none focus:ring-2 focus:ring-karma-gold/50 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-button group w-full flex justify-center items-center"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <div className="h-full">
                  <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                  <div className="h-[400px] lg:h-full rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.047194856686!2d77.63998607461752!3d13.031025513508223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173a0b97c781%3A0xfa84e11c718f6a7b!2sHormavu%20Agara%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1716310723465!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Karma Electric Location"
                    ></iframe>
                  </div>
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

export default Contact;
