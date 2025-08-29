import { X, Clock, Star, Heart } from 'lucide-react';
import Rating from './Rating';

const ProductModal = ({ product, onClose, onAddToCart, onToggleFavorite, isFavorite }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 md:h-80 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>
          <button 
            onClick={() => onToggleFavorite(product)}
            className={`absolute top-4 left-4 rounded-full p-2 shadow-lg ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <Heart size={24} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
              <Rating rating={product.rating} reviews={product.reviews} size={20} />
            </div>
            <span className="text-2xl font-bold text-orange-600">${product.price}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2" />
              <span>{product.preparationTime} min</span>
            </div>
            <div className="text-gray-600">
              {product.isVegetarian && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">🌱 Vegetariano</span>}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Ingredientes:</h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
          >
            Agregar al Carrito - ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;