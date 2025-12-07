
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Globe, Users, Award, FileBarChart, Coins, Heart, Recycle, Handshake, Zap, Map, MapPin, TrendingUp, Fish, Laptop, Droplets, Link as LinkIcon, Anchor, Package } from 'lucide-react';
import IslandMap from '../components/IslandMap';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
            {/* Placeholder for video/high-res image */}
            <img src="https://picsum.photos/id/16/1920/1080" alt="Ocean coast" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 bg-teal-800/50 border border-teal-600 rounded-full text-sm font-semibold mb-6 tracking-wide text-teal-200">
            Regional Collaboration & Expert Strategy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            From our islands to your oasis. <br/>
            <span className="text-teal-300">Sustainably connected.</span>
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-2xl leading-relaxed">
            The Indi-Océan Collective connects hospitality leaders with local producers, powered by expert guidance in certifications, reporting, and funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/join" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Island Strengths, Shared Solutions (Expertise Pillars) */}
      <section className="py-20 bg-white -mt-8 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-xl">
        <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-bold uppercase tracking-wide text-teal-700 mb-4">
                Regional Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 mb-4">Island Strengths, Shared Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each island brings unique expertise to our collective table—here’s how we grow stronger together.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Mauritius Certification */}
            <div className="bg-sand-50 rounded-xl p-8 border border-sand-200 hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-700 group-hover:bg-teal-200 transition">
                        <Award className="w-6 h-6" />
                    </div>
                    <div className="bg-teal-100 p-3 rounded-full text-teal-700 group-hover:bg-teal-200 transition -ml-2 border-2 border-sand-50">
                        <FileBarChart className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-teal-900 mb-1">Mauritius</h3>
                <h4 className="text-sm font-bold text-coral-500 uppercase tracking-wide mb-4">The Strategy Hub</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Home to internationally certified hotels and sustainability experts. We provide Green Globe/EarthCheck roadmaps and TNFD/GRI reporting.
                </p>
                <div className="border-t border-sand-200 pt-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Certification Roadmaps</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Investor-ready Reports</li>
                    </ul>
                </div>
            </div>

            {/* Pillar 2: Mayotte & Madagascar Spa */}
            <div className="bg-sand-50 rounded-xl p-8 border border-sand-200 hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-emerald-100 p-3 rounded-full text-emerald-700 group-hover:bg-emerald-200 transition">
                        <Sprout className="w-6 h-6" />
                    </div>
                    <div className="bg-emerald-100 p-3 rounded-full text-emerald-700 group-hover:bg-emerald-200 transition -ml-2 border-2 border-sand-50">
                        <Droplets className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-teal-900 mb-1">Mayotte & Madagascar</h3>
                <h4 className="text-sm font-bold text-coral-500 uppercase tracking-wide mb-4">The Wellness Source</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Centuries of knowledge in ylang-ylang and vanilla. Access traceable essential oils and custom farm-to-spa product development.
                </p>
                <div className="border-t border-sand-200 pt-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Traceable Essential Oils</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Custom Spa Blends</li>
                    </ul>
                </div>
            </div>

            {/* Pillar 3: Comoros Spice */}
            <div className="bg-sand-50 rounded-xl p-8 border border-sand-200 hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-700 group-hover:bg-amber-200 transition">
                        <Package className="w-6 h-6" />
                    </div>
                    <div className="bg-amber-100 p-3 rounded-full text-amber-700 group-hover:bg-amber-200 transition -ml-2 border-2 border-sand-50">
                        <Coins className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-teal-900 mb-1">Comoros</h3>
                <h4 className="text-sm font-bold text-coral-500 uppercase tracking-wide mb-4">Heritage Keepers</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Guardians of traditional spice farming. Source premium cloves, cinnamon, and vanilla with authentic heritage stories.
                </p>
                <div className="border-t border-sand-200 pt-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Premium F&B Spices</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Cultural Authenticity</li>
                    </ul>
                </div>
            </div>

            {/* Pillar 4: Seychelles Marine */}
            <div className="bg-sand-50 rounded-xl p-8 border border-sand-200 hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 group-hover:bg-blue-200 transition">
                        <Fish className="w-6 h-6" />
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 group-hover:bg-blue-200 transition -ml-2 border-2 border-sand-50">
                        <Anchor className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-teal-900 mb-1">Seychelles</h3>
                <h4 className="text-sm font-bold text-coral-500 uppercase tracking-wide mb-4">Marine Pioneers</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    World-class marine biodiversity models. Partner on marine conservation programs and guest eco-experiences.
                </p>
                <div className="border-t border-sand-200 pt-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Conservation Programs</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Blue Economy Partners</li>
                    </ul>
                </div>
            </div>

             {/* Pillar 5: Mauritius Tech */}
             <div className="bg-sand-50 rounded-xl p-8 border border-sand-200 hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-700 group-hover:bg-indigo-200 transition">
                        <Laptop className="w-6 h-6" />
                    </div>
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-700 group-hover:bg-indigo-200 transition -ml-2 border-2 border-sand-50">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-teal-900 mb-1">Mauritius</h3>
                <h4 className="text-sm font-bold text-coral-500 uppercase tracking-wide mb-4">Innovation Center</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    A strong tech ecosystem for hospitality. Implement Ezee Absolute for sustainability data tracking and digital operations.
                </p>
                <div className="border-t border-sand-200 pt-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Digital Dashboards</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-teal-500 mr-2" /> Tech Integration</li>
                    </ul>
                </div>
            </div>

             {/* Pillar 6: Regional Network */}
             <div className="bg-teal-900 rounded-xl p-8 border border-teal-800 shadow-xl group text-white">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-teal-800 p-3 rounded-full text-amber-400 group-hover:bg-teal-700 transition">
                        <LinkIcon className="w-6 h-6" />
                    </div>
                    <div className="bg-teal-800 p-3 rounded-full text-amber-400 group-hover:bg-teal-700 transition -ml-2 border-2 border-teal-900">
                        <Handshake className="w-6 h-6" />
                    </div>
                </div>
                <h3 className="font-bold text-xl text-white mb-1">Regional Network</h3>
                <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wide mb-4">Collaboration Engine</h4>
                <p className="text-teal-100 mb-6 text-sm leading-relaxed">
                    We facilitate what islands can't do alone. Unlock sourcing partnerships, research collaborations, and collective funding.
                </p>
                <div className="border-t border-teal-800 pt-4">
                    <p className="text-xs font-bold text-teal-400 mb-2">WHAT YOU GET:</p>
                    <ul className="text-sm text-teal-50 space-y-1">
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-amber-400 mr-2" /> Sourcing Partnerships</li>
                        <li className="flex items-center"><ArrowRight className="w-3 h-3 text-amber-400 mr-2" /> Research Collaboration</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 bg-ocean-50 rounded-2xl p-8 md:p-12 text-center border border-ocean-100">
            <h3 className="font-serif text-2xl font-bold text-teal-900 mb-6">Ready to tap into island expertise?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/members" className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full font-bold transition flex items-center justify-center">
                    Find Your Island Partner <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/join" className="bg-white border border-teal-300 text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-full font-bold transition flex items-center justify-center">
                    Join as Expert Contributor
                </Link>
                <Link to="/community" className="text-teal-700 font-bold px-6 py-3 hover:underline flex items-center justify-center">
                    Explore Projects
                </Link>
            </div>
        </div>
      </section>

      {/* Mission & Map Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-serif text-3xl font-bold text-teal-900 mb-6">A Regional Ecosystem for Good</h2>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                        We are more than a consultancy; we are a movement. Indi-Océan combines high-level sustainability strategy with a grassroots network of producers to create a resilient island economy.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <Sprout className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">Sustainable Sourcing</h4>
                                <p className="text-slate-600 text-sm">Direct connections between hotels and eco-farmers.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Globe className="w-6 h-6 text-ocean-500 mr-3 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">Regional Impact</h4>
                                <p className="text-slate-600 text-sm">Reducing carbon footprints by sourcing within the region.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Users className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">Community Driven</h4>
                                <p className="text-slate-600 text-sm">Open knowledge sharing on TNFD, GRI, and funding.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="h-full">
                   <IslandMap />
                </div>
            </div>
        </div>
      </section>
      
      {/* Island Collaborators Section (Replaced Founder Section) */}
      <section className="py-24 bg-ocean-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand-200 rounded-full opacity-40 translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-teal-900 mb-6">Island Collaborators: Stronger Together</h2>
                <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto font-light leading-relaxed">
                    From 12 strangers in a room to a regional movement for sustainable islands.
                </p>
            </div>

            {/* Origin Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 lg:order-1 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wide">
                        <Sprout className="w-4 h-4" /> The Beginning
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-slate-800">It started with a spark.</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        It began with the <strong>Cap Business OI biodiversity coaching program</strong>. Twelve entrepreneurs from six different islands gathered in a room, perhaps expecting just another technical workshop. Instead, we found something more powerful: shared challenges and a common heart.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We realized that while our islands are separated by ocean, our struggles with climate resilience, waste management, and sustainable growth are identical. That day, we chose collaboration over isolation. We transformed from individual businesses into the <strong>Indi-Océan Collective</strong>.
                    </p>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="absolute inset-0 bg-teal-600 rounded-2xl rotate-3 opacity-10"></div>
                    <img 
                        src="https://picsum.photos/id/431/800/600" 
                        alt="Collaborators Workshop" 
                        className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform -rotate-1 hover:rotate-0 transition duration-500" 
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block border border-sand-200">
                        <p className="text-sm font-bold text-teal-800 italic">"We started as colleagues, we became collaborators, now we're a community."</p>
                    </div>
                </div>
            </div>

            {/* Shared Values & Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {/* Values Card */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-sand-200">
                    <h3 className="font-serif text-2xl font-bold text-teal-900 mb-8 flex items-center">
                        <Heart className="w-6 h-6 text-coral-500 mr-3" /> Core Beliefs
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <span className="text-slate-700 text-lg"><strong>Biodiversity</strong> is our common heritage.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <span className="text-slate-700 text-lg"><strong>Circular economy</strong> is in our island DNA.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <span className="text-slate-700 text-lg"><strong>Knowledge</strong> grows when shared.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <span className="text-slate-700 text-lg"><strong>Tradition & Innovation</strong> can coexist.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <span className="text-slate-700 text-lg">Our islands' futures are <strong>interconnected</strong>.</span>
                        </li>
                    </ul>
                </div>

                {/* Identity Card */}
                <div className="bg-teal-900 text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-bold mb-8 text-teal-50">Who We Are</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                        <div>
                            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                <Handshake className="w-5 h-5 text-amber-300" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Bridge-builders</h4>
                            <p className="text-teal-200 text-sm">Connecting islands, sectors, and people.</p>
                        </div>
                        <div>
                            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                <Map className="w-5 h-5 text-amber-300" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Story-keepers</h4>
                            <p className="text-teal-200 text-sm">Preserving traditional knowledge.</p>
                        </div>
                        <div>
                            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                <Zap className="w-5 h-5 text-amber-300" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Future-shapers</h4>
                            <p className="text-teal-200 text-sm">Using TNFD, GRI & modern tech.</p>
                        </div>
                        <div>
                            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                <Sprout className="w-5 h-5 text-amber-300" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Solution-growers</h4>
                            <p className="text-teal-200 text-sm">Innovating from the ground up.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collective Quote */}
            <div className="bg-gradient-to-br from-teal-800 to-ocean-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <Globe className="w-full h-full -ml-20 -mt-20" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <QuoteIcon className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
                    <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic mb-8">
                        "We believe our islands' greatest resource isn't in our soil or seas—it's in our connections. When a hotel in Mauritius sources from a farmer in Comoros, when a researcher in Madagascar shares data with a hotelier in Seychelles, we're not just doing business. We're weaving a new kind of economy—one that honors our past, protects our present, and prepares our islands for tomorrow."
                    </p>
                    <div className="font-bold text-amber-400 tracking-wider uppercase text-sm">— The Indi-Océan Collective</div>
                </div>
            </div>

            {/* Section CTA */}
            <div className="text-center mt-16">
                 <h4 className="font-bold text-teal-900 mb-6 text-xl">Ready to be part of the movement?</h4>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link to="/join" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-bold shadow-md transition">
                        Join Network
                     </Link>
                     <Link to="/community" className="bg-white border-2 border-teal-800 text-teal-800 hover:bg-teal-50 px-8 py-3 rounded-full font-bold transition">
                        Share Your Story
                     </Link>
                 </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Whether you need Green Globe certification, a TNFD action plan, or a supplier for your spa, the Collective is your partner.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/join" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-md font-semibold transition shadow-md">Join the Collective</Link>
                  <Link to="/services" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition">Explore Consulting</Link>
              </div>
          </div>
      </section>
    </div>
  );
};

// Simple icon component for the quote
const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.293 15.653 14.36C12.427 13.722 12.565 8.974 12.565 8.974H15.816C15.816 8.974 15.759 11.231 16.969 12.018C16.969 12.018 19.981 12.018 19.981 12.018L19.981 21L14.017 21ZM5.196 21L5.196 18C5.196 16.896 5.509 15.293 6.841 14.36C3.616 13.722 3.753 8.974 3.753 8.974H7.004C7.004 8.974 6.947 11.231 8.157 12.018C8.157 12.018 11.169 12.018 11.169 12.018L11.169 21L5.196 21Z" />
    </svg>
);

export default Home;
