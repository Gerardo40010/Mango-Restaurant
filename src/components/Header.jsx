import { ShoppingCart, Heart, Sun, Moon } from 'lucide-react';

const Header = ({ 
  cartCount, 
  favoritesCount, 
  onCartClick, 
  onFavoritesClick, 
  darkMode, 
  onToggleDarkMode 
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-orange-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">🥭</span>
          <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">Mango Restaurant</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium">Menú</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium">Nosotros</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium">Contacto</a>
          </nav>

          <button 
            onClick={onToggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={onFavoritesClick}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative"
          >
            <Heart size={20} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={onCartClick}
            className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;