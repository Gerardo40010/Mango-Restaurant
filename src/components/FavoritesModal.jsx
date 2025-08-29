import { Heart } from 'lucide-react';

const FavoritesModal = ({ favorites, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Heart className="text-red-500" size={28} />
            Mis Favoritos
          </h2>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-2xl">
            ×
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="text-gray-300 dark:text-gray-600 mx-auto mb-4" size={64} />
            <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-2">No tienes favoritos aún</h3>
            <p className="text-gray-500 dark:text-gray-400">Agrega productos a tus favoritos ❤️</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favorites.map((product) => (
              <div key={product.id} className="flex items-center p-4 border dark:border-gray-600 rounded-lg">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold dark:text-white">{product.name}</h4>
                  <p className="text-orange-600 font-bold">${product.price}</p>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;