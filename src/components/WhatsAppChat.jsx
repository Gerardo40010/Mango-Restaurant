import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (messageType = 'general') => {
    const phone = "+1234567890";
    const messages = {
      menu: "Hola, me gustaría ver el menú completo de Mango Restaurant",
      hours: "Hola, ¿cuáles son sus horarios de atención?",
      reservation: "Hola, me gustaría hacer una reservación",
      delivery: "Hola, ¿hacen delivery? ¿Cuál es la zona de cobertura?",
      general: "Hola, tengo una pregunta sobre Mango Restaurant"
    };
    
    const message = messages[messageType];
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 w-80 border border-gray-200 dark:border-gray-700">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold">💬 Chatea con nosotros</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              ¡Hola! ¿En qué podemos ayudarte? Estamos aquí para responder tus preguntas.
            </p>
            
            <div className="space-y-2">
              <button
                onClick={() => openWhatsApp('menu')}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                📋 Consultar menú
              </button>
              
              <button
                onClick={() => openWhatsApp('hours')}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                🕒 Horarios y ubicación
              </button>
              
              <button
                onClick={() => openWhatsApp('reservation')}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                🎉 Hacer reservación
              </button>

              <button
                onClick={() => openWhatsApp('delivery')}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                🚚 Consultar delivery
              </button>
            </div>
            
            <button
              onClick={() => openWhatsApp('general')}
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg mt-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-semibold"
            >
              💬 Otra consulta
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;