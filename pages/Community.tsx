
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, MEMBERS, FORUM_TOPICS, ISLANDS, RESOURCES } from '../constants';
import { MessageCircle, MapPin, ArrowRight, Play, Users, Globe, Sparkles, BookOpen, Video, FileText, MessageSquare, ExternalLink } from 'lucide-react';
import IslandMap from '../components/IslandMap';
import { askSustainabilityAdvisor } from '../services/geminiService';

const Community: React.FC = () => {
  // AI Advisor State
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);
    setAiAnswer('');
    
    const answer = await askSustainabilityAdvisor(question);
    setAiAnswer(answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-sand-50">
      
      {/* Hero Section */}
      <section className="bg-teal-900 text-white pt-20 pb-16 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
             <img src="https://picsum.photos/id/382/1920/1080" className="w-full h-full object-cover" alt="Background pattern" />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Voices of the Islands</h1>
             <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-10">
                 Discover the projects, resources, and stories shaping a sustainable future for the Indian Ocean.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                 <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition">
                     Submit Your Story
                 </button>
                 <a href="#projects" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition">
                     Explore Projects
                 </a>
             </div>
         </div>
      </section>

      {/* NEW SECTION: Knowledge Exchange (Merged from KnowledgeHub) */}
      <section className="py-16 bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                <div>
                     <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Knowledge Exchange</span>
                     <h2 className="font-serif text-3xl font-bold text-teal-900 mt-2">Tools & Discussions</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Col: AI Advisor */}
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg border border-teal-100 overflow-hidden flex flex-col">
                    <div className="bg-teal-800 p-6 text-white flex items-center justify-between">
                        <div className="flex items-center">
                            <Sparkles className="w-6 h-6 text-amber-300 mr-3" />
                            <div>
                                <h3 className="font-bold text-lg">AI Sustainability Advisor</h3>
                                <p className="text-teal-100 text-xs">Powered by Gemini</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <p className="text-slate-600 text-sm mb-4">Ask about certifications (TNFD, Green Key), local plants, or grant opportunities.</p>
                        <form onSubmit={handleAsk} className="mb-4">
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 text-sm"
                                    placeholder="e.g. How to start a biodiversity audit?"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition disabled:opacity-50"
                                >
                                    {loading ? '...' : 'Ask'}
                                </button>
                            </div>
                        </form>
                        {aiAnswer ? (
                            <div className="bg-ocean-50 border border-ocean-100 rounded-lg p-4 animate-fade-in flex-1 overflow-y-auto max-h-60">
                                <h4 className="font-bold text-teal-900 mb-2 flex items-center text-xs">
                                    <MessageSquare className="w-3 h-3 mr-2" /> Advisor Response:
                                </h4>
                                <div className="prose prose-sm prose-slate max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                                    {aiAnswer}
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-slate-400 text-sm italic">
                                Results will appear here...
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Col: Resources & Forum */}
                <div className="space-y-6">
                    {/* Latest Resources */}
                    <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-800 flex items-center"><BookOpen className="w-5 h-5 text-coral-500 mr-2"/> Latest Resources</h3>
                            <span className="text-xs font-bold text-teal-600 cursor-pointer hover:underline">View Library</span>
                        </div>
                        <div className="space-y-3">
                             {RESOURCES.slice(0, 3).map(res => (
                                <div key={res.id} className="flex items-start group cursor-pointer">
                                    <div className="mt-1 mr-3 text-slate-400 group-hover:text-teal-600">
                                        {res.type === 'Video' ? <Video size={16} /> : <FileText size={16} />}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-700 group-hover:text-teal-800 transition">{res.title}</h4>
                                        <p className="text-xs text-slate-500 line-clamp-1">{res.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Active Discussions */}
                    <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-800 flex items-center"><Users className="w-5 h-5 text-blue-500 mr-2"/> Active Discussions</h3>
                            <span className="text-xs font-bold text-teal-600 cursor-pointer hover:underline">Go to Forum</span>
                        </div>
                        <div className="space-y-3">
                            {FORUM_TOPICS.slice(0, 3).map(topic => (
                                <div key={topic.id} className="flex justify-between items-start border-b border-sand-50 last:border-0 pb-2 last:pb-0">
                                     <div>
                                         <h4 className="text-sm font-bold text-slate-700 hover:text-teal-700 cursor-pointer">{topic.title}</h4>
                                         <p className="text-xs text-slate-400">{topic.category}</p>
                                     </div>
                                     <span className="text-xs bg-sand-100 text-slate-600 px-2 py-0.5 rounded-full">{topic.replies}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Island Hubs */}
      <section className="py-12 bg-sand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-teal-900 mb-6 text-center">Explore by Island Hub</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {ISLANDS.map(island => (
                      <Link 
                        to={`/members?island=${island}`} 
                        key={island}
                        className="group bg-white hover:bg-teal-600 hover:text-white rounded-xl p-4 text-center transition duration-300 border border-sand-200 shadow-sm"
                      >
                          <MapPin className="w-6 h-6 mx-auto mb-2 text-teal-600 group-hover:text-white transition-colors" />
                          <span className="font-bold text-sm block">{island}</span>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Featured Projects Spotlight */}
      <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <span className="text-coral-500 font-bold uppercase tracking-wider text-sm">Impact Initiatives</span>
                      <h2 className="font-serif text-4xl font-bold text-teal-900 mt-2">Project Spotlights</h2>
                  </div>
                  <Link to="/projects" className="hidden md:flex items-center text-teal-700 font-bold hover:text-teal-900">
                      View all projects <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PROJECTS.map(project => (
                      <Link to={`/projects/${project.id}`} key={project.id} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-200">
                          <div className="relative h-56 overflow-hidden">
                              <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-900 uppercase tracking-wide">
                                  {project.category}
                              </div>
                          </div>
                          <div className="p-8">
                              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{project.title}</h3>
                              <p className="text-sm font-medium text-slate-500 mb-4">{project.subtitle}</p>
                              <p className="text-slate-600 line-clamp-3 mb-6">
                                  {project.summary}
                              </p>
                              
                              {/* Mini Metrics */}
                              <div className="flex justify-between border-t border-sand-100 pt-4">
                                  {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                                      <div key={idx}>
                                          <div className="text-lg font-bold text-teal-600">{metric.value}</div>
                                          <div className="text-xs text-slate-500 uppercase">{metric.label}</div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Video Wall / Multimedia */}
      <section className="py-20 bg-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-bold mb-4">Watch: Stories from the Field</h2>
                  <p className="text-teal-200">Documentaries, interviews, and educational films from across the region.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Mock Video Items */}
                  <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden bg-black group cursor-pointer aspect-video md:aspect-auto">
                       <img src="https://picsum.photos/id/338/800/600" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition" alt="Video thumbnail"/>
                       <div className="absolute inset-0 flex flex-col justify-end p-8">
                           <div className="bg-coral-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition">
                               <Play className="w-6 h-6 fill-white text-white" />
                           </div>
                           <h3 className="font-bold text-xl md:text-2xl mb-1">ePOP: Youth Reporters</h3>
                           <p className="text-sm text-teal-100">Madagascar • 12 mins</p>
                       </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-black group cursor-pointer aspect-video">
                       <img src="https://picsum.photos/id/60/400/300" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition" alt="Video thumbnail"/>
                       <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition" />
                       </div>
                       <div className="absolute bottom-4 left-4">
                           <h4 className="font-bold text-sm">Science Dialogue</h4>
                       </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden bg-black group cursor-pointer aspect-video">
                       <img src="https://images.unsplash.com/photo-1492496913980-501348b61384?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition" alt="Video thumbnail"/>
                       <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition" />
                       </div>
                        <div className="absolute bottom-4 left-4">
                           <h4 className="font-bold text-sm">Kassim's Farm</h4>
                       </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-black group cursor-pointer aspect-video">
                       <img src="https://picsum.photos/id/164/400/300" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition" alt="Video thumbnail"/>
                       <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition" />
                       </div>
                        <div className="absolute bottom-4 left-4">
                           <h4 className="font-bold text-sm">Azure Eco-Resort</h4>
                       </div>
                  </div>

                   <div className="relative rounded-xl overflow-hidden bg-teal-800 border border-teal-700 flex flex-col justify-center items-center text-center p-6 hover:bg-teal-700 transition cursor-pointer">
                       <Globe className="w-10 h-10 text-teal-300 mb-3" />
                       <h4 className="font-bold">View Full Gallery</h4>
                       <p className="text-xs text-teal-200 mt-2">See all 48 ePOP videos</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-sand-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-teal-900 mb-8">Regional Impact Map</h2>
              <IslandMap />
              <p className="mt-6 text-slate-600">Click on an island to see local projects and producers.</p>
          </div>
      </section>
      
    </div>
  );
};

export default Community;
