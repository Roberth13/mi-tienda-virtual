import { useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  checkoutUrl: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = product.checkoutUrl;
    }, 1500);
  };

  return (
    <>
      {isRedirecting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm mx-4 text-center border border-gray-100 dark:border-dark-800 animate-in fade-in zoom-in duration-300">
            <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Redirigiendo a nuestra pasarela de pago segura...
            </p>
          </div>
        </div>
      )}
      <div className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 dark:bg-dark-700 xl:aspect-w-7 xl:aspect-h-8 cursor-pointer" onClick={handleRedirect}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
            {product.category}
          </h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1 cursor-pointer" onClick={handleRedirect}>
            {product.title}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              ${product.price.toFixed(2)}
            </p>
            <button onClick={handleRedirect} className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 dark:hover:bg-primary-500 transition-colors shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2">
              Comprar
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
