import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para hacerte vivir una experiencia gastronómica inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Dirección</h4>
                    <p className="text-gray-600 dark:text-gray-300">Av. Domingo Paz #434, Ciudad de Tarija</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Teléfono</h4>
                    <p className="text-gray-600 dark:text-gray-300">+591 76783421</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">contacto@mangorestaurant.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Horario</h4>
                    <p className="text-gray-600 dark:text-gray-300">Lun-Dom: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Ubicación</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.1551790739787!2d-64.73174832396096!3d-21.535848761090805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcd4f3f1b4e67%3A0x5f3b6e3f4b1c4e3!2sAv.%20Domingo%20Paz%20434%2C%20Tarija%2C%20Bolivia!5e0!3m2!1ses!2sus!4v1695861234567"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envíanos un Mensaje</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;