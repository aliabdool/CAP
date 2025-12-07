import React from 'react';
import { SERVICES } from '../constants';
import { Award, FileBarChart, Sprout, Laptop, Coins, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHub: React.FC = () => {
  // Helper to get icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-8 h-8 text-white" />;
      case 'FileBarChart': return <FileBarChart className="w-8 h-8 text-white" />;
      case 'Sprout': return <Sprout className="w-8 h-8 text-white" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-white" />;
      case 'Coins': return <Coins className="w-8 h-8 text-white" />;
      default: return <CheckCircle className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      {/* Services Hero */}
      <section className="bg-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Expert Services for a Resilient Future</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            We bridge the gap between global standards and island realities. From Green Globe certification to Ezee Absolute software integration, we provide the tools you need to lead.
          </p>
        </div>
      </section>

      {/* Intro Stats/Trusted By */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-sand-200">
            <div>
                <div className="text-3xl font-bold text-teal-700">15+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Hotels Certified</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-teal-700">€2M+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Funding Secured</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-teal-700">100%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Audit Pass Rate</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-teal-700">Partner</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Ezee Absolute</div>
            </div>
        </div>
      </div>

      {/* Main Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                    <div className="inline-block bg-teal-600 p-4 rounded-xl shadow-md mb-6">
                        {getIcon(service.icon)}
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-teal-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map(feature => (
                            <li key={feature} className="flex items-center text-slate-700">
                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Link to="/join" className="inline-flex items-center text-white bg-teal-800 hover:bg-teal-900 px-6 py-3 rounded-full font-semibold transition shadow-md">
                        {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="flex-1 w-full">
                    <div className="bg-white p-2 rounded-2xl shadow-xl border border-sand-200 rotate-1 hover:rotate-0 transition duration-500">
                         {/* Dynamic Image Placeholders based on Service ID */}
                        <img 
                            src={
                                service.id === 'tech' ? 'https://picsum.photos/id/180/800/600' : 
                                service.id === 'biodiversity' ? 'https://picsum.photos/id/292/800/600' :
                                service.id === 'certifications' ? 'https://picsum.photos/id/447/800/600' :
                                'https://picsum.photos/id/20/800/600'
                            } 
                            alt={service.title} 
                            className="rounded-xl w-full h-auto object-cover"
                        />
                         {service.id === 'tech' && (
                            <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow font-bold text-teal-800 flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span> Ezee Absolute Live
                            </div>
                         )}
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Specific Ezee Absolute Highlight */}
      <section className="bg-ocean-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-3xl font-bold text-teal-900 mb-8">Digital Transformation with Ezee Absolute</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1 text-left">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">Automate Your Sustainability Reporting</h3>
                          <p className="text-slate-600 mb-4">
                              As certified partners, we configure Ezee Absolute to not only manage your reservations but to track energy consumption, waste generation, and local procurement in real-time.
                          </p>
                          <ul className="space-y-2 mb-6 text-sm text-slate-700">
                              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2"/> Integrated with Front Office & POS</li>
                              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2"/> Auto-generate monthly TNFD reports</li>
                              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2"/> Paperless Guest Experience</li>
                          </ul>
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-slate-300">
                          <span className="text-slate-400 font-bold text-xl">Ezee Dashboard Preview</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-sand-200 mt-12">
           <div className="max-w-3xl mx-auto px-4 text-center">
               <h2 className="font-serif text-2xl font-bold text-teal-900 mb-4">Not sure where to start?</h2>
               <p className="text-slate-600 mb-8">
                   From university research collaborations to applying for EU grants, we can help you navigate the complexity of sustainable business.
               </p>
               <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-md font-bold transition">Book a 30-min Consultation</button>
           </div>
      </section>

    </div>
  );
};

export default ServicesHub;