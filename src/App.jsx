import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import MenuGrid from './components/MenuGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import FavoritesModal from './components/FavoritesModal';
import OrderConfirmation from './components/OrderConfirmation';
import WhatsAppChat from './components/WhatsAppChat';
import ParticlesBackground from './components/ParticlesBackground';
import { ToastNotifications, showToast } from './components/ToastNotifications';
import { menuData } from './data/menuData';

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todo');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Cargar desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('mangoCart');
    const savedFavorites = localStorage.getItem('mangoFavorites');
    const savedDarkMode = localStorage.getItem('mangoDarkMode');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('mangoCart', JSON.stringify(cart));
    localStorage.setItem('mangoFavorites', JSON.stringify(favorites));
    localStorage.setItem('mangoDarkMode', JSON.stringify(darkMode));
  }, [cart, favorites, darkMode]);

  // Aplicar modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProducts = menuData.filter(product => {
    const matchesCategory = activeCategory === 'Todo' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showToast.success(`¡${product.name} agregado al carrito!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showToast.error('Producto eliminado del carrito');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const toggleFavorite = (product) => {
    if (favorites.find(item => item.id === product.id)) {
      setFavorites(favorites.filter(item => item.id !== product.id));
      showToast('Removido de favoritos ❤️');
    } else {
      setFavorites([...favorites, product]);
      showToast('Agregado a favoritos 💖');
    }
  };

  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  const handleOrderComplete = (orderData) => {
    const newOrderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderNumber(newOrderNumber);
    setShowOrderConfirmation(true);
    
    // Limpiar carrito después de 2 segundos
    setTimeout(() => {
      setCart([]);
      localStorage.removeItem('mangoCart');
    }, 2000);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const favoritesCount = favorites.length;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      
      {/* Componentes Globales */}
      <ParticlesBackground />
      <ToastNotifications />
      <WhatsAppChat />
      
      {/* Header y Navegación */}
      <Header 
        cartCount={cartCount}
        favoritesCount={favoritesCount}
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      {/* Secciones Principales */}
      <Hero />
      
      <CategoryFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <MenuGrid 
        products={filteredProducts}
        addToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />

      <AboutSection />
      <ContactSection />
      
      <Footer />

      {/* Modales */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}

      {isFavoritesOpen && (
        <FavoritesModal
          favorites={favorites}
          onClose={() => setIsFavoritesOpen(false)}
          onAddToCart={addToCart}
        />
      )}

      {showOrderConfirmation && (
        <OrderConfirmation 
          orderNumber={orderNumber}
          onClose={() => setShowOrderConfirmation(false)}
        />
      )}
    </div>
  );
}

export default App;