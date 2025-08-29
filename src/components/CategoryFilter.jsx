const CategoryFilter = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
  const categories = ['Todo', 'Cafés', 'Hamburguesas', 'Pizzas', 'Postres', 'Bebidas'];
  
  return (
    <section id="menu" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Nuestras Categorías
        </h2>
        
        {/* Barra de búsqueda */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
          />
        </div>
        
        {/* Botones de categorías */}
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter; 