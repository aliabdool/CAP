import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { BookOpen, FileText, Video, MessageSquare, Sparkles } from 'lucide-react';
import { askSustainabilityAdvisor } from '../services/geminiService';

const KnowledgeHub: React.FC = () => {
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
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-teal-900 mb-4">Knowledge Hub</h1>
        <p className="text-slate-600 mb-12 max-w-2xl">Access resources on certifications (Green Key, EarthCheck), global standards (GRI, TNFD), and funding opportunities for biodiversity projects.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Advisor Section */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg border border-teal-100 overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-teal-800 to-teal-700 p-6 text-white flex items-center">
                        <Sparkles className="w-6 h-6 text-amber-300 mr-3" />
                        <div>
                            <h2 className="font-bold text-lg">AI Sustainability Advisor</h2>
                            <p className="text-teal-100 text-sm">Powered by Gemini. Ask about certifications, local plants, or strategy.</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleAsk} className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-2">What would you like to know?</label>
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="e.g. How do I start a TNFD assessment for my hotel?"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
                                >
                                    {loading ? 'Thinking...' : 'Ask'}
                                </button>
                            </div>
                        </form>

                        {aiAnswer && (
                            <div className="bg-ocean-50 border border-ocean-100 rounded-lg p-6 animate-fade-in">
                                <h4 className="font-bold text-teal-900 mb-2 flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Advisor Response:
                                </h4>
                                <div className="prose prose-sm prose-slate max-w-none whitespace-pre-wrap">
                                    {aiAnswer}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-teal-900 mb-6">Latest Resources</h3>
                <div className="space-y-4">
                    {RESOURCES.map(res => (
                        <div key={res.id} className="bg-white p-6 rounded-lg border border-sand-200 hover:shadow-md transition flex items-start">
                            <div className="bg-teal-50 p-3 rounded-full mr-4 text-teal-700">
                                {res.type === 'Video' ? <Video size={20} /> : res.type === 'Guide' ? <BookOpen size={20} /> : <FileText size={20} />}
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded">{res.type}</span>
                                </div>
                                <h4 className="font-bold text-slate-800 text-lg hover:text-teal-700 cursor-pointer">{res.title}</h4>
                                <p className="text-slate-600 mt-1">{res.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar / Categories */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-sand-200">
                    <h3 className="font-bold text-slate-800 mb-4">Browse by Topic</h3>
                    <ul className="space-y-2">
                        {['Biodiversity', 'Waste Management', 'Energy Efficiency', 'Social Impact', 'Certifications'].map(topic => (
                            <li key={topic}>
                                <button className="w-full text-left px-3 py-2 rounded hover:bg-sand-50 text-slate-600 hover:text-teal-800 transition text-sm">
                                    {topic}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="bg-teal-900 p-6 rounded-xl text-white">
                    <h3 className="font-bold mb-2">Need Audit Support?</h3>
                    <p className="text-sm text-teal-100 mb-4">Our partner consultants can help you prepare for Green Key or EarthCheck.</p>
                    <button className="w-full bg-white text-teal-900 py-2 rounded font-semibold text-sm hover:bg-teal-50">Find a Consultant</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;