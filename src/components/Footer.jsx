const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Mango Restaurant</h3>
            <p className="text-gray-400 mb-4">
              Ofreciendo los sabores más frescos y auténticos desde 2025.
            </p>
            <div className="space-y-2">
              <p>📍 Calle Domingo Paz , Ciudad Tarija</p>
              <p>📞 +591 76196600</p>
              <p>✉️ @mangorestaurant.com</p>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Horario</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lunes - Viernes: 11:00 AM - 10:00 PM</p>
              <p>Sábado: 10:00 AM - 11:00 PM</p>
              <p>Domingo: 10:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <span className="text-white">📱</span>
              </a>
              <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <span className="text-white">📸</span>
              </a>
              <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <span className="text-white">💻</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Mango Restaurant. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // ← AÑADE ESTA LÍNEA