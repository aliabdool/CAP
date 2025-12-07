
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MEMBERS, RESOURCES } from '../constants';
import { MapPin, Tag, Play, ExternalLink, Award, ShieldCheck, Leaf, Recycle, Heart, Droplets, Sprout, ArrowRight, FileBarChart, Globe } from 'lucide-react';

const MemberProfile: React.FC = () => {
  const { id } = useParams();
  const member = MEMBERS.find(m => m.id === id);

  if (!member) {
    return <div className="p-12 text-center">Member not found. <Link to="/members">Go back</Link></div>;
  }

  // --- KASSIM FIDALY CUSTOM LAYOUT ---
  if (member.id === 'kassim-fidaly') {
      return (
          <div className="min-h-screen bg-sand-50 pb-20 font-sans">
              
              {/* 1. HERO SECTION - VISUAL STORYTELLING */}
              <div className="relative h-[600px] w-full">
                  <img src={member.imageUrl} alt="Kassim in fields" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                          <div className="max-w-2xl text-white">
                              <div className="flex items-center gap-2 mb-4 text-amber-300 font-bold uppercase tracking-wider text-sm">
                                  <MapPin className="w-4 h-4" /> Mayotte & Madagascar
                              </div>
                              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
                                  From Sacred Forest to Spa: <br/> The Journey of Kassim’s Essential Oils
                              </h1>
                              <p className="text-xl text-teal-50 mb-8 font-light leading-relaxed">
                                  Traditional Distillation × Sustainable Packaging × Island-to-Island Circular Economy.
                              </p>
                              <div className="flex flex-wrap gap-4">
                                  <a href="#products" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition">
                                      Explore Oils
                                  </a>
                                  <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-full font-bold transition">
                                      Partner with Kassim
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Stats Bar */}
                  <div className="absolute bottom-0 w-full bg-teal-900/90 backdrop-blur-md border-t border-teal-700">
                      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
                          <div>
                              <div className="text-2xl font-bold text-amber-400">20+ Years</div>
                              <div className="text-xs uppercase tracking-wide opacity-80">Traditional Distillation</div>
                          </div>
                          <div>
                              <div className="text-2xl font-bold text-amber-400">Mayotte</div>
                              <div className="text-xs uppercase tracking-wide opacity-80">& Madagascar Sourcing</div>
                          </div>
                          <div>
                              <div className="text-2xl font-bold text-amber-400">100%</div>
                              <div className="text-xs uppercase tracking-wide opacity-80">Biodegradable Goal</div>
                          </div>
                          <div>
                              <div className="text-2xl font-bold text-amber-400">5-Star</div>
                              <div className="text-xs uppercase tracking-wide opacity-80">Resort Supplier</div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 2. THE STORY - NARRATIVE */}
              <div className="max-w-4xl mx-auto px-4 py-20">
                  <div className="text-center mb-12">
                      <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">The Narrative</span>
                      <h2 className="font-serif text-4xl font-bold text-teal-900 mt-2">Guardian of Island Scents</h2>
                  </div>
                  <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed">
                      <p className="whitespace-pre-line mb-8">{member.story}</p>
                      
                      <div className="my-12 p-8 bg-teal-50 border-l-4 border-teal-600 rounded-r-xl italic text-xl text-teal-900 font-serif">
                          "Our oils carry the soul of the island. When you open a bottle, you smell the forest, the rain, the sun—and the care of everyone who touched it from soil to bottle."
                          <div className="mt-4 text-sm font-sans font-bold not-italic text-teal-700">— Kassim Fidaly</div>
                      </div>
                  </div>
              </div>

              {/* 3. SUSTAINABLE PACKAGING VISION (Circular Diagram) */}
              <div className="bg-sand-100 py-20 border-y border-sand-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                          <div>
                              <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Innovation</span>
                              <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 mt-2 mb-6">Closing the Loop: From Banana Leaf to Bottle</h2>
                              <p className="text-slate-600 mb-6 text-lg">
                                  Kassim is revolutionizing spa packaging by replacing plastic with locally sourced, biodegradable materials.
                              </p>
                              
                              <ul className="space-y-4 mb-8">
                                  <li className="flex items-start">
                                      <Leaf className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                                      <div>
                                          <h4 className="font-bold text-slate-800">Banana Leaf Packaging</h4>
                                          <p className="text-slate-600 text-sm">Sourced from Mauritius/Madagascar, sun-dried, and hand-cut.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start">
                                      <Recycle className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                                      <div>
                                          <h4 className="font-bold text-slate-800">Hybrid Bottle Design</h4>
                                          <p className="text-slate-600 text-sm">Amber glass (UV protection) + bamboo cap + banana leaf sleeve.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start">
                                      <FileBarChart className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                                      <div>
                                          <h4 className="font-bold text-slate-800">Lifecycle Assessment (LCA)</h4>
                                          <p className="text-slate-600 text-sm">Partnering with University of Mauritius to track carbon & water footprint.</p>
                                      </div>
                                  </li>
                              </ul>

                              <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200">
                                  <h4 className="font-bold text-teal-900 mb-2">LCA Pilot Project Goal</h4>
                                  <div className="w-full bg-sand-200 rounded-full h-4 mb-2">
                                      <div className="bg-teal-600 h-4 rounded-full w-3/4"></div>
                                  </div>
                                  <div className="flex justify-between text-xs text-slate-500">
                                      <span>Current: 75% Degradable</span>
                                      <span>Target 2027: Cradle to Cradle</span>
                                  </div>
                              </div>
                          </div>
                          
                          {/* Visual Diagram Component */}
                          <div className="relative">
                              <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
                              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-sand-200">
                                  <h3 className="text-center font-bold text-teal-900 mb-8">The Circular Journey</h3>
                                  <div className="grid grid-cols-2 gap-8">
                                      <div className="text-center p-4 bg-sand-50 rounded-lg">
                                          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                              <Sprout className="text-emerald-600" />
                                          </div>
                                          <h4 className="font-bold text-sm">1. Farm</h4>
                                          <p className="text-xs text-slate-500">Regenerative Growth</p>
                                      </div>
                                      <div className="text-center p-4 bg-sand-50 rounded-lg">
                                          <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                              <Droplets className="text-amber-600" />
                                          </div>
                                          <h4 className="font-bold text-sm">2. Distillation</h4>
                                          <p className="text-xs text-slate-500">Solar Thermal Energy</p>
                                      </div>
                                      <div className="text-center p-4 bg-sand-50 rounded-lg">
                                          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                              <Recycle className="text-blue-600" />
                                          </div>
                                          <h4 className="font-bold text-sm">4. Compost/Reuse</h4>
                                          <p className="text-xs text-slate-500">Zero Waste Return</p>
                                      </div>
                                      <div className="text-center p-4 bg-sand-50 rounded-lg">
                                          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                              <Heart className="text-purple-600" />
                                          </div>
                                          <h4 className="font-bold text-sm">3. Spa Use</h4>
                                          <p className="text-xs text-slate-500">Wellness & Healing</p>
                                      </div>
                                  </div>
                                  {/* Connecting Arrows (Decor) */}
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-dashed border-slate-300 rounded-full opacity-30"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 4. PRODUCTS & OFFERINGS */}
              <div id="products" className="max-w-7xl mx-auto px-4 py-20">
                  <h2 className="font-serif text-3xl font-bold text-teal-900 mb-12 text-center">Signature Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {member.products.map(product => (
                          <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-sand-200 flex flex-col">
                              <div className="h-48 relative overflow-hidden">
                                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-teal-800 shadow-sm">
                                      {product.category}
                                  </div>
                              </div>
                              <div className="p-6 flex-1 flex flex-col">
                                  <h3 className="font-bold text-lg text-slate-800 mb-1">{product.name}</h3>
                                  <p className="text-xs text-slate-500 mb-4">{product.description}</p>
                                  
                                  <div className="space-y-3 mb-6 flex-1">
                                      <div className="bg-sand-50 p-2 rounded text-xs text-slate-700">
                                          <strong>Scent:</strong> {product.scentProfile}
                                      </div>
                                      <div className="bg-sand-50 p-2 rounded text-xs text-slate-700">
                                          <strong>Spa Use:</strong> {product.spaUse}
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                          {product.sustainabilityFeatures?.map(feat => (
                                              <span key={feat} className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">{feat}</span>
                                          ))}
                                      </div>
                                  </div>
                                  <button className="w-full bg-teal-800 text-white py-2 rounded font-semibold text-sm hover:bg-teal-900 transition">
                                      Request Sample
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* 5. COLLABORATION & KNOWLEDGE HUB */}
              <div className="bg-ocean-50 py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                      
                      {/* Projects */}
                      <div>
                          <h3 className="font-serif text-2xl font-bold text-teal-900 mb-6">Island-to-Island Partnerships</h3>
                          <ul className="space-y-4">
                              <li className="bg-white p-4 rounded-lg shadow-sm border border-sand-200 flex items-center">
                                  <Globe className="w-8 h-8 text-teal-600 mr-4" />
                                  <div>
                                      <h4 className="font-bold text-slate-800">Aroma-Com (Comoros)</h4>
                                      <p className="text-sm text-slate-600">Cross-supply of raw ylang-ylang materials.</p>
                                  </div>
                              </li>
                              <li className="bg-white p-4 rounded-lg shadow-sm border border-sand-200 flex items-center">
                                  <ShieldCheck className="w-8 h-8 text-amber-500 mr-4" />
                                  <div>
                                      <h4 className="font-bold text-slate-800">Seychelles Small Hotel Assoc.</h4>
                                      <p className="text-sm text-slate-600">Training staff in essential oil therapeutic use.</p>
                                  </div>
                              </li>
                              <li className="bg-white p-4 rounded-lg shadow-sm border border-sand-200 flex items-center">
                                  <Award className="w-8 h-8 text-coral-500 mr-4" />
                                  <div>
                                      <h4 className="font-bold text-slate-800">University of Mauritius</h4>
                                      <p className="text-sm text-slate-600">LCA research on banana leaf packaging.</p>
                                  </div>
                              </li>
                          </ul>
                          <button className="mt-6 text-teal-700 font-bold flex items-center hover:underline">
                              View Collaboration Board <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                      </div>

                      {/* Knowledge & Media */}
                      <div>
                           <h3 className="font-serif text-2xl font-bold text-teal-900 mb-6">Learn from Kassim's Journey</h3>
                           <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sand-200 mb-6">
                               {/* Fake video embed */}
                               <div className="relative aspect-video bg-black group cursor-pointer">
                                   <img src="https://picsum.photos/id/60/800/600" className="w-full h-full object-cover opacity-60" alt="Video cover" />
                                   <div className="absolute inset-0 flex items-center justify-center">
                                       <Play className="w-16 h-16 text-white fill-white opacity-90 group-hover:scale-110 transition" />
                                   </div>
                                   <div className="absolute bottom-4 left-4 text-white">
                                       <div className="font-bold">A Day in the Ylang Forest</div>
                                       <div className="text-xs">Watch the documentary</div>
                                   </div>
                               </div>
                               <div className="p-6 bg-teal-900 text-white">
                                   <h4 className="font-bold mb-3">Resources</h4>
                                   <ul className="space-y-2 text-sm text-teal-100">
                                       {RESOURCES.filter(r => r.type === 'Video' || r.type === 'Guide').slice(0, 3).map(r => (
                                           <li key={r.id} className="flex items-start gap-2">
                                               <ExternalLink className="w-4 h-4 mt-0.5" />
                                               <a href={r.url || '#'} className="hover:text-white underline decoration-teal-600 hover:decoration-white transition">{r.title}</a>
                                           </li>
                                       ))}
                                   </ul>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>

              {/* 6. CONTACT & FORM */}
              <div id="contact" className="max-w-4xl mx-auto px-4 py-20">
                  <div className="bg-white rounded-2xl shadow-xl border border-sand-200 overflow-hidden">
                      <div className="bg-teal-800 p-8 text-white text-center">
                          <h2 className="font-serif text-3xl font-bold mb-2">Partner with Kassim</h2>
                          <p className="text-teal-100">Direct farm-to-spa inquiries for hotels and researchers.</p>
                      </div>
                      <div className="p-8 md:p-12">
                          <form className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                      <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Your Name" />
                                  </div>
                                  <div>
                                      <label className="block text-sm font-bold text-slate-700 mb-2">Business / Organization</label>
                                      <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Hotel or Spa Name" />
                                  </div>
                              </div>
                              <div>
                                  <label className="block text-sm font-bold text-slate-700 mb-2">I am interested in...</label>
                                  <select className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                                      <option>Custom Essential Oil Blends for Spa</option>
                                      <option>Farm Visit / Eco-Tourism Tour</option>
                                      <option>Banana Leaf Packaging Collaboration</option>
                                      <option>Joining LCA Research Project</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                  <textarea className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none h-32" placeholder="Tell us about your project..."></textarea>
                              </div>
                              <button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 rounded-lg shadow-lg transition text-lg">
                                  Send Inquiry
                              </button>
                          </form>
                          <div className="mt-8 pt-8 border-t border-sand-100 text-center text-sm text-slate-500">
                              <p>Direct Phone: +269 3XX XX XX • Email: kassim@ylang-co.io</p>
                              <p>Farm Visits available Mon-Fri for procurement teams.</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      );
  }

  // --- STANDARD PROFILE LAYOUT FOR OTHER MEMBERS ---
  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      {/* Header Image */}
      <div className="h-80 md:h-[500px] relative">
        <img src={member.imageUrl} alt={member.businessName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-teal-200 font-semibold">
                            <MapPin className="w-5 h-5" /> {member.island}
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-2">{member.businessName}</h1>
                            {member.certified && (
                                <div className="bg-amber-400 text-teal-900 p-1.5 rounded-full shadow-lg" title={`Certified: ${member.certificationBadge}`}>
                                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                            )}
                        </div>
                        <p className="text-xl md:text-2xl opacity-90">Run by {member.name}</p>
                        {member.certified && (
                            <div className="mt-2 inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                <Award className="w-4 h-4 mr-2 text-amber-300" />
                                <span className="text-sm font-medium text-amber-100">Certified: {member.certificationBadge}</span>
                            </div>
                        )}
                    </div>
                    <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition flex items-center">
                        Contact for B2B <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                  {/* Story Card */}
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
                      <h2 className="font-serif text-2xl font-bold text-teal-900 mb-6">The Story</h2>
                      <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-line leading-relaxed">
                          {member.story}
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {member.tags.map(tag => (
                            <span key={tag} className="flex items-center bg-ocean-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                                <Tag className="w-3 h-3 mr-2" /> {tag}
                            </span>
                        ))}
                      </div>
                  </div>

                  {/* Case Study Integration (If Certified) */}
                  {member.certified && (
                      <div className="bg-ocean-50 border border-ocean-100 p-6 rounded-xl flex items-start gap-4">
                          <Award className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
                          <div>
                              <h3 className="font-bold text-teal-900 mb-2">Sustainability Journey</h3>
                              <p className="text-sm text-slate-700 mb-4">
                                  {member.name} worked with the Indi-Océan team to achieve their {member.certificationBadge} status.
                                  We assisted with gap analysis, documentation, and staff training.
                              </p>
                              <Link to="/services" className="text-sm font-bold text-teal-700 hover:underline">View Case Study &rarr;</Link>
                          </div>
                      </div>
                  )}

                  {/* Products Showcase */}
                  {member.products.length > 0 && (
                      <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
                           <h2 className="font-serif text-2xl font-bold text-teal-900 mb-6">Available Products</h2>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                               {member.products.map(product => (
                                   <div key={product.id} className="border border-sand-200 rounded-lg overflow-hidden group">
                                       <div className="h-48 overflow-hidden">
                                           <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                       </div>
                                       <div className="p-4">
                                           <div className="flex justify-between items-start mb-2">
                                               <h4 className="font-bold text-slate-800">{product.name}</h4>
                                               <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">{product.category}</span>
                                           </div>
                                           <p className="text-sm text-slate-500 mb-3">{product.description}</p>
                                           <div className="flex justify-between items-center">
                                                <span className="text-slate-400 text-sm">{product.priceRange}</span>
                                                <button className="text-teal-700 font-semibold text-sm hover:underline">Inquire</button>
                                           </div>
                                       </div>
                                   </div>
                               ))}
                           </div>
                      </div>
                  )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                  {/* Impact Metrics */}
                  <div className="bg-teal-900 text-white p-8 rounded-xl shadow-lg">
                      <h3 className="font-serif text-xl font-bold mb-6 text-teal-100 border-b border-teal-800 pb-2">Impact Metrics</h3>
                      <div className="space-y-6">
                          {member.impactMetrics.map((metric, idx) => (
                              <div key={idx}>
                                  <div className="text-3xl font-bold text-amber-400">{metric.value}</div>
                                  <div className="text-teal-200 text-sm uppercase tracking-wide">{metric.label}</div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Video Placeholder */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-sand-200">
                      <h3 className="font-bold text-slate-800 mb-3">Meet {member.name.split(' ')[0]}</h3>
                      <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden group cursor-pointer">
                          <img src={member.imageUrl} className="w-full h-full object-cover opacity-80" alt="Video thumbnail"/>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition">
                                  <Play className="w-8 h-8 text-white fill-white" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MemberProfile;
