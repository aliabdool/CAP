
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, ArrowLeft, Users, Play, ExternalLink, Globe } from 'lucide-react';

const ProjectProfile: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <div className="p-20 text-center">Project not found. <Link to="/community" className="text-teal-600 underline">Back to Community</Link></div>;
  }

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link to="/community" className="inline-flex items-center text-slate-500 hover:text-teal-700 transition mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Community
          </Link>
      </div>

      {/* Header / Cover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200">
              <div className="h-64 md:h-96 w-full relative">
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                      <span className="bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                          {project.category}
                      </span>
                      <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
                      <p className="text-lg md:text-xl text-white/90">{project.subtitle}</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                  {/* About */}
                  <div className="bg-white p-8 rounded-xl border border-sand-200 shadow-sm">
                      <h2 className="font-serif text-2xl font-bold text-teal-900 mb-4">About the Project</h2>
                      <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-600 leading-relaxed">
                          {project.description}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-sand-100">
                          <h3 className="font-bold text-slate-800 mb-3 flex items-center"><MapPin className="w-5 h-5 mr-2 text-teal-600" /> Participating Islands</h3>
                          <div className="flex flex-wrap gap-2">
                              {project.islands.map(island => (
                                  <span key={island} className="bg-ocean-50 text-teal-800 px-3 py-1 rounded-lg text-sm font-medium border border-ocean-100">
                                      {island}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Media Gallery */}
                  <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-slate-800">Media & Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.media.map((item, idx) => (
                              <div key={idx} className="relative rounded-xl overflow-hidden shadow-sm group">
                                  {item.type === 'video' ? (
                                      <div className="aspect-video bg-black relative flex items-center justify-center cursor-pointer">
                                          {/* Mock iframe representation */}
                                          <div className="absolute inset-0 bg-black/40"></div>
                                          <Play className="w-12 h-12 text-white relative z-10 opacity-90 group-hover:scale-110 transition" />
                                          <img src={project.coverImage} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Video cover"/>
                                      </div>
                                  ) : (
                                      <div className="aspect-video">
                                          <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
                                      </div>
                                  )}
                                  {item.caption && (
                                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-xs backdrop-blur-sm">
                                          {item.caption}
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                  {/* Impact Card */}
                  <div className="bg-teal-900 text-white p-6 rounded-xl shadow-lg">
                      <h3 className="font-bold text-lg mb-6 flex items-center text-teal-100 border-b border-teal-800 pb-3">
                          Project Impact
                      </h3>
                      <div className="space-y-6">
                          {project.impactMetrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                  <span className="text-teal-200 text-sm uppercase tracking-wide">{metric.label}</span>
                                  <span className="text-2xl font-bold text-amber-400">{metric.value}</span>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Partners */}
                  <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center"><Users className="w-5 h-5 mr-2 text-teal-600" /> Partners</h3>
                      <div className="flex flex-wrap gap-2">
                          {project.partners.map(partner => (
                              <span key={partner} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                                  {partner}
                              </span>
                          ))}
                      </div>
                  </div>

                  {/* Links / CTA */}
                  <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center"><Globe className="w-5 h-5 mr-2 text-teal-600" /> Connect</h3>
                      <div className="space-y-3">
                          {project.links.map(link => (
                              <a key={link.label} href={link.url} className="flex items-center justify-between w-full p-3 rounded-lg border border-slate-200 hover:bg-teal-50 hover:border-teal-200 transition text-sm font-medium text-slate-700">
                                  {link.label} <ExternalLink className="w-4 h-4 text-slate-400" />
                              </a>
                          ))}
                          <button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 rounded-lg shadow mt-4 transition">
                              Join Collaboration
                          </button>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default ProjectProfile;
