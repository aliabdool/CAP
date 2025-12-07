import React from 'react';
import { MEMBERS } from '../constants';
import { ShoppingBag, Filter } from 'lucide-react';

const Marketplace: React.FC = () => {
  // Flatten products from all members
  const allProducts = MEMBERS.flatMap(m => m.products.map(p => ({ ...p, supplier: m.name, supplierId: m.id, island: m.island })));

  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
             <div>
                <h1 className="font-serif text-3xl font-bold text-teal-900 mb-2">B2B Marketplace</h1>
                <p className="text-slate-600">Source sustainable goods directly from regional producers.</p>
            </div>
            <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 mt-4 md:mt-0">
                <Filter size={16} /> Filter Products
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition border border-sand-200 overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative overflow-hidden">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-teal-800">
                            {product.category}
                        </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-800 mb-1">{product.name}</h3>
                            <p className="text-xs text-slate-500 mb-2">by {product.supplier} ({product.island})</p>
                            <p className="text-sm text-slate-600 line-clamp-2 mb-4">{product.description}</p>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-sand-100">
                             <span className="font-semibold text-slate-700">{product.priceRange}</span>
                             <button className="text-white bg-teal-600 hover:bg-teal-700 p-2 rounded-full transition">
                                 <ShoppingBag size={18} />
                             </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;