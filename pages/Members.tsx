
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, ShieldCheck } from 'lucide-react';
import { MEMBERS, ISLANDS } from '../constants';

const Members: React.FC = () => {
  const [filterIsland, setFilterIsland] = useState('');
  const [search, setSearch] = useState('');
  const location = useLocation();

  // Parse query params on load to set filterIsland
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const islandParam = params.get('island');
    if (islandParam && ISLANDS.includes(islandParam)) {
      setFilterIsland(islandParam);
    }
  }, [location]);

  const filteredMembers = MEMBERS.filter(m => {
    const matchIsland = filterIsland ? m.island === filterIsland : true;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || 
                        m.businessName.toLowerCase().includes(search.toLowerCase()) ||
                        m.role.toLowerCase().includes(search.toLowerCase());
    return matchIsland && matchSearch;
  });

  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 mb-2">
                    {filterIsland ? `${filterIsland} Hub` : 'Our Community'}
                </h1>
                <p className="text-slate-600">
                    {filterIsland 
                     ? `Discover the sustainable entrepreneurs and businesses in ${filterIsland}.`
                     : 'Discover the entrepreneurs shaping the future of the Indian Ocean.'}
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search members..." 
                        className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-full md:w-64"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <select 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    value={filterIsland}
                    onChange={(e) => setFilterIsland(e.target.value)}
                >
                    <option value="">All Islands</option>
                    {ISLANDS.map(island => <option key={island} value={island}>{island}</option>)}
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map(member => (
                <Link to={`/members/${member.id}`} key={member.id} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 relative">
                    {member.certified && (
                      <div className="absolute top-4 right-4 z-10 bg-amber-400 text-teal-900 text-xs font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Partner
                      </div>
                    )}
                    <div className="relative h-64 overflow-hidden">
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-800 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" /> {member.island}
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-serif text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                        <p className="text-sm font-semibold text-teal-600 mb-3">{member.businessName} • {member.role}</p>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {member.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {member.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="bg-sand-100 text-slate-600 text-xs px-2 py-1 rounded">{tag}</span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {filteredMembers.length === 0 && (
            <div className="text-center py-20 text-slate-500">
                <p className="text-lg">No members found matching your criteria.</p>
                <button onClick={() => {setFilterIsland(''); setSearch('')}} className="text-teal-600 hover:underline mt-2">Clear filters</button>
            </div>
        )}

      </div>
    </div>
  );
};

export default Members;
