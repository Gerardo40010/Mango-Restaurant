import { Heart } from 'lucide-react';

const MenuGrid = ({ products, addToCart, onToggleFavorite, isFavorite }) => {
  if (products.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="text-6xl mb-4">😢</div>
        <h3 className="text-2xl text-gray-600 dark:text-gray-300 mb-2">No se encontraron productos</h3>
        <p className="text-gray-500 dark:text-gray-400">Intenta con otra categoría o término de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ${product.price}
              </div>
              <button 
                onClick={() => onToggleFavorite(product)}
                className={`absolute top-4 left-4 p-2 rounded-full ${
                  isFavorite(product.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Heart size={20} className={isFavorite(product.id) ? 'fill-current' : ''} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Añadir al Carrito 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;