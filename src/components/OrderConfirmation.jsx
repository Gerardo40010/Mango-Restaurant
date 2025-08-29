import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Truck, Clock } from 'lucide-react';

const OrderConfirmation = ({ orderNumber, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center"
        >
          {/* Icono de confirmación */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 10, stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <CheckCircle className="text-green-500 w-16 h-16" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute inset-0 bg-green-500 rounded-full opacity-20"
                style={{ scale: 1.5 }}
              />
            </div>
          </motion.div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¡Pedido Confirmado!
          </h2>

          {/* Número de orden */}
          <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Número de orden</p>
            <p className="text-xl font-bold text-orange-600 dark:text-orange-400">
              #{orderNumber}
            </p>
          </div>

          {/* Información de delivery */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Truck className="text-blue-500 w-6 h-6" />
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                Delivery en Camino
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Tiempo estimado: 25-35 min</span>
            </div>
          </div>

          {/* Barra de progreso animada */}
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="bg-orange-500 h-2 rounded-full"
            />
          </div>

          {/* Mensaje */}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Tu pedido está siendo preparado con amor. ¡Prepárate para una experiencia deliciosa!
          </p>

          {/* Botón de cerrar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold"
          >
            ¡Entendido!
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OrderConfirmation;