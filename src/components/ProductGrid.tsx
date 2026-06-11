import { useState } from 'react';
import ProductCard from './ProductCard';

import productsData from '../../products.json';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'dinero', name: 'Dinero' },
  { id: 'desarrollo-personal', name: 'Desarrollo Personal' },
  { id: 'comida', name: 'Comida' },
  { id: 'fitness', name: 'Fitness' }
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  return (
    <div id="productos" className="bg-gray-50 dark:bg-dark-900 transition-colors duration-300 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Nuestros Productos</h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-dark-800 dark:text-gray-300 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No hay productos en esta categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
